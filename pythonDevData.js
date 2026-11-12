// Central Data Configuration for the Dedicated Python Developer Portfolio Page
// All content is modular and editable for easy updates.

export const pythonHero = {
  title: "PYTHON DEVELOPMENT",
  subtitle: "Building Intelligent Applications. Engineering Practical Backend Solutions.",
  name: "Mohammed Abeeth H",
  role: "Python Developer | Software Engineer",
  location: "Tamil Nadu, India",
  tagline: "Architecting robust backend services, RESTful APIs, relational data pipelines, and intelligent deep learning inference pipelines with clean, maintainable Python code.",
  resumePdfPath: "/documents/mohammed-abeeth-python-developer-resume.pdf",
  metrics: [
    { label: "Core Language", value: "Python 3.11+" },
    { label: "Backend Core", value: "Flask & REST APIs" },
    { label: "Data Persistence", value: "PostgreSQL & MySQL" },
    { label: "Applied Vision", value: "Faster R-CNN • PyTorch" }
  ]
};

export const pythonJourney = {
  heading: "My Python Development Journey",
  subheading: "From computational logic to scalable Flask backends, relational databases, and applied AI systems.",
  narrative: [
    "My journey with Python began during my Computer Science & Engineering degree at Sethu Institute of Technology (Class of 2026). What started with basic algorithmic problem solving rapidly expanded into building full-fledged backend web services, database-backed applications, and applied deep learning vision systems.",
    "During my internships at Sputnik Info Tech and Aatzy Technologies, I developed deep respect for database normalization, SQL query optimization, and structured ETL workflows. I discovered how Python's rich ecosystem bridges raw relational data with high-performance APIs and clean user-facing applications.",
    "Today, I focus on engineering resilient REST APIs using Flask, implementing Object-Oriented principles, writing modular reusable packages, manipulating structured datasets with Pandas and NumPy, and deploying machine learning models into production-ready web endpoints."
  ],
  timeline: [
    {
      step: "01",
      phase: "Foundations",
      title: "Python Programming Foundations",
      period: "2023 – 2024",
      description: "Mastered core syntax, variables, data structures (lists, tuples, dicts, sets), control flow, exception handling, and modular script development.",
      badge: "Core Logic",
      icon: "Code2"
    },
    {
      step: "02",
      phase: "Architecture",
      title: "Object-Oriented Programming (OOP)",
      period: "2024",
      description: "Implemented class hierarchies, encapsulation, inheritance, polymorphism, and magic dunder methods for clean software engineering.",
      badge: "OOP Design",
      icon: "Boxes"
    },
    {
      step: "03",
      phase: "Backend",
      title: "Flask Backend & REST API Development",
      period: "2024 – 2025",
      description: "Constructed RESTful HTTP microservices, handling JSON serialization, request validation, routing blueprints, and status code standards.",
      badge: "API Engineering",
      icon: "Server"
    },
    {
      step: "04",
      phase: "Persistence",
      title: "PostgreSQL & Relational Database Integration",
      period: "2025",
      description: "Connected Flask backends with PostgreSQL and MySQL, architecting schemas, writing complex joins, indexing tables, and executing parameterized queries.",
      badge: "Data Persistence",
      icon: "Database"
    },
    {
      step: "05",
      phase: "Production",
      title: "Full Python Application Development",
      period: "2025 – 2026",
      description: "Engineered complete end-to-end applications including the Help Desk Ticket Management System and the Faster R-CNN Brain Tumor Detection Web UI.",
      badge: "End-to-End Apps",
      icon: "Cpu"
    },
    {
      step: "06",
      phase: "Deployment",
      title: "Docker Containerization Learning",
      period: "2026 (Active)",
      description: "Containerizing Python Flask microservices with multi-stage Dockerfiles, managing environment variables, and establishing local multi-container compose stacks.",
      badge: "Cloud Ready",
      icon: "Layers"
    }
  ]
};

