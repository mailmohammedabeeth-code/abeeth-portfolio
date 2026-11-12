export const personalInfo = {
  name: "Mohammed Abeeth H",
  role: "Aspiring Software Engineer",
  quote: "I transform raw data into meaningful insights and build practical solutions using technology.",
  email: "mail.mohammedabeeth@gmail.com",
  phone: "+91-9080081060",
  whatsappNumber: "919080081060",
  whatsappUrl: "https://wa.me/919080081060?text=Hello%20Abeeth%21%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect%20with%20you%20regarding%20a%20professional%20opportunity.",
  profileImage: "/images/image(9).png",
  location: "Tamil Nadu, India",
  college: "Sethu Institute of Technology",
  degree: "B.E. Computer Science and Engineering",
  graduationYear: "2026",
  linkedin: "https://www.linkedin.com/in/mohammed-abeeth/",
  github: "https://github.com/mailmohammedabeeth-code",
  resumePdfUrl: "/Mohammed_Abeeth_H_Resume.pdf",
  availableForHire: true,
  typingRoles: [
    "Aspiring Software Engineer"
  ],
  stats: [
    { label: "Completed Projects", value: "5+", description: "From DL to Dashboards" },
    { label: "Intern Experience", value: "6 Mos", description: "At Aatzy Technology" },
    { label: "Tech Stack Tools", value: "15+", description: "Python, SQL, BI & ML" },
    { label: "Engineering Grad", value: "2026", description: "B.E. Computer Science" }
  ]
};

export const aboutData = {
  summary: [
    "I am a Computer Science and Engineering student at Sethu Institute of Technology (Class of 2026) with a dedicated focus on Data Analytics and Python Development.",
    "My expertise spans end-to-end data workflows: scraping and pipeline ingestion, data cleaning, exploratory data analysis (EDA), database management with SQL & PostgreSQL, and building intuitive interactive dashboards using Microsoft Excel, Power BI, and Tableau.",
    "In addition to analytics, I build full-stack web utilities and APIs with Python and Flask, and explore applied deep learning architectures such as Faster R-CNN. I am deeply passionate about turning raw, messy datasets into clean actionable intelligence that drives real-world decisions."
  ],
  highlights: [
    {
      title: "Data Analytics & Storytelling",
      description: "Proficient in crafting KPI dashboards, pivot tables, statistical aggregations, and business intelligence reports.",
      icon: "BarChart3"
    },
    {
      title: "Python Development & APIs",
      description: "Building robust REST APIs, ETL scripts, and data processing pipelines using Python, Flask, and PostgreSQL.",
      icon: "Code2"
    },
    {
      title: "Data Wrangling & Exploration",
      description: "Hands-on experience with Pandas, NumPy, and SQL for sanitizing, joining, and transforming complex datasets.",
      icon: "Database"
    },
    {
      title: "Machine Learning & Problem Solving",
      description: "Implemented object detection architectures (Faster R-CNN with ResNet-50) and spatial data visualizers.",
      icon: "Cpu"
    }
  ]
};

