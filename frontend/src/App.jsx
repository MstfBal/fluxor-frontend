import { NavLink, Route, Routes } from 'react-router-dom';
import { useEffect, useMemo, useState } from 'react';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000/api';

const contactDetails = {
  email: 'fluxorme@gmail.com',
  phone: '+971547963377',
  address: 'Shams Business Center, Media City Free Zone, Al Messaned, Sharjah UAE',
};

const navigation = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/privacy-policy', label: 'Privacy Policy' },
  { to: '/contact', label: 'Contact' },
];

function Layout({ children }) {
  return (
    <div className="page-shell">
      <header className="hero compact-hero">
        <nav className="nav-bar">
          <div>
            <p className="eyebrow">fluxor</p>
            <h2 className="brand-title">AI Powered Operations</h2>
          </div>
          <div className="nav-links">
            {navigation.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </nav>
      </header>
      <main>{children}</main>
      <footer className="footer">
        <p>© 2026 fluxor. All rights reserved.</p>
      </footer>
    </div>
  );
}

function HomePage() {
  return (
    <Layout>
      <section className="content-section coming-soon-section">
        <div className="coming-soon-card">
          <p className="badge" style={{ fontSize: '3rem' }}>fluxor</p>
          <h1>Coming Soon</h1>
          <p>We are building something exciting.</p>
        </div>
      </section>
    </Layout>
  );
}

function AboutPage() {
  const [siteInfo, setSiteInfo] = useState(null);

  useEffect(() => {
    const loadSiteInfo = async () => {
      try {
        const response = await fetch(`${API_URL}/site-info`);
        const data = await response.json();
        setSiteInfo(data);
      } catch (error) {
        console.error('Failed to load site information:', error);
      }
    };

    loadSiteInfo();
  }, []);

  return (
    <Layout>
      <section className="content-section single-column">
        <p className="section-title">About fluxor</p>
        <h3>Smart operations for inventory, orders, and courier workflows</h3>
        <p>
          fluxor is building intelligent tools for inventory management, order processing, and
          courier management. The platform is designed to help businesses simplify operations,
          improve visibility, and manage fulfillment with greater efficiency.
        </p>
        <p>
          This website provides a public-facing company presence for platform verification,
          compliance, and business contact visibility.
        </p>
        <div className="policy-list">
          <article className="panel">
            <h4>Core focus</h4>
            <p>
              Inventory tracking, order flow management, and courier coordination in one smart
              operational layer.
            </p>
          </article>
          <article className="panel">
            <h4>Brand website</h4>
            <p>
              A simple English website with a public privacy policy and contact information for
              partner and marketplace review needs.
            </p>
          </article>
          {siteInfo ? (
            <article className="panel">
              <h4>Business details</h4>
              <p>
                <strong>Email:</strong> {siteInfo.supportEmail}
              </p>
              <p>
                <strong>Phone:</strong> {siteInfo.supportPhone}
              </p>
              <p>
                <strong>Address:</strong> {siteInfo.address}
              </p>
            </article>
          ) : null}
        </div>
      </section>
    </Layout>
  );
}

function PrivacyPolicyPage() {
  const [policy, setPolicy] = useState(null);

  useEffect(() => {
    const loadPolicy = async () => {
      try {
        const response = await fetch(`${API_URL}/privacy-policy`);
        const data = await response.json();
        setPolicy(data);
      } catch (error) {
        console.error('Failed to load privacy policy:', error);
      }
    };

    loadPolicy();
  }, []);

  return (
    <Layout>
      <section className="content-section single-column privacy-page">
        <p className="section-title">Privacy Policy</p>
        <h3>How fluxor handles personal data</h3>
        {policy ? (
          <>
            <p>
              <strong>Last updated:</strong> {policy.updatedAt}
            </p>

            {policy.sections.map((section) => (
              <article key={section.title} className="panel">
                <h4>{section.title}</h4>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {section.items ? (
                  <ul>
                    {section.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : null}
              </article>
            ))}
          </>
        ) : (
          <article className="panel">
            <h4>Privacy Policy</h4>
            <p>The privacy policy will appear here when the API is available.</p>
          </article>
        )}
      </section>
    </Layout>
  );
}

function ContactPage() {
  return (
    <Layout>
      <ContactSection />
    </Layout>
  );
}

function ContactSection() {
  const initialForm = useMemo(
    () => ({
      name: '',
      email: '',
      message: '',
    }),
    [],
  );
  const [formData, setFormData] = useState(initialForm);
  const [status, setStatus] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('Sending...');

    try {
      const response = await fetch(`${API_URL}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      setStatus(result.message || 'Your message has been sent.');

      if (response.ok) {
        setFormData(initialForm);
      }
    } catch (error) {
      console.error('Failed to send message:', error);
      setStatus('The message could not be sent. Please try again later.');
    }
  };

  return (
    <section className="content-section contact-layout" id="contact-section">
      <div>
        <p className="section-title">Contact</p>
        <h3>Get in touch with fluxor</h3>
        <p>
          For business inquiries, compliance checks, or general questions, you can use the form
          below or contact the team directly.
        </p>
        <div className="contact-card">
          <p>
            <strong>Address:</strong> {contactDetails.address}
          </p>
          <p>
            <strong>Phone:</strong> {contactDetails.phone}
          </p>
          <p>
            <strong>Email:</strong> {contactDetails.email}
          </p>
        </div>
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          Full name
          <input name="name" value={formData.name} onChange={handleChange} placeholder="Your name" />
        </label>
        <label>
          Email address
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="name@company.com"
          />
        </label>
        <label>
          Message
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message"
            rows="5"
          />
        </label>
        <button className="primary-button" type="submit">
          Send
        </button>
        {status ? <p className="status-text">{status}</p> : null}
      </form>
    </section>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
}
