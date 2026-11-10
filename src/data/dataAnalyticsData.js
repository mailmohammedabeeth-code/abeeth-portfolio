// Central Data Configuration for the Dedicated Data Analytics Portfolio Page
// All content is modular and editable for easy updates.

export const dataAnalyticsHero = {
  title: "DATA ANALYTICS",
  subtitle: "Transforming Raw Data into Meaningful Business Insights.",
  name: "Mohammed Abeeth H",
  role: "Data Analyst | Software Engineer",
  location: "Tamil Nadu, India",
  tagline: "Bridging analytical rigor, statistical modeling, and executive dashboard storytelling to solve complex business problems.",
  resumePdfPath: "/documents/abeeth-data-analyst-resume.pdf",
  metrics: [
    { label: "Core Analytics Stack", value: "Excel • SQL • Power BI • Tableau" },
    { label: "Querying & Modeling", value: "PostgreSQL & Relational Schemas" },
    { label: "Statistical Tools", value: "Pandas • NumPy • Matplotlib" },
    { label: "Focus Industry", value: "Market Research & Retail Insights" }
  ]
};

export const dataAnalyticsJourney = {
  heading: "My Data Analytics Journey",
  subheading: "From Raw Data to High-Impact Decision Support",
  narrative: [
    "My journey into data analytics began with a simple curiosity: how can raw numbers tell compelling stories that guide million-dollar business decisions? As a Computer Science and Engineering student at Sethu Institute of Technology (Class of 2026), I combined computational rigor with practical business intelligence tools.",
    "Through hands-on internships at Aatzy Technologies and Sputnik Info Tech, I moved beyond academic theory into the realities of messy data. I learned that data rarely arrives clean—it requires systematic wrangling, missing-value imputation, deduplication, and schema validation before any meaningful visualization can happen.",
    "Today, my workflow covers the full analytical lifecycle: collecting structured and unstructured data, architecting optimized SQL queries, running exploratory data analysis (EDA) with Python, and designing high-density executive dashboards in Microsoft Excel, Power BI, and Tableau."
  ],
  timeline: [
    {
      step: "01",
      period: "2024 – 2025",
      phase: "PHASE 01 // FOUNDATION",
      title: "Data Collection & Cleaning",
      description: "Extracting raw records from databases, CSVs, and APIs; handling null values, outlier remediation, and schema formatting.",
      icon: "Database"
    },
    {
      step: "02",
      period: "2025",
      phase: "PHASE 02 // MODELING",
      title: "Data Transformation & Modeling",
      description: "Structuring relational star/snowflake schemas, building Power Query M transformations, and engineering custom calculated columns.",
      icon: "GitBranch"
    },
    {
      step: "03",
      period: "2025 – 2026",
      phase: "PHASE 03 // STATISTICAL EDA",
      title: "Exploratory Data Analysis (EDA)",
      description: "Computing statistical summaries, correlation matrices, standard deviations, and quartile distributions to uncover latent trends.",
      icon: "Search"
    },
    {
      step: "04",
      period: "2026",
      phase: "PHASE 04 // BI STORYTELLING",
      title: "Dashboard & Visual Storytelling",
      description: "Crafting intuitive executive KPI dashboards with dynamic slicers, drill-down hierarchies, and clean typography in Excel, Power BI, and Tableau.",
      icon: "BarChart3"
    },
    {
      step: "05",
      period: "2026 & Beyond",
      phase: "PHASE 05 // STRATEGIC VALUE",
      title: "Data-Driven Decision Making",
      description: "Translating complex analytical findings into clear, actionable recommendations for stakeholders and management.",
      icon: "TrendingUp"
    }
  ],
  workflowPillars: [
    {
      step: "01",
      title: "Data Collection & Cleaning",
      description: "Extracting raw records from databases, CSVs, and APIs; handling null values, outlier remediation, and schema formatting.",
      icon: "Database"
    },
    {
      step: "02",
      title: "Data Transformation & Modeling",
      description: "Structuring relational star/snowflake schemas, building Power Query M transformations, and engineering custom calculated columns.",
      icon: "GitBranch"
    },
    {
      step: "03",
      title: "Exploratory Data Analysis (EDA)",
      description: "Computing statistical summaries, correlation matrices, standard deviations, and quartile distributions to uncover latent trends.",
      icon: "Search"
    },
    {
      step: "04",
      title: "Dashboard & Visual Storytelling",
      description: "Crafting intuitive executive KPI dashboards with dynamic slicers, drill-down hierarchies, and clean typography in Excel, Power BI, and Tableau.",
      icon: "BarChart3"
    },
    {
      step: "05",
      title: "Data-Driven Decision Making",
      description: "Translating complex analytical findings into clear, actionable recommendations for stakeholders and management.",
      icon: "TrendingUp"
    }
  ]
};

