export const cities = ["Alger", "Oran", "Constantine", "Blida", "Sétif"] as const;

export const deals = [
  {
    id: "d5",
    title: "Wilaya expansion",
    company: "Kasbah Commerce",
    amount: 1890000,
    close: "9 Nov",
    inactivity: "Meta lead 14m ago",
    scheduled: true,
    priority: "High" as const,
    owner: "Yacine",
    stage: "New",
  },
  {
    id: "d6",
    title: "School canteen",
    company: "Lycée Emir Abdelkader",
    amount: 420000,
    close: "21 Oct",
    inactivity: "No activity for 2 days",
    scheduled: false,
    priority: "Low" as const,
    owner: "Lina",
    stage: "New",
  },
  {
    id: "d3",
    title: "Distributor rollout",
    company: "Atlas Parts",
    amount: 2150000,
    close: "4 Nov",
    inactivity: "No activity 3 days",
    scheduled: false,
    priority: "Low" as const,
    owner: "Karim",
    stage: "Qualified",
  },
  {
    id: "d7",
    title: "Spare parts desk",
    company: "Ouest Auto",
    amount: 1320000,
    close: "28 Oct",
    inactivity: "Email opened 1h ago",
    scheduled: true,
    priority: "High" as const,
    owner: "Amine",
    stage: "Qualified",
  },
  {
    id: "d1",
    title: "Fleet onboarding",
    company: "Sahra Logistics",
    amount: 4280000,
    close: "12 Oct",
    inactivity: "Last WhatsApp 2h ago",
    scheduled: true,
    priority: "High" as const,
    owner: "Amine",
    stage: "Proposal",
  },
  {
    id: "d4",
    title: "Agency retainer",
    company: "Tell Agency",
    amount: 740000,
    close: "22 Oct",
    inactivity: "Email opened 1h ago",
    scheduled: true,
    priority: "High" as const,
    owner: "Lina",
    stage: "Proposal",
  },
  {
    id: "d2",
    title: "Clinic WhatsApp desk",
    company: "Nour Clinique",
    amount: 960000,
    close: "18 Oct",
    inactivity: "Call logged today",
    scheduled: true,
    priority: "High" as const,
    owner: "Sara",
    stage: "Negotiation",
  },
  {
    id: "d8",
    title: "Warehouse WABA",
    company: "Port d'Alger",
    amount: 3100000,
    close: "2 Nov",
    inactivity: "WhatsApp unread 40m",
    scheduled: false,
    priority: "High" as const,
    owner: "Nadia",
    stage: "Negotiation",
  },
];

export const stages = [
  { id: "New", weight: 0.1 },
  { id: "Qualified", weight: 0.3 },
  { id: "Proposal", weight: 0.55 },
  { id: "Negotiation", weight: 0.8 },
  { id: "Won", weight: 1 },
] as const;

export const stats = [
  { value: "DZD", label: "Native currency" },
  { value: "0 DA", label: "Per extra seat" },
  { value: "WABA", label: "Official WhatsApp" },
  { value: "58", label: "Wilayas first-class" },
] as const;

export const modules = [
  {
    id: "crm",
    kicker: "CRM",
    title: "Pipeline that sellers actually live in",
    body: "Contacts, companies, deals, and leads in one chrome. List or board. Saved views. Path on the lead, convert into a deal.",
    points: ["Guided home, not widget soup", "Deals board with inactivity + weighted totals", "3-pane records with Ask Evo always on"],
  },
  {
    id: "desk",
    kicker: "Desk",
    title: "WhatsApp on the record, not on a phone",
    body: "Official WhatsApp Cloud for the whole team. Shared history. The thread sits where Slack used to live — next to the deal.",
    points: ["One number, many sellers", "Desk preview on every record", "Wilaya-aware quiet hours"],
  },
  {
    id: "outbound",
    kicker: "Outbound",
    title: "Sequences on mail you own",
    body: "SMTP + warmup + vertical step editor. Automated email, call tasks, meetings, and WhatsApp templates. No rented inbox.",
    points: ["Warmup status on the sequence", "A/B subjects, delays, enroll from a view", "Africa/Algiers send windows"],
  },
  {
    id: "ads",
    kicker: "Ads",
    title: "Meta leads land already qualified",
    body: "Ad attribution on the lead. Funnel from click to closed-won in DZD. No extra marketing cloud to rent.",
    points: ["Campaign on the lead record", "CPL and stage conversion", "Segment → audience without a sidecar"],
  },
] as const;

export const showcase = [
  {
    id: "pipeline",
    title: "Pipeline",
    body: "Board with inactivity, priority, and weighted DA totals. The view sellers refuse to leave.",
  },
  {
    id: "record",
    title: "Record",
    body: "Three panes. Highlights, WhatsApp, and Ask Evo on the same contact — not a sidecar.",
  },
  {
    id: "desk",
    title: "Desk",
    body: "Official WhatsApp Cloud for the team. The thread lives on the deal, not on a phone.",
  },
] as const;