export const pythonSkillsData = [
  {
    id: "python",
    name: "Python 3.11+",
    categoryGroup: "programming",
    category: "Programming Core",
    description: "Core syntax, data structures, and algorithmic logic.",
    icon: "Code2"
  },
  {
    id: "oop",
    name: "Python OOP",
    categoryGroup: "programming",
    category: "Architecture",
    description: "Object-oriented design, classes, inheritance, and polymorphism.",
    icon: "Boxes"
  },
  {
    id: "flask",
    name: "Flask",
    categoryGroup: "backend",
    category: "Backend Framework",
    description: "Lightweight microservices, Blueprints, and routing.",
    icon: "Server"
  },
  {
    id: "django",
    name: "Django",
    categoryGroup: "backend",
    category: "Backend Framework",
    description: "MTV web framework and ORM data modeling.",
    icon: "Server"
  },
  {
    id: "rest-apis",
    name: "REST APIs",
    categoryGroup: "backend",
    category: "API Architecture",
    description: "Stateless HTTP endpoints and JSON serialization.",
    icon: "Network"
  },
  {
    id: "database-technologies",
    name: "DATABASE TECHNOLOGIES",
    subtitle: "SQL • PostgreSQL • MySQL",
    categoryGroup: "databases",
    category: "Database Management",
    description: "Relational database design, querying and data management.",
    icon: "Database"
  },
  {
    id: "pandas",
    name: "Pandas",
    categoryGroup: "data",
    category: "Data Processing",
    description: "DataFrame manipulation, aggregations, and data cleaning.",
    icon: "BarChart3"
  },
  {
    id: "numpy",
    name: "NumPy",
    categoryGroup: "data",
    category: "Numerical Computing",
    description: "Vectorized array operations and linear algebra.",
    icon: "Cpu"
  },
  {
    id: "matplotlib",
    name: "Matplotlib",
    categoryGroup: "data",
    category: "Data Visualization",
    description: "Programmatic chart generation and statistical plotting.",
    icon: "LayoutGrid"
  },
  {
    id: "html-css",
    name: "HTML5 & CSS3",
    categoryGroup: "frontend",
    category: "Frontend Fundamentals",
    description: "Semantic web structure and modern responsive styling.",
    icon: "LayoutGrid"
  },
  {
    id: "git",
    name: "Git & GitHub",
    categoryGroup: "tools",
    category: "Version Control",
    description: "Branching strategies, commit history, and collaborative PRs.",
    icon: "GitBranch"
  },
  {
    id: "vscode",
    name: "VS Code",
    categoryGroup: "tools",
    category: "Development IDE",
    description: "Primary IDE, virtual environments, and debugging.",
    icon: "Terminal"
  },
  {
    id: "pycharm",
    name: "PyCharm",
    categoryGroup: "tools",
    category: "Development Environment",
    description: "Python coding, debugging and project development.",
    icon: "Terminal"
  },
  {
    id: "jupyter",
    name: "Jupyter Notebook",
    categoryGroup: "tools",
    category: "Interactive Analysis",
    description: "Interactive Python exploration and prototype testing.",
    icon: "Terminal"
  }
];

