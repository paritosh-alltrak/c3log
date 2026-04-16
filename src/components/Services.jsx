import { useState, useEffect } from "react";
import "./Services.css";
import LogisticsMap from "./LogisticsMap";

const servicesData = {
    "Rider App": {
        title: "Rider App",
        subtitle: "Smart. Connected. Always On-Field.",
        stats: [
            { value: "2500+", label: "Active Riders" },
            { value: "120+", label: "Cities Live" },
            { value: "15 min", label: "Avg Response" },
            { value: "99.9%", label: "Uptime" },
        ],
        journey: [
            { num: 1, title: "Login", desc: "Rider logs into the app" },
            { num: 2, title: "Task Received", desc: "Auto-assigned pickup task" },
            { num: 3, title: "Navigate", desc: "GPS-based route" },
            { num: 4, title: "Pickup", desc: "Sample collected" },
            { num: 5, title: "In Transit", desc: "Live location tracked" },
            { num: 6, title: "Handover", desc: "Delivered to hub/lab" },
        ],
        whyChoose: [
            "GPS-enabled live tracking",
            "Auto task assignment",
            "Offline-friendly for low network areas",
            "Integrated sample handover confirmation",
            "Real-time status updates to clients",
        ],
        highlights: [
            { icon: "📱", title: "Smart App", desc: "Built for riders on the move" },
            { icon: "📍", title: "Live Tracking", desc: "GPS location in real time" },
            { icon: "🧾", title: "Task Control", desc: "Manage all assignments" },
            { icon: "🔒", title: "Secure Access", desc: "Role-based authentication" },
        ],
        industries: [
            { icon: "🏥", label: "Hospitals" },
            { icon: "🔬", label: "Diagnostic Labs" },
            { icon: "💊", label: "Pharma" },
            { icon: "🚚", label: "Logistics Partners" },
        ],
        coverage: [
            { value: "120+", label: "Cities" },
            { value: "24/7", label: "Operations" },
            { value: "Real-time", label: "Tracking" },
        ],
        comparison: [
            { feature: "GPS Live Tracking", credent: true, others: false },
            { feature: "Offline Mode", credent: true, others: false },
            { feature: "Auto Task Assignment", credent: true, others: false },
            { feature: "Sample Handover Logs", credent: true, others: false },
            { feature: "Role-Based Access", credent: true, others: true },
        ],
        cta: {
            title: "Want to Digitize Your Fleet?",
            text: "Empower your riders with a smart, always-on app.",
        },
        bottomFeatures: [
            { icon: "🆔", title: "Verified Riders" },
            { icon: "🛡️", title: "Secure Handling" },
            { icon: "📄", title: "Digital Logs" },
            { icon: "🎧", title: "24/7 Support" },
        ],
    },

    "Field Executives (Bikers)": {
        title: "Field Executives (Bikers)",
        subtitle: "Fast. Reliable. Everywhere in India.",
        stats: [
            { value: "1350+", label: "Trained Bikers" },
            { value: "120+", label: "Cities Covered" },
            { value: "30 min", label: "Avg Response" },
            { value: "100%", label: "Verified Team" },
        ],
        journey: [
            { num: 1, title: "Request", desc: "Client raises pickup" },
            { num: 2, title: "Dispatch", desc: "Nearest biker assigned" },
            { num: 3, title: "Arrival", desc: "Reach location via GPS" },
            { num: 4, title: "Pickup", desc: "Package/sample collected" },
            { num: 5, title: "Transit", desc: "Live tracking enabled" },
            { num: 6, title: "Delivered", desc: "Drop confirmed" },
        ],
        whyChoose: [
            "1350+ trained and vetted bikers",
            "Pan-India coverage",
            "GPS-based nearest dispatch",
            "Same-day pickup & delivery",
            "Live shipment tracking",
        ],
        highlights: [
            { icon: "🏍️", title: "Fleet of Bikers", desc: "Territory-based coverage" },
            { icon: "📍", title: "GPS Dispatch", desc: "Nearest rider allocation" },
            { icon: "⚡", title: "Fast Response", desc: "Quick turnaround" },
            { icon: "✅", title: "Verified Staff", desc: "Background-checked team" },
        ],
        industries: [
            { icon: "🏥", label: "Hospitals" },
            { icon: "🔬", label: "Diagnostic Labs" },
            { icon: "🏢", label: "Corporates" },
            { icon: "💊", label: "Pharma" },
        ],
        coverage: [
            { value: "120+", label: "Cities" },
            { value: "24/7", label: "Operations" },
            { value: "Live", label: "Tracking" },
        ],
        comparison: [
            { feature: "Trained Bikers", credent: true, others: false },
            { feature: "Live GPS Tracking", credent: true, others: false },
            { feature: "Nationwide Coverage", credent: true, others: false },
            { feature: "Same-day Delivery", credent: true, others: true },
            { feature: "Background Verified", credent: true, others: false },
        ],
        cta: {
            title: "Need Fast, Reliable Pickup?",
            text: "Our biker network is ready across India.",
        },
        bottomFeatures: [
            { icon: "🆔", title: "Verified Bikers" },
            { icon: "🛡️", title: "Safe Handling" },
            { icon: "📄", title: "Digital Proof of Delivery" },
            { icon: "🎧", title: "Dedicated Support" },
        ],
    },

    "Phlebotomist Services": {
        title: "Phlebotomist Services",
        subtitle: "Safe Collection. Secure Handling. Timely Delivery.",
        stats: [
            { value: "1550+", label: "Trained Phlebotomists" },
            { value: "120+", label: "Cities Covered" },
            { value: "60 min", label: "Avg Pickup Time" },
            { value: "100%", label: "Compliance Ready" },
        ],
        journey: [
            { num: 1, title: "Booking", desc: "Request received from client" },
            { num: 2, title: "Assigned", desc: "Nearest phlebotomist assigned" },
            { num: 3, title: "Collection", desc: "Sample collected with care" },
            { num: 4, title: "Packaging", desc: "Temperature-controlled packaging" },
            { num: 5, title: "Transit", desc: "Cold-chain transport" },
            { num: 6, title: "Delivered", desc: "Delivered to lab/facility" },
        ],
        whyChoose: [
            "Highly trained and verified phlebotomists",
            "Minimal discomfort & maximum care",
            "Temperature-controlled sample handling",
            "Real-time tracking & status updates",
            "Strict adherence to NABL guidelines",
        ],
        highlights: [
            { icon: "🩸", title: "Expert Collection", desc: "Skilled technique, minimal pain" },
            { icon: "📍", title: "Pan-India Coverage", desc: "Serving major & minor cities" },
            { icon: "❄️", title: "Cold Chain Assurance", desc: "Temperature-safe transit" },
            { icon: "✅", title: "NABL Compliant", desc: "Meets international standards" },
        ],
        industries: [
            { icon: "🏥", label: "Hospitals" },
            { icon: "🔬", label: "Diagnostic Labs" },
            { icon: "🧪", label: "Clinical Research Orgs" },
            { icon: "💊", label: "Pharmaceutical Companies" },
        ],
        coverage: [
            { value: "120+", label: "Cities" },
            { value: "24/7", label: "Operations" },
            { value: "Real-time", label: "Tracking" },
        ],
        comparison: [
            { feature: "Trained Phlebotomists", credent: true, others: false },
            { feature: "Cold Chain Logistics", credent: true, others: false },
            { feature: "Nationwide Coverage", credent: true, others: false },
            { feature: "Real-time Tracking", credent: true, others: false },
            { feature: "NABL Compliance", credent: true, others: true },
        ],
        cta: {
            title: "Need Reliable Sample Collection?",
            text: "We're here to help you deliver safe, accurate and timely results.",
        },
        bottomFeatures: [
            { icon: "🆔", title: "Verified & Background Checked Staff" },
            { icon: "🛡️", title: "Precision & Safety" },
            { icon: "📄", title: "Digital Reports & Documentation" },
            { icon: "🎧", title: "Dedicated Support Team" },
        ],
    },

    "Man Power Outsourcing": {
        title: "Man Power Outsourcing",
        subtitle: "Skilled. Vetted. Ready to Deploy.",
        stats: [
            { value: "5000+", label: "Placements" },
            { value: "120+", label: "Client Sites" },
            { value: "48 hrs", label: "Fast Deployment" },
            { value: "100%", label: "Background Verified" },
        ],
        journey: [
            { num: 1, title: "Requirement", desc: "Client shares need" },
            { num: 2, title: "Shortlist", desc: "Candidates screened" },
            { num: 3, title: "Interview", desc: "Skill evaluation" },
            { num: 4, title: "Verify", desc: "Background checks" },
            { num: 5, title: "Train", desc: "Role-specific training" },
            { num: 6, title: "Deploy", desc: "Onboarded at site" },
        ],
        whyChoose: [
            "Rigorous candidate selection",
            "Background verification done",
            "Specialized training before deployment",
            "Emergency staffing within hours",
            "Long-term and temporary options",
        ],
        highlights: [
            { icon: "🧑‍💼", title: "Skilled Workforce", desc: "Hand-picked professionals" },
            { icon: "📋", title: "Verified Records", desc: "Full background checks" },
            { icon: "🎓", title: "Trained Staff", desc: "Role-ready personnel" },
            { icon: "⚡", title: "Fast Deployment", desc: "Quick turnaround" },
        ],
        industries: [
            { icon: "🏥", label: "Hospitals" },
            { icon: "🔬", label: "Laboratories" },
            { icon: "💊", label: "Pharmaceuticals" },
            { icon: "🧪", label: "Research Institutes" },
        ],
        coverage: [
            { value: "120+", label: "Cities" },
            { value: "48h", label: "Turnaround" },
            { value: "Full", label: "Compliance" },
        ],
        comparison: [
            { feature: "Background Verified", credent: true, others: false },
            { feature: "Pre-deployment Training", credent: true, others: false },
            { feature: "Emergency Staffing", credent: true, others: false },
            { feature: "Industry-Specific Hiring", credent: true, others: true },
            { feature: "Pan-India Network", credent: true, others: false },
        ],
        cta: {
            title: "Need Skilled Staff Fast?",
            text: "Outsource manpower and save time, cost, and effort.",
        },
        bottomFeatures: [
            { icon: "🆔", title: "Verified Staff" },
            { icon: "🛡️", title: "Compliance Ready" },
            { icon: "📄", title: "Clear Documentation" },
            { icon: "🎧", title: "Account Support" },
        ],
    },

    "Home Collection": {
        title: "Home Collection",
        subtitle: "Tests at Your Doorstep. Anytime, Anywhere.",
        stats: [
            { value: "278+", label: "Collection Centers" },
            { value: "120+", label: "Cities Covered" },
            { value: "45 min", label: "Avg Visit Time" },
            { value: "100%", label: "Accurate Reports" },
        ],
        journey: [
            { num: 1, title: "Book", desc: "Schedule at your convenience" },
            { num: 2, title: "Assigned", desc: "Executive assigned" },
            { num: 3, title: "Visit", desc: "At-home collection" },
            { num: 4, title: "Packaging", desc: "Safe sample handling" },
            { num: 5, title: "Transit", desc: "Cold chain delivery" },
            { num: 6, title: "Reports", desc: "Digital reports shared" },
        ],
        whyChoose: [
            "278+ centers across India",
            "Ideal for elderly & bedridden patients",
            "Certified, trained executives",
            "Accurate lab-tested results",
            "Digital reports delivery",
        ],
        highlights: [
            { icon: "🏠", title: "At-Home Service", desc: "Samples collected at doorstep" },
            { icon: "🧪", title: "Accurate Testing", desc: "Partnered lab network" },
            { icon: "📱", title: "Digital Reports", desc: "Delivered online" },
            { icon: "❄️", title: "Safe Transit", desc: "Cold-chain protection" },
        ],
        industries: [
            { icon: "👤", label: "Individuals" },
            { icon: "🏥", label: "Hospitals" },
            { icon: "🔬", label: "Laboratories" },
            { icon: "🏢", label: "Corporate Clients" },
        ],
        coverage: [
            { value: "120+", label: "Cities" },
            { value: "24/7", label: "Booking" },
            { value: "Digital", label: "Reports" },
        ],
        comparison: [
            { feature: "Pan-India Centers", credent: true, others: false },
            { feature: "Trained Executives", credent: true, others: false },
            { feature: "Cold Chain Transit", credent: true, others: false },
            { feature: "Digital Reports", credent: true, others: true },
            { feature: "Elderly-friendly Service", credent: true, others: false },
        ],
        cta: {
            title: "Book a Home Collection Today",
            text: "Quick. Safe. Convenient tests at home.",
        },
        bottomFeatures: [
            { icon: "🆔", title: "Verified Staff" },
            { icon: "🛡️", title: "Safe Handling" },
            { icon: "📄", title: "Digital Reports" },
            { icon: "🎧", title: "Customer Support" },
        ],
    },

    "Cold Chain Logistics": {
        title: "Cold Chain Logistics",
        subtitle: "Temperature-Safe. Globally Compliant.",
        stats: [
            { value: "100%", label: "Temp Compliance" },
            { value: "120+", label: "Routes Covered" },
            { value: "24/7", label: "Live Monitoring" },
            { value: "ISO", label: "Certified" },
        ],
        journey: [
            { num: 1, title: "Pickup", desc: "Sample collected" },
            { num: 2, title: "Packaging", desc: "Insulated containers" },
            { num: 3, title: "Monitor", desc: "Temperature logged" },
            { num: 4, title: "Transit", desc: "GPS tracked" },
            { num: 5, title: "Checkpoint", desc: "Hub verification" },
            { num: 6, title: "Delivered", desc: "Delivered safely" },
        ],
        whyChoose: [
            "End-to-end temperature monitoring",
            "Real-time shipment tracking",
            "Meets international standards",
            "Safe handling of sensitive cargo",
            "Experienced cold-chain team",
        ],
        highlights: [
            { icon: "❄️", title: "Temp Control", desc: "Insulated packaging" },
            { icon: "📡", title: "Live Monitoring", desc: "IoT-enabled tracking" },
            { icon: "🌐", title: "Global Standards", desc: "ISO & WHO compliant" },
            { icon: "🛡️", title: "Safe Transit", desc: "Zero-tolerance handling" },
        ],
        industries: [
            { icon: "💊", label: "Pharma" },
            { icon: "🧬", label: "Biotech" },
            { icon: "🏥", label: "Hospitals" },
            { icon: "🧪", label: "Vaccines & Reagents" },
        ],
        coverage: [
            { value: "120+", label: "Routes" },
            { value: "24/7", label: "Monitoring" },
            { value: "ISO", label: "Certified" },
        ],
        comparison: [
            { feature: "Temperature Monitoring", credent: true, others: false },
            { feature: "Real-time GPS", credent: true, others: false },
            { feature: "Global Compliance", credent: true, others: false },
            { feature: "Insulated Packaging", credent: true, others: true },
            { feature: "Sensitive Cargo Handling", credent: true, others: false },
        ],
        cta: {
            title: "Ship Sensitive Cargo With Confidence",
            text: "Our cold-chain network keeps every batch safe.",
        },
        bottomFeatures: [
            { icon: "🆔", title: "Verified Drivers" },
            { icon: "🛡️", title: "Certified Packaging" },
            { icon: "📄", title: "Digital Temperature Logs" },
            { icon: "🎧", title: "24/7 Control Room" },
        ],
    },

    "Corporate Health": {
        title: "Corporate Health",
        subtitle: "Healthier Teams. Higher Productivity.",
        stats: [
            { value: "500+", label: "Companies Served" },
            { value: "1L+", label: "Employees Screened" },
            { value: "20%", label: "Productivity Lift" },
            { value: "100%", label: "Confidential" },
        ],
        journey: [
            { num: 1, title: "Consult", desc: "Understand company needs" },
            { num: 2, title: "Plan", desc: "Customized program" },
            { num: 3, title: "Screen", desc: "On-site health check-ups" },
            { num: 4, title: "Report", desc: "Individual reports shared" },
            { num: 5, title: "Engage", desc: "Wellness sessions" },
            { num: 6, title: "Review", desc: "Quarterly insights" },
        ],
        whyChoose: [
            "Reduces workplace stress",
            "Improves focus & performance",
            "Lowers absenteeism & attrition",
            "Boosts employer brand",
            "Aligned with WHO guidelines",
        ],
        highlights: [
            { icon: "🏢", title: "On-Site Camps", desc: "At your workplace" },
            { icon: "🩺", title: "Health Checks", desc: "Full body screening" },
            { icon: "🧘", title: "Wellness Programs", desc: "Engaging sessions" },
            { icon: "📊", title: "Insights", desc: "Actionable reports" },
        ],
        industries: [
            { icon: "🏢", label: "Corporates" },
            { icon: "🏭", label: "Manufacturing" },
            { icon: "💻", label: "IT & Tech" },
            { icon: "🏦", label: "BFSI" },
        ],
        coverage: [
            { value: "120+", label: "Cities" },
            { value: "On-site", label: "Delivery" },
            { value: "Digital", label: "Reports" },
        ],
        comparison: [
            { feature: "On-site Screening", credent: true, others: false },
            { feature: "Customized Programs", credent: true, others: false },
            { feature: "Wellness Sessions", credent: true, others: false },
            { feature: "Digital Dashboards", credent: true, others: true },
            { feature: "CSR Support", credent: true, others: false },
        ],
        cta: {
            title: "Build a Healthier Workforce",
            text: "Corporate wellness that actually works.",
        },
        bottomFeatures: [
            { icon: "🆔", title: "Confidential Reports" },
            { icon: "🛡️", title: "Expert Doctors" },
            { icon: "📄", title: "Digital Dashboards" },
            { icon: "🎧", title: "HR Support" },
        ],
    },

    "Onsite Radiology Services": {
        title: "Onsite Radiology Services",
        subtitle: "Expert Imaging. Delivered at Your Site.",
        stats: [
            { value: "200+", label: "Hospital Partners" },
            { value: "24/7", label: "Availability" },
            { value: "100%", label: "Certified Staff" },
            { value: "3+", label: "Imaging Modalities" },
        ],
        journey: [
            { num: 1, title: "Setup", desc: "Equipment deployment" },
            { num: 2, title: "Team", desc: "Radiologist onboarding" },
            { num: 3, title: "Scan", desc: "Patient imaging" },
            { num: 4, title: "Review", desc: "Radiologist reporting" },
            { num: 5, title: "Digital", desc: "Reports shared online" },
            { num: 6, title: "Support", desc: "Continuous assistance" },
        ],
        whyChoose: [
            "Ultrasound, X-ray & CT scan",
            "24x7 expert availability",
            "IT-enabled workflows",
            "Zero headache of equipment upkeep",
            "Enhanced patient care",
        ],
        highlights: [
            { icon: "🩻", title: "Full Imaging Suite", desc: "Multi-modality services" },
            { icon: "🧑‍⚕️", title: "Expert Radiologists", desc: "On-site specialists" },
            { icon: "⚙️", title: "Equipment Provided", desc: "No capital cost" },
            { icon: "📄", title: "Digital Reports", desc: "Fast turnaround" },
        ],
        industries: [
            { icon: "🏥", label: "Hospitals" },
            { icon: "🏛️", label: "Govt Facilities" },
            { icon: "🔬", label: "Diagnostic Centers" },
            { icon: "🚑", label: "Emergency Care" },
        ],
        coverage: [
            { value: "200+", label: "Sites" },
            { value: "24/7", label: "Coverage" },
            { value: "Digital", label: "Reports" },
        ],
        comparison: [
            { feature: "Onsite Equipment", credent: true, others: false },
            { feature: "Expert Radiologists", credent: true, others: false },
            { feature: "24x7 Availability", credent: true, others: false },
            { feature: "Digital Reporting", credent: true, others: true },
            { feature: "IT-enabled Workflow", credent: true, others: false },
        ],
        cta: {
            title: "Add Radiology Without the Overhead",
            text: "We bring imaging expertise to your site.",
        },
        bottomFeatures: [
            { icon: "🆔", title: "Certified Radiologists" },
            { icon: "🛡️", title: "Quality-Assured" },
            { icon: "📄", title: "Digital Reports" },
            { icon: "🎧", title: "24/7 Support" },
        ],
    },

    "Lab Technician": {
        title: "Lab Technician",
        subtitle: "Skilled. Dependable. Always Testing.",
        stats: [
            { value: "2000+", label: "Trained Techs" },
            { value: "120+", label: "Labs Served" },
            { value: "48 hrs", label: "Fast Placement" },
            { value: "100%", label: "Certified" },
        ],
        journey: [
            { num: 1, title: "Request", desc: "Client need shared" },
            { num: 2, title: "Match", desc: "Technician shortlisted" },
            { num: 3, title: "Interview", desc: "Skill checks" },
            { num: 4, title: "Verify", desc: "Background & qualifications" },
            { num: 5, title: "Train", desc: "Equipment-specific training" },
            { num: 6, title: "Deploy", desc: "Onboarded at lab" },
        ],
        whyChoose: [
            "Recognized qualifications",
            "Trained on advanced equipment",
            "Full-time & temporary options",
            "Backup staff on demand",
            "Cost-effective outsourcing",
        ],
        highlights: [
            { icon: "🔬", title: "Certified Techs", desc: "Qualified lab professionals" },
            { icon: "🎓", title: "Advanced Training", desc: "Latest equipment know-how" },
            { icon: "⚡", title: "Quick Deployment", desc: "Fast onboarding" },
            { icon: "🔁", title: "Backup Staff", desc: "Always running" },
        ],
        industries: [
            { icon: "🔬", label: "Diagnostic Labs" },
            { icon: "🏥", label: "Hospitals" },
            { icon: "🧪", label: "Research Labs" },
            { icon: "💊", label: "Pharma" },
        ],
        coverage: [
            { value: "120+", label: "Cities" },
            { value: "48h", label: "Turnaround" },
            { value: "100%", label: "Certified" },
        ],
        comparison: [
            { feature: "Certified Technicians", credent: true, others: false },
            { feature: "Equipment-specific Training", credent: true, others: false },
            { feature: "Backup Staffing", credent: true, others: false },
            { feature: "Contract Options", credent: true, others: true },
            { feature: "Pan-India Network", credent: true, others: false },
        ],
        cta: {
            title: "Keep Your Lab Running Non-Stop",
            text: "Skilled lab technicians, exactly when you need them.",
        },
        bottomFeatures: [
            { icon: "🆔", title: "Verified Qualifications" },
            { icon: "🛡️", title: "Quality Standards" },
            { icon: "📄", title: "Clear Documentation" },
            { icon: "🎧", title: "Client Support" },
        ],
    },

    "Customer Care Setup": {
        title: "Customer Care Setup",
        subtitle: "Turnkey Support. Trained Teams. Ready to Run.",
        stats: [
            { value: "50+", label: "Setups Delivered" },
            { value: "24/7", label: "Coverage" },
            { value: "Multi", label: "Channel" },
            { value: "100%", label: "Recorded Calls" },
        ],
        journey: [
            { num: 1, title: "Assess", desc: "Understand your needs" },
            { num: 2, title: "Design", desc: "Plan infra & staffing" },
            { num: 3, title: "Setup", desc: "Install systems" },
            { num: 4, title: "Train", desc: "Agents onboarded" },
            { num: 5, title: "Launch", desc: "Go live" },
            { num: 6, title: "Optimize", desc: "Analytics & improvement" },
        ],
        whyChoose: [
            "IT infrastructure included",
            "Trained customer care agents",
            "Multi-channel communication",
            "Analytics & call recording",
            "Training for your team available",
        ],
        highlights: [
            { icon: "🎧", title: "Trained Agents", desc: "Professional support" },
            { icon: "📞", title: "Multi-Channel", desc: "Phone, chat, email" },
            { icon: "📊", title: "Analytics", desc: "Insights from every call" },
            { icon: "⚙️", title: "Full Setup", desc: "Infra + software + staff" },
        ],
        industries: [
            { icon: "🏥", label: "Healthcare" },
            { icon: "🏢", label: "Corporates" },
            { icon: "🛒", label: "E-commerce" },
            { icon: "💰", label: "BFSI" },
        ],
        coverage: [
            { value: "24/7", label: "Availability" },
            { value: "Multi", label: "Channel" },
            { value: "Cloud", label: "Enabled" },
        ],
        comparison: [
            { feature: "Turnkey Setup", credent: true, others: false },
            { feature: "Trained Agents", credent: true, others: false },
            { feature: "Call Analytics", credent: true, others: false },
            { feature: "Multi-channel Support", credent: true, others: true },
            { feature: "Custom Training", credent: true, others: false },
        ],
        cta: {
            title: "Upgrade Your Customer Experience",
            text: "Launch a customer care team that delivers.",
        },
        bottomFeatures: [
            { icon: "🆔", title: "Trained Agents" },
            { icon: "🛡️", title: "Data Security" },
            { icon: "📄", title: "Detailed Reports" },
            { icon: "🎧", title: "Ongoing Support" },
        ],
    },
};

