import type { Dictionary } from './en';

const de: Dictionary = {
  meta: {
    title: 'Tervero: EU-Compliance und Umsetzung für chinesische Unternehmen',
    description:
      'EU-Compliance, Forward-Deployed Engineering und KI im Produktivbetrieb für Unternehmen aus China.',
  },
  nav: {
    services: 'Leistungen',
    engagement: 'Zusammenarbeit',
    about: 'Über uns',
    contact: 'Kontakt',
    menu: 'Menü',
    close: 'Schließen',
    skip: 'Zum Inhalt springen',
    language: 'Sprache',
  },
  cta: {
    book: '30-Minuten-Gespräch buchen',
    contact: 'Kontakt aufnehmen',
    services: 'So läuft jede Leistung ab',
    servicesShort: 'Unsere Leistungen',
    engagement: 'Zusammenarbeit',
    more: 'Mehr erfahren',
  },
  home: {
    h1: 'Ihr Team für Compliance und Umsetzung in Europa.',
    caption: 'EU-Compliance · Forward-Deployed Engineering · KI im Produktivbetrieb',
    manifesto: 'Wir erstellen den Plan und setzen ihn um.',
    problemTitle: 'Von der Compliance bis zur Umsetzung: ein Team für alles.',
    problemText: 'Regelprüfung, technische Unterlagen, Kennzeichnung, Systemänderungen und Markteinführung: Unsere Berater und Ingenieure erledigen alles in einem Team.',
    engageCaption: 'Zusammenarbeit',
    engageTitle: 'Drei Formen der Zusammenarbeit.',
    engageLead: 'Wir arbeiten projektbasiert. Umfang, Meilensteine und Preis vereinbaren wir vor Beginn schriftlich.',
    stepsCaption: 'Ablauf',
    stepsTitle: 'So läuft ein Projekt ab.',
    ctaTitle: 'Sprechen Sie mit unseren Beratern.',
    ctaText: 'Erzählen Sie uns von Ihren Plänen in Europa. In einem ersten 30-minütigen Gespräch ordnen wir Ihre Lage ein und schlagen die nächsten Schritte vor.',
  },
  services: {
    compliance: {
      title: 'EU-Compliance',
      tag: 'Regeln, Unterlagen, Systeme',
      short: 'Wir klären, welche EU-Vorschriften für Ihre Produkte gelten, und erledigen, was sie verlangen: Unterlagen, Registrierungen, Kennzeichnung und Systemanpassungen.',
      advise: ['Anwendbare Regeln und Gap-Analyse', 'Compliance-Roadmap und Prioritäten', 'Konzept für Produkt- und Daten-Compliance'],
      deliver: ['Technische Unterlagen, Konformitätserklärungen und Kennzeichnung', 'Registrierungen, Meldungen und EU-Vertreter', 'Anforderungen in Prozesse und Systeme eingebaut'],
    },
    fde: {
      title: 'Forward-Deployed Engineering (FDE)',
      tag: 'Ingenieure eingebettet in Ihr Team',
      short: 'Unsere Forward-Deployed Engineers arbeiten eingebettet in Ihrem Team und entwickeln, integrieren und betreiben Systeme in Ihrer bestehenden Infrastruktur, bis Ihr Team sie selbst übernehmen kann.',
      advise: ['Technisches Konzept und Architektur-Review', 'Projektplan und Meilensteine'],
      deliver: ['Ingenieure, die in Ihrem Team mitarbeiten', 'Systemintegration und Betrieb in der EU', 'Zusammenarbeit mit Ihren Kunden und Partnern in Europa', 'Übergabe, Dokumentation und Wissenstransfer'],
    },
    ai: {
      title: 'KI im Produktivbetrieb',
      tag: 'In Ihre laufenden Systeme',
      short: 'Wir integrieren KI in Ihre bestehenden Produktivsysteme, mit Monitoring, Evaluierung und den Kontrollen, die der AI Act verlangt.',
      advise: ['Auswahl der Anwendungsfälle und Machbarkeit', 'Architektur, Daten und AI-Act-Konzept'],
      deliver: ['KI in bestehende Produktivsysteme integriert', 'Assistenten, Dokumentenverarbeitung und Automatisierung im laufenden Betrieb', 'Monitoring, Evaluierung und Rollback im Produktivbetrieb'],
    },
  },
  servicesPage: {
    title: 'Leistungen',
    lead: 'Jede Leistung hat zwei Teile: Zuerst beraten wir Sie und legen Plan und Umfang schriftlich fest. Dann setzen unsere Berater und Ingenieure ihn um.',
    advise: 'Beratung',
    deliver: 'Umsetzung',
  },
  engagement: {
    title: 'Zusammenarbeit',
    lead: 'Wir arbeiten projektbasiert. Jedes Projekt beginnt mit einer 30-minütigen Analyse; Umfang, Meilensteine und Preis werden vor Projektstart schriftlich vereinbart. Je nachdem, wo Sie stehen, gibt es drei Formen der Zusammenarbeit.',
    fitLabel: 'Geeignet für',
    billingLabel: 'Abrechnung',
    models: [
      { t: 'Projektumsetzung', d: 'Fester Umfang von der Analyse bis zur Inbetriebnahme, umgesetzt von unseren Beratern und Ingenieuren.', fit: 'Ein klares Ziel, etwa eine Produktlinie konform machen oder ein System in Betrieb nehmen.', billing: 'Festpreis pro Projekt' },
      { t: 'FDE-Projekt', d: 'Unsere Forward-Deployed Engineers arbeiten eingebettet in Ihrem Team, liefern nach vereinbarten Zielen und Meilensteinen und übergeben System und Wissen an Ihr Team.', fit: 'Engineering-Arbeit, die in Ihren bestehenden Systemen entwickelt, integriert oder ausgerollt werden muss.', billing: 'Preis pro Projektphase' },
      { t: 'Betreuung nach der Inbetriebnahme', d: 'Wir halten Systeme, Unterlagen und Prozesse aktuell, wenn sich Regeln und Produkte ändern.', fit: 'Produkte und Systeme, die in der EU bereits auf dem Markt oder in Betrieb sind.', billing: 'Monatliche Pauschale' },
    ],
  },
  work: {
    caption: 'Referenzen',
    title: 'Partner und Projekte.',
    lead: 'Partner, mit denen wir arbeiten, und Projekte, an denen wir beteiligt waren.',
    items: [
      { name: 'Novawerk', kind: 'Partner · KI im Betrieb', d: 'Eine offene Non-Profit-Community. Wir haben die KI-Agenten aufgebaut, die den Arbeitsalltag erledigen: E-Mails entwerfen, Meetings vorbereiten, das Aufgabenboard pflegen. Nach außen geht nichts ohne Freigabe eines Mitglieds.', url: 'https://novawerk.io', logo: '/logos/novawerk.svg' },
      { name: 'Aaden POS', kind: 'Projekt · KI im Betrieb', d: 'Kassensystem für Handel und Gastronomie in Europa. Wir haben im laufenden Betrieb von Aaden mehrere KI-Agenten eingesetzt und so Betriebs- und Automatisierungskosten gesenkt.', url: 'https://aaden-pos.com', logo: '/logos/aaden.png' },
      { name: 'Lengsaeb Booking', kind: 'Eigenes Produkt · Compliance und KI', d: 'Tickets, Kasse und Kundenbindung für Freizeitanlagen wie Trampolinparks und Kletterhallen, konform mit den deutschen Kassenvorgaben (TSE, DSFinV-K). Wir entwickeln dafür einen KI-Telefonassistenten, der Anrufe annimmt, Fragen beantwortet und direkt bucht.', url: 'https://site.lengsaeb.com', logo: '/logos/lengsaeb.svg' },
    ],
  },
  steps: [
    { t: 'Analyse', d: '30-Minuten-Gespräch zu Zielen und Rahmen' },
    { t: 'Konzept', d: 'Umfang, Architektur und Preis, schriftlich' },
    { t: 'Umsetzung', d: 'Unsere Berater und Ingenieure arbeiten mit Ihrem Team' },
    { t: 'Betreuung', d: 'Übergabe, Schulung und Weiterentwicklung' },
  ],
  about: {
    title: 'Über Tervero',
    lead: 'Tervero (泰帆诺) ist eine Compliance- und Engineering-Beratung mit Sitz in Deutschland für chinesische Unternehmen, die in der EU verkaufen oder tätig sind.',
    paras: [
      'Wir arbeiten auf Chinesisch, Englisch und Deutsch und sprechen direkt mit Ihrer Zentrale, Ihren Partnern in Europa und den Behörden.',
    ],
    factsTitle: 'Auf einen Blick',
    facts: [
      ['Unternehmen', 'Tervero UG (haftungsbeschränkt)'],
      ['Sitz', 'Berlin, Deutschland'],
      ['Arbeitssprachen', 'Chinesisch, Englisch, Deutsch'],
      ['Leistungen', 'Beratung und Umsetzung: Compliance, Engineering, KI'],
    ],
  },
  contact: {
    title: 'Kontakt',
    lead: 'Beschreiben Sie kurz Ihr Produkt und Ihre Zielmärkte. Wir antworten innerhalb von zwei Werktagen.',
    name: 'Name',
    company: 'Unternehmen',
    email: 'E-Mail',
    product: 'Gewünschte Leistung',
    markets: 'Zielmärkte',
    message: 'Wobei können wir helfen?',
    send: 'Senden',
    privacy: 'Wir verwenden Ihre Angaben nur zur Beantwortung Ihrer Anfrage. Siehe Datenschutzerklärung.',
    pending: 'Das Kontaktformular wird zusammen mit unserer Firmen-E-Mail freigeschaltet. Bis dahin erreichen Sie uns über die Person, die Ihnen diese Seite empfohlen hat.',
    bookTitle: 'Lieber telefonieren?',
    bookText: 'Buchen Sie ein 30-minütiges Gespräch direkt in unserem Kalender.',
  },
  legal: {
    heading: 'Rechtliches',
    impressum: 'Impressum',
    privacy: 'Datenschutz',
    germanBinding: 'Die deutsche Fassung dieser Seite ist verbindlich.',
    draft: 'Entwurf. Die Unternehmensangaben werden nach der Eintragung ins Handelsregister ergänzt.',
  },
  footer: {
    tagline: 'Compliance, Engineering und KI für chinesische Unternehmen mit Geschäft in der EU.',
  },
  notFound: { title: 'Seite nicht gefunden', text: 'Diese Seite existiert nicht.', home: 'Zur Startseite' },
};

export default de;