export const technicalSkillsData = [
  {
    id: "excel",
    name: "Microsoft Excel",
    categoryGroup: "bi",
    category: "Spreadsheet & BI",
    description: "Data cleaning, formulas and reporting.",
    icon: "FileSpreadsheet"
  },
  {
    id: "sql",
    name: "SQL",
    categoryGroup: "db",
    category: "Database & Querying",
    description: "Database queries and data management.",
    icon: "Database"
  },
  {
    id: "postgresql",
    name: "PostgreSQL",
    categoryGroup: "db",
    category: "Relational Database",
    description: "Relational database management and optimization.",
    icon: "Database"
  },
  {
    id: "powerbi",
    name: "Power BI",
    categoryGroup: "bi",
    category: "Business Intelligence",
    description: "Interactive dashboards and business reporting.",
    icon: "BarChart3"
  },
  {
    id: "tableau",
    name: "Tableau",
    categoryGroup: "bi",
    category: "Data Visualization",
    description: "Data visualization and storytelling.",
    icon: "LayoutGrid"
  },
  {
    id: "python",
    name: "Python (Pandas / NumPy)",
    categoryGroup: "python",
    category: "Data Science & Code",
    description: "Data analysis and automation using Pandas and NumPy.",
    icon: "Code2"
  },
  {
    id: "scraping",
    name: "Data Scraping",
    categoryGroup: "python",
    category: "ETL & Harvesting",
    description: "Automated data collection.",
    icon: "Search"
  },
  {
    id: "statistical-analysis",
    name: "Statistical Analysis",
    categoryGroup: "analysis",
    category: "Quantitative Analytics",
    description: "Identify patterns and trends.",
    icon: "TrendingUp"
  },
  {
    id: "dashboard-design",
    name: "Dashboard Design",
    categoryGroup: "bi",
    category: "Visual Reporting",
    description: "Present KPIs and business insights.",
    icon: "LayoutGrid"
  },
  {
    id: "jupyter",
    name: "Jupyter Notebook",
    categoryGroup: "python",
    category: "Interactive Environment",
    description: "Interactive Python analysis.",
    icon: "Terminal"
  },
  {
    id: "git",
    name: "Git & GitHub",
    categoryGroup: "analysis",
    category: "Version Control",
    description: "Version control and project management.",
    icon: "GitBranch"
  }
];