export const serviceSections = Object.keys(servicesData);

export default function Services({ onNavigate, initialSection }) {
    const [active, setActive] = useState(
        initialSection && servicesData[initialSection] ? initialSection : "Phlebotomist Services"
    );

    useEffect(() => {
        if (initialSection && servicesData[initialSection]) {
            setActive(initialSection);
        }
    }, [initialSection]);

    const data = servicesData[active];

    return (
        <div className="services-page">
            {/* HERO */}
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
                    {/* HEADER CARD */}
                    <div className="svc-header">
                        <div className="svc-header__icon">🩺</div>
                        <div>
                            <h2>{data.title}</h2>
                            <p className="svc-subtitle">{data.subtitle}</p>
                        </div>
                    </div>

                    {/* STATS */}
                    <div className="svc-stats">
                        {data.stats.map((s, i) => (
                            <div key={i} className="svc-stat">
                                <div className="svc-stat__value">{s.value}</div>
                                <div className="svc-stat__label">{s.label}</div>
                            </div>
                        ))}
                    </div>

                    {/* JOURNEY */}
                    <div className="svc-section">
                        <h3 className="svc-section__title">{data.title.split(" ")[0]} Journey</h3>
                        <div className="svc-journey">
                            {data.journey.map((j, i) => (
                                <div key={i} className="svc-journey__step">
                                    <div className="svc-journey__num">{j.num}</div>
                                    <div className="svc-journey__title">{j.title}</div>
                                    <div className="svc-journey__desc">{j.desc}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* HIGHLIGHTS 3-COLUMN */}
                    <div className="svc-section">
                        <h3 className="svc-section__title">Service Key Highlights</h3>
                        <div className="svc-highlights">
                            {/* Why Choose */}
                            <div className="svc-card">
                                <h4>Why Choose Credent</h4>
                                <ul className="svc-checklist">
                                    {data.whyChoose.map((w, i) => (
                                        <li key={i}><span className="svc-check">✓</span>{w}</li>
                                    ))}
                                </ul>
                            </div>

                            {/* Our Highlights */}
                            <div className="svc-card">
                                <h4>Our Service Highlights</h4>
                                <div className="svc-hl-grid">
                                    {data.highlights.map((h, i) => (
                                        <div key={i} className="svc-hl-item">
                                            <div className="svc-hl-icon">{h.icon}</div>
                                            <div className="svc-hl-title">{h.title}</div>
                                            <div className="svc-hl-desc">{h.desc}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Industries */}
                            <div className="svc-card">
                                <h4>Industries We Serve</h4>
                                <ul className="svc-industries">
                                    {data.industries.map((ind, i) => (
                                        <li key={i}>
                                            <span className="svc-ind-icon">{ind.icon}</span>
                                            {ind.label}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* COVERAGE + COMPARISON */}
                    <div className="svc-row-2col">
                        <div className="svc-card svc-coverage">
                            <h4>Pan-India Coverage</h4>
                            <div className="svc-map">
                                <LogisticsMap />
                            </div>
                            <div className="svc-coverage-stats">
                                {data.coverage.map((c, i) => (
                                    <div key={i} className="svc-coverage-item">
                                        <div className="svc-cov-value">{c.value}</div>
                                        <div className="svc-cov-label">{c.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="svc-card">
                            <h4>Why Credent Stands Out</h4>
                            <table className="svc-table">
                                <thead>
                                    <tr>
                                        <th>Feature</th>
                                        <th>Credent</th>
                                        <th>Others</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.comparison.map((c, i) => (
                                        <tr key={i}>
                                            <td>{c.feature}</td>
                                            <td className={c.credent ? "yes" : "no"}>
                                                {c.credent ? "✓" : "✗"}
                                            </td>
                                            <td className={c.others ? "yes" : "no"}>
                                                {c.others ? "✓" : "✗"}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="svc-cta">
                        <div>
                            <h4>{data.cta.title}</h4>
                            <p>{data.cta.text}</p>
                        </div>
                        <div className="svc-cta__btns">
                            <button className="svc-btn svc-btn--primary">Schedule Pickup</button>
                            <button className="svc-btn svc-btn--ghost">Contact Sales</button>
                        </div>
                    </div>

                    {/* BOTTOM FEATURES */}
                    <div className="svc-bottom">
                        {data.bottomFeatures.map((f, i) => (
                            <div key={i} className="svc-bottom__item">
                                <div className="svc-bottom__icon">{f.icon}</div>
                                <div className="svc-bottom__title">{f.title}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
