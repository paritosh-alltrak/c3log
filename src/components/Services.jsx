import { useState, useEffect } from "react";
import "./services.css";

const serviceIcons = {
  // "Rider App Tos": (
  //   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
  //     <rect x="5" y="2" width="14" height="20" rx="2" /><line x1="12" y1="18" x2="12" y2="18.01" />
  //   </svg>
  // ),
  "Field Executives (Bikers)": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="5.5" cy="17.5" r="3.5" /><circle cx="18.5" cy="17.5" r="3.5" />
      <path d="M15 6h-4l-2 6h10l-1.5-4.5" /><path d="M15 6l1.5 4.5" /><circle cx="15" cy="4" r="1" />
    </svg>
  ),
  "Phlebotomist Services": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L8 8h8l-4-6z" /><rect x="9" y="8" width="6" height="10" rx="1" />
      <path d="M9 13h6" /><circle cx="12" cy="20" r="1" />
    </svg>
  ),
  "Man Power Outsourcing": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  "Home Collection": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  ),
  "Cold Chain Logistics": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="2" x2="12" y2="22" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  ),
  "Corporate Health": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  ),
  "Onsite Radiology Services": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="2" /><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
    </svg>
  ),
  "Lab Technician": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v11l-4 5h14l-4-5V3" />
    </svg>
  ),
  "Customer Care Setup": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.99 12 19.79 19.79 0 0 1 1.93 3.46 2 2 0 0 1 3.91 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  ),
};

const serviceAccents = {
  // "Rider App Tos": "#4f8ef7",
  "Field Executives (Bikers)": "#f76b4f",
  "Phlebotomist Services": "#e94f7c",
  "Man Power Outsourcing": "#7c4ff7",
  "Home Collection": "#00c48c",
  "Cold Chain Logistics": "#4fc3f7",
  "Corporate Health": "#f7a94f",
  "Onsite Radiology Services": "#4ff7d0",
  "Lab Technician": "#b04ff7",
  "Customer Care Setup": "#f74f9e",
};