export const dataAnalyticsProjects = [
  {
    id: "project-veg-sales",
    title: "Tamil Nadu Vegetable Sales Analytics Dashboard",
    category: "Market Research & Pricing Analytics",
    period: "January – February 2026",
    status: "Completed",
    featured: true,
    tools: ["Microsoft Excel", "Pivot Tables", "Pivot Charts", "Slicers", "KPI Cards", "Conditional Formatting"],
    technologies: ["Microsoft Excel", "Pivot Tables", "Pivot Charts", "Slicers", "KPI Cards", "Conditional Formatting"],
    description: "An end-to-end retail and wholesale vegetable pricing dashboard analyzing sales volumes, wholesale market rates, and price volatility across major agricultural markets in Tamil Nadu.",
    businessProblem: "Local agricultural vendors and wholesale buyers face unpredictable seasonal price fluctuations and regional price disparities across Tamil Nadu districts, making inventory planning and profit margin forecasting difficult.",
    problemStatement: "Local agricultural vendors and wholesale buyers face unpredictable seasonal price fluctuations and regional price disparities across Tamil Nadu districts, making inventory planning and profit margin forecasting difficult.",
    keyInsights: [
      "Identified 3 high-volatility produce categories with greater than 28% week-over-week price variance during harvest transitions.",
      "Built dynamic KPI cards tracking Average Price/KG, Volume Index, and Week-on-Week margin differentials.",
      "Implemented synchronized multi-slicer filtering by District (Madurai, Coimbatore, Chennai, Trichy), Market Category, and Price Range.",
      "Empowered stakeholders with rapid visual drill-downs to determine the most cost-effective sourcing regions."
    ],
    keyFeatures: [
      "Identified 3 high-volatility produce categories with greater than 28% week-over-week price variance during harvest transitions.",
      "Built dynamic KPI cards tracking Average Price/KG, Volume Index, and Week-on-Week margin differentials.",
      "Implemented synchronized multi-slicer filtering by District (Madurai, Coimbatore, Chennai, Trichy), Market Category, and Price Range.",
      "Empowered stakeholders with rapid visual drill-downs to determine the most cost-effective sourcing regions."
    ],
    github: "https://github.com/mailmohammedabeeth-code",
    demo: "#",
    metrics: [
      { label: "Markets Analyzed", value: "12+ Districts" },
      { label: "Commodities Tracked", value: "35+ Produce Types" },
      { label: "Reporting Platform", value: "Excel Executive BI" }
    ]
  },
  {
    id: "project-ecommerce-analytics",
    title: "E-Commerce Sales & Customer Analytics Dashboard",
    category: "Customer Lifetime Value & Sales Funnel",
    period: "Ongoing (2026)",
    status: "In Development",
    featured: true,
    tools: ["Python", "SQL", "Power BI", "Tableau", "Microsoft Excel", "PostgreSQL"],
    technologies: ["Python", "SQL", "Power BI", "Tableau", "Microsoft Excel", "PostgreSQL"],
    description: "An ongoing end-to-end analytics solution developing data pipelines, customer segmentation, RFM analysis, and executive dashboards across multi-channel sales records.",
    businessProblem: "E-commerce retailers struggle to unify transaction logs, return rates, and customer acquisition channels into a single actionable source of truth for marketing optimization and inventory stocking.",
    problemStatement: "E-commerce retailers struggle to unify transaction logs, return rates, and customer acquisition channels into a single actionable source of truth for marketing optimization and inventory stocking.",
    keyInsights: [
      "Designed PostgreSQL normalized schema and SQL queries to ingest raw transaction, product catalog, and customer records.",
      "Conducted exploratory data analysis (EDA) using Python (Pandas/NumPy) to identify customer churn triggers and repurchase cycles.",
      "Architecting interactive Power BI and Tableau dashboards tracking Monthly Recurring Revenue (MRR), Customer Lifetime Value (CLV), and Category Margin."
    ],
    keyFeatures: [
      "Designed PostgreSQL normalized schema and SQL queries to ingest raw transaction, product catalog, and customer records.",
      "Conducted exploratory data analysis (EDA) using Python (Pandas/NumPy) to identify customer churn triggers and repurchase cycles.",
      "Architecting interactive Power BI and Tableau dashboards tracking Monthly Recurring Revenue (MRR), Customer Lifetime Value (CLV), and Category Margin."
    ],
    github: "https://github.com/mailmohammedabeeth-code",
    demo: "#",
    metrics: [
      { label: "Dataset Scale", value: "100k+ Transactions" },
      { label: "Architecture", value: "PostgreSQL + BI" },
      { label: "Status", value: "Active Pipeline" }
    ]
  }
];

