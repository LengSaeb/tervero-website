// English is the default locale and the source of the content shape.
// zh.ts and de.ts must provide the same keys (enforced by the Dictionary type).

const en = {
  meta: {
    title: 'Tervero: senior compliance consultants, based in Europe',
    description:
      'EU compliance, forward-deployed engineering and AI in production systems, from advice to delivery.',
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
    h1: 'Senior compliance consultants, based in Europe.',
    lead: 'We advise companies from China entering the EU, then put the advice into their products, processes and systems. EU compliance, forward-deployed engineering and AI transformation, from one team.',
    live: 'Live',
    statementTitle: 'Advice sets the direction. Delivery produces the result.',
    statement: [
      'Much consulting stops at a report. Our consultants and engineers work in one team, so the people who make the plan also deliver it, until the system is live and the process runs.',
      'We are based in Europe and know its regulators, channels and partners. We work in Chinese, English and German, so your team in China and your partners here hear the same story.',
    ],
    engageTitle: 'Three ways to work with us',
    engageLead: 'Choose by stage. Scope and price are agreed in writing before work starts.',
    stepsTitle: 'How a project runs',
    ctaTitle: 'Talk to our consultants',
    ctaText: 'Tell us what you want to get done in Europe. In 30 minutes we will tell you what to do first and how we can help.',
  },
  services: {
    compliance: {
      title: 'EU compliance, advice to delivery',
      tag: 'Rules, files and systems',
      short: 'Find out which EU rules apply to your products and business, then get the requirements done.',
      advise: ['Applicable rules and gap assessment', 'Compliance roadmap and priorities', 'Design of product and data compliance'],
      deliver: ['Technical files, declarations and labels', 'Registrations, filings and EU representatives', 'Requirements built into processes and systems'],
    },
    fde: {
      title: 'Forward-deployed engineering (FDE)',
      tag: 'Our people, your delivery',
      short: 'We embed our engineers in your team and own the delivery, until it runs in your product and systems.',
      advise: ['Technical approach and architecture review', 'Delivery plan and milestones'],
      deliver: ['Engineers who join your team and ship with it', 'System integration and EU deployment', 'Working with your EU customers and partners', 'Handover, documentation and knowledge transfer'],
    },
    ai: {
      title: 'AI transformation',
      tag: 'Into production systems',
      short: 'We deploy AI capabilities and applications into your production systems, built to run reliably and to EU rules.',
      advise: ['Use-case selection and feasibility', 'Architecture, data and AI Act design'],
      deliver: ['AI integrated into existing production systems', 'Assistants, document processing and automation in live workflows', 'Monitoring, evaluation and rollback in production'],
    },
  },
  servicesPage: {
    title: 'Services',
    lead: 'Three service lines, one way of working. First we advise and agree the plan and scope with you. Then our people deliver it.',
    advise: 'Advise',
    deliver: 'Deliver',
  },
  engagement: {
    title: 'How we engage',
    lead: 'Three ways to work with us, depending on where you are. Every engagement starts with a 30-minute diagnosis, and scope and price are agreed in writing before work starts.',
    fitLabel: 'Suits',
    billingLabel: 'Billing',
    models: [
      { t: 'Project delivery', d: 'A fixed scope from diagnosis to go-live, delivered by our consultants and engineers.', fit: 'One clear goal, such as getting a product line compliant or a system live.', billing: 'Fixed price per project' },
      { t: 'FDE engineers', d: 'Our engineers join your team and own the delivery with you, for as long as you need them.', fit: 'Ongoing work in Europe that needs hands, not only advice.', billing: 'Monthly, per engineer' },
      { t: 'Support after go-live', d: 'We keep systems, documents and processes up to date as rules and products change.', fit: 'Products and systems already live in the EU.', billing: 'Monthly retainer' },
    ],
  },
  steps: [
    { t: 'Diagnose', d: '30-minute call on goals and constraints' },
    { t: 'Plan', d: 'Scope, architecture and price, in writing' },
    { t: 'Deliver', d: 'Our people work with yours until it is live' },
    { t: 'Support', d: 'Handover, training and iteration' },
  ],
  about: {
    title: 'About Tervero',
    lead: 'Tervero (泰帆诺) is a senior compliance consultancy based in Europe. We help companies from China enter the EU, from advice to delivery.',
    paras: [
      'Many projects stop at a report. We work differently: the people who make the plan also deliver it, until the system is live and the process runs.',
      'We work in Chinese, English and German, so your team in China and your partners in Europe hear the same story.',
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
    lead: 'Tell us what you want to get done in Europe. We reply within two working days.',
    name: 'Name',
    company: 'Company',
    email: 'Email',
    product: 'Service you are interested in',
    markets: 'Target markets',
    message: 'What do you need?',
    send: 'Send',
    privacy: 'We only use your details to answer your request. See the privacy policy.',
    pending: 'The contact form goes live together with our company email address. Until then, please reach out through the person who shared this site with you.',
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
    tagline: 'Consulting and delivery for companies from China in Europe.',
  },
  notFound: { title: 'Page not found', text: 'This page does not exist.', home: 'Back to home' },
};

export default en;
export type Dictionary = typeof en;
