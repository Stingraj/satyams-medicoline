import {
  Briefcase,
  Building2,
  Handshake,
  HeartHandshake,
  Home,
  ShieldCheck,
  Target,
  Trophy,
} from 'lucide-react';
import satyamPortrait from '../assets/founder/satyam-suman.jpg';
import maxLogo from '../assets/founder/logos/max-logo.png';
import woltersLogo from '../assets/founder/logos/wolters-logo.png';
import internationalRecordsLogo from '../assets/founder/logos/international-records-logo.png';
import medicolineLogo from '../assets/images/medicoline-logo.png';

const highlightRows = [
  {
    icon: Briefcase,
    content: (
      <>
        <span className="font-extrabold text-[#C0392B]">8+ YEARS</span> of Experience in the Healthcare Industry.
      </>
    ),
  },
  {
    icon: Building2,
    content: (
      <>
        Worked with world-class Healthcare Brands of India like{' '}
        <span className="font-extrabold text-[#C0392B]">Fortis Healthcare</span> and{' '}
        <span className="font-extrabold text-[#C0392B]">Max Healthcare</span>, respectively.
      </>
    ),
  },
  {
    icon: HeartHandshake,
    content: (
      <>
        Having a keen interest in Healthcare Research with international publications with{' '}
        <span className="font-extrabold text-[#C0392B]">ELSEVIER</span> and{' '}
        <span className="font-extrabold text-[#C0392B]">WOLTERS KLUWER</span> etc.
      </>
    ),
  },
  {
    icon: Trophy,
    content: (
      <>
        Holder of <span className="font-extrabold text-[#C0392B]">India</span> and{' '}
        <span className="font-extrabold text-[#C0392B]">International World Records</span>.
      </>
    ),
  },
] as const;

const brandCards = [
  {
    title: 'WORKED WITH LEADING HEALTHCARE BRANDS',
    logos: [
      { label: 'Fortis Healthcare', alt: 'Fortis Healthcare logo placeholder' },
      { src: maxLogo, alt: 'Max Healthcare logo' },
    ],
  },
  {
    title: 'RESEARCH PUBLICATIONS WITH',
    logos: [
      { label: 'Elsevier', alt: 'Elsevier logo placeholder' },
      { src: woltersLogo, alt: 'Wolters Kluwer logo' },
    ],
  },
  {
    title: 'WORLD RECORDS ACHIEVED',
    logos: [
      { label: 'India Book of Records', alt: 'India Book of Records logo placeholder' },
      { src: internationalRecordsLogo, alt: 'International World Records logo' },
    ],
  },
] as const;

const valueItems = [
  { icon: Target, label: 'Guided by Purpose' },
  { icon: HeartHandshake, label: 'Driven by Passion' },
  { icon: Handshake, label: 'Committed to Better Healthcare' },
  { icon: ShieldCheck, label: 'Building a Healthier Tomorrow' },
] as const;

