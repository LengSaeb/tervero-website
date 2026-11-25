// English is the default locale and the source of the content shape.
// zh.ts and de.ts must provide the same keys (enforced by the Dictionary type).

const en = {
  meta: {
    title: 'Tervero: engineering, AI and EU compliance for companies entering Europe',
    description:
      'For companies from China entering the EU: forward-deployed engineering, AI deployed into production systems, and compliance from advice to delivery.',
  },
  nav: {
    services: 'Services',
    check: 'Products',
    insights: 'Insights',
    about: 'About',
    contact: 'Contact',
    menu: 'Menu',
    close: 'Close',
    skip: 'Skip to content',
    language: 'Language',
  },
  cta: {
    book: 'Book a 30-min diagnosis',
    check: 'Free EPR self-check',
    contact: 'Get in touch',
    services: 'See all services',
    servicesShort: 'Our services',
  },
  home: {
    h1: 'Land in Europe. Stay compliant.',
    lead: 'For companies from China entering the EU: from knowing which rules apply to systems that actually run.',
    servicesTitle: 'Three service lines',
    servicesLead: 'One team that understands both the regulations and the code.',
    stepsTitle: 'How we work',
    timelineTitle: 'Key EU dates',
    timelineNote: 'Simplified. Always check the Official Journal of the EU for the binding dates.',
    ctaTitle: 'Talk to us before you ship',
    ctaText: 'A 30-minute call is enough to see which rules apply to your product and what to do first.',
  },
  services: {
    compliance: {
      title: 'Compliance, advice to delivery',
      short: 'Find the rules that apply, then actually finish the registrations, files and labels.',
      items: ['CE, GPSR, EPR registrations', 'Technical files and labelling', 'EU responsible person and authorised representative', 'Digital Product Passport readiness'],
    },
    fde: {
      title: 'Forward-deployed engineering (FDE)',
      short: 'We embed our engineers in your team and own the delivery, until it runs in your product and systems.',
      items: ['Product data and DPP integration', 'GDPR-ready data flows and EU hosting', 'Security updates and SBOM for the Cyber Resilience Act', 'Working directly with your EU customers and partners'],
    },
    ai: {
      title: 'AI transformation',
      short: 'We deploy AI capabilities and applications into your production systems, built to run reliably and to EU rules.',
      items: ['AI integrated into existing production systems', 'Assistants, document processing and automation in live workflows', 'Monitoring, evaluation and rollback for AI in production', 'EU data residency and AI Act compliance'],
    },
    ongoing: {
      title: 'Ongoing compliance',
      short: 'Rules keep changing. We watch the dates and tell you what to do, early.',
      items: ['Regulatory monitoring for your product categories', 'Annual review of registrations and reports', 'Updates to files, labels and listings'],
    },
  },
  servicesPage: {
    title: 'Services',
    lead: 'Compliance, engineering and AI from one team. Scope and price are agreed in writing before work starts.',
  },
  steps: [
    { t: 'Assess', d: '30-minute diagnosis call' },
    { t: 'Scope', d: 'Fixed price, agreed in writing' },
    { t: 'Deliver', d: 'Engineers and advisors who deliver hands-on' },
    { t: 'Stay compliant', d: 'Monitoring and annual review' },
  ],
  timeline: [
    { date: '2024-12-13', text: 'GPSR applies' },
    { date: '2026-08-12', text: 'PPWR (packaging) applies' },
    { date: '2026-09-11', text: 'CRA vulnerability reporting obligations' },
    { date: '2027-02-18', text: 'Battery passport required' },
    { date: '2027-12-11', text: 'CRA applies in full' },
  ],
  tools: {
    title: 'Products',
    lead: 'Small, free tools for a first orientation. They run in your browser; nothing is sent to us.',
    nextTitle: 'Coming next',
    next: ['Digital Product Passport readiness check', 'EU rules finder by product category'],
  },
  check: {
    title: 'EPR self-check for Germany',
    lead: 'Switch on what applies to you. The result shows which German registers you need, before your first sale.',
    questions: ['I sell to customers in Germany', 'My goods ship with packaging', 'My product contains electrical or electronic parts', 'My product contains or comes with batteries', 'My company has no establishment in Germany'],
    resultTitle: 'You need to register:',
    results: {
      packaging: 'Packaging: LUCID register at the Zentrale Stelle Verpackungsregister (ZSVR), plus a contract with a dual system',
      weee: 'Electrical equipment: registration with stiftung ear (ElektroG)',
      battery: 'Batteries: registration with stiftung ear (BattDG)',
      ar: 'For electrical equipment and batteries: appoint an authorised representative in Germany',
      none: 'Based on your answers, no German EPR registration is needed yet.',
    },
    disclaimer: 'This check is a first orientation, not legal advice. Thresholds, exemptions and other EU countries are covered in the diagnosis.',
    moreTitle: 'Need other countries or product rules?',
    moreText: 'France, the Netherlands and other markets have their own EPR schemes. We check them in the diagnosis.',
  },
  insights: {
    title: 'Insights',
    lead: 'The EU rules that matter most for physical and connected products, in one place.',
    regsTitle: 'Twelve rules to know',
    regs: [
      { code: 'CE', name: 'CE marking', desc: 'Declares conformity with the EU product legislation that applies to your product.' },
      { code: 'GPSR', name: 'General Product Safety Regulation (EU) 2023/988', desc: 'Safety duties for consumer products, including an EU responsible person and traceability.' },
      { code: 'EPR', name: 'Extended producer responsibility', desc: 'National registers and take-back duties for packaging, electrical equipment and batteries.' },
      { code: 'WEEE', name: 'Waste electrical equipment, Directive 2012/19/EU', desc: 'Registration, labelling and take-back for electrical and electronic equipment.' },
      { code: 'RoHS', name: 'Hazardous substances, Directive 2011/65/EU', desc: 'Limits on lead, mercury, cadmium and other substances in electronics.' },
      { code: 'REACH', name: 'Chemicals, Regulation (EC) 1907/2006', desc: 'Registration and restriction of chemical substances, including in articles.' },
      { code: 'BATT', name: 'Battery Regulation (EU) 2023/1542', desc: 'Carbon footprint, due diligence, labelling and the battery passport.' },
      { code: 'DPP', name: 'Digital Product Passport, ESPR (EU) 2024/1781', desc: 'Machine-readable product data, rolled out category by category.' },
      { code: 'CRA', name: 'Cyber Resilience Act (EU) 2024/2847', desc: 'Security requirements and vulnerability handling for products with digital elements.' },
      { code: 'AI Act', name: 'Artificial Intelligence Act (EU) 2024/1689', desc: 'Risk-based rules for AI systems and general-purpose AI models.' },
      { code: 'PPWR', name: 'Packaging Regulation (EU) 2025/40', desc: 'Recyclability, labelling and minimisation rules for all packaging.' },
      { code: 'GDPR', name: 'General Data Protection Regulation (EU) 2016/679', desc: 'Rules for processing personal data, including transfers outside the EU.' },
    ],
  },
  about: {
    title: 'About Tervero',
    lead: 'Tervero (泰帆诺) is a German company that helps companies from China launch and operate in the European market.',
    paras: [
      'We combine regulatory know-how with hands-on engineering. Instead of handing over a report, we stay until the registrations are done, the product data flows, and the tools are running.',
      'We work in Chinese, English and German, so your team in China and your partners and authorities in Europe hear the same story.',
    ],
    factsTitle: 'At a glance',
    facts: [
      ['Company', 'Tervero UG (haftungsbeschränkt)'],
      ['Based in', 'Berlin, Germany'],
      ['Working languages', 'Chinese, English, German'],
      ['Focus', 'EU compliance, engineering, production AI'],
    ],
  },
  contact: {
    title: 'Contact',
    lead: 'Tell us about your product and target markets. We reply within two working days.',
    name: 'Name',
    company: 'Company',
    email: 'Email',
    product: 'Product category',
    markets: 'Target markets',
    message: 'What do you need?',
    send: 'Send',
    privacy: 'We only use your details to answer your request. See the privacy policy.',
    pending: 'The contact form goes live together with our company email address. Until then, please reach out through the person who shared this site with you.',
    bookTitle: 'Prefer a call?',
    bookText: 'Book a 30-minute diagnosis directly in our calendar.',
  },
  legal: {
    impressum: 'Legal notice',
    privacy: 'Privacy policy',
    germanBinding: 'The German version of this page is legally binding.',
    draft: 'Draft. Company details will be completed after commercial register entry.',
  },
  footer: {
    tagline: 'Engineering, AI and EU compliance for companies entering Europe.',
  },
  notFound: { title: 'Page not found', text: 'This page does not exist.', home: 'Back to home' },
};

export default en;
export type Dictionary = typeof en;
