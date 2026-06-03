import { Resend } from 'resend';

const DEFAULT_FROM_EMAIL = 'noreply@medicolinehealthcare.com';

const recipientByFormType: Record<string, string> = {
  'Contact Request': 'info@medicolinehealthcare.com',
  'Careers Application Form': 'careers@medicolinehealthcare.com',
  'Partner Request': 'founder@medicolinehealthcare.com',
  'Appointment Booking Form': 'support@medicolinehealthcare.com',
  'ECG Booking': 'support@medicolinehealthcare.com',
};

function sendJson(res: any, statusCode: number, payload: Record<string, unknown>) {
  if (typeof res.status === 'function' && typeof res.json === 'function') {
    return res.status(statusCode).json(payload);
  }

  if (typeof res.setHeader === 'function') {
    res.setHeader('Content-Type', 'application/json');
  }

  res.statusCode = statusCode;
  res.end(JSON.stringify(payload));
  return res;
}

export default async function handler(req: any, res: any) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Handle preflight request
  if (req.method === 'OPTIONS') {
    res.statusCode = 200;
    res.end();
    return;
  }

  if (req.method !== 'POST') {
    console.error('[send-email] Rejected non-POST request', { method: req.method });
    return sendJson(res, 405, { success: false, error: 'Method not allowed' });
  }

  try {
    const { formType, formData, attachments, userEmail, subject } = req.body;
    const recipientEmail = recipientByFormType[formType] || 'info@medicolinehealthcare.com';
    const resendApiKey = process.env.RESEND_API_KEY;
    const resend = resendApiKey ? new Resend(resendApiKey) : null;

    console.log('[send-email] Incoming request', {
      formType,
      recipientEmail,
      hasUserEmail: Boolean(userEmail),
      attachmentCount: Array.isArray(attachments) ? attachments.length : 0,
      formFields: formData && typeof formData === 'object' ? Object.keys(formData) : [],
      hasResendApiKey: Boolean(resendApiKey),
    });

    if (!resend) {
      console.error('[send-email] Missing RESEND_API_KEY');
      return sendJson(res, 500, {
        success: false,
        error: 'Server email service is not configured. Missing RESEND_API_KEY.',
      });
    }

    if (!formType || !formData || typeof formData !== 'object') {
      console.error('[send-email] Invalid form payload', { formType, hasFormData: Boolean(formData) });
      return sendJson(res, 400, {
        success: false,
        error: 'Invalid form payload.',
      });
    }

    const emailSubject = subject || `New Form Submission: ${formType}`;
    let emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #f0f0f0; border-radius: 12px; padding: 24px; color: #333333;">
        <h2 style="color: #cc0000; border-bottom: 2px solid #cc0000; padding-bottom: 8px; margin-top: 0;">New ${formType}</h2>
        <p style="font-size: 13px; color: #666666; margin-top: 0;">This enquiry was routed to <strong>${recipientEmail}</strong>.</p>
        <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
          <tbody>
    `;

    for (const [key, value] of Object.entries(formData)) {
      emailHtml += `
        <tr>
          <td style="padding: 10px 0; border-bottom: 1px solid #f5f5f5; font-weight: bold; width: 180px; vertical-align: top;">${key}</td>
          <td style="padding: 10px 0; border-bottom: 1px solid #f5f5f5; color: #555555; vertical-align: top;">${value}</td>
        </tr>
      `;
    }

    emailHtml += `
          </tbody>
        </table>
        <p style="font-size: 11px; color: #999999; margin-top: 32px; text-align: center;">
          Sent automatically from Medicoline Healthcare portal.
        </p>
      </div>
    `;

    // Send email to admin
    const adminData = await resend.emails.send({
      from: DEFAULT_FROM_EMAIL,
      to: recipientEmail,
      replyTo: userEmail || undefined,
      subject: emailSubject,
      html: emailHtml,
      attachments: attachments ? attachments.map((att: any) => ({
        content: att.content,
        filename: att.filename,
      })) : undefined,
    });

    if (adminData.error) {
      console.error('[send-email] Resend admin email failed', {
        error: adminData.error,
        formType,
        recipientEmail,
      });
      return sendJson(res, 400, {
        success: false,
        error: adminData.error.message || 'Failed to send admin email via Resend.',
      });
    }

    console.log('[send-email] Admin email sent successfully', {
      formType,
      recipientEmail,
      resendResponse: adminData,
    });

    // Send confirmation email back to the person who submitted
    let userData = null;
    if (userEmail) {
      userData = await resend.emails.send({
        from: DEFAULT_FROM_EMAIL,
        to: userEmail,
        subject: 'We have received your request — Medicoline Healthcare',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #f0f0f0; border-radius: 12px; padding: 24px; color: #333333;">
            <h2 style="color: #cc0000; margin-top: 0;">Thank You!</h2>
            <p style="font-size: 16px; line-height: 1.6; color: #333333;">
              Thank you, we will contact you within 24 hours.
            </p>
            <p style="font-size: 14px; line-height: 1.6; color: #555555;">
              Your request has been sent to the appropriate Medicoline Healthcare team for review.
            </p>
            <hr style="border: none; border-top: 1px solid #eeeeee; margin: 20px 0;" />
            <p style="font-size: 12px; color: #666666;">
              This is an automated confirmation email. Please do not reply directly to this message.
            </p>
          </div>
        `,
      });

      if (userData.error) {
        console.warn('[send-email] Resend confirmation email failed', {
          error: userData.error,
          formType,
          userEmail,
        });
      } else {
        console.log('[send-email] Confirmation email sent successfully', {
          formType,
          userEmail,
          resendResponse: userData,
        });
      }
    }

    return sendJson(res, 200, { success: true, adminData, userData, recipientEmail });
  } catch (error: any) {
    console.error('[send-email] Email request failed', {
      message: error?.message || 'Unknown error',
      name: error?.name || 'Error',
      stack: error?.stack || null,
      response: error?.response || null,
    });
    return sendJson(res, 500, {
      success: false,
      error: error?.message || 'Unknown server error',
    });
  }
}
