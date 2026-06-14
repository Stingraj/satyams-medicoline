import { useState, useEffect } from 'react';

type ResumeAttachment = {
  content: string;
  filename: string;
};

const whyJoinReasons = [
  {
    title: 'Professional Growth',
    desc: 'Work in a fast-growing healthcare organization where you can enhance your clinical and professional skills through real-world patient care experience.',
  },
  {
    title: 'Meaningful Work',
    desc: 'Your work directly impacts patients and families by providing quality healthcare services in the comfort of their homes.',
  },
  {
    title: 'Supportive Environment',
    desc: 'Collaborate with experienced healthcare professionals in a positive and respectful workplace culture.',
  },
  {
    title: 'Career Opportunities',
    desc: 'We provide opportunities for career advancement in nursing, physiotherapy, diagnostics, caregiving, and healthcare operations.',
  },
  {
    title: 'Flexible Work Culture',
    desc: 'Balanced schedules and supportive management help maintain a healthy work-life balance.',
  },
];

const currentOpenings = [
  {
    id: 'staff-nurse',
    title: 'Staff Nurse',
    location: 'Warangal | Hanamkonda | Kazipet',
    type: 'Freelancing',
    desc: 'Provide home nursing care, post-operative support, medication administration, and patient monitoring.',
  },
  {
    id: 'physiotherapist',
    title: 'Physiotherapist',
    location: 'Warangal | Hanamkonda | Kazipet',
    type: 'Freelancing',
    desc: 'Conduct rehabilitation sessions, mobility support, pain management, and home physiotherapy services.',
  },
  {
    id: 'medical-lab-technician',
    title: 'Medical Lab Technician',
    location: 'Warangal | Hanamkonda | Kazipet',
    type: 'Freelancing',
    desc: 'Handle home sample collection, diagnostics coordination, and patient interaction professionally.',
  },
  {
    id: 'care-coordinator',
    title: 'Care Coordinator',
    location: 'Warangal | Hanamkonda | Kazipet',
    type: 'Freelancing',
    desc: 'Coordinate patient services, appointments, healthcare staff scheduling, and customer support.',
  },
  {
    id: 'dietitian',
    title: 'Dietitian',
    location: 'Warangal | Hanamkonda | Kazipet',
    type: 'Freelancing',
    desc: 'Consult the patient and provide a personalised diet chart, visit home and evaluate the nutritional needs of the patient, and create nutritional awareness for the patient.',
  },
];

const testimonials = [
  {
    quote: 'Working with Medicoline Healthcare has helped me grow professionally while serving patients with compassion.',
    author: 'Vinay',
  },
  {
    quote: 'The work culture is supportive and patient-focused. Every day feels meaningful.',
    author: 'D S Mounika',
  },
  {
    quote: 'Medicoline Healthcare gave me the opportunity to serve patients with dignity and compassion while continuously improving my clinical skills.',
    author: 'E. Rupesh',
  },
  {
    quote: 'I appreciate the professionalism and teamwork at Medicoline. The management truly values both employees and patients.',
    author: 'Lakavath Ganesh',
  },
  {
    quote: 'Every patient interaction here feels meaningful. Medicoline Healthcare creates an environment where healthcare professionals can genuinely make a difference.',
    author: 'Dr. Divya',
  },
  {
    quote: 'The flexible work environment and supportive staff make Medicoline Healthcare a great place to work and grow.',
    author: 'Joseph S. Edison',
  },
];

