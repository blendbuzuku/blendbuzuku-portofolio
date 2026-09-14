export const portfolio = {
  name: "Blend Buzuku",
  role: "Software Engineer | Backend & Full-Stack Development",
  location: "Kosovo",
  email: "blend.buzuku@outlook.com",
  phone: { display: "+383 48 113 344", href: "tel:+38348113344" },
  github: "https://github.com/blendbuzuku",
  linkedin: "https://www.linkedin.com/in/blend-buzuku",

  /** Put a PDF at public/Blend_Buzuku_CV.pdf and the download button appears. */
  cvPath: "/Blend_Buzuku_CV.pdf",

  tagline: "I build reliable software across the backend, frontend and database.",

  summary:
    "In 4+ years I've worked on ERP, business intelligence, point-of-sale and banking systems. I adapt quickly to new domains and tools, and I'm comfortable owning a feature from the database all the way to the screen.",

  /** The first things someone checking a candidate looks for. */
  facts: [
    { label: "Experience", value: "4+ years" },
    { label: "Works across", value: "Backend · Frontend · Data" },
    { label: "Domains", value: "ERP · BI · POS · Banking" },
    { label: "Main stack", value: ".NET · Java · React · Angular" },
    { label: "Location", value: "Kosovo" },
  ],

  skills: [
    {
      group: "Backend",
      items: [".NET 8", "C#", "ASP.NET Core", "Java 21", "Spring Boot", "REST APIs"],
    },
    {
      group: "Frontend",
      items: ["React", "Angular", "TypeScript", "WPF", "Windows Forms"],
    },
    {
      group: "Data",
      items: ["SQL Server", "PostgreSQL", "MongoDB", "Entity Framework"],
    },
    {
      group: "Security",
      items: ["JWT authentication", "Role-based access", "Audit logging"],
    },
    {
      group: "Domains",
      items: ["ERP", "Business intelligence", "Point of sale", "Payments & banking", "ISO 20022 · SWIFT · SEPA"],
    },
  ],

  /** New to me and learned hands-on, so it sits apart from the skills above. */
  learning: {
    topic: "Cloud deployment",
    intro:
      "This is new to me, so I'm learning it hands-on with my own projects — the goal is to deploy BankFlow and this portfolio myself.",
    items: [
      { name: "Docker", detail: "Packaging each BankFlow service into a container image." },
      { name: "Docker Compose", detail: "Starting the services and both databases together with one command." },
      { name: "CI/CD", detail: "Building and deploying automatically on every push to GitHub." },
      { name: "Cloud hosting", detail: "Running the apps and a managed database in the cloud, with HTTPS and secrets kept out of the code." },
      { name: "Kubernetes", detail: "The basics: pods, deployments, services and scaling." },
    ],
  },

  experience: [
    {
      role: "Software Developer",
      company: "Best Vision Solutions & Services L.L.C.",
      period: "May 2026 — Present",
      current: true,
      points: [
        "Developing ISO 20022-compliant payment system components.",
        "Developing and enhancing RTGS, ACH and TIPS Instant Payment functionality.",
        "Supporting testing and validation of payment processing workflows.",
        "Collaborating with cross-functional teams on payment modernization initiatives.",
      ],
    },
    {
      role: "Software Developer · Product Specialist",
      company: "ASEE by Asseco",
      period: "Nov 2024 — May 2026",
      current: false,
      points: [
        "Developed a real-time TIPS payment monitoring system for Kosovo's instant payments, forwarding transactions within the mandatory 10-second window and generating ISO 20022 pacs.002, pacs.004 and pacs.009 messages.",
        "Designed, developed and maintained banking applications including retail management, national payment systems, e-banking, mobile banking and card management.",
        "Optimized SQL queries and database procedures to reduce transaction times and improve throughput.",
        "Deployed integrated solutions across IIS-hosted APIs, Windows services and desktop applications for automated financial operations.",
        "Implemented audit logging for regulatory compliance and provided production support and root cause analysis.",
      ],
    },
    {
      role: "Software Developer",
      company: "KuBIT Solutions",
      period: "Oct 2022 — Nov 2024",
      current: false,
      points: [
        "Developed ERP, BI and POS solutions.",
        "Built APIs and reporting systems.",
        "Improved system performance and database efficiency.",
      ],
    },
  ],
};
