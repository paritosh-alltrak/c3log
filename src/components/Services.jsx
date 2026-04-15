import { useState, useEffect } from "react";
import "./Services.css";

const servicesData = {
    "Rider App Tos": {
        title: "C3Logistics.co.in (Credent Connect N Care Ltd) Terms of Service for Rider App.",
        content: `
    <h3>DEFINITIONS</h3>
    <p>Credent Rider App allows its own riders to perform following tasks:</p>

    <ul>
      <li>Perform the pre-assigned task via app.</li>
      <li>Create the new task in app based on on-call assignments.</li>
      <li>Pick-up the diagnostics samples from the assigned collection centres operated by company clients.</li>
      <li>Handover the diagnostics samples to riders, hubs or labs and ensure that all samples reach to designated place.</li>
      <li>Riders / Runners are company employees which use Rider app to perform day to day on-field task.</li>
    </ul>

    <p>By accessing our Rider App or our service, you accept this Privacy Policy and provide consent to provide required permission as needed by app to perform necessary tasks.</p>

    <p>If you do not agree to be bound by these Terms of Use in their entirety, you may choose not use the Credent Rider App.</p>

    <h3>ABOUT THE SERVICE</h3>
    <p>The Service allows you to:</p>

    <ul>
      <li>Perform the pre-assigned task via app.</li>
      <li>Create the new task in app based on on-call assignments.</li>
      <li>Pick-up the diagnostics samples from assigned centres.</li>
      <li>Handover samples to riders, hubs or labs.</li>
    </ul>

    <p><strong>REGISTRATION; RULES FOR USER CONDUCT AND USE OF THE SERVICE</strong></p>
    <p>You need to be an internal user which shall grant you access to our Rider App.</p>

    <h3>USE RESTRICTIONS</h3>
    <p>Your permission to use the Rider App is conditioned upon the following restrictions:</p>

    <ul>
      <li>Access the Service for any reason other than your professional requirements.</li>
      <li>Collect or harvest any personal data of any user of the Service.</li>
      <li>Use the Service for solicitation of business outside authorized scope.</li>
      <li>Distribute any parts of the Service without permission.</li>
      <li>Use the Service for unlawful purposes.</li>
      <li>Attempt to harass, abuse or harm another person.</li>
      <li>Provide false or inaccurate information.</li>
      <li>Interfere with proper functioning of the Service.</li>
    </ul>

    <h3>MODIFICATION OF TERMS OF USE</h3>
    <p>We can amend these Terms of Use at any time. Continued use of the Service signifies your agreement to updated terms.</p>
  `
    },
    "Field Executives (Bikers)": {
        title: "Field Executives (Bikers)",
        content: `
      <p>Credent Group maintains a team of around 1350 bikers, each one thoroughly trained and carefully vetted through a rigorous process. Each member of the biker team is allotted a specific territory and provides fast, efficient services to clients in his area. A call from a client starts the process with the nearest field biker contacted via phone and the biker can find the exact location using GPS and maps and reach it within minutes.</p>

      <p>Our biker services handle pickup services. This may involve a package, a document, a purchase or a delivery as the case may be. Trained and knowledgeable, each biker knows exactly what to do and carries out the procedure efficiently within short span of his arrival at the location.</p>

      <p>Whether it is pickup and delivery from one location to another or couriering a package, it is done quickly and professionally. Clients receive complete updates through a tracking service. Basic services are covered in our standard rate for each pickup/delivery for locations across India.</p>
    `,
    },

    "Phlebotomist Services": {
        title: "Phlebotomist Services",
        content: `
      <p>Credent has a team of 1550 phlebotomists and the number is growing across major and minor cities in India. Phlebotomists in our employ receive thorough training to be precise and meticulous in performance of their duties. Credent Connect N Care with its expertise in temperature controlled packaging guarantees that samples are preserved while in transit. We follow internationally recognized standards for this service to satisfy highest quality requirements of hospitals and laboratories as well as clinical trials institutions and pharmaceutical companies.</p>

      <p>Phlebotomists are trained to draw blood samples expertly with minimum discomfort to the patient and then store such samples in temperature controlled packaging. Our phlebotomists are also expert in observing the patient during the process and in rendering any assistance that may be required should there be any adverse reaction. They take care of sample collection, packaging and forwarding procedures with documentation if they are in the field.</p>

      <p>We offer trained phlebotomists who have through knowledge about new technical standards and test as well as the new NABL guidelines. You may employ such trained phlebotomists or, if you are planning to recruit people, we can train them to enhance their skill levels.</p>
    `,
    },

    "Man Power Outsourcing": {
        title: "Man Power Outsourcing",
        content: `
      <p>Credent specializes in offering manpower on contract, one-off and temporary basis with accent on serving research institutions, pharmaceuticals, hospitals and laboratory segments. Credent has a rigorous process of selection of candidates for specific skills and each one is chosen after interviews and verification. Thereafter, each one chosen to be part of our team undergoes specialized training to enhance skills. We also conduct background checks and vet each candidate.</p>

      <p>We offer manpower services on the best terms. Clients can intimate us in advance and we will make arrangements to provide candidates for selection. Clients may phone us in case of emergency and we will provide people in the shortest possible time. You will find that people we recommend to fill temporary posts or longer duration posts get right down to work in the most efficient way. You will find that outsourcing your manpower requirements to us saves time and money in addition to getting the job done far better.</p>
    `,
    },

    "Home Collection": {
        title: "Home Collection",
        content: `
      <p>Credent offers home collection services in a big way across the length and width of India. We have an established presence in major cities in each state across India. At present we have more than 278 centers and the number is growing every day.</p>

      <p>Our home collection service covers collection of blood/urine samples for laboratory analysis. This service is available to individuals who may not have the time to visit a laboratory or patients who are not able to undertake travel because they are ill or bedridden. Samples collected are tested and analyzed by our personnel in our associate labs to assure accurate test results. All this is handled when our home collection executive visits you.</p>

      <p>We also offer home collection services to hospitals and laboratories to enhance their services and to help them rope in more customers.</p>
    `,
    },

    "Cold Chain Logistics": {
        title: "Cold Chain Logistics",
        content: `
      <p>We provide temperature-controlled logistics solutions for transporting sensitive medical and pharmaceutical products. Our system ensures safe handling, real-time tracking, and compliance with international standards.</p>
    `,
    },

    "Corporate Health": {
        title: "Corporate Health",
        content: `
      <p>We conduct a corporate health program to ensure better health for the workforce in an organization. Health and wellness programs should be an integral part of the company's global strategy to promote a healthy workplace. A healthy worker is more efficient, has more energy, the risk of accidents decreases and stress situations are managed in a more positive way. According to the WHO report, adequate nutrition and the practice of physical activity can increase productivity levels by 20%. For these reasons, more and more organizations are being aware of implementing corporate health measures, thus giving importance to their most important capital: people.</p>

      <h3>Benefits for employees</h3>
      <ul>
        <li>Reduction of stress at workplace.</li>
        <li>Increase concentration and improves performance of the employees during work.</li>
        <li>Prevention and improvement of muscular and skeletal disorders: lumbago, sciatica, contractures, tendinitis, back injuries …</li>
        <li>The worker will feel care and importance for the company in which he/she works.</li>
      </ul>

      <h3>Benefits for the company</h3>
      <ul>
        <li>Increase the Corporate Social Responsibility of the company.</li>
        <li>It will be easier to attract and retain talent in the company.</li>
        <li>Reduction of indirect costs related to work incapacity, absenteeism …</li>
        <li>Greater commitment on the part of the worker and greater identification with the company.</li>
        <li>Improvement of the image of the company both internally and externally.</li>
        <li>There are several programs to promote the corporate health of work teams.</li>
      </ul>
    `,
    },

    "Onsite Radiology Services": {
        title: "Onsite Radiology Services",
        content: `
      <p>Credent offers the complete suite of onsite radiology services for every type of healthcare providers ranging from small to large hospitals and government organizations. Services cover ultrasound, X-rays and CT scan among others. Apart from providing equipments we also provide expert team along with a radiologist and doctor. Our onsite team blends in with your staff members and becomes a seamless part of your services, bringing in value and enhanced reputation. Adding onsite radiology can also help to save lives.</p>

      <p>When you avail of our onsite radiology services you get all the benefits of such services without the headaches of maintaining equipments and hiring specialists. We provide experts along with equipments to ensure 24x7 services to your customers. We put in place an IT-enabled process backed by quality procedures to ensure standardized workflows and highest levels of patient care.</p>
    `,
    },

    "Lab Technician": {
        title: "Lab Technician",
        content: `
      <p>Credent is your trusted source for highly trained and skilled lab technicians to take care of even the most demanding testing procedures. We recruit candidates with recognized qualifications and enhance their skills with further training in specialized processes and in use of latest and most advanced equipments used in clinical and pathological testing laboratories.</p>

      <p>Recruit a lab technician through us and you get the assurance of highly trained and skilled person who will accomplish tasks in record time and be a genuine asset for your organization. You can just as well outsource lab technician services to us and we will take care of putting in place the right candidate, manage services and give you the best results at the lowest cost. You also have the choice of calling for temporary lab technicians to fill gaps in case of demand or when your regular staff goes on leave. With Credent here, your lab never stops working.</p>
    `,
    },

    "Customer Care Setup": {
        title: "Customer Care Setup",
        content: `
      <p>Credent Group can help to create a customer care department in your organization. We make use of specialized IT infrastructure and multi-channel communication facility handled by trained customer care representatives. Customer experience matters a lot in these days of intense competition and the speed as well as the way in which you respond can make a difference to your customer. Our customer care setup helps you respond promptly to queries or complaints and resolve them to the caller’s satisfaction.</p>

      <p>Our customer care setup also integrates data analytics and call recording. This helps you to identify gaps or deficiencies and take action to remedy such situations should your customer care personnel face a similar issue in future. You can also identify opportunities and create strategies to generate more business.</p>

      <p>Credent will supply equipments, take care of installation and then commission it. We also take care of providing trained customer care support executives or train your existing personnel to take on this duty and enhance your reputation.</p>
    `,
    },
};