const servicesData = {

  "Field Executives (Bikers)": {
    title: "Field Executives (Bikers)",
    subtitle: "Fast, GPS-enabled last-mile delivery across India",
    highlights: ["1,350+ trained bikers", "Territory-based allocation", "GPS precision routing", "Complete delivery tracking"],
    content: `
      <p>Credent Group maintains a team of around 1350 bikers, each one thoroughly trained and carefully vetted through a rigorous process. Each member of the biker team is allotted a specific territory and provides fast, efficient services to clients in his area.</p>
      <p>A call from a client starts the process with the nearest field biker contacted via phone and the biker can find the exact location using GPS and maps and reach it within minutes.</p>
      <p>Our biker services handle pickup services. This may involve a package, a document, a purchase or a delivery as the case may be. Trained and knowledgeable, each biker knows exactly what to do and carries out the procedure efficiently within short span of his arrival at the location.</p>
      <p>Whether it is pickup and delivery from one location to another or couriering a package, it is done quickly and professionally. Clients receive complete updates through a tracking service. Basic services are covered in our standard rate for each pickup/delivery for locations across India.</p>
    `
  },
  "Phlebotomist Services": {
    title: "Phlebotomist Services",
    subtitle: "Certified phlebotomists with temperature-controlled sample handling",
    highlights: ["1,550+ phlebotomists", "NABL guideline compliant", "Temperature-controlled packaging", "Pan-India coverage"],
    content: `
      <p>Credent has a team of 1550 phlebotomists and the number is growing across major and minor cities in India. Phlebotomists in our employ receive thorough training to be precise and meticulous in performance of their duties.</p>
      <p>Credent Connect N Care with its expertise in temperature controlled packaging guarantees that samples are preserved while in transit. We follow internationally recognized standards for this service to satisfy highest quality requirements of hospitals and laboratories as well as clinical trials institutions and pharmaceutical companies.</p>
      <p>Phlebotomists are trained to draw blood samples expertly with minimum discomfort to the patient and then store such samples in temperature controlled packaging. Our phlebotomists are also expert in observing the patient during the process and in rendering any assistance that may be required should there be any adverse reaction.</p>
      <p>We offer trained phlebotomists who have through knowledge about new technical standards and test as well as the new NABL guidelines. You may employ such trained phlebotomists or, if you are planning to recruit people, we can train them to enhance their skill levels.</p>
    `
  },
  "Man Power Outsourcing": {
    title: "Man Power Outsourcing",
    subtitle: "Vetted, trained candidates for healthcare & pharma sectors",
    highlights: ["Contract & temporary staffing", "Background verified", "Emergency deployments", "Specialized training"],
    content: `
      <p>Credent specializes in offering manpower on contract, one-off and temporary basis with accent on serving research institutions, pharmaceuticals, hospitals and laboratory segments. Credent has a rigorous process of selection of candidates for specific skills and each one is chosen after interviews and verification.</p>
      <p>Thereafter, each one chosen to be part of our team undergoes specialized training to enhance skills. We also conduct background checks and vet each candidate.</p>
      <p>We offer manpower services on the best terms. Clients can intimate us in advance and we will make arrangements to provide candidates for selection. Clients may phone us in case of emergency and we will provide people in the shortest possible time.</p>
      <p>You will find that people we recommend to fill temporary posts or longer duration posts get right down to work in the most efficient way. You will find that outsourcing your manpower requirements to us saves time and money in addition to getting the job done far better.</p>
    `
  },
  "Home Collection": {
    title: "Home Collection",
    subtitle: "Doorstep diagnostic sample collection across 278+ centres",
    highlights: ["278+ collection centres", "All major cities covered", "Bedridden patient support", "Lab-partnered analysis"],
    content: `
      <p>Credent offers home collection services in a big way across the length and width of India. We have an established presence in major cities in each state across India. At present we have more than 278 centers and the number is growing every day.</p>
      <p>Our home collection service covers collection of blood/urine samples for laboratory analysis. This service is available to individuals who may not have the time to visit a laboratory or patients who are not able to undertake travel because they are ill or bedridden.</p>
      <p>Samples collected are tested and analyzed by our personnel in our associate labs to assure accurate test results. All this is handled when our home collection executive visits you.</p>
      <p>We also offer home collection services to hospitals and laboratories to enhance their services and to help them rope in more customers.</p>
    `
  },
  "Cold Chain Logistics": {
    title: "Cold Chain Logistics",
    subtitle: "Temperature-controlled transit for medical & pharmaceutical products",
    highlights: ["Real-time temperature monitoring", "International standards compliance", "Pharma-grade packaging", "End-to-end tracking"],
    content: `
      <p>We provide temperature-controlled logistics solutions for transporting sensitive medical and pharmaceutical products. Our system ensures safe handling, real-time tracking, and compliance with international standards.</p>
      <p>Our cold chain infrastructure covers 35+ air connectivity routes and 5+ OTC routes, ensuring that time-sensitive diagnostics, vaccines, and pharmaceutical products reach their destination within optimal temperature ranges.</p>
      <p>Each shipment is monitored continuously, with data logs available for compliance and audit purposes, meeting the requirements of hospitals, clinical research organizations, and pharmaceutical manufacturers.</p>
    `
  },
  "Corporate Health": {
    title: "Corporate Health",
    subtitle: "Workforce wellness programs that boost productivity",
    highlights: ["Stress reduction programs", "Performance improvement", "Musculoskeletal care", "CSR-aligned initiatives"],
    content: `
      <p>We conduct a corporate health program to ensure better health for the workforce in an organization. Health and wellness programs should be an integral part of the company's global strategy to promote a healthy workplace.</p>
      <p>A healthy worker is more efficient, has more energy, the risk of accidents decreases and stress situations are managed in a more positive way. According to the WHO report, adequate nutrition and the practice of physical activity can increase productivity levels by 20%.</p>
      <h3>Benefits for Employees</h3>
      <ul>
        <li>Reduction of stress at workplace.</li>
        <li>Increase concentration and improves performance during work.</li>
        <li>Prevention and improvement of muscular and skeletal disorders.</li>
        <li>The worker will feel care and importance for the company.</li>
      </ul>
      <h3>Benefits for the Company</h3>
      <ul>
        <li>Increase the Corporate Social Responsibility of the company.</li>
        <li>Easier to attract and retain talent.</li>
        <li>Reduction of indirect costs related to work incapacity and absenteeism.</li>
        <li>Greater commitment and identification from workers.</li>
        <li>Improvement of internal and external company image.</li>
      </ul>
    `
  },
  "Onsite Radiology Services": {
    title: "Onsite Radiology Services",
    subtitle: "Full radiology suite with expert teams for healthcare providers",
    highlights: ["Ultrasound & X-ray & CT scan", "Expert radiologist on-site", "24×7 service availability", "IT-enabled workflows"],
    content: `
      <p>Credent offers the complete suite of onsite radiology services for every type of healthcare providers ranging from small to large hospitals and government organizations. Services cover ultrasound, X-rays and CT scan among others.</p>
      <p>Apart from providing equipments we also provide expert team along with a radiologist and doctor. Our onsite team blends in with your staff members and becomes a seamless part of your services, bringing in value and enhanced reputation.</p>
      <p>When you avail of our onsite radiology services you get all the benefits of such services without the headaches of maintaining equipments and hiring specialists. We provide experts along with equipments to ensure 24x7 services to your customers.</p>
      <p>We put in place an IT-enabled process backed by quality procedures to ensure standardized workflows and highest levels of patient care.</p>
    `
  },
  "Lab Technician": {
    title: "Lab Technician",
    subtitle: "Skilled lab technicians for clinical & pathological testing",
    highlights: ["Recognized qualifications", "Advanced equipment training", "Temporary & permanent roles", "Specialist outsourcing"],
    content: `
      <p>Credent is your trusted source for highly trained and skilled lab technicians to take care of even the most demanding testing procedures. We recruit candidates with recognized qualifications and enhance their skills with further training in specialized processes and in use of latest and most advanced equipments.</p>
      <p>Recruit a lab technician through us and you get the assurance of a highly trained and skilled person who will accomplish tasks in record time and be a genuine asset for your organization.</p>
      <p>You can just as well outsource lab technician services to us and we will take care of putting in place the right candidate, manage services and give you the best results at the lowest cost.</p>
      <p>You also have the choice of calling for temporary lab technicians to fill gaps in case of demand or when your regular staff goes on leave. With Credent here, your lab never stops working.</p>
    `
  },
  "Customer Care Setup": {
    title: "Customer Care Setup",
    subtitle: "Multi-channel customer care infrastructure with data analytics",
    highlights: ["Multi-channel communication", "Call recording & analytics", "Trained CX executives", "Full setup & commissioning"],
    content: `
      <p>Credent Group can help to create a customer care department in your organization. We make use of specialized IT infrastructure and multi-channel communication facility handled by trained customer care representatives.</p>
      <p>Customer experience matters a lot in these days of intense competition and the speed as well as the way in which you respond can make a difference to your customer. Our customer care setup helps you respond promptly to queries or complaints and resolve them to the caller's satisfaction.</p>
      <p>Our customer care setup also integrates data analytics and call recording. This helps you to identify gaps or deficiencies and take action to remedy such situations should your customer care personnel face a similar issue in future. You can also identify opportunities and create strategies to generate more business.</p>
      <p>Credent will supply equipments, take care of installation and then commission it. We also take care of providing trained customer care support executives or train your existing personnel.</p>
    `
  },
};

