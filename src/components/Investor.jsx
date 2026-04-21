import { useState } from 'react'
import './Investor.css'

const investorSections = [
  {
    id: 'corporate-governance',
    heading: 'Corporate Governance',
    groups: [
      {
        id: 'cg-profile',
        title: 'Corporate Profile',
        docs: [
          { label: 'Corporate Profile', pdf: '/pdfs/corporate-profile.pdf' },
        ],
      },
      {
        id: 'cg-bod',
        title: 'BOD & Committees',
        docs: [
          { label: 'BOD & Committees', pdf: '/pdfs/bod-committees.pdf' },
        ],
      },
      {
        id: 'cg-directors',
        title: 'Brief Profile of our Directors',
        docs: [
          { label: 'Brief Profile of our Directors', pdf: '/pdfs/director-profiles.pdf' },
        ],
      },
    ],
  },
  {
    id: 'codes-policies',
    heading: 'Codes & Policies',
    groups: [
      {
        id: 'cp-codes',
        title: 'Codes & Policies',
        docs: [
          { label: 'Nomination and Remuneration Policy', pdf: '/pdfs/nomination-remuneration-policy.pdf' },
          { label: 'Code of Conduct of Board & Senior Management', pdf: '/pdfs/code-of-conduct.pdf' },
          { label: 'Policy of Making Payments to Non-Executive Directors', pdf: '/pdfs/policy-payments-ned.pdf' },
          { label: 'Terms & Conditions of Appointment of Independent Directors', pdf: '/pdfs/terms-independent-directors.pdf' },
          { label: 'Corporate Social Responsibility Committees', pdf: '/pdfs/csr-committees.pdf' },
          { label: 'Policy for Determination & Disclosure of Materiality of Events', pdf: '/pdfs/materiality-policy.pdf' },
          { label: 'Policy on Code of Practices for Fair Disclosure of UPSI', pdf: '/pdfs/upsi-policy.pdf' },
          { label: 'Policy on Materiality of Related Party Transactions', pdf: '/pdfs/related-party-policy.pdf' },
          { label: 'Policy for Prevention of Insider Trading', pdf: '/pdfs/insider-trading-policy.pdf' },
          { label: 'Whistle Blower Policy', pdf: '/pdfs/whistle-blower-policy.pdf' },
          { label: 'Archival Policy', pdf: '/pdfs/archival-policy.pdf' },
          { label: 'Policy for Preservation of Documents', pdf: '/pdfs/document-preservation-policy.pdf' },
          { label: 'Policy on Prevention of Sexual Harassment', pdf: '/pdfs/posh-policy.pdf' },
          { label: 'Familiarisation Programme for Independent Directors', pdf: '/pdfs/familiarisation-programme.pdf' },
          { label: 'Policy on Identification of Group Companies & Material Creditors', pdf: '/pdfs/group-companies-policy.pdf' },
        ],
      },
      {
        id: 'cp-offer',
        title: 'Offer Document',
        docs: [
          { label: 'Draft Prospectus', pdf: '/pdfs/draft-prospectus.pdf' },
          { label: 'Prospectus', pdf: '/pdfs/prospectus.pdf' },
          { label: 'Abridged Prospectus', pdf: '/pdfs/abridged-prospectus.pdf' },
          { label: 'Issue Opening Advertisement', pdf: '/pdfs/issue-opening-advertisement.pdf' },
          { label: 'Basis of Allotment Advertisement', pdf: '/pdfs/basis-of-allotment.pdf' },
        ],
      },
      {
        id: 'cp-announcement',
        title: 'Public Announcement',
        docs: [
          { label: 'Public Announcement', pdf: '/pdfs/public-announcement.pdf' },
        ],
      },
      {
        id: 'cp-material-contracts',
        title: 'Material Contracts',
        docs: [
          { label: 'Material Contracts', pdf: '/pdfs/material-contracts.pdf' },
        ],
      },
      {
        id: 'cp-material-docs',
        title: 'Material Documents',
        docs: [
          { label: 'Material Documents', pdf: '/pdfs/material-documents.pdf' },
        ],
      },
    ],
  },
  {
    id: 'financials',
    heading: 'Financials Result & Reports',
    groups: [
      {
        id: 'fin-results',
        title: 'Financial Results – Reg. 33',
        docs: [
          { label: 'Financial Results Q1 2023-24', pdf: '/pdfs/financial-results-q1-2324.pdf' },
          { label: 'Financial Results Q2 2023-24', pdf: '/pdfs/financial-results-q2-2324.pdf' },
          { label: 'Financial Results Q3 2023-24', pdf: '/pdfs/financial-results-q3-2324.pdf' },
          { label: 'Financial Results Q4 2022-23', pdf: '/pdfs/financial-results-q4-2223.pdf' },
        ],
      },
      {
        id: 'fin-annual-reports',
        title: 'Annual Reports',
        docs: [
          { label: 'Annual Report 2022-23', pdf: '/pdfs/annual-report-2022-23.pdf' },
          { label: 'Annual Report 2021-22', pdf: '/pdfs/annual-report-2021-22.pdf' },
          { label: 'Annual Report 2020-21', pdf: '/pdfs/annual-report-2020-21.pdf' },
          { label: 'Annual Report 2019-20', pdf: '/pdfs/annual-report-2019-20.pdf' },
          { label: 'Annual Report 2018-19', pdf: '/pdfs/annual-report-2018-19.pdf' },
        ],
      },
      {
        id: 'fin-annual-returns',
        title: 'Annual Returns',
        docs: [
          { label: 'Annual Return 2022-23', pdf: '/pdfs/annual-return-2022-23.pdf' },
          { label: 'Annual Return 2021-22', pdf: '/pdfs/annual-return-2021-22.pdf' },
          { label: 'Annual Return 2020-21', pdf: '/pdfs/annual-return-2020-21.pdf' },
          { label: 'Annual Return 2019-20', pdf: '/pdfs/annual-return-2019-20.pdf' },
          { label: 'Annual Return 2018-19', pdf: '/pdfs/annual-return-2018-19.pdf' },
        ],
      },
      {
        id: 'fin-presentation',
        title: 'Investor Presentation',
        docs: [
          { label: 'Investor Presentation 2023-24', pdf: '/pdfs/investor-presentation-2324.pdf' },
          { label: 'Investor Presentation 2022-23', pdf: '/pdfs/investor-presentation-2223.pdf' },
        ],
      },
    ],
  },
  {
    id: 'stock-exchange',
    heading: 'Stock Exchange',
    groups: [
      {
        id: 'se-disclosures',
        title: 'Other Disclosures / Announcements',
        docs: [
          { label: 'Other Disclosures / Announcements', pdf: '/pdfs/other-disclosures.pdf' },
        ],
      },
      {
        id: 'se-reg30',
        title: 'Disclosures – Reg. 30',
        docs: [
          { label: 'Disclosures – Reg. 30', pdf: '/pdfs/disclosures-reg30.pdf' },
        ],
      },
      {
        id: 'se-notices',
        title: 'Notice & Updates',
        docs: [
          { label: 'Notice & Updates', pdf: '/pdfs/notice-updates.pdf' },
        ],
      },
      {
        id: 'se-shareholding',
        title: 'Shareholding Pattern',
        docs: [
          { label: 'Shareholding Pattern Q4 2023-24', pdf: '/pdfs/shareholding-q4-2324.pdf' },
          { label: 'Shareholding Pattern Q3 2023-24', pdf: '/pdfs/shareholding-q3-2324.pdf' },
          { label: 'Shareholding Pattern Q2 2023-24', pdf: '/pdfs/shareholding-q2-2324.pdf' },
          { label: 'Shareholding Pattern Q1 2023-24', pdf: '/pdfs/shareholding-q1-2324.pdf' },
        ],
      },
      {
        id: 'se-board-meetings',
        title: 'Board Meetings',
        docs: [
          { label: 'Board Meeting – March 2024', pdf: '/pdfs/board-meeting-mar-2024.pdf' },
          { label: 'Board Meeting – December 2023', pdf: '/pdfs/board-meeting-dec-2023.pdf' },
          { label: 'Board Meeting – September 2023', pdf: '/pdfs/board-meeting-sep-2023.pdf' },
          { label: 'Board Meeting – June 2023', pdf: '/pdfs/board-meeting-jun-2023.pdf' },
        ],
      },
      {
        id: 'se-general-meetings',
        title: 'General Meetings',
        docs: [
          { label: 'Annual General Meeting 2023', pdf: '/pdfs/agm-2023.pdf' },
          { label: 'Annual General Meeting 2022', pdf: '/pdfs/agm-2022.pdf' },
          { label: 'Extra-Ordinary General Meeting', pdf: '/pdfs/egm.pdf' },
          { label: 'Postal Ballot Notice', pdf: '/pdfs/postal-ballot-notice.pdf' },
        ],
      },
      {
        id: 'se-grievance',
        title: 'Investor Grievance Redressal Details',
        docs: [
          { label: 'Investor Grievance Redressal Details', pdf: '/pdfs/investor-grievance.pdf' },
        ],
      },
    ],
  },
]

function PdfIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  )
}

function AccordionGroup({ group, isOpen, onToggle }) {
  return (
    <div className={`inv-accordion ${isOpen ? 'inv-accordion--open' : ''}`}>
      <button className="inv-accordion__header" onClick={onToggle}>
        <span className="inv-accordion__title">{group.title}</span>
        <span className="inv-accordion__arrow">{isOpen ? '▲' : '▼'}</span>
      </button>
      {isOpen && (
        <div className="inv-accordion__body">
          {group.docs.map((doc, i) => (
            <div key={i} className="inv-doc-row">
              <span className="inv-doc-label">{doc.label}</span>
              <a
                href={doc.pdf}
                target="_blank"
                rel="noopener noreferrer"
                download
                className="inv-pdf-btn"
              >
                <PdfIcon />
                PDF
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default function Investor({ onNavigate }) {
  const [openMap, setOpenMap] = useState({ 'cg-profile': true, 'cp-codes': true, 'fin-results': true, 'se-disclosures': true })

  const toggle = (id) => {
    setOpenMap(prev => ({ ...prev, [id]: !prev[id] }))
  }

  return (
    <div className="inv-page">
      <div className="inv-intro">
        <p className="inv-intro__breadcrumb">
          <span className="inv-intro__bc-link" onClick={() => onNavigate('home')}>Home</span>
          <span className="inv-intro__bc-sep">›</span>
          <span>Investor Relations</span>
        </p>
        <h1 className="inv-intro__title">Investor <span>Relations</span></h1>
        <p className="inv-intro__sub">Transparency, governance and financial disclosures for our stakeholders.</p>
      </div>

      <div className="inv-content">
        {investorSections.map((section) => (
          <div key={section.id} className="inv-section">
            <h2 className="inv-section__heading">{section.heading}</h2>
            <div className="inv-section__groups">
              {section.groups.map((group) => (
                <AccordionGroup
                  key={group.id}
                  group={group}
                  isOpen={!!openMap[group.id]}
                  onToggle={() => toggle(group.id)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