export const comparisonRows = [
  { label: "Official WhatsApp Cloud", evo: "Native on the record", other: "App, sidecar, or unofficial" },
  { label: "Currency & timezone", evo: "DZD, wilaya, Africa/Algiers", other: "USD default, you translate" },
  { label: "Seat tax", evo: "Team-priced. No per-seat meter", other: "Per seat, forever" },
  { label: "Outbound mail", evo: "Owned SMTP + warmup", other: "Their mailbox, their rules" },
  { label: "Lead Path + convert", evo: "Path on leads, deals as pipeline", other: "One or the other, not both" },
  { label: "Ask Evo context", evo: "Record + WhatsApp + ads + outbound", other: "Notes the model can see" },
  { label: "Self-host", evo: "Your server, your data", other: "Their cloud, their lock-in" },
  { label: "Buyer", evo: "5–20 seat DZ sales team", other: "Enterprise seat expansion" },
] as const;

export const quotes = [
  {
    quote:
      "We stopped forwarding WhatsApp screenshots in the group. The deal, the thread, and the next step are the same screen.",
    name: "Amine K.",
    role: "Sales lead",
    company: "Sahra Logistics · Alger",
  },
  {
    quote:
      "Quotes come back in DA, quiet hours respect Algiers, and I am not paying for empty seats every time we hire a closer.",
    name: "Sara B.",
    role: "Founder",
    company: "Nour Clinique · Blida",
  },
  {
    quote:
      "Path on the lead, board on the deal. Convert is one action. Our distributors in Oran finally stopped asking which tool is source of truth.",
    name: "Karim M.",
    role: "Head of sales",
    company: "Atlas Parts · Oran",
  },
  {
    quote:
      "Meta leads used to die in a spreadsheet. Now they arrive with the campaign, a WhatsApp opener, and a stage.",
    name: "Lina H.",
    role: "Growth",
    company: "Tell Agency · Alger",
  },
  {
    quote:
      "Sequences on our own domain, warmup visible, WhatsApp template as a step. That is the outbound we actually run.",
    name: "Yacine T.",
    role: "Operator",
    company: "Kasbah Commerce · Constantine",
  },
  {
    quote:
      "Ask Evo cites the last WhatsApp and the last unpaid invoice. Two sentences. Then I call.",
    name: "Nadia R.",
    role: "Account executive",
    company: "Wilaya Retail · Sétif",
  },
] as const;

export const plans = [
  {
    id: "studio",
    name: "Studio",
    price: "49 000",
    cadence: "DA / month",
    blurb: "For a founder and a closer. CRM + Desk, DZD from day one.",
    cta: "Book a walkthrough",
    featured: false,
    features: [
      "5 seats included",
      "Contacts, companies, deals, leads",
      "WhatsApp Cloud desk",
      "Ask Evo on every record",
      "Africa/Algiers reporting",
    ],
  },
  {
    id: "team",
    name: "Team",
    price: "99 000",
    cadence: "DA / month",
    blurb: "The 5–20 seat sales OS. Outbound and ads hang off the same contact.",
    cta: "Book a demo",
    featured: true,
    features: [
      "20 seats included — no per-seat tax",
      "Everything in Studio",
      "Owned SMTP, warmup, sequences",
      "Meta ads funnel + attribution",
      "Board inactivity includes WhatsApp",
    ],
  },
  {
    id: "company",
    name: "Company",
    price: "Custom",
    cadence: "self-host or SLA",
    blurb: "Your infrastructure. Migration, training, and a named operator.",
    cta: "Talk to us",
    featured: false,
    features: [
      "Self-host on your VPS",
      "White-glove migration",
      "Custom pipelines & wilaya fields",
      "Priority desk + WhatsApp limits",
      "On-site or remote training",
    ],
  },
] as const;

export const faqs = [
  {
    q: "Is this another HubSpot clone?",
    a: "No. Chrome is familiar on purpose so sellers are not retrained. The moat is official WhatsApp Cloud, owned mail, Meta ads on the lead, DZD / wilaya / Algiers time, and team pricing instead of a seat meter.",
  },
  {
    q: "Do you use unofficial WhatsApp?",
    a: "No. EvoCRM speaks official WhatsApp Cloud through Evolution. Shared history for the team, templates as sequence steps, and the thread on the record — not a browser plugin.",
  },
  {
    q: "Why DZD and wilaya as first-class?",
    a: "Algeria-first teams lose hours translating USD CRMs. Amounts are tabular DA, filters start with wilaya, and reporting is Africa/Algiers. That is the default, not a locale pack.",
  },
  {
    q: "Can we self-host?",
    a: "Yes on Company. Your Postgres, your files, your WhatsApp WABA. Studio and Team are operated by Evotechly if you want to start faster.",
  },
  {
    q: "What is Ask Evo?",
    a: "A persistent rail on the record. It reads fields, the last activities, the WhatsApp snippet, outbound status, and ad attribution. Two short sentences, grounded in this record — not a chat toy.",
  },
  {
    q: "Who is this for?",
    a: "5–20 seat sales teams in Algeria and the region who already sell on WhatsApp and Meta. Clinics, distributors, agencies, logistics. Not a Fortune-500 AppExchange.",
  },
] as const;

export const nav = [
  { href: "#product", label: "Product" },
  { href: "#modules", label: "Modules" },
  { href: "#compare", label: "Compare" },
  { href: "#pricing", label: "Pricing" },
] as const;