export const skillsData = [
  {
    category: "Data Analytics",
    icon: "LineChart",
    description: "Core tools for data extraction, manipulation, modeling, and executive reporting.",
    skills: [
      { name: "Microsoft Excel", level: 88, highlight: "Pivot Tables, Slicers, KPI Cards, Advanced Formulas" },
      { name: "SQL", level: 85, highlight: "Complex Queries, Joins, Aggregations, Subqueries" },
      { name: "Power BI", level: 82, highlight: "Interactive Reports, DAX basics, Data Modeling" },
      { name: "Tableau", level: 78, highlight: "Visual Storytelling, Calculated Fields, Dashboards" }
    ]
  },
  {
    category: "Programming",
    icon: "Terminal",
    description: "Foundational programming languages used for development and logic implementation.",
    skills: [
      { name: "Python", level: 88, highlight: "Data structures, OOP, Automation, Scripting" },
      { name: "C", level: 75, highlight: "Core algorithms, memory basics, procedural logic" },
      { name: "HTML", level: 85, highlight: "Semantic markup, modern web layouts, accessibility" },
      { name: "CSS", level: 80, highlight: "Responsive design, Flexbox, Grid, Tailwind CSS" }
    ]
  },
  {
    category: "Python Libraries",
    icon: "Layers",
    description: "Specialized analytical and computational libraries for data science pipelines.",
    skills: [
      { name: "Pandas", level: 86, highlight: "DataFrames, data cleaning, aggregation, reshaping" },
      { name: "NumPy", level: 84, highlight: "Array operations, vectorization, linear algebra" },
      { name: "Matplotlib", level: 80, highlight: "Custom visual plots, distribution charts, heatmaps" }
    ]
  },
  {
    category: "Other Technologies",
    icon: "Wrench",
    description: "Databases, frameworks, version control, and collaborative development tools.",
    skills: [
      { name: "PostgreSQL", level: 82, highlight: "Relational modeling, indexing, schema design" },
      { name: "Flask", level: 80, highlight: "RESTful endpoints, backend routing, API integration" },
      { name: "Git", level: 85, highlight: "Version control, branching, repository management" },
      { name: "Jupyter Notebook", level: 88, highlight: "Exploratory analysis, prototyping, reproducible code" }
    ]
  }
];

export const experienceData = [
  {
    role: "Junior Data Analyst Intern",
    company: "Aatzy Technology",
    period: "December 2025 – May 2026",
    location: "Remote / Hybrid, India",
    type: "Internship",
    description: "Actively contributed to data collection, competitive intelligence, and business intelligence reporting workflows.",
    responsibilities: [
      "Conducted web scraping and structured data collection from diverse digital sources to feed internal analytics pipelines.",
      "Performed in-depth competitor analysis to identify market trends, pricing strategies, and content gaps.",
      "Carried out comprehensive SEO keyword research and search-intent clustering to optimize web visibility.",
      "Authored targeted web content research and technical write-ups supporting product positioning.",
      "Queried, cleaned, and organized relational records using PostgreSQL and advanced Microsoft Excel spreadsheets.",
      "Acquired hands-on exposure to Power BI and Tableau for designing interactive metric dashboards and reporting cards."
    ],
    tools: ["PostgreSQL", "Excel", "Power BI", "Tableau", "Web Scraping", "SEO Tools"],
    technologies: ["PostgreSQL", "Excel", "Power BI", "Tableau", "Web Scraping", "SEO Tools"]
  }
];