export const pythonProjectsData = [
  {
    id: "project-helpdesk",
    title: "Help Desk Ticket Management System",
    subtitle: "Python Flask REST Application & Support Ticket Engine",
    category: "Backend & Systems",
    status: "Completed",
    featured: true,
    technologies: ["Python", "Flask", "REST APIs", "PostgreSQL", "Postman", "SQLAlchemy"],
    problemStatement: "Organizations frequently suffer from unorganized support requests lost across informal chat channels and email inboxes, lacking centralized tracking, priority escalation, and audit logging.",
    description: "A robust backend service and REST API built with Python and Flask to manage internal IT and customer support tickets. Provides structured endpoints to create, triage, update, and resolve support requests.",
    keyFeatures: [
      "Create & Ingest Tickets: Endpoints to submit new tickets with subject, description, user info, and priority tags.",
      "Query & Retrieve Records: Filter ticket lists by status (Open, Pending, Resolved), priority, and assignee.",
      "RESTful API Endpoints: Strict adherence to HTTP verbs (GET, POST, PUT, PATCH, DELETE) with JSON serialization.",
      "Database Persistence: Normalized relational schema on PostgreSQL with foreign key relationships for users and comments.",
      "Postman Verified: Exhaustively tested test collection covering edge cases, invalid payloads, and error status codes."
    ],
    github: "https://github.com/mailmohammedabeeth-code",
    demo: "#",
    metrics: [
      { label: "Architecture", value: "RESTful Microservice" },
      { label: "Framework", value: "Python Flask" },
      { label: "Database", value: "PostgreSQL" },
      { label: "Testing", value: "Postman Suite" }
    ]
  },
  {
    id: "project-brain-tumor",
    title: "Brain Tumor Detection (IoU Optimization)",
    subtitle: "Deep Learning Medical Imaging & Real-Time Flask Inference Web App",
    category: "AI & Computer Vision",
    status: "Completed",
    featured: true,
    technologies: ["Python", "Faster R-CNN", "ResNet-50", "PyTorch", "Flask", "OpenCV"],
    problemStatement: "Manual radiologist inspection of MRI brain scans is time-consuming and prone to human diagnostic fatigue, creating urgent demand for computer-assisted detection to identify abnormal tumor boundaries rapidly.",
    description: "An applied deep learning computer vision system trained to detect and localize brain tumors in MRI scans using the Faster R-CNN architecture backed by a ResNet-50 feature extractor. Wrapped in a lightweight Flask web application for real-time visualization.",
    keyFeatures: [
      "Faster R-CNN Architecture: Implemented Region Proposal Networks (RPN) for high-confidence tumor region localization.",
      "IoU Boundary Optimization: Enhanced bounding box precision through Intersection over Union (IoU) parameter tuning.",
      "Feature Extractor: Leveraged deep ResNet-50 backbone for multi-scale spatial feature representation.",
      "Flask Inference Web UI: Integrated model into a Python Flask web frontend allowing instant MRI upload and visual bounding-box overlay.",
      "High Diagnostic Confidence: Verified accurate localization across diverse clinical scan orientations."
    ],
    github: "https://github.com/mailmohammedabeeth-code",
    demo: "#",
    metrics: [
      { label: "Architecture", value: "Faster R-CNN" },
      { label: "Backbone", value: "ResNet-50" },
      { label: "Serving", value: "Flask Web UI" },
      { label: "Domain", value: "Medical AI" }
    ]
  },
  {
    id: "project-god-eye",
    title: "God Eye View — Live Geospatial Visualizer",
    subtitle: "Real-Time Aerial Tracking & 3D Geospatial Tiles Integration",
    category: "Geospatial & Real-Time APIs",
    status: "Completed",
    featured: false,
    technologies: ["Node.js", "Vite", "OpenSky Network API", "TomTom API", "Google Maps 3D Tiles", "JavaScript"],
    problemStatement: "Tracking live global aviation and traffic telemetry simultaneously requires stitching together disparate external API streams into an ultra-low-latency 3D geospatial canvas.",
    description: "A high-performance geospatial visualization dashboard integrating real-time flight positions from the OpenSky Network, route mapping via TomTom APIs, and high-fidelity photorealistic 3D terrain tiles.",
    keyFeatures: [
      "Live Flight Radar: Ingestion of live ADS-B aircraft telemetry from the OpenSky Network API.",
      "3D Photorealistic Mapping: Integration of Google Maps 3D Tiles for high-density volumetric urban landscapes.",
      "Traffic & Route Overlay: Real-time traffic density and routing layers powered by TomTom API.",
      "Interactive HUD: Cyberpunk dark flight information heads-up display displaying altitude, speed, and callsign."
    ],
    github: "https://github.com/mailmohammedabeeth-code",
    demo: "#",
    metrics: [
      { label: "Data Source", value: "OpenSky Network" },
      { label: "3D Rendering", value: "Photorealistic Tiles" },
      { label: "UI Theme", value: "Cyber Geospatial HUD" }
    ]
  }
];