export default function FounderSection() {
  return (
    <>
      <style>{`
        .founder-section {
          background: #f8f9fa;
          padding: 80px 0;
          color: #1f2937;
        }

        .founder-shell {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .founder-grid {
          display: grid;
          grid-template-columns: 1.22fr 1fr;
          gap: 32px;
          align-items: start;
        }

        .founder-card {
          background: #ffffff;
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(15, 23, 42, 0.07);
          padding: 16px;
        }

        .founder-logo-mark {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 28px;
        }

        .founder-logo-mark img {
          width: 74px;
          height: auto;
          object-fit: contain;
          flex-shrink: 0;
        }

        .founder-logo-copy {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.18em;
          color: #4b5563;
          text-transform: uppercase;
          line-height: 1.5;
        }

        .founder-name {
          margin: 0;
          font-size: clamp(2.5rem, 4.8vw, 4.5rem);
          line-height: 0.95;
          letter-spacing: -0.04em;
          font-weight: 900;
          color: #1f2937;
        }

        .founder-role {
          margin: 14px 0 6px 0;
          font-size: 1.2rem;
          font-weight: 600;
          color: #374151;
        }

        .founder-company {
          margin: 0 0 28px 0;
          font-size: 0.98rem;
          color: #6b7280;
        }

        .founder-highlights {
          background: #ffffff;
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(15, 23, 42, 0.07);
          overflow: hidden;
        }

        .founder-highlight-row {
          display: grid;
          grid-template-columns: 48px minmax(0, 1fr);
          gap: 16px;
          align-items: start;
          padding: 18px 20px;
          color: #4b5563;
          font-size: 15px;
          line-height: 1.8;
        }

        .founder-highlight-row + .founder-highlight-row {
          border-top: 1px solid #eceff3;
        }

        .founder-highlight-icon {
          width: 40px;
          height: 40px;
          border-radius: 999px;
          background: #C0392B;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          box-shadow: 0 10px 20px rgba(192, 57, 43, 0.22);
        }

        .founder-right {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .founder-photo-wrap {
          position: relative;
          padding-top: 8px;
        }

        .founder-photo-panel {
          background: linear-gradient(145deg, #eef1f5 0%, #f8f9fa 100%);
          border-radius: 20px;
          padding: 16px 16px 0 16px;
          box-shadow: 0 18px 44px rgba(15, 23, 42, 0.08);
        }

        .founder-photo {
          display: block;
          width: 100%;
          height: 360px;
          object-fit: cover;
          object-position: center top;
          border-radius: 18px;
        }

        .founder-brand-card {
          background: #ffffff;
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(15, 23, 42, 0.07);
          padding: 16px;
        }

        .founder-brand-title {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          margin-bottom: 14px;
          text-align: center;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.13em;
          color: #374151;
          text-transform: uppercase;
        }

        .founder-brand-title::before,
        .founder-brand-title::after {
          content: '';
          width: 30px;
          height: 2px;
          border-radius: 999px;
          background: #C0392B;
          flex-shrink: 0;
        }

        .founder-brand-logos {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
          align-items: center;
        }

        .founder-brand-logo-box {
          min-height: 74px;
          border-radius: 12px;
          background: #f8f9fa;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 12px;
        }

        .founder-brand-logo {
          max-height: 40px;
          width: 100%;
          object-fit: contain;
        }

        .founder-brand-text-logo {
          text-align: center;
          font-size: 14px;
          line-height: 1.4;
          font-weight: 800;
          color: #C0392B;
        }

        .founder-values {
          margin-top: 42px;
        }

        .founder-values-heading {
          margin: 0 0 24px 0;
          text-align: center;
          font-size: clamp(1.5rem, 3vw, 2.2rem);
          line-height: 1.2;
          letter-spacing: -0.03em;
          font-weight: 900;
          color: #1f2937;
        }

        .founder-values-heading .accent {
          color: #C0392B;
        }

        .founder-values-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 18px;
        }

        .founder-value-item {
          background: #ffffff;
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(15, 23, 42, 0.07);
          padding: 20px 16px;
          text-align: center;
        }

        .founder-value-icon {
          width: 54px;
          height: 54px;
          border-radius: 999px;
          background: rgba(192, 57, 43, 0.12);
          color: #C0392B;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 12px auto;
        }

        .founder-value-text {
          margin: 0;
          font-size: 14px;
          font-weight: 700;
          line-height: 1.6;
          color: #374151;
        }

        .founder-quote-banner {
          margin-top: 28px;
          background: #8f2d22;
          color: #ffffff;
          border-radius: 16px;
          padding: 24px 26px;
          display: grid;
          grid-template-columns: auto 1fr auto auto;
          gap: 18px;
          align-items: center;
          box-shadow: 0 16px 36px rgba(143, 45, 34, 0.28);
        }

        .founder-quote-mark {
          font-size: 3.5rem;
          line-height: 1;
          font-weight: 800;
          color: rgba(255, 255, 255, 0.85);
        }

        .founder-quote-copy {
          min-width: 0;
        }

        .founder-quote-text {
          margin: 0;
          font-size: 1.05rem;
          line-height: 1.8;
          font-style: italic;
          color: #ffffff;
        }

        .founder-quote-author {
          margin: 8px 0 0 0;
          font-size: 0.95rem;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.95);
        }

        .founder-house-icon {
          width: 48px;
          height: 48px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.12);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
        }

        @media (max-width: 1023px) {
          .founder-grid {
            grid-template-columns: 1fr;
          }

          .founder-photo {
            height: 420px;
          }

          .founder-values-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .founder-quote-banner {
            grid-template-columns: auto 1fr auto;
          }
        }

        @media (max-width: 767px) {
          .founder-section {
            padding: 80px 0;
          }

          .founder-shell {
            padding: 0 18px;
          }

          .founder-logo-mark {
            align-items: flex-start;
          }

          .founder-name {
            font-size: 2.6rem;
          }

          .founder-highlight-row {
            grid-template-columns: 42px minmax(0, 1fr);
            gap: 14px;
            padding: 16px;
            font-size: 14px;
          }

          .founder-photo {
            height: 320px;
          }

          .founder-brand-logos,
          .founder-values-grid {
            grid-template-columns: 1fr;
          }

          .founder-quote-banner {
            grid-template-columns: 1fr;
            text-align: left;
          }

          .founder-quote-mark:last-of-type,
          .founder-house-icon {
            justify-self: start;
          }
        }
      `}</style>

      <section id="founder" className="founder-section">
        <div className="founder-shell">
          <div className="founder-grid">
            <div>
              <div className="founder-logo-mark">
                <img src={medicolineLogo} alt="Medicoline logo" />
                <p className="founder-logo-copy">Healthcare - Home Care Services</p>
              </div>

              <h2 className="founder-name">SATYAM SUMAN</h2>
              <p className="founder-role">Founder &amp; MD</p>
              <p className="founder-company">Medicoline Healthcare - Home Care Services</p>

              <div className="founder-highlights">
                {highlightRows.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div key={index} className="founder-highlight-row">
                      <div className="founder-highlight-icon">
                        <Icon size={20} strokeWidth={2.1} />
                      </div>
                      <div>{item.content}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="founder-right">
              <div className="founder-photo-wrap">
                <div className="founder-photo-panel">
                  <img src={satyamPortrait} alt="Satyam Suman" className="founder-photo" />
                </div>
              </div>

              {brandCards.map((card) => (
                <div key={card.title} className="founder-brand-card">
                  <div className="founder-brand-title">{card.title}</div>
                  <div className="founder-brand-logos">
                    {card.logos.map((logo) => (
                      'src' in logo && (
                        <div key={logo.alt} className="founder-brand-logo-box">
                          <img src={logo.src} alt={logo.alt} className="founder-brand-logo" />
                        </div>
                      )
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="founder-values">
            <h3 className="founder-values-heading">
              VISION. <span className="accent">EXPERIENCE</span>. COMPASSION IN ACTION.
            </h3>

            <div className="founder-values-grid">
              {valueItems.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.label} className="founder-value-item">
                    <div className="founder-value-icon">
                      <Icon size={24} strokeWidth={2.1} />
                    </div>
                    <p className="founder-value-text">{item.label}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="founder-quote-banner">
            <div className="founder-quote-mark">“</div>
            <div className="founder-quote-copy">
              <p className="founder-quote-text">
                Our mission is to make quality healthcare accessible and personalized for every home,
                every family.
              </p>
              <p className="founder-quote-author">– Satyam Suman</p>
            </div>
            <div className="founder-quote-mark">”</div>
            <div className="founder-house-icon" aria-hidden="true">
              <Home size={22} strokeWidth={2.1} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