export default function CareersPage() {
  const [position, setPosition] = useState<string>('Staff Nurse');
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [submitError, setSubmitError] = useState('');
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    email: '',
    experience: '',
    message: '',
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToApply = () => {
    const el = document.getElementById('apply');
    if (el) {
      const offset = 88;
      const top = Math.max(el.getBoundingClientRect().top + window.scrollY - offset, 0);
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const handleApplyPosition = (jobTitle: string) => {
    setPosition(jobTitle);
    scrollToApply();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSubmitError('');

    try {
      const attachments: ResumeAttachment[] = [];
      if (resumeFile) {
        const base64Data = await new Promise<string>((resolve, reject) => {
          const reader = new FileReader();
          reader.readAsDataURL(resumeFile);
          reader.onload = () => {
            const base64String = reader.result as string;
            const data = base64String.split(',')[1];
            resolve(data);
          };
          reader.onerror = (error) => reject(error);
        });

        attachments.push({
          content: base64Data,
          filename: resumeFile.name,
        });
      }

      const payload = {
        formType: 'Careers Application Form',
        subject: `New Career Application — ${position} — Medicoline Healthcare`,
        userEmail: formData.email,
        formData: {
          'Full Name': formData.fullName,
          'Mobile': formData.mobile,
          'Email': formData.email,
          'Position Applied For': position,
          'Experience': formData.experience || 'Not Provided',
          'Resume filename': resumeFile ? resumeFile.name : 'Not Provided',
          'Message': formData.message || 'None',
        },
        attachments,
      };

      console.log('[Careers form] Submit started', {
        formType: payload.formType,
        hasEmail: Boolean(formData.email),
        hasAttachment: attachments.length > 0,
        fields: Object.keys(payload.formData),
      });

      console.log('[Careers form] Sending API request', {
        ...payload,
        attachments: attachments.map(a => ({ filename: a.filename, contentLength: a.content.length })),
      });

      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const responseText = await response.text();
      let resData: { success?: boolean; error?: string } = {};

      try {
        resData = responseText ? JSON.parse(responseText) : {};
      } catch {
        resData = { error: responseText || 'Invalid JSON response from server.' };
      }

      console.log('[Careers form] API response received', {
        status: response.status,
        ok: response.ok,
        body: resData,
      });

      if (response.ok && resData.success) {
        setSubmitted(true);
        setFormData({
          fullName: '',
          mobile: '',
          email: '',
          experience: '',
          message: '',
        });
        setResumeFile(null);
        const fileInput = document.getElementById('resume') as HTMLInputElement;
        if (fileInput) {
          fileInput.value = '';
        }
      } else {
        const exactError = resData.error || `Request failed with status ${response.status}.`;
        console.error('[Careers form] API request failed', {
          status: response.status,
          body: resData,
        });
        setSubmitError(exactError);
      }
    } catch (error) {
      const exactError = error instanceof Error ? error.message : 'Unknown network error.';
      console.error('[Careers form] Submit crashed', error);
      setSubmitError(exactError);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <style>{`
        .careers-page {
          background-color: #ffffff;
          font-family: 'Montserrat', sans-serif;
          color: #1F2937;
          padding-top: 0;
        }

        @media (min-width: 1024px) {
          .careers-page {
            padding-top: 0;
          }
        }

        .careers-section-container {
          max-w: 1200px;
          margin: 0 auto;
          padding: 80px 24px;
        }

        .careers-title-wrapper {
          text-align: center;
          margin-bottom: 56px;
        }

        .careers-heading-accent {
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #C0392B;
          margin-bottom: 12px;
          display: block;
        }

        .careers-main-heading {
          font-size: 32px;
          font-weight: 800;
          color: #1F2937;
          margin: 0 0 16px 0;
          letter-spacing: -0.02em;
        }

        @media (min-width: 768px) {
          .careers-main-heading {
            font-size: 40px;
          }
        }

        .careers-section-divider {
          width: 50px;
          height: 3px;
          background-color: #C0392B;
          margin: 0 auto 20px auto;
          border-radius: 2px;
        }

        .careers-subheading-text {
          font-size: 16px;
          color: #6B7280;
          max-w: 680px;
          margin: 0 auto;
          line-height: 1.6;
        }

        /* SECTION 1: HERO */
        .careers-hero {
          background: #F9FAFB;
          border-bottom: 1px solid #E5E7EB;
          text-align: center;
          padding: 100px 24px;
        }

        .careers-hero-content {
          max-w: 800px;
          margin: 0 auto;
        }

        .careers-hero-heading {
          font-size: 36px;
          font-weight: 900;
          line-height: 1.15;
          letter-spacing: -0.03em;
          color: #1F2937;
          margin-bottom: 24px;
        }

        @media (min-width: 768px) {
          .careers-hero-heading {
            font-size: 54px;
          }
        }

        .careers-hero-subheading {
          font-size: 16px;
          line-height: 1.8;
          color: #6B7280;
          margin-bottom: 40px;
        }

        @media (min-width: 768px) {
          .careers-hero-subheading {
            font-size: 18px;
          }
        }

        .careers-btn-red {
          background-color: #C0392B;
          color: #ffffff;
          font-size: 15px;
          font-weight: 700;
          padding: 16px 40px;
          border-radius: 50px;
          border: none;
          cursor: pointer;
          transition: background-color 0.25s ease, transform 0.2s ease;
          display: inline-block;
          box-shadow: 0 4px 18px rgba(192, 57, 43, 0.15);
        }

        .careers-btn-red:hover {
          background-color: #C0392B;
          transform: translateY(-2px);
        }

        .careers-btn-red:active {
          transform: translateY(0);
        }

        .careers-btn-red:disabled {
          opacity: 0.6;
          cursor: not-allowed;
          transform: none !important;
          box-shadow: none !important;
        }

        /* SECTION 2: WHY JOIN US */
        .careers-why-join {
          background-color: #ffffff;
        }

        .why-join-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 28px;
        }

        @media (min-width: 768px) {
          .why-join-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .why-join-grid {
            grid-template-columns: repeat(3, 1fr);
          }

          .why-join-grid > *:nth-child(4) {
            grid-column: span 1;
            margin-left: auto;
          }

          .why-join-grid > *:nth-child(5) {
            grid-column: span 1;
            margin-right: auto;
          }
        }

        .why-join-card {
          background-color: #ffffff;
          border: 1px solid #E5E7EB;
          border-radius: 20px;
          padding: 32px;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.02);
          transition: all 0.25s ease;
        }

        .why-join-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(192, 57, 43, 0.06);
          border-color: #E5E7EB;
        }

        .why-join-icon-box {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background-color: #F3F4F6;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
        }

        .why-join-icon {
          color: #C0392B;
          font-weight: 700;
          font-size: 20px;
        }

        .why-join-card-title {
          font-size: 18px;
          font-weight: 800;
          color: #1F2937;
          margin: 0 0 12px 0;
        }

        .why-join-card-desc {
          font-size: 14px;
          line-height: 1.7;
          color: #6B7280;
          margin: 0;
        }

        /* SECTION 3: CURRENT OPENINGS */
        .careers-openings {
          background-color: #ffffff;
          border-top: 1px solid #E5E7EB;
        }

        .openings-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
        }

        .opening-card {
          background-color: #ffffff;
          border: 1px solid #E5E7EB;
          border-radius: 20px;
          padding: 32px;
          display: flex;
          flex-direction: column;
          gap: 20px;
          transition: all 0.25s ease;
        }

        @media (min-width: 1024px) {
          .opening-card {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
          }
        }

        .opening-card:hover {
          border-color: #E5E7EB;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.03);
        }

        .opening-info-col {
          display: flex;
          flex-direction: column;
          gap: 8px;
          max-width: 720px;
        }

        .opening-header {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 12px;
        }

        .opening-title {
          font-size: 20px;
          font-weight: 800;
          color: #1F2937;
          margin: 0;
        }

        .opening-badge {
          background-color: #F3F4F6;
          color: #C0392B;
          font-size: 11px;
          font-weight: 700;
          padding: 4px 12px;
          border-radius: 50px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .opening-location {
          font-size: 13px;
          font-weight: 600;
          color: #6B7280;
          margin: 0;
        }

        .opening-desc {
          font-size: 14px;
          line-height: 1.7;
          color: #6B7280;
          margin: 4px 0 0 0;
        }

        .opening-action-col {
          flex-shrink: 0;
        }

        .careers-btn-red-outline {
          background-color: transparent;
          color: #C0392B;
          font-size: 13px;
          font-weight: 700;
          padding: 12px 28px;
          border: 2px solid #C0392B;
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.25s ease;
          width: 100%;
          text-align: center;
        }

        @media (min-width: 1024px) {
          .careers-btn-red-outline {
            width: auto;
          }
        }

        .careers-btn-red-outline:hover {
          background-color: #C0392B;
          color: #ffffff;
        }

        /* SECTION 4: TESTIMONIALS */
        .careers-testimonials {
          background-color: #F9FAFB;
        }

        .testimonials-intro {
          font-size: 16px;
          line-height: 1.7;
          color: #6B7280;
          max-width: 720px;
          margin: 0 auto;
        }

        .testimonials-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 28px;
        }

        @media (min-width: 768px) {
          .testimonials-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .testimonials-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .testimonial-card {
          background-color: #ffffff;
          border: 1px solid #E5E7EB;
          border-radius: 20px;
          padding: 32px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.01);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .testimonial-quote {
          font-size: 15px;
          line-height: 1.7;
          color: #6B7280;
          font-style: italic;
          margin: 0 0 20px 0;
          position: relative;
        }

        .testimonial-author {
          font-size: 13px;
          font-weight: 700;
          color: #C0392B;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin: 0;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .testimonial-author::before {
          content: '';
          width: 12px;
          height: 2px;
          background-color: #C0392B;
          display: inline-block;
        }

        /* SECTION 5: APPLICATION FORM */
        .careers-apply {
          background-color: #ffffff;
          border-top: 1px solid #E5E7EB;
        }

        .apply-card {
          background-color: #ffffff;
          border: 1px solid #E5E7EB;
          border-radius: 24px;
          padding: 40px 24px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.03);
          max-w: 800px;
          margin: 0 auto;
        }

        @media (min-width: 768px) {
          .apply-card {
            padding: 48px;
          }
        }

        .form-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
          min-width: 0;
        }

        @media (min-width: 768px) {
          .form-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .form-full-width {
            grid-column: span 2;
          }
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
          width: 100%;
          min-width: 0;
        }

        .form-label {
          font-size: 13px;
          font-weight: 700;
          color: #1F2937;
        }

        .form-input {
          width: 100%;
          min-width: 0;
          min-height: 48px;
          box-sizing: border-box;
          border: 1px solid #E5E7EB;
          background-color: #ffffff;
          border-radius: 10px;
          padding: 12px 16px;
          font-size: 14px;
          color: #1F2937;
          outline: none;
          transition: border-color 0.25s ease;
          font-family: inherit;
        }

        @media (max-width: 767px) {
          .careers-section-container {
            padding-top: 48px;
            padding-bottom: 48px;
          }

          .careers-title-wrapper {
            margin-bottom: 36px;
          }

          .careers-hero {
            padding: 48px 16px;
          }

          .careers-hero-heading {
            font-size: 32px;
            margin-bottom: 16px;
          }

          .careers-hero-subheading {
            margin-bottom: 28px;
          }

          .apply-card {
            width: 100%;
            padding: 24px 16px;
          }
        }

        .form-input:focus {
          border-color: #C0392B;
        }

        .form-select {
          appearance: none;
          background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%236B7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3E%3C/svg%3E");
          background-position: right 12px center;
          background-repeat: no-repeat;
          background-size: 20px;
          padding-right: 40px;
        }

        .form-textarea {
          resize: vertical;
          min-height: 120px;
        }

        .form-file-input {
          cursor: pointer;
        }

        .form-file-info {
          font-size: 11px;
          color: #6B7280;
          margin-top: 4px;
        }

        .form-submit-box {
          margin-top: 12px;
          display: flex;
          justify-content: flex-end;
        }

        .form-submit-btn {
          width: 100%;
        }

        @media (min-width: 768px) {
          .form-submit-btn {
            width: auto;
          }
        }

        .form-success-alert {
          background-color: #F3F4F6;
          border: 1px solid #E5E7EB;
          border-radius: 12px;
          padding: 24px;
          text-align: center;
          color: #C0392B;
        }

        .form-success-heading {
          font-size: 18px;
          font-weight: 800;
          margin-bottom: 8px;
        }

        /* SECTION 6: FINAL CTA */
        .careers-cta {
          background: #F9FAFB;
          border-top: 1px solid #E5E7EB;
          border-bottom: 1px solid #E5E7EB;
          text-align: center;
          padding: 80px 24px;
        }

        .careers-cta-content {
          max-w: 600px;
          margin: 0 auto;
        }

        .careers-cta-heading {
          font-size: 28px;
          font-weight: 800;
          color: #1F2937;
          margin-bottom: 16px;
        }

        .careers-cta-subtext {
          font-size: 15px;
          line-height: 1.7;
          color: #6B7280;
          margin-bottom: 32px;
        }
      `}</style>

      <div className="careers-page">
        {/* SECTION 1: HERO */}
        <section className="careers-hero">
          <div className="careers-hero-content">
            <h1 className="careers-hero-heading">Build Your Career With Medicoline Healthcare</h1>
            <p className="careers-hero-subheading">
              Join a compassionate and professional healthcare team dedicated to delivering quality home healthcare services. At Medicoline Healthcare, every employee contributes toward improving patient lives with care, dignity, and excellence.
            </p>
            <button type="button" onClick={scrollToApply} className="careers-btn-red">
              Apply Now
            </button>
          </div>
        </section>

        {/* SECTION 2: WHY JOIN US */}
        <section className="careers-why-join">
          <div className="careers-section-container">
            <div className="careers-title-wrapper">
              <span className="careers-heading-accent">Why Medicoline?</span>
              <h2 className="careers-main-heading">Why Join Medicoline Healthcare?</h2>
              <div className="careers-section-divider" />
            </div>

            <div className="why-join-grid">
              {whyJoinReasons.map((reason, index) => (
                <div key={index} className="why-join-card">
                  <div className="why-join-icon-box">
                    <span className="why-join-icon">{index + 1}</span>
                  </div>
                  <h3 className="why-join-card-title">{reason.title}</h3>
                  <p className="why-join-card-desc">{reason.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3: CURRENT OPENINGS */}
        <section className="careers-openings">
          <div className="careers-section-container">
            <div className="careers-title-wrapper">
              <span className="careers-heading-accent">Opportunities</span>
              <h2 className="careers-main-heading">Current Openings</h2>
              <div className="careers-section-divider" />
              <p className="careers-subheading-text">
                Explore our active freelancing opportunities across Warangal | Hanamkonda | Kazipet.
              </p>
            </div>

            <div className="openings-grid">
              {currentOpenings.map((job) => (
                <div key={job.id} className="opening-card">
                  <div className="opening-info-col">
                    <div className="opening-header">
                      <h3 className="opening-title">{job.title}</h3>
                      <span className="opening-badge">{job.type}</span>
                    </div>
                    <p className="opening-location">{job.location}</p>
                    <p className="opening-desc">{job.desc}</p>
                  </div>
                  <div className="opening-action-col">
                    <button
                      type="button"
                      onClick={() => handleApplyPosition(job.title)}
                      className="careers-btn-red-outline"
                    >
                      Apply Position
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4: EMPLOYEE TESTIMONIALS */}
        <section className="careers-testimonials">
          <div className="careers-section-container">
            <div className="careers-title-wrapper">
              <span className="careers-heading-accent">Testimonials</span>
              <h2 className="careers-main-heading">Employee Testimonials</h2>
              <div className="careers-section-divider" />
              <p className="testimonials-intro">
                Hear from the professionals who help Medicoline Healthcare deliver compassionate, patient-centred home care every day.
              </p>
            </div>

            <div className="testimonials-grid">
              {testimonials.map((t, index) => (
                <div key={index} className="testimonial-card">
                  <p className="testimonial-quote">“{t.quote}”</p>
                  <p className="testimonial-author">{t.author}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5: APPLICATION FORM */}
        <section id="apply" className="careers-apply">
          <div className="careers-section-container">
            <div className="careers-title-wrapper">
              <span className="careers-heading-accent">Join Our Team</span>
              <h2 className="careers-main-heading">Apply For A Position</h2>
              <div className="careers-section-divider" />
            </div>

            <div className="apply-card">
              {submitted ? (
                <div className="form-success-alert">
                  <h3 className="form-success-heading">Application Submitted!</h3>
                  <p>
                    Thank you for applying. Our recruiting team will review your profile and get in touch with you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="form-grid">
                  <div className="form-group">
                    <label htmlFor="fullName" className="form-label">Full Name *</label>
                    <input
                      type="text"
                      id="fullName"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="Enter your full name"
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="mobileNumber" className="form-label">Mobile Number *</label>
                    <input
                      type="tel"
                      id="mobileNumber"
                      required
                      value={formData.mobile}
                      onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                      placeholder="Enter your mobile number"
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="emailAddress" className="form-label">Email Address *</label>
                    <input
                      type="email"
                      id="emailAddress"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Enter your email address"
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="position" className="form-label">Position Applying For *</label>
                    <select
                      id="position"
                      value={position}
                      onChange={(e) => setPosition(e.target.value)}
                      className="form-input form-select"
                    >
                      <option value="Staff Nurse">Staff Nurse</option>
                      <option value="Physiotherapist">Physiotherapist</option>
                      <option value="Medical Lab Technician">Medical Lab Technician</option>
                      <option value="Care Coordinator">Care Coordinator</option>
                      <option value="Dietitian">Dietitian</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="resume" className="form-label">Upload Resume *</label>
                    <input
                      type="file"
                      id="resume"
                      required
                      accept=".pdf,.doc,.docx"
                      onChange={(e) => setResumeFile(e.target.files ? e.target.files[0] : null)}
                      className="form-input form-file-input"
                    />
                    <span className="form-file-info">Accepts PDF and DOC/DOCX formats.</span>
                  </div>

                  <div className="form-group">
                    <label htmlFor="experience" className="form-label">Experience</label>
                    <input
                      type="text"
                      id="experience"
                      value={formData.experience}
                      onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                      placeholder="e.g. 2 years in home healthcare"
                      className="form-input"
                    />
                  </div>

                  <div className="form-group form-full-width">
                    <label htmlFor="message" className="form-label">Message / About Yourself</label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about yourself, your qualifications, and clinical background"
                      className="form-input form-textarea"
                    />
                  </div>

                  <div className="form-submit-box form-full-width">
                    <button
                      type="submit"
                      disabled={loading}
                      className="careers-btn-red form-submit-btn"
                    >
                      {loading ? 'Submitting Application...' : 'Submit Application'}
                    </button>
                    {submitError ? (
                      <p style={{ marginTop: '12px', color: '#C0392B', fontSize: '14px', fontWeight: 600 }}>
                        {submitError}
                      </p>
                    ) : null}
                  </div>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* SECTION 6: FINAL CTA */}
        <section className="careers-cta">
          <div className="careers-cta-content">
            <h2 className="careers-cta-heading">Ready to Make a Difference?</h2>
            <p className="careers-cta-subtext">
              Join Medicoline Healthcare and become part of a healthcare team committed to compassion, innovation, and patient-centred care.
            </p>
            <button type="button" onClick={scrollToApply} className="careers-btn-red">
              Start Your Career
            </button>
          </div>
        </section>
      </div>
    </>
  );
}