export const pythonToolkit = [
  {
    name: "Python 3.11+",
    category: "Core Language",
    description: "Object-Oriented Design, data structures, comprehensions, and clean typing.",
    badge: "Primary Language",
    icon: "Code2"
  },
  {
    name: "Object-Oriented Programming (OOP)",
    category: "Programming Concepts",
    description: "Classes, Objects, Inheritance, Encapsulation and Polymorphism.",
    badge: "Architecture Core",
    icon: "Boxes"
  },
  {
    name: "Flask",
    category: "Backend Framework",
    description: "Lightweight microservices, Blueprints, routing, and JSON endpoints.",
    badge: "Backend Microservices",
    icon: "Server"
  },
  {
    name: "PostgreSQL",
    category: "Relational Database",
    description: "ACID compliance, schema normalization, complex joins, and relational indexing.",
    badge: "Data Persistence",
    icon: "Database"
  },
  {
    name: "REST APIs",
    category: "API Architecture",
    description: "Stateless HTTP verbs, resource endpoints, and Postman testing.",
    badge: "System Architecture",
    icon: "Network"
  },
  {
    name: "Pandas & NumPy",
    category: "Data Processing",
    description: "High-performance DataFrames, vectorized matrix operations, and wrangling.",
    badge: "Data Engine",
    icon: "BarChart3"
  },
  {
    name: "Git & GitHub",
    category: "Version Control",
    description: "Branching strategies, commit history hygiene, and collaborative PRs.",
    badge: "Code Management",
    icon: "GitBranch"
  },
  {
    name: "VS Code",
    category: "Development IDE",
    description: "Primary IDE, virtual environments, terminal integration, and interactive debugging.",
    badge: "Primary IDE",
    icon: "Terminal"
  },
  {
    name: "Jupyter Notebook",
    category: "Interactive Development",
    description: "Interactive Python notebooks for coding, experimentation, and data analysis.",
    badge: "Notebook Environment",
    icon: "BookOpen"
  },
  {
    name: "PyCharm",
    category: "Python IDE",
    description: "Python development, intelligent debugging, and project management.",
    badge: "Professional IDE",
    icon: "Code2"
  },
  {
    name: "Postman",
    category: "API Testing",
    description: "Testing REST APIs, HTTP requests, JSON responses, and backend endpoints.",
    badge: "API Development",
    icon: "Network"
  }
];

export const pythonCertifications = [
  {
    id: "cert-advanced-python",
    title: "Advanced Python",
    issuer: "Simplilearn SkillUp",
    date: "15th October 2026",
    year: "2026",
    credentialId: "10892792",
    type: "verified-pdf",
    category: "Advanced Python",
    badge: "Verified SkillUp",
    pdfUrl: "/certificates/simplilearn-advanced-python.pdf",
    highlights: "Mastery of advanced Python concepts, object-oriented architecture, decorators, generators, multi-threading, and package engineering.",
    isUploaded: true
  },
  {
    id: "cert-dsa-python",
    title: "Data Structures & Algorithms in Python",
    issuer: "Simplilearn SkillUp",
    date: "14th October 2026",
    year: "2026",
    credentialId: "10889848",
    type: "verified-pdf",
    category: "Computer Science & DSA",
    badge: "Verified SkillUp",
    pdfUrl: "/certificates/simplilearn-dsa-python.pdf",
    highlights: "Hands-on implementation of core data structures, search/sort algorithms, time/space complexity analysis in Python.",
    isUploaded: true
  },
  {
    id: "cert-python-beginners",
    title: "Python for Beginners",
    issuer: "Simplilearn SkillUp",
    date: "9th October 2026",
    year: "2026",
    credentialId: "10861093",
    type: "verified-pdf",
    category: "Python Fundamentals",
    badge: "Verified SkillUp",
    pdfUrl: "/certificates/simplilearn-python-for-beginners.pdf",
    highlights: "Mastery of Python programming basics, functions, conditionals, loops, data structures, and algorithmic logic.",
    isUploaded: true
  },
  {
    id: "cert-sql-simplilearn",
    title: "Introduction to SQL",
    issuer: "Simplilearn SkillUp",
    date: "30th June 2026",
    year: "2026",
    credentialId: "10411559",
    type: "verified-pdf",
    category: "Database & Querying",
    badge: "SkillUp Verified",
    pdfUrl: "/certificates/simplilearn-sql.pdf",
    highlights: "Relational database querying, multi-table joins, subqueries, aggregations, and schema manipulation.",
    isUploaded: true
  },
  {
    id: "cert-web-dev",
    title: "Web Development for Beginners",
    issuer: "Simplilearn SkillUp",
    date: "October 2026",
    year: "2026",
    credentialId: "SkillUp Verified",
    type: "verified-pdf",
    category: "Web Engineering",
    badge: "Verified SkillUp",
    pdfUrl: "/certificates/simplilearn-web-development.pdf",
    highlights: "Client-server architecture, modern web technologies, HTML5, CSS3, DOM manipulation, and responsive web design.",
    isUploaded: true
  },
  {
    id: "cert-nptel-cloud",
    title: "Cloud Computing (12-Week Course)",
    issuer: "NPTEL (IIT Kharagpur / Swayam / MoE)",
    date: "Jul–Oct 2025 (12 Weeks)",
    year: "2025",
    credentialId: "NPTEL25CS107S362300937",
    type: "verified-pdf",
    category: "Cloud Infrastructure",
    badge: "IIT Kharagpur Verified",
    score: "55% (Assignments: 25/25, Proctored Exam: 30/75)",
    pdfUrl: "/certificates/nptel-cloud-computing.pdf",
    highlights: "Virtualization, distributed cloud systems, service models (IaaS, PaaS, SaaS), and cloud data storage.",
    isUploaded: true
  },
  {
    id: "cert-nptel-hci-elite",
    title: "Human Computer Interaction (In Hindi)",
    issuer: "NPTEL (IIIT Delhi / IIT Madras - Elite)",
    date: "Jul–Oct 2025 (12 Weeks)",
    year: "2025",
    credentialId: "NPTEL25CS112S562300736",
    type: "verified-pdf",
    category: "HCI & Interface Engineering",
    badge: "NPTEL Elite Certificate",
    score: "70% (Assignments: 25/25, Proctored Exam: 45/75)",
    pdfUrl: "/certificates/nptel-human-computer-interaction.pdf",
    highlights: "Awarded Elite certification by Ministry of Education, Govt. of India for user cognition, interface heuristics, and interaction design.",
    isUploaded: true
  }
];

