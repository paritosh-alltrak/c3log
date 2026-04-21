import './Investor.css'

const B = '/Downloads'

const investorSections = [
  {
    id: 'corporate-governance',
    heading: 'Corporate Governance',
    groups: [
      {
        id: 'cg-profile',
        title: 'Corporate Profile',
        docs: [
          { label: 'Corporate Profile' },
        ],
      },
      {
        id: 'cg-bod',
        title: 'BOD & Committees',
        docs: [
          { label: 'BOD & Committees' },
        ],
      },
      {
        id: 'cg-directors',
        title: 'Brief Profile of our Directors',
        docs: [
          { label: 'Brief Profile of our Directors' },
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
          { label: 'Nomination and Remuneration Policy', pdf: `${B}/Codes & Policies/NominationandRemunrationPolicy.pdf` },
          { label: 'Code of Conduct of Board & Senior Management', pdf: `${B}/Codes & Policies/Code of Conduct of Board & Senior Management.pdf` },
          { label: 'Policy of Making Payments to Non-Executive Directors' },
          { label: 'Terms & conditions of Appointment of Independent Directors', pdf: `${B}/Codes & Policies/Term & Condition of Appointment of Independent Directors.pdf` },
          { label: 'Corporate Social Responsibility Committees', pdf: `${B}/Codes & Policies/CSR Policy.pdf` },
          { label: 'Policy for Determination & Disclosure of Materiality of Events or Information', pdf: `${B}/Codes & Policies/Policy For Determinaton & discloser of Materiality of events or information.pdf` },
          { label: 'Policy on Code of Practices and Procedures for Fair Disclosure of UPSI', pdf: `${B}/Codes & Policies/Code of Practice and Procedures for fair discloser of unpublish price.pdf` },
          { label: 'Policy on Materiality of Related Party Transactions', pdf: `${B}/Codes & Policies/Policy on Materiality of RPT.pdf` },
          { label: 'Policy for prevention of Insider Trading' },
          { label: 'Whistle Blower Policy', pdf: `${B}/Codes & Policies/Vigil Mechanism & Whistle Blower Policy (1).pdf` },
          { label: 'Archival Policy', pdf: `${B}/Codes & Policies/Archival Policy.pdf` },
          { label: 'Policy for Preservation of Documents', pdf: `${B}/Codes & Policies/Policy for Preservation of Dpcuments.pdf` },
          { label: 'Policy on Prevention of Sexual Harassment', pdf: `${B}/Codes & Policies/Policy on Prevention of Sexual Harassment at workplace.pdf` },
          { label: 'Familiarisation Programme for Independent Directors' },
          { label: 'Policy on Identification of Group Companies, Material Creditors and Material Litigations', pdf: `${B}/Codes & Policies/Policy on Identification of Group Companies.pdf` },
        ],
      },
      {
        id: 'cp-offer',
        title: 'Offer Document',
        docs: [
          { label: 'Draft Prospectus', pdf: `${B}/Offer Document/DRHP.pdf` },
          { label: 'Prospectus' },
          { label: 'Abridged Prospectus', pdf: `${B}/Offer Document/Abridged Prospectus.pdf` },
          { label: 'Issue Opening Advertisement' },
          { label: 'Basis of Allotment Advertisement' },
        ],
      },
      {
        id: 'cp-announcement',
        title: 'Public Announcement',
        docs: [
          { label: 'Public Announcement', pdf: `${B}/Public Announcement/Public_Announcement_Credent.pdf` },
        ],
      },
      {
        id: 'cp-material-contracts',
        title: 'Material Contracts',
        docs: [
          { label: 'CDSL Tripartite Agreement', pdf: `${B}/Material Contracts/Tripartite_CDSL_.pdf` },
          { label: 'NSDL Tripartite Agreement', pdf: `${B}/Material Contracts/Tripartite_NSDL_Openwithchrome.pdf` },
          { label: 'RTA Agreement', pdf: `${B}/Material Contracts/RTA Agreement.pdf` },
          { label: 'Issuer Agreement', pdf: `${B}/Material Contracts/Issuer Agreement_Signed.pdf` },
        ],
      },
      {
        id: 'cp-material-docs',
        title: 'Material Documents',
        docs: [
          { label: 'Material Documents' },
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
          { label: 'Financial Results Q1 2023-24' },
          { label: 'Financial Results Q2 2023-24' },
          { label: 'Financial Results Q3 2023-24' },
          { label: 'Financial Results Q4 2022-23' },
        ],
      },
      {
        id: 'fin-annual-reports',
        title: 'Annual Reports',
        docs: [
          { label: 'Annual Report 2020-21', links: [{ tag: 'FS', pdf: `${B}/Annual Reports/C3 BS and  AR FY 2021 compressed.pdf` }, { tag: 'DR', pdf: `${B}/Annual Reports/DR 20-21 c3.pdf` }] },
          { label: 'Annual Report 2021-22', links: [{ tag: 'FS', pdf: `${B}/Annual Reports/C3 AR with CARO and BS FY 2122.pdf` }, { tag: 'DR', pdf: `${B}/Annual Reports/C3 Notice and DR FY 2122.pdf` }] },
          { label: 'Annual Report 2022-23', links: [{ tag: 'FS', pdf: `${B}/Annual Reports/C3 AR BS_compressed.pdf` }, { tag: 'DR', pdf: `${B}/Annual Reports/C3 DR.pdf` }] },
          { label: 'Annual Report 2023-24', links: [{ tag: 'FS', pdf: `${B}/Annual Reports/C3 FY 2324 AR-BS-Signed.pdf` }, { tag: 'DR', pdf: `${B}/Annual Reports/C3-DR 2324_compressed.pdf` }] },
          { label: 'Annual Report 2024-25', links: [{ tag: 'FS', pdf: `${B}/Annual Reports/Financial with Annexure.pdf` }, { tag: 'DR', pdf: `${B}/Annual Reports/DR.pdf` }] },
        ],
      },
      {
        id: 'fin-annual-returns',
        title: 'Annual Returns',
        docs: [
          { label: 'Annual Return 2020-21', links: [{ tag: 'AOC', pdf: `${B}/Annual Returns/AOC 4 2020-21.pdf` }, { tag: 'MGT', pdf: `${B}/Annual Returns/MGT 7_2020-21.pdf` }] },
          { label: 'Annual Return 2021-22', links: [{ tag: 'AOC', pdf: `${B}/Annual Returns/AOC 4 2021-22.pdf` }, { tag: 'MGT', pdf: `${B}/Annual Returns/C3 Notice and DR FY 2122.pdf` }] },
          { label: 'Annual Return 2022-23', links: [{ tag: 'AOC', pdf: `${B}/Annual Returns/AOC 4 2022-23.pdf` }, { tag: 'MGT', pdf: `${B}/Annual Returns/C3 DR.pdf` }] },
          { label: 'Annual Return 2023-24', links: [{ tag: 'AOC', pdf: `${B}/Annual Returns/C3 FY 2324 AR - BS - Signed.pdf` }, { tag: 'DR', pdf: `${B}/Annual Returns/C3 - DR 2324_compressed.pdf` }] },
          { label: 'Annual Return 2024-25', links: [{ tag: 'AOC', pdf: `${B}/Annual Returns/AOC-4 2024-25.pdf` }, { tag: 'MGT', pdf: `${B}/Annual Returns/MGT-7 2024-25.pdf` }] },
        ],
      },
      {
        id: 'fin-presentation',
        title: 'Investor Presentation',
        docs: [
          { label: 'Investor Presentation' },
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
        title: 'Other Disclosures/Announcements',
        docs: [
          { label: 'Other Disclosures/Announcements' },
        ],
      },
      {
        id: 'se-reg30',
        title: 'Disclosures – Reg. 30',
        docs: [
          { label: 'Disclosures – Reg. 30' },
        ],
      },
      {
        id: 'se-notices',
        title: 'Notice & Updates',
        docs: [
          { label: 'Notice & Updates' },
        ],
      },
      {
        id: 'se-shareholding',
        title: 'Shareholding Pattern',
        docs: [
          { label: 'Shareholding Pattern' },
        ],
      },
      {
        id: 'se-board-meetings',
        title: 'Board Meetings',
        docs: [
          { label: 'Board Meetings' },
        ],
      },
      {
        id: 'se-general-meetings',
        title: 'General Meetings',
        docs: [
          { label: 'General Meetings' },
        ],
      },
      {
        id: 'se-grievance',
        title: 'Investor Grievance Redressal details',
        docs: [
          { label: 'Investor Grievance Redressal details' },
        ],
      },
    ],
  },
]

function DocItem({ doc }) {
  if (doc.links) {
    return (
      <div className="inv-doc-row">
        <span className="inv-doc-label">{doc.label}</span>
        <span className="inv-doc-tags">
          {doc.links.map((link, i) => (
            <a key={i} href={link.pdf} target="_blank" rel="noopener noreferrer" className="inv-doc-tag">
              ({link.tag})
            </a>
          ))}
        </span>
      </div>
    )
  }

  if (doc.pdf) {
    return (
      <div className="inv-doc-row">
        <a href={doc.pdf} target="_blank" rel="noopener noreferrer" className="inv-doc-link">
          {doc.label}
        </a>
      </div>
    )
  }

  return (
    <div className="inv-doc-row">
      <span className="inv-doc-plain">{doc.label}</span>
    </div>
  )
}

function DocGroup({ group }) {
  return (
    <div className="inv-group">
      <div className="inv-group__header">{group.title}</div>
      <div className="inv-group__body">
        {group.docs.map((doc, i) => (
          <DocItem key={i} doc={doc} />
        ))}
      </div>
    </div>
  )
}

export default function Investor({ onNavigate }) {
  return (
    <div className="inv-page">
      <div className="inv-intro">

        <h1 className="inv-intro__title">Investor <span>Relations</span></h1>
        <p className="inv-intro__sub">Transparency, governance and financial disclosures for our stakeholders.</p>
      </div>

      <div className="inv-content">
        {investorSections.map((section) => (
          <div key={section.id} className="inv-section">
            <h2 className="inv-section__heading">{section.heading}</h2>
            <div className="inv-section__groups">
              {section.groups.map((group) => (
                <DocGroup key={group.id} group={group} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
