const siteInfo = {
  brand: 'fluxor',
  legalName: 'fluxor',
  website: 'https://fluxor-me.com',
  supportEmail: 'fluxorme@gmail.com',
  supportPhone: '+971547963377',
  address: 'Shams Business Center, Media City Free Zone, Al Messaned, Sharjah UAE',
  pages: ['Home', 'About', 'Privacy Policy', 'Contact'],
};

export default function handler(req, res) {
  res.status(200).json(siteInfo);
}