import './OurTeam.css'

const directors = [
    { initials: 'TS', name: 'Tarun Sharma', role: 'CEO and Managing Director' },
    { initials: 'KS', name: 'Karan Sharma', role: 'Whole time Director, CFO' },
    { initials: 'AG', name: 'Amit Gupta', role: 'Whole time Director, COO' },
    { initials: 'T', name: 'Tanveen', role: 'Non-Executive Director, Head- Administration' },
    { initials: 'DS', name: 'Dimple Sharma', role: 'Non-Executive Director, Head- HR & Corporate Affairs' },
    { initials: 'AS', name: 'Ashok Sharma', role: 'Non-Executive Director & Chairman' },
    { initials: 'SY', name: 'Sunil Kumar Yadav', role: 'Head- Accounts' },
    { initials: 'VY', name: 'Vanita Yadav', role: 'Independent Director' },
    { initials: 'JW', name: 'Tejpal Singh', role: 'Independent Director' },
    { initials: 'AA', name: 'Arpita Abilasha', role: 'Company Secretary' },
]

const committees = {
    "Nomination and Remuneration Committee": [
        { initials: 'TS', name: 'Tarun Sharma', role: 'Chairman' },
        { initials: 'VY', name: 'Vanita Yadav', role: 'Independent Director' },
        { initials: 'JW', name: 'Tejpal Singh', role: 'Independent Director' },
    ],
    "Audit Committee": [
        { initials: 'TS', name: 'Tarun Sharma', role: 'Chairman' },
        { initials: 'VY', name: 'Vanita Yadav', role: 'Independent Director' },
        { initials: 'JW', name: 'Tejpal Singh', role: 'Independent Director' },
    ],
    "Stakeholders Relationship Committee": [
        { initials: 'TS', name: 'Tarun Sharma', role: 'Chairman' },
        { initials: 'AG', name: 'Amit Gupta', role: 'Member' },
        { initials: 'VY', name: 'Vanita Yadav', role: 'Member' },
        { initials: 'JW', name: 'Tejpal Singh', role: 'Member' },
    ],
    "Corporate Social Responsibility Committee": [
        { initials: 'TS', name: 'Tarun Sharma', role: 'Chairman' },
        { initials: 'DS', name: 'Dimple Sharma', role: 'Member' },
        { initials: 'VY', name: 'Vanita Yadav', role: 'Independent Director' },
    ],
}

export default function OurTeam({ onNavigate }) {
    return (
        <div className="team-page">

            <div className="team-intro">
                <h1 className="team-intro__title">Our <span>Team</span></h1>
                <p className="team-intro__sub">
                    Hand-picked professionals whose individual skills synergize into an exceptional workforce —
                    from logistics experts and field operations to management thinkers and IT analysts.
                </p>

            </div>

            <div className="team-section">
                <div className="team-section__header">
                    <h2>Board of Directors</h2>
                </div>
                <div className="team-grid">
                    {directors.map((member, i) => (
                        <div key={i} className="team-card">
                            <div className="team-avatar">{member.initials}</div>
                            <h3>{member.name}</h3>
                            <p>{member.role}</p>
                        </div>
                    ))}
                </div>
            </div>

            {Object.keys(committees).map((committee, index) => (
                <div key={index} className="team-section">
                    <div className="team-section__header">
                        <h2>{committee}</h2>
                    </div>
                    <div className="team-grid">
                        {committees[committee].map((member, i) => (
                            <div key={i} className="team-card">
                                <div className="team-avatar">{member.initials}</div>
                                <h3>{member.name}</h3>
                                <p>{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}

        </div>
    )
}
