/*
 * Where BankFlow can be opened, set on the host (or in .env.local) — see
 * .env.example.
 *
 * NEXT_PUBLIC_BANKFLOW_URL is the running app: the project's title and its
 * "Open live demo" button point there. The source button links to the public
 * repository; NEXT_PUBLIC_BANKFLOW_SOURCE_URL overrides it if the code moves.
 */
export const BANKFLOW_LIVE_URL = process.env.NEXT_PUBLIC_BANKFLOW_URL?.trim() || null;
export const BANKFLOW_SOURCE_URL =
  process.env.NEXT_PUBLIC_BANKFLOW_SOURCE_URL?.trim() || "https://github.com/blendbuzuku/bankflow";

export const bankflow = {
  title: "BankFlow",
  description:
    "A core-banking application I built in my own time: a retail bank that sends and receives payments through Kosovo's national payment system (KIPS), simulated end to end. Customers, tellers, operations staff and administrators each get their own screens.",
  stack: [
    "Java 21",
    "Spring Boot 4",
    "Spring Security",
    "JPA / Hibernate",
    "Flyway",
    "PostgreSQL",
    "MongoDB",
    "Angular",
    "TypeScript",
    "ISO 20022 XML",
  ],

  /** How the pieces fit, drawn left to right: the front end, the services, where data lives. */
  architecture: {
    client: { name: "Angular", detail: "One front end, screens by role" },
    services: [
      { name: "auth-service", detail: "Sign-in, issues JWTs" },
      { name: "account-service", detail: "Clients, accounts, balances" },
      { name: "transaction-service", detail: "Payments, ledger, messaging, end of day" },
    ],
    stores: [
      { name: "PostgreSQL", detail: "Accounts and the ledger" },
      { name: "MongoDB", detail: "Archive of every ISO 20022 message" },
    ],
  },

  /** What happens inside, one concern each. */
  internals: [
    {
      title: "ISO 20022 messaging",
      body: "Builds and parses the XML behind every payment, status report, return, recall and statement, and validates each message against KIPS's official XSD schemas — going out and coming in.",
      tags: ["pacs.008", "pacs.002", "pacs.004", "camt.056", "camt.029", "camt.053"],
    },
    {
      title: "Double-entry ledger",
      body: "Every movement posts as balanced debit and credit legs with an audit trail. Money in flight waits in suspense accounts until the scheme settles or rejects it, so nothing is ever half-moved.",
    },
    {
      title: "Payment routing",
      body: "Routes each payment as on-us, outbound or inbound across KIPS's ACH and RTGS schemes, applying each scheme's rules and the bank's fee tariffs. A built-in console plays the other banks, so accepts, rejects, returns and recalls can all be run end to end.",
    },
    {
      title: "Consistency",
      body: "Account rows are locked with PESSIMISTIC_WRITE while a payment posts, so two payments at once can't spend the same balance. Money is BigDecimal throughout, and 29 Flyway migrations own the schema, with Hibernate only validating it.",
    },
    {
      title: "Security and controls",
      body: "Stateless JWT authentication with role-based access, and the services call each other with their own service token. Payments above a per-currency limit wait for a second person, and whoever made a payment can never approve it.",
    },
    {
      title: "End of day",
      body: "The day closes on the bank's business calendar, not the server clock. It refuses to close unless the trial balance nets to zero in every currency, and a closed day can't take new postings.",
    },
  ],

  screenshots: [
    {
      src: "/projects/bankflow/customer-dashboard.jpg",
      label: "Customer view",
      caption: "What a customer sees: their accounts, balances and recent activity.",
      alt: "BankFlow customer dashboard with accounts and recent activity",
    },
    {
      src: "/projects/bankflow/four-eyes-approval.jpg",
      label: "Approvals",
      caption: "Large payments wait for a second person to approve them before any money moves.",
      alt: "Approving a 12,000 EUR payment raised by another user",
    },
    {
      src: "/projects/bankflow/iso20022-message.jpg",
      label: "Payment messages",
      caption: "Each payment's ISO 20022 message, shown in readable form next to the raw XML.",
      alt: "A pacs.008 payment message shown in readable form",
    },
    {
      src: "/projects/bankflow/kips-console.jpg",
      label: "Test console",
      caption: "A console that plays the other banks, so every flow can be tested end to end.",
      alt: "The console answering payments on behalf of other banks",
    },
    {
      src: "/projects/bankflow/end-of-day.jpg",
      label: "End of day",
      caption: "Closing the day, only after the ledger is proved to balance and reconcile.",
      alt: "Confirming the close of the business day with its figures",
    },
  ],
};

/** Work projects, each with the company it was built at. */
export const projects = [
  {
    title: "TIPS Payment Monitoring System",
    company: "ASEE by Asseco",
    description:
      "Real-time payment monitoring platform for TIPS transactions, processing and forwarding payments within the mandatory 10-second window.",
    tech: [".NET 8", "SQL Server", "ISO 20022"],
  },
  {
    title: "Email Dispatcher API",
    company: "ASEE by Asseco",
    description:
      "High-throughput email orchestration system processing over 500 emails per minute with 99.98% reliability.",
    tech: [".NET 8", "MailKit", "SQL Server", "TPL Dataflow"],
  },
  {
    title: "File Intake API",
    company: "ASEE by Asseco",
    description:
      "Secure REST API allowing merchants to submit banking files with JWT authentication and audit logging.",
    tech: ["ASP.NET Core", "EF Core", "SQL Server", "JWT"],
  },
  {
    title: "Swift Watcher",
    company: "ASEE by Asseco",
    description:
      "Windows Service that monitors SWIFT acknowledgements, generates reports, and dispatches emails automatically.",
    tech: ["Windows Service", "WPF", "SQL Server"],
  },
  {
    title: "Swift Client Register",
    company: "ASEE by Asseco",
    description:
      "Banking client management desktop application with RBAC, fee management, reporting, and audit logging.",
    tech: [".NET Framework", "Windows Forms", "SQL Server"],
  },
  {
    title: "Business Intelligence Platform",
    company: "KuBIT Solutions",
    description:
      "Full-stack analytics solution delivering business insights through dashboards and reporting.",
    tech: ["React", "ASP.NET Core", "SQL Server"],
  },
];
