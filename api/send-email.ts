import { Resend } from 'resend';

const resend = new Resend('re_XiBmkYKX_8Lx4CtEaUanZYmpDXbiXCo84');

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
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { formType, formData, attachments, userEmail, subject } = req.body;

    let emailSubject = subject || `New Form Submission: ${formType}`;
    let emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #f0f0f0; border-radius: 12px; padding: 24px; color: #333333;">
        <h2 style="color: #cc0000; border-bottom: 2px solid #cc0000; padding-bottom: 8px; margin-top: 0;">New ${formType}</h2>
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
      from: 'noreply@medicolinehealthcare.com',
      to: 'info@medicolinehealthcare.com',
      subject: emailSubject,
      html: emailHtml,
      attachments: attachments ? attachments.map((att: any) => ({
        content: att.content,
        filename: att.filename,
      })) : undefined,
    });

    // Send confirmation email back to the person who submitted
    let userData = null;
    if (userEmail) {
      userData = await resend.emails.send({
        from: 'noreply@medicolinehealthcare.com',
        to: userEmail,
        subject: 'We have received your request — Medicoline Healthcare',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #f0f0f0; border-radius: 12px; padding: 24px; color: #333333;">
            <h2 style="color: #cc0000; margin-top: 0;">Thank You!</h2>
            <p style="font-size: 16px; line-height: 1.6; color: #333333;">
              Thank you, we will contact you within 24 hours.
            </p>
            <hr style="border: none; border-top: 1px solid #eeeeee; margin: 20px 0;" />
            <p style="font-size: 12px; color: #666666;">
              This is an automated confirmation email. Please do not reply directly to this message.
            </p>
          </div>
        `,
      });
    }

    return res.status(200).json({ success: true, adminData, userData });
  } catch (error: any) {
    return res.status(500).json({ success: false, error: error.message });
  }
}
