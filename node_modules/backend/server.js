import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

const siteInfo = {
  brand: 'fluxor',
  legalName: 'fluxor',
  website: 'https://fluxor-me.com',
  supportEmail: 'fluxorme@gmail.com',
  supportPhone: '+971547963377',
  address: 'Shams Business Center, Media City Free Zone, Al Messaned, Sharjah UAE',
  pages: ['Home', 'About', 'Privacy Policy', 'Contact'],
};

const privacyPolicy = {
  updatedAt: 'May 1, 2026',
  sections: [
    {
      title: '1. Introduction',
      paragraphs: [
        'Welcome to fluxor (“we”, “our”, or “us”), accessible at https://fluxor-me.com.',
        'fluxor provides intelligent inventory management, order processing, and courier management solutions.',
        'We are committed to protecting your personal data and respecting your privacy in accordance with applicable laws, including the General Data Protection Regulation (GDPR).',
      ],
    },
    {
      title: '2. Information We Collect',
      paragraphs: ['We may collect the following categories of information:'],
      items: [
        'Account Information: name, email address, company name, and login credentials',
        'Business & Operational Data: inventory data, order details, shipment and courier information',
        'Customer Data processed on behalf of our users: customer names, delivery addresses, and contact information such as phone numbers',
        'Automatically Collected Data: IP address, browser type, device information, pages visited, and session duration',
      ],
    },
    {
      title: '3. How We Use Information',
      paragraphs: ['We use collected data to support the service and its operation.'],
      items: [
        'Provide and operate our services',
        'Manage inventory, orders, and deliveries',
        'Improve system performance and user experience',
        'Ensure security and prevent fraud',
        'Comply with legal obligations',
      ],
    },
    {
      title: '4. Legal Basis for Processing (GDPR)',
      paragraphs: ['We process personal data based on the following legal grounds:'],
      items: [
        'Contractual necessity',
        'Legitimate interests such as system improvement and security',
        'Legal obligations',
        'User consent where applicable',
      ],
    },
    {
      title: '5. Data Retention',
      paragraphs: ['We retain data only as long as necessary for the purposes described in this policy.'],
      items: [
        'Account data: retained while the account is active',
        'Order & delivery data: retained for up to 24 months for operational and support purposes',
        'Customer end-user data: retained for up to 12 months after order completion unless a longer period is required by law',
        'Logs & analytics data: retained for up to 6 months',
        'After these periods, data is deleted or anonymized',
      ],
    },
    {
      title: '6. Data Sharing',
      paragraphs: [
        'We do not sell personal data.',
        'We may share data with service providers that support our operations, and all such parties are required to comply with applicable data protection laws.',
      ],
      items: [
        'Cloud hosting providers',
        'Analytics services',
        'Payment processors, if applicable',
        'Logistics or courier integrations used by the customer',
      ],
    },
    {
      title: '7. International Data Transfers',
      paragraphs: [
        'Your data may be processed in countries outside your jurisdiction.',
        'Where this occurs, we implement appropriate safeguards such as Standard Contractual Clauses.',
      ],
    },
    {
      title: '8. Data Security',
      paragraphs: ['We implement appropriate technical and organizational measures to protect personal data.'],
      items: [
        'Encryption in transit and at rest where applicable',
        'Access control and authentication',
        'Regular security monitoring',
        'No system can be guaranteed to be completely secure',
      ],
    },
    {
      title: '9. Your Rights (GDPR)',
      paragraphs: ['You may have the right to take the following actions regarding your personal data:'],
      items: [
        'Access your personal data',
        'Request correction or deletion',
        'Object to processing',
        'Request data portability',
        'To exercise your rights, contact us at fluxorme@gmail.com',
      ],
    },
    {
      title: '10. Children\'s Privacy',
      paragraphs: [
        'Our services are not intended for individuals under 18.',
        'We do not knowingly collect data from children.',
      ],
    },
    {
      title: '11. Changes to This Policy',
      paragraphs: [
        'We may update this Privacy Policy from time to time.',
        'Changes will be posted on this page with an updated date.',
      ],
    },
    {
      title: '12. Contact Us',
      paragraphs: [
        'If you have any questions, please contact us using the details below.',
        'Address: Shams Business Center, Media City Free Zone, Al Messaned, Sharjah UAE',
        'Phone: +971547963377',
        'Email: fluxorme@gmail.com',
      ],
    },
  ],
};

app.get('/api/site-info', (req, res) => {
  res.json(siteInfo);
});

app.get('/api/privacy-policy', (req, res) => {
  res.json(privacyPolicy);
});

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body ?? {};

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: 'Please complete the name, email, and message fields.',
    });
  }

  return res.status(201).json({
    success: true,
    message: 'Your message has been received. We will get back to you soon.',
    submittedAt: new Date().toISOString(),
  });
});

app.listen(PORT, () => {
  console.log(`Backend API is running at http://localhost:${PORT}.`);
});