export const projectsData = [
  {
    id: "brain-tumor-detection",
    title: "Brain Tumor Detection – IoU Optimization",
    category: "AI & Machine Learning",
    badge: "Deep Learning",
    shortDescription: "Deep learning-based medical imaging system utilizing Faster R-CNN with ResNet-50 backbone and custom IoU optimization for accurate tumor localization.",
    fullDescription: "An advanced computer vision system developed to assist in detecting brain tumors from MRI scans. Leveraged Faster R-CNN with a ResNet-50 feature extractor and implemented custom Intersection over Union (IoU) threshold optimization to improve tumor boundary localization and reduce false positives. Integrated into an accessible Flask API.",
    technologies: ["Python", "Deep Learning", "Faster R-CNN", "ResNet-50", "Flask", "Computer Vision"],
    highlights: [
      "Faster R-CNN architecture tailored for high-precision MRI scans",
      "ResNet-50 backbone for multi-scale feature extraction",
      "Optimized IoU classification threshold to maximize detection accuracy",
      "Flask REST API for real-time inference and bounding box output"
    ],
    github: "https://github.com/mohammed-abeeth/brain-tumor-detection-iou",
    demo: "#",
    hasScreenshot: true,
    visualType: "ai-vision"
  },
  {
    id: "help-desk-ticket-system",
    title: "Help Desk Ticket Management System",
    category: "Web & Backend Systems",
    badge: "Full-Stack API",
    shortDescription: "A scalable ticket lifecycle management platform with role-based routing, PostgreSQL persistence, and RESTful APIs built with Flask.",
    fullDescription: "A structured IT service desk portal designed to streamline incident reporting, prioritization, assignment, and status resolution. Built with Python and Flask following clean REST principles, with relational data persistence in PostgreSQL ensuring data integrity and rapid query response.",
    technologies: ["Python", "Flask", "PostgreSQL", "REST API", "SQLAlchemy", "Tailwind CSS"],
    highlights: [
      "Complete ticket creation, categorization, and status lifecycle tracking",
      "RESTful API endpoints for seamless frontend-backend decoupling",
      "PostgreSQL relational schema with foreign key constraints and audit timestamps",
      "Priority matrix scoring to escalate high-severity incidents"
    ],
    github: "https://github.com/mohammed-abeeth/help-desk-ticket-system",
    demo: "#",
    hasScreenshot: true,
    visualType: "ticket-system"
  },
  {
    id: "food-waste-tracker",
    title: "Food Waste Tracker",
    category: "Data & Sustainability",
    badge: "Sustainability Tech",
    shortDescription: "A smart tracking system monitoring food availability, surplus trends, and waste metrics to promote sustainable consumption and redistribution.",
    fullDescription: "Built to tackle urban food wastage by providing transparency into food inventory, expiry windows, and disposal patterns. Features an analytics dashboard that tracks consumption versus waste trends and empowers organizations to optimize procurement and partner with redistribution networks.",
    technologies: ["Python", "Data Analytics", "Pandas", "Matplotlib", "Flask", "SQL"],
    highlights: [
      "Dynamic monitoring of surplus inventory and expiry thresholds",
      "Quantitative waste auditing with automated category breakdown",
      "Visual analytics on wastage patterns across departments and dining halls",
      "Data-driven recommendations for procurement optimization"
    ],
    github: "https://github.com/mohammed-abeeth/food-waste-tracker",
    demo: "#",
    hasScreenshot: true,
    visualType: "food-waste"
  },
  {
    id: "vegetable-sales-analytics",
    title: "Vegetable Sales Analytics Dashboard",
    category: "Data Analytics & Dashboards",
    badge: "Excel & BI",
    shortDescription: "Executive Excel dashboard analyzing agricultural market data across Tamil Nadu (Jan–Feb 2026) using Pivot Tables, slicers, and dynamic KPI cards.",
    fullDescription: "A business intelligence dashboard created using a real-world Tamil Nadu agricultural vegetable dataset spanning January and February 2026. Employs advanced Excel methodologies including automated data normalization, dynamic Pivot Tables, multi-criteria slicers, and interactive KPI scorecards to reveal price elasticity and regional sales performance.",
    technologies: ["Microsoft Excel", "Pivot Tables", "Data Slicers", "KPI Cards", "Data Visualization", "Tamil Nadu Dataset"],
    highlights: [
      "Analyzed Jan–Feb 2026 agricultural vegetable price and sales trends in Tamil Nadu",
      "Integrated multi-dimensional Pivot Tables with synchronized slicers",
      "Designed visual KPI cards tracking top revenue commodities and price shifts",
      "Formatted with professional corporate UI hierarchy and automated formulas"
    ],
    github: "https://github.com/mohammed-abeeth/vegetable-sales-analytics-dashboard",
    demo: "#",
    hasScreenshot: true,
    visualType: "excel-dashboard"
  },
  {
    id: "god-eye-view",
    title: "God Eye View",
    category: "Geospatial & Visualization",
    badge: "Real-Time Mapping",
    shortDescription: "Immersive spatial and location visualization platform integrating OpenSky Network API, TomTom API, and Google Maps 3D Tiles.",
    fullDescription: "A high-performance geospatial monitoring application delivering real-time situational awareness. Ingests live aerial telemetry via OpenSky Network API, combines roadway traffic data from TomTom API, and renders the environment in high-fidelity 3D using Google Maps 3D Tiles.",
    technologies: ["OpenSky Network API", "TomTom API", "Google Maps 3D Tiles", "JavaScript", "Python", "Geospatial Data"],
    highlights: [
      "Live commercial flight tracking and vector telemetry via OpenSky Network API",
      "Urban traffic flow and congestion metrics integration with TomTom API",
      "Photorealistic 3D terrain and city mesh rendering using Google Maps 3D Tiles",
      "Interactive camera perspectives for global situational overview"
    ],
    github: "https://github.com/mohammed-abeeth/god-eye-view-visualization",
    demo: "#",
    hasScreenshot: true,
    visualType: "geospatial"
  }
];

