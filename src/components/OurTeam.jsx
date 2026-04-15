import './OurTeam.css'

const directors = [
    { initials: 'TS', name: 'Tarun Sharma', role: 'CEO and Managing Director' },
    { initials: 'KS', name: 'Karan Sharma', role: 'Whole time Director, CFO' },
    { initials: 'AG', name: 'Amit Gupta', role: 'Whole time Director, COO' },

    { initials: 'T', name: 'Tanveen', role: 'Non-Executive Director, Head- Administration' },
    { initials: 'DS', name: 'Dimple Sharma', role: 'Non-Executive Director Head- HR and corporate Affairs' },
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
        { initials: 'TS', name: 'Tejpal Singh', role: 'Independent Director' },
    ],
    "Audit Committee": [
        { initials: 'TS', name: 'Tarun Sharma', role: 'Chairman' },
        { initials: 'VY', name: 'Vanita Yadav', role: 'Independent Director' },
        { initials: 'TS', name: 'Tejpal Singh', role: 'Independent Director' },
    ],
    "Stakeholders Relationship Committee": [
        { initials: 'TS', name: 'Tarun Sharma', role: 'Chairman' },
        { initials: 'AG', name: 'Amit Gupta', role: 'Member' },
        { initials: 'VY', name: 'Vanita Yadav', role: 'Member' },
        { initials: 'TS', name: 'Tejpal Singh', role: 'Member' },
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

            {/* HERO */}
            <div className="team-hero">
                <div className="team-hero__inner">
                    <nav className="team-breadcrumb">
                        <span onClick={() => onNavigate('home')}>Home</span>
                        <span>›</span>
                        <span>About Us</span>
                        <span>›</span>
                        <span>Our Team</span>
                    </nav>
                    <h1>Our Team</h1>
                    <p>
                        Our team is our greatest asset. With this in mind we have hand-picked qualified, certified and experienced professionals from each field whose individual skills synergize into a great workforce. We have experts in logistics bringing their knowledge to bear on a client's specific problem to come up with custom, cost efficient and fast solution.

                        We have competent back office people taking care of routine matters. Our team is also enriched with a think tank of management and logistics professionals developing innovative plans for the future. We have personnel in the field competently handling operations and we have IT experts and analysts delving into historical data as well as keeping a track on emerging trends. Adaptable, flexible, in tune with latest developments and working coherently as a team, we deliver on promises and ensure satisfaction through competence.
                    </p>
                </div>
            </div>

            {/* BOARD OF DIRECTORS */}
            <div className="team-section">
                <h2>Board Of Directors (BOD)</h2>
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

            {/* COMMITTEES */}
            {Object.keys(committees).map((committee, index) => (
                <div key={index} className="team-section">
                    <h2>{committee}</h2>
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