export const serviceSections = Object.keys(servicesData);

export default function Services({ onNavigate, initialSection }) {
  const [active, setActive] = useState(
    initialSection && servicesData[initialSection] ? initialSection : "Field Executives (Bikers)"
  );

  useEffect(() => {
    if (initialSection && servicesData[initialSection]) {
      setActive(initialSection);
    }
  }, [initialSection]);

  const accent = serviceAccents[active];
  const service = servicesData[active];

  return (
    <div className="sv-page">

      {/* HERO */}
      <div className="sv-hero">
        <div className="sv-hero__inner">
          <div className="sv-breadcrumb">
            <span className="sv-breadcrumb__link" onClick={() => onNavigate('home')}>Home</span>
            <span className="sv-breadcrumb__sep">›</span>
            <span>Services</span>
          </div>
          <h1 className="sv-hero__title">Our Services</h1>
          <p className="sv-hero__sub">Comprehensive healthcare logistics and workforce solutions across India</p>
        </div>
        <div className="sv-hero__wave">
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none">
            <path d="M0,40 C360,80 1080,0 1440,40 L1440,60 L0,60 Z" fill="#f4f6fb" />
          </svg>
        </div>
      </div>

      {/* MAIN LAYOUT */}
      <div className="sv-layout">

        {/* SIDEBAR */}
        <aside className="sv-sidebar">
          <div className="sv-sidebar__header">
            <span>All Services</span>
          </div>
          {Object.keys(servicesData).map((key) => (
            <button
              key={key}
              className={`sv-nav-item ${active === key ? "sv-nav-item--active" : ""}`}
              onClick={() => setActive(key)}
              style={active === key ? { "--item-accent": serviceAccents[key] } : {}}
            >
              <span className="sv-nav-item__icon"
                style={{ color: active === key ? serviceAccents[key] : undefined }}>
                {serviceIcons[key]}
              </span>
              <span className="sv-nav-item__label">{key}</span>
              {active === key && <span className="sv-nav-item__arrow">›</span>}
            </button>
          ))}
        </aside>

        {/* CONTENT */}
        <main className="sv-content">

          {/* Service header card */}
          <div className="sv-card" style={{ "--accent": accent }}>
            <div className="sv-card__icon-wrap" style={{ background: `${accent}18`, color: accent }}>
              {serviceIcons[active]}
            </div>
            <div className="sv-card__meta">
              <span className="sv-card__pill" style={{ color: accent, background: `${accent}15`, borderColor: `${accent}30` }}>
                Service
              </span>
              <h2 className="sv-card__title">{service.title}</h2>
              <p className="sv-card__subtitle">{service.subtitle}</p>
            </div>
          </div>

          {/* Highlights row */}
          <div className="sv-highlights">
            {service.highlights.map((h) => (
              <div key={h} className="sv-highlight" style={{ "--accent": accent }}>
                <span className="sv-highlight__dot" style={{ background: accent }} />
                {h}
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="sv-divider" style={{ background: `linear-gradient(90deg, ${accent}, transparent)` }} />

          {/* Body text */}
          <div
            className="sv-body"
            dangerouslySetInnerHTML={{ __html: service.content }}
          />

          {/* CTA */}
          <div className="sv-cta">
            <button className="sv-cta__btn" style={{ background: accent }}
              onClick={() => onNavigate('home')}>
              Get in Touch
            </button>
            <span className="sv-cta__note">Our team will reach out within 24 hours</span>
          </div>

        </main>
      </div>
    </div>
  );
}
