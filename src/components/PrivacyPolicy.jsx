import './PrivacyPolicy.css'

export default function PrivacyPolicy({ onNavigate }) {
  return (
    <div className="pp-page">

      <div className="pp-intro">

        <h1 className="pp-intro__title">Privacy <span>Policy</span></h1>
        <p className="pp-intro__sub">Your data, handled with care and transparency.</p>

      </div>

      <div className="pp-content">
        <section className="pp-section">
          <h2 className="pp-section__title">Introduction</h2>
          <p>
            This privacy policy (&ldquo;Privacy Policy&rdquo;) sets forth our commitment to respect your privacy
            and recognize your need for appropriate protection and management of any Personal
            Information (as defined below) you share with us. The Privacy Policy applies to our
            Services available under the domain <strong>c3logistics.co.in</strong> (hereinafter
            referred to as the &ldquo;Website/App&rdquo;).
          </p>
          <p>
            By visiting the Website/App or going through the Privacy Policy, as detailed below or
            the Terms of Use, which prescribes Terms and Conditions for use of Website/App or
            availing our Services, you agree to be bound by this Privacy Policy and to the use and
            disclosure of your personal information in accordance with the Privacy Policy.
          </p>
          <p className="pp-notice">
            IF YOU DO NOT AGREE PLEASE DO NOT USE OR ACCESS THE WEBSITE/APP.
          </p>
          <p>
            The words &ldquo;you&rdquo; or &ldquo;your&rdquo; or &ldquo;User&rdquo; or &ldquo;Customer&rdquo; as used herein, refer to all
            individuals and/or entities accessing or using the Website/App for any reason. The words
            &ldquo;we&rdquo; or &ldquo;us&rdquo; or &ldquo;our&rdquo; or the &ldquo;Company&rdquo; as used herein, refer to Credent Connect N
            Care and/or any of its Associate/Subsidiary/Group Company.
          </p>
        </section>

        <section className="pp-section">
          <h2 className="pp-section__title">Information We Collect</h2>
          <p>We may collect the following types of information:</p>
          <ul className="pp-list">
            <li>
              <strong>Personal Information:</strong> Information that identifies you as an individual,
              such as your name, email address, phone number, and any other personal details you
              provide to us through forms or other communication.
            </li>
            <li>
              <strong>Non-Personal Information:</strong> Data that does not personally identify you,
              such as IP address, browser type, device details, operating system, and usage patterns.
            </li>
            <li>
              <strong>Cookies and Tracking Data:</strong> Information collected through cookies and
              similar tracking technologies to enhance user experience.
            </li>
          </ul>
        </section>

        <section className="pp-section">
          <h2 className="pp-section__title">How We Use Your Information</h2>
          <p>We use your information to:</p>
          <ul className="pp-list">
            <li>Provide, operate, and maintain our website and services.</li>
            <li>Improve our website and services based on your feedback and usage patterns.</li>
            <li>Respond to your queries, requests, or customer support needs.</li>
            <li>Send you updates, newsletters, or promotional materials if you have opted to receive them.</li>
            <li>Ensure legal compliance, including complying with applicable data protection laws such as the Information Technology Act, 2000, and rules thereunder.</li>
          </ul>
          <p>
            You agree that we may use your Personal Information to facilitate the Services you
            request. You agree that we may use your Personal Information and other information we
            obtain on the Website/App or at the time of registration. You agree and confirm that we
            do not rent, sell, or share Personal Information about you with other people (save with
            your consent) or non-affiliated companies except to provide products or Services under
            the Terms of Use or this Privacy Policy, or under the following circumstances:
          </p>
          <ul className="pp-list">
            <li>To respond to summons, court orders, or legal process, or to establish or exercise our legal rights or defend against legal claims.</li>
            <li>To transfer/disclose Personal Information about you to trusted partners, may or may not be for gain, to promote certain products/services for commercial purposes, without any prior notice to you.</li>
          </ul>
        </section>

        <section className="pp-section">
          <h2 className="pp-section__title">Data Security</h2>
          <p>
            We are committed to safeguard the personal information you provide to us. We implement
            appropriate technical and organizational measures to protect your data from unauthorized
            access, alteration, or destruction. However, please be aware that no method of online
            transmission or storage is entirely secure, and we cannot guarantee the absolute security
            of your data.
          </p>
        </section>

        <section className="pp-section">
          <h2 className="pp-section__title">Your Rights</h2>
          <p>As per Indian law, you have the following rights regarding your personal data:</p>
          <ul className="pp-list">
            <li><strong>Access:</strong> Request access to the personal information we hold about you.</li>
            <li><strong>Correction:</strong> Request corrections to any inaccuracies in your personal information.</li>
            <li><strong>Withdrawal of Consent:</strong> Withdraw your consent for processing your personal data at any time.</li>
            <li><strong>Erasure:</strong> Request deletion of your personal information, subject to legal obligations or retention requirements.</li>
          </ul>
          <p>
            We will retain your personal information for as long as necessary to fulfill the purposes
            outlined in this Privacy Policy, unless a longer retention period is required by law.
          </p>
        </section>

        <section className="pp-section">
          <h2 className="pp-section__title">Cookies and Tracking Technologies</h2>
          <p>
            We use cookies and similar tracking technologies to enhance your experience on our
            website. Cookies help us understand how you interact with our site and allow us to
            personalize content and ads. You can manage your cookie preferences in your browser
            settings.
          </p>
        </section>

        <section className="pp-section">
          <h2 className="pp-section__title">Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time to reflect changes in our practices
            or for other operational, legal, or regulatory reasons. Any changes will be posted on
            this page with the updated effective date.
          </p>
          <p>
            This Privacy Policy and Terms of Use shall be governed by and constructed in accordance
            with the laws of India only without reference to conflict of laws principles and disputes
            arising in relation hereto and shall be subject to the exclusive jurisdiction of the
            competent courts of New Delhi, India.
          </p>
        </section>

        <section className="pp-section">
          <h2 className="pp-section__title">Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, the privacy practices of this
            Website/App, or if you want to exercise any of the rights that you are given under this
            Privacy Policy, you can contact the grievance officer at{' '}
            <a href="mailto:info@c3logistics.co.in" className="pp-link">info@c3logistics.co.in</a>.
            The details of the grievance officer may be changed by us from time to time by updating
            this Privacy Policy.
          </p>
          <p>
            By using our website, you agree to this Privacy Policy. If you do not agree with the
            terms, please discontinue using our website.
          </p>
        </section>
      </div>
    </div>
  )
}