export const pythonExperience = [
  {
    id: "exp-aatzy",
    role: "Junior Data Analyst Intern",
    company: "Aatzy Technology",
    period: "December 2025 – May 2026",
    location: "Remote / Hybrid, India",
    type: "Internship",
    badge: "Active Engagement",
    description: "Contributed to structured data collection, web harvesting pipelines using Python, and relational database reporting workflows.",
    responsibilities: [
      "Built automated data extraction scripts in Python to gather structured records from web targets.",
      "Assisted in PostgreSQL and MySQL relational schema design, writing optimized queries and joins.",
      "Cleaned, validated, and normalized multi-table transaction datasets using Pandas DataFrames.",
      "Collaborated with engineering mentors on backend data ingestion and pipeline reliability."
    ],
    technologies: ["Python", "Pandas", "PostgreSQL", "SQL", "Web Scraping", "Git"]
  },
  {
    id: "exp-sputnik",
    role: "MySQL Intern",
    company: "Sputnik Info Tech",
    period: "2025",
    year: "2025",
    location: "Tamil Nadu, India",
    type: "Internship",
    badge: "Database Engineering • Internship",
    category: "Database Engineering • Internship",
    description: "Focused on relational database design, query optimization, and data hygiene audits using MySQL.",
    responsibilities: [
      "Designed and structured relational database schemas, tables, and relationships for data integrity.",
      "Executed complex SQL queries, JOINs, subqueries, and indexing for optimized retrieval performance.",
      "Conducted data hygiene audits, anomaly detection, and schema validation across relational datasets.",
      "Documented database workflows, query performance benchmarks, and entity-relationship diagrams (ERDs)."
    ],
    technologies: [
      "MySQL",
      "SQL Queries",
      "Schema Design",
      "Query Optimization",
      "Database Indexing"
    ]
  }
];

export const pythonSoftSkills = [
  {
    name: "Analytical Thinking",
    description: "Breaking down complex technical challenges and identifying logical solutions.",
    icon: "TrendingUp",
    number: "01"
  },
  {
    name: "Problem Solving",
    description: "Finding efficient solutions through structured programming and logical reasoning.",
    icon: "CheckCircle2",
    number: "02"
  },
  {
    name: "Attention to Detail",
    description: "Writing accurate, clean code and identifying errors through careful debugging.",
    icon: "ShieldCheck",
    number: "03"
  },
  {
    name: "Communication",
    description: "Explaining technical concepts clearly and collaborating effectively with development teams.",
    icon: "MessageSquare",
    number: "04"
  }
];
