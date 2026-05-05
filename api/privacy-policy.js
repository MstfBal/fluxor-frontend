const privacyPolicy = {
  updatedAt: 'May 1, 2026',
  sections: [
    {
      title: '1. Introduction',
      paragraphs: [
        'Welcome to fluxor ("we", "our", or "us"), accessible at https://fluxor-me.com.',
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
      paragraphs: ['You have the following rights regarding your personal data:'],
      items: [
        'Access: request a copy of your data',
        'Rectification: correct inaccurate data',
        'Erasure: request deletion of your data',
        'Restriction: limit processing of your data',
        'Portability: receive your data in a portable format',
        'Objection: object to processing based on legitimate interests',
      ],
    },
    {
      title: '10. Cookies and Tracking',
      paragraphs: [
        'We may use cookies and similar technologies to enhance your experience.',
        'You can control cookie settings through your browser preferences.',
      ],
    },
    {
      title: '11. Changes to This Policy',
      paragraphs: [
        'We may update this privacy policy from time to time.',
        'We will notify users of significant changes via email or website notice.',
      ],
    },
    {
      title: '12. Contact Us',
      paragraphs: [
        'If you have questions about this privacy policy, please contact us at:',
        'Email: fluxorme@gmail.com',
        'Phone: +971547963377',
        'Address: Shams Business Center, Media City Free Zone, Al Messaned, Sharjah UAE',
      ],
    },
  ],
};

export default function handler(req, res) {
  res.status(200).json(privacyPolicy);
}