export const certificationsGallery = [
  {
    id: "cert-novitech-powerbi",
    title: "21 Days MasterClass in PowerBI",
    issuer: "NoviTech R&D Private Limited",
    date: "September 24th – October 22nd, 2026",
    year: "2026",
    credentialId: "BT_B8PBICT135",
    type: "verified-pdf",
    category: "Business Intelligence",
    badge: "Official Certificate",
    pdfUrl: "/certificates/novitech-powerbi-masterclass.pdf",
    highlights: "Comprehensive 21-day immersive training covering Power Query M transformation, DAX expressions, star-schema data modeling, and executive report design.",
    isUploaded: true
  },
  {
    id: "cert-simplilearn-excel",
    title: "Introduction to MS Excel",
    issuer: "Simplilearn SkillUp (Powered by Microsoft)",
    date: "June 28th, 2026",
    year: "2026",
    credentialId: "10402528",
    type: "verified-pdf",
    category: "Spreadsheet Analytics",
    badge: "Microsoft Partner",
    pdfUrl: "/certificates/simplilearn-ms-excel.pdf",
    highlights: "Authorized Microsoft SkillUp completion verifying mastery of Excel formulas, functions, pivot tables, data cleaning, and spreadsheet analysis.",
    isUploaded: true
  },
  {
    id: "cert-simplilearn-sql",
    title: "Introduction to SQL",
    issuer: "Simplilearn SkillUp",
    date: "June 30th, 2026",
    year: "2026",
    credentialId: "10411559",
    type: "verified-pdf",
    category: "Database & Querying",
    badge: "SkillUp Verified",
    pdfUrl: "/certificates/simplilearn-sql.pdf",
    highlights: "Relational database querying, multi-table joins, aggregations, schema manipulation, and SQL data filtering.",
    isUploaded: true
  },
  {
    id: "cert-nptel-cloud",
    title: "Cloud Computing (12-Week Course)",
    issuer: "NPTEL (IIT Kharagpur / Swayam / MoE)",
    date: "Jul–Oct 2025",
    year: "2025",
    credentialId: "NPTEL25CS107S362300937",
    type: "verified-pdf",
    category: "Cloud Architecture",
    badge: "IIT Kharagpur Verified",
    score: "55% (Assignments: 25/25, Proctored Exam: 30/75)",
    pdfUrl: "/certificates/nptel-cloud-computing.pdf",
    highlights: "12-week intensive course funded by the Ministry of Education, Govt. of India covering cloud virtualization, distributed systems, and storage architectures.",
    isUploaded: true
  },
  {
    id: "cert-udemy-bootcamp",
    title: "Data Analyst Bootcamp",
    issuer: "Udemy",
    date: "2026",
    year: "2026",
    credentialId: "UDEMY-DA-2026",
    type: "placeholder",
    category: "End-to-End Analytics",
    badge: "Curriculum Complete",
    pdfUrl: null,
    highlights: "Practical hands-on training spanning SQL, Excel, Tableau, statistical analysis, and business storytelling.",
    isUploaded: false
  },
  {
    id: "cert-nptel-hci",
    title: "Human Computer Interaction",
    issuer: "NPTEL (IIT Guwahati / Swayam / MoE)",
    date: "Jul–Oct 2025",
    year: "2025",
    credentialId: "NPTEL25CS122S249300582",
    type: "verified-pdf",
    category: "UI/UX & User Cognition",
    badge: "NPTEL / IIT Verified",
    pdfUrl: "/certificates/nptel-human-computer-interaction.pdf",
    highlights: "User-centered design principles, usability testing heuristics, visual ergonomics, and cognitive interaction modeling.",
    isUploaded: true
  },
  {
    id: "cert-simplilearn-python-beginners",
    title: "Python for Beginners",
    issuer: "Simplilearn SkillUp",
    date: "October 9th, 2026",
    year: "2026",
    credentialId: "10861093",
    type: "verified-pdf",
    category: "Programming & Analytics",
    badge: "SkillUp Verified",
    pdfUrl: "/certificates/data-analytics-certification-01.pdf",
    highlights: "Mastery of Python programming fundamentals, syntax, control flow, functions, and data structures essential for data analysis and automation pipelines.",
    isUploaded: true
  },
  {
    id: "cert-simplilearn-intro-data-analytics",
    title: "Introduction to Data Analytics",
    issuer: "Simplilearn SkillUp",
    date: "June 30th, 2026",
    year: "2026",
    credentialId: "10411990",
    type: "verified-pdf",
    category: "Data Analytics Foundation",
    badge: "SkillUp Verified",
    pdfUrl: "/certificates/data-analytics-certification-02.pdf",
    highlights: "Comprehensive grounding in data analytics methodologies, exploratory data exploration, statistical analysis, data interpretation, and business decision workflows.",
    isUploaded: true
  },
  {
    id: "cert-simplilearn-intro-tableau",
    title: "Introduction to Tableau",
    issuer: "Simplilearn SkillUp",
    date: "October 16th, 2026",
    year: "2026",
    credentialId: "10898581",
    type: "verified-pdf",
    category: "Visual Analytics & BI",
    badge: "SkillUp Verified",
    pdfUrl: "/certificates/data-analytics-certification-03.pdf",
    highlights: "Hands-on data visualization, interactive BI dashboard architecture, calculated fields, filters, and multi-dimensional visual storytelling in Tableau.",
    isUploaded: true
  }
];

