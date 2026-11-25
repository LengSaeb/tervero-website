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
    manifesto: 'We write the plan and carry it out.',
    problemTitle: 'We also do the work that follows the assessment.',
    problemText: 'After a compliance assessment, technical files, labels and system changes still have to be done. Our consultants and engineers do this work as one team, through to market launch.',
    engageCaption: 'How we engage',
    engageTitle: 'Three ways to work with us.',
    engageLead: 'We work on a project basis. Scope, milestones and price are agreed in writing before work starts.',
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
      title: 'Forward-deployed engineering (FDE)',
      tag: 'Engineers embedded in your team',
      short: 'Our forward-deployed engineers embed in your team and build, integrate and ship systems inside your existing setup, until your team can run them on its own.',
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
    lead: 'Each service has two parts. First we advise and agree the plan and scope with you in writing. Then our consultants and engineers carry it out.',
    advise: 'Advise',
    deliver: 'Deliver',
  },
  engagement: {
    title: 'How we engage',
    lead: 'We work on a project basis. Every project starts with a 30-minute diagnosis, and scope, milestones and price are agreed in writing before work starts. There are three ways to work with us, depending on where you are.',
    fitLabel: 'Suits',
    billingLabel: 'Billing',
    models: [
      { t: 'Project delivery', d: 'A fixed scope from diagnosis to go-live, delivered by our consultants and engineers.', fit: 'One clear goal, such as getting a product line compliant or a system into production.', billing: 'Fixed price per project' },
      { t: 'FDE project', d: 'Our forward-deployed engineers embed in your team, deliver against agreed goals and milestones, and hand the system and know-how over to your team.', fit: 'Engineering work that has to be built, integrated or deployed inside your existing systems.', billing: 'Priced per project phase' },
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
      'We work in Chinese, English and German and talk directly with your headquarters, your partners in Europe and the authorities.',
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