export const serviceSections = [
    "Rider App Tos",
    "Field Executives (Bikers)",
    "Phlebotomist Services",
    "Man Power Outsourcing",
    "Home Collection",
    "Cold Chain Logistics",
    "Corporate Health",
    "Onsite Radiology Services",
    "Lab Technician",
    "Customer Care Setup",
];

export default function Services({ onNavigate, initialSection }) {
    const [active, setActive] = useState(
        initialSection && servicesData[initialSection] ? initialSection : "Rider App Tos"
    );

    useEffect(() => {
        if (initialSection && servicesData[initialSection]) {
            setActive(initialSection);
        }
    }, [initialSection]);

    return (
        <div className="services-page">

            {/* ✅ HERO (NEW) */}
            <div className="services-hero">
                <div className="services-hero__inner">
                    <div className="services-breadcrumb">
                        <span onClick={() => onNavigate('home')}>Home</span>
                        <span>›</span>
                        <span>Services</span>
                    </div>

                    <h1>Services</h1>
                </div>
            </div>

            {/* CONTENT */}
            <div className="services-container">

                {/* LEFT */}
                <div className="services-sidebar">
                    <div className="services-title">SERVICES</div>

                    {Object.keys(servicesData).map((item) => (
                        <div
                            key={item}
                            className={`services-item ${active === item ? "active" : ""}`}
                            onClick={() => setActive(item)}
                        >
                            {item}
                        </div>
                    ))}
                </div>

                {/* RIGHT */}
                <div className="services-content">
                    <h2>{servicesData[active].title}</h2>
                    <div className="services-line" />

                    <div
                        className="services-text"
                        dangerouslySetInnerHTML={{ __html: servicesData[active].content }}
                    />

                    <button className="services-btn">GET IN TOUCH</button>
                </div>

            </div>
        </div>
    );
}