export const educationData = [
  {
    step: "01",
    degree: "B.E. Computer Science and Engineering",
    institution: "Sethu Institute of Technology (SIT)",
    location: "Virudhunagar, Tamil Nadu, India",
    period: "2022 – 2026",
    score: "CGPA: 7.5 / 10",
    status: "Graduation: 2026",
    affiliation: "Affiliated to Anna University",
    highlights: [
      "Specialized in Database Management Systems (DBMS), Data Structures, Algorithms, and Software Architecture.",
      "Received Event Coordinator and Cinematographer Award for active departmental contributions.",
      "Capstone: Deep Learning Brain Tumor Detection (Faster R-CNN / IoU Optimization) deployed with Flask REST APIs."
    ]
  },
  {
    step: "02",
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Fusco’s",
    location: "Madurai, Tamil Nadu, India",
    period: "2021 – 2022",
    score: "Percentage: 73%",
    status: "Completed",
    affiliation: "State Board / Matriculation",
    highlights: [
      "Higher Secondary curriculum with strong focus on Mathematics, Physics, Chemistry, and Computer Science.",
      "Demonstrated quantitative analytical thinking and core computational problem solving."
    ]
  },
  {
    step: "03",
    degree: "Secondary School Leaving Certificate (SSLC)",
    institution: "Saracens",
    location: "Madurai, Tamil Nadu, India",
    period: "2019 – 2020",
    score: "Percentage: 65%",
    status: "Completed",
    affiliation: "State Board / Matriculation",
    highlights: [
      "Secondary school curriculum establishing foundational numeracy, science literacy, and computing logic."
    ]
  }
];

export const certificationsData = [
  {
    title: "Data Analyst Bootcamp",
    issuer: "Udemy",
    year: "2026",
    category: "Data Science & Analytics",
    badge: "Verified Certification",
    skills: ["Excel Analytics", "SQL Mastery", "Tableau", "Data Cleaning", "Statistical Analysis"],
    description: "Intensive hands-on training covering end-to-end data analysis, SQL joins, advanced Excel modeling, Tableau storytelling, and business metrics."
  },
  {
    title: "Cloud Computing",
    issuer: "NPTEL",
    year: "2025",
    category: "Cloud Infrastructure",
    badge: "Elite Certification",
    skills: ["Cloud Architecture", "Virtualization", "Distributed Systems", "SaaS/PaaS/IaaS"],
    description: "Rigorous academic certification covering foundational cloud architecture, resource provisioning, security, and scalable distributed architectures."
  },
  {
    title: "Human Computer Interaction",
    issuer: "NPTEL",
    year: "2025",
    category: "User Experience & Design",
    badge: "Elite Certification",
    skills: ["UI/UX Principles", "User-Centered Design", "Interaction Models", "Usability Testing"],
    description: "Specialized study on designing intuitive, accessible human-centered interfaces, user mental models, cognitive load reduction, and usability evaluation."
  }
];