export const dataAnalyticsToolkit = [
  {
    name: "Microsoft Excel",
    category: "Spreadsheet & Business Intelligence",
    description: "Formulas (XLOOKUP, INDEX/MATCH), Pivot Tables, Slicers, KPI Cards, Conditional Formatting.",
    color: "from-emerald-600 to-green-500",
    badge: "Primary Tool",
    icon: "FileSpreadsheet"
  },
  {
    name: "Power BI",
    category: "Spreadsheet & Business Intelligence",
    description: "Power Query ETL, Star Schema Modeling, DAX Measures, Slicers, Interactive Executive Reports.",
    color: "from-amber-600 to-yellow-500",
    badge: "BI Modeling",
    icon: "BarChart3"
  },
  {
    name: "SQL & PostgreSQL",
    category: "Databases & Querying",
    description: "Joins, CTEs, Window Functions, Aggregate Queries, Relational Schema Normalization.",
    color: "from-blue-600 to-cyan-500",
    badge: "Database Core",
    icon: "Database"
  },
  {
    name: "MySQL",
    category: "Databases & Querying",
    description: "Relational schema design, normalization (1NF-3NF), multi-table join optimization, and database auditing.",
    color: "from-blue-700 to-indigo-600",
    badge: "Relational DB",
    icon: "Database"
  },
  {
    name: "Python (Pandas / NumPy)",
    category: "Programming & Data Analysis",
    description: "DataFrames, statistical aggregations, missing value handling, Matplotlib visualizations.",
    color: "from-cyan-600 to-blue-500",
    badge: "Code Stack",
    icon: "Code2"
  },
  {
    name: "Data Scraping & Extraction",
    category: "Programming & Data Analysis",
    description: "Automated web data extraction, structured data harvesting, request pipelines, and cleaning for analytics.",
    color: "from-teal-600 to-emerald-500",
    badge: "Pipeline ETL",
    icon: "Layers"
  },
  {
    name: "Tableau",
    category: "Data Visualization",
    description: "Charts & Graphs, Calculated Fields, Dashboard Actions, Dual-Axis Visualizations.",
    color: "from-indigo-600 to-blue-500",
    badge: "Visual BI",
    icon: "LayoutGrid"
  },
  {
    name: "Dashboard Design",
    category: "Data Visualization",
    description: "Executive metric hierarchy, dynamic KPI cards, user-centered layouts, and interactive visual reporting.",
    color: "from-rose-600 to-red-500",
    badge: "Visual BI",
    icon: "LayoutGrid"
  },
  {
    name: "Statistical Analysis",
    category: "Statistical Analysis",
    description: "Summary metrics, variance evaluation, correlation patterns, and trend discovery for data-driven decisions.",
    color: "from-red-600 to-amber-500",
    badge: "Analytical Rigor",
    icon: "TrendingUp"
  },
  {
    name: "Jupyter & VS Code",
    category: "Development Environment",
    description: "Interactive data exploration, reproducible notebooks, version-controlled analysis.",
    color: "from-slate-700 to-slate-800",
    badge: "Dev Suite",
    icon: "Terminal"
  },
  {
    name: "Git & GitHub",
    category: "Development Environment",
    description: "Version control, repository management, collaborative branching, and reproducible analytical pipelines.",
    color: "from-orange-600 to-red-600",
    badge: "Version Control",
    icon: "GitBranch"
  }
];

export const dataAnalyticsExperience = [
  {
    id: "exp-aatzy",
    role: "Junior Data Analyst Intern",
    company: "Aatzy Technology",
    period: "December 2025 – May 2026",
    location: "Remote / Hybrid, India",
    type: "Internship",
    badge: "Active Engagement",
    description: "Actively contributed to data collection, market research, competitive intelligence, and business intelligence reporting workflows.",
    responsibilities: [
      "Conducted web scraping and structured data collection from diverse digital sources to feed internal analytics pipelines.",
      "Performed in-depth competitor analysis to identify market trends, pricing strategies, and content gaps.",
      "Carried out comprehensive SEO keyword research and search-intent clustering to optimize web visibility.",
      "Authored targeted web content research and technical write-ups supporting product positioning.",
      "Queried, cleaned, and organized relational records using PostgreSQL and advanced Microsoft Excel spreadsheets.",
      "Acquired hands-on exposure to Power BI and Tableau for designing interactive metric dashboards and reporting cards."
    ],
    tools: ["PostgreSQL", "Excel", "Power BI", "Tableau", "Web Scraping", "Python", "SQL"],
    technologies: ["PostgreSQL", "Excel", "Power BI", "Tableau", "Web Scraping", "Python", "SQL"]
  },
  {
    id: "exp-sputnik",
    role: "MySQL Intern",
    company: "Sputnik Info Tech",
    period: "2025",
    location: "Tamil Nadu, India",
    type: "Internship",
    badge: "Database Engineering",
    description: "Focused on relational database design, query optimization, and data hygiene audits using MySQL.",
    responsibilities: [
      "Designed and normalized relational database schemas (1NF, 2NF, 3NF) for enterprise application workflows.",
      "Constructed and optimized complex SQL queries involving multi-table joins (INNER, LEFT, RIGHT), subqueries, and grouping aggregations.",
      "Performed data validation, duplicate removal, and integrity checks across high-volume transaction datasets.",
      "Collaborated with senior engineers on database backup routines, indexing strategies, and query performance tuning."
    ],
    tools: ["MySQL", "SQL", "Relational Modeling", "Database Administration", "Data Validation"],
    technologies: ["MySQL", "SQL", "Relational Modeling", "Database Administration", "Data Validation"]
  }
];

