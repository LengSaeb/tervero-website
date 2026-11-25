// English is the default locale and the source of the content shape.
// zh.ts and de.ts must provide the same keys (enforced by the Dictionary type).

const en = {
  meta: {
    title: 'Tervero: your compliance and delivery team in Europe',
    description:
      'EU compliance, forward-deployed engineering and AI in production systems for companies from China.',
  },
  nav: {
    services: 'Services',
    engagement: 'How we engage',
    about: 'About',
    contact: 'Contact',
    menu: 'Menu',
    close: 'Close',
    skip: 'Skip to content',
    language: 'Language',
  },
  cta: {
    book: 'Book a 30-min call',
    contact: 'Get in touch',
    services: 'See how each service works',
    servicesShort: 'Our services',
    engagement: 'How we engage',
    more: 'Learn more',
  },
  home: {
    h1: 'Your compliance and delivery team in Europe.',
    caption: 'EU compliance · Forward-deployed engineering · AI in production',
    manifesto: 'We write the plan, and we carry it out.',
    problemTitle: 'The assessment is done. The product still can’t ship.',
    problemText: 'The gap is usually execution: technical files, labels and system changes that nobody owns. Our consultants and engineers work as one team, so the assessment turns straight into work.',
    engageCaption: 'How we engage',
    engageTitle: 'Three ways to work with us.',
    engageLead: 'Choose by stage. Scope and price are agreed in writing before work starts.',
    stepsCaption: 'Process',
    stepsTitle: 'How a project runs.',
    ctaTitle: 'Talk to our consultants.',
    ctaText: 'Tell us what you are planning in Europe. In a first 30-minute call we assess where you stand and suggest the next steps.',
  },
  services: {
    compliance: {
      title: 'EU compliance',
      tag: 'Rules, files and systems',
      short: 'We identify which EU rules apply to your products and handle what they require: documents, registrations, labels and system changes.',
      advise: ['Applicable rules and gap assessment', 'Compliance roadmap and priorities', 'Design of product and data compliance'],
      deliver: ['Technical files, declarations and labels', 'Registrations, filings and EU representatives', 'Requirements built into processes and systems'],
    },
    fde: {
      title: 'Forward-deployed engineering',
      tag: 'Our engineers, inside your team',
      short: 'Our engineers join your team for an agreed period and take responsibility for delivery: integration, EU deployment and handover.',
      advise: ['Technical approach and architecture review', 'Delivery plan and milestones'],
      deliver: ['Engineers who work inside your team', 'System integration and EU deployment', 'Working with your EU customers and partners', 'Handover, documentation and knowledge transfer'],
    },
    ai: {
      title: 'AI in production',
      tag: 'Into the systems you run',
      short: 'We integrate AI into the systems you already run, with monitoring, evaluation and the controls the EU AI Act requires.',
      advise: ['Use-case selection and feasibility', 'Architecture, data and AI Act design'],
      deliver: ['AI integrated into existing production systems', 'Assistants, document processing and automation in live workflows', 'Monitoring, evaluation and rollback in production'],
    },
  },
  servicesPage: {
    title: 'Services',
    lead: 'Three service lines, one way of working. First we advise and agree the plan and scope with you in writing. Then our consultants and engineers deliver it.',
    advise: 'Advise',
    deliver: 'Deliver',
  },
  engagement: {
    title: 'How we engage',
    lead: 'Three ways to work with us, depending on where you are. Every engagement starts with a 30-minute diagnosis, and scope and price are agreed in writing before work starts.',
    fitLabel: 'Suits',
    billingLabel: 'Billing',
    models: [
      { t: 'Project delivery', d: 'A fixed scope from diagnosis to go-live, delivered by our consultants and engineers.', fit: 'One clear goal, such as getting a product line compliant or a system into production.', billing: 'Fixed price per project' },
      { t: 'Embedded engineers', d: 'Our engineers join your team and share responsibility for delivery, for as long as you need them.', fit: 'Ongoing work in Europe that needs engineering capacity.', billing: 'Monthly, per engineer' },
      { t: 'Support after go-live', d: 'We keep systems, documents and processes up to date as rules and products change.', fit: 'Products and systems already on the EU market.', billing: 'Monthly retainer' },
    ],
  },
  steps: [
    { t: 'Diagnose', d: '30-minute call on goals and constraints' },
    { t: 'Plan', d: 'Scope, architecture and price, in writing' },
    { t: 'Deliver', d: 'Our consultants and engineers work with your team' },
    { t: 'Support', d: 'Handover, training and iteration' },
  ],
  about: {
    title: 'About Tervero',
    lead: 'Tervero (泰帆诺) is a compliance and engineering consultancy based in Germany, working with Chinese companies that sell or operate in the EU.',
    paras: [
      'We work in Chinese, English and German, so nothing gets lost between your headquarters and your partners or authorities in Europe.',
    ],
    factsTitle: 'At a glance',
    facts: [
      ['Company', 'Tervero UG (haftungsbeschränkt)'],
      ['Based in', 'Berlin, Germany'],
      ['Working languages', 'Chinese, English, German'],
      ['What we do', 'Consulting and delivery: compliance, engineering, AI'],
    ],
  },
  contact: {
    title: 'Contact',
    lead: 'Tell us what you are planning in Europe. We reply within two working days.',
    name: 'Name',
    company: 'Company',
    email: 'Email',
    product: 'Service you are interested in',
    markets: 'Target markets',
    message: 'What do you need?',
    send: 'Send',
    privacy: 'We only use your details to answer your request. See the privacy policy.',
    pending: 'The contact form will go live with our company email address. Until then, please reach us through the person who referred you.',
    bookTitle: 'Prefer a call?',
    bookText: 'Book a 30-minute call directly in our calendar.',
  },
  legal: {
    heading: 'Legal',
    impressum: 'Legal notice',
    privacy: 'Privacy policy',
    germanBinding: 'The German version of this page is legally binding.',
    draft: 'Draft. Company details will be completed after commercial register entry.',
  },
  footer: {
    tagline: 'Compliance and delivery for companies from China in Europe.',
  },
  notFound: { title: 'Page not found', text: 'This page does not exist.', home: 'Back to home' },
};

export default en;
export type Dictionary = typeof en;
