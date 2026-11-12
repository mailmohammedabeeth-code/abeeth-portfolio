// Central Data Configuration for the Dedicated Gen AI & Machine Learning Python Portfolio Page
// All content is modular, typed, and sourced directly from verified credentials and resume.

export const genAiHero = {
  title: "GENERATIVE AI",
  titleHighlight: "& MACHINE LEARNING",
  titleSuffix: "PYTHON",
  subtitle: "Intelligent Systems | Deep Learning | LLM Solutions",
  name: "Mohammed Abeeth H",
  role: "AI & Machine Learning Engineer | Software Engineer",
  location: "Tamil Nadu, India",
  tagline: "Specializing in Python-driven machine learning, deep neural vision models (Faster R-CNN with IoU optimization), Generative AI fundamentals, LLM workflows, and data-centric artificial intelligence architectures.",
  resumePdfPath: "/documents/genai-ml-python-resume.pdf",
  metrics: [
    { label: "Core Language", value: "Python 3.11+" },
    { label: "Machine Learning", value: "Scikit-learn & Predictive Models" },
    { label: "Computer Vision", value: "Faster R-CNN & ResNet-50" },
    { label: "Generative AI", value: "LLMs, Prompt Eng & RAG" }
  ]
};

export const genAiJourney = {
  heading: "My AI & Machine Learning Python Journey",
  subheading: "From Mathematical Foundations to Deep Learning Architectures & Modern Generative AI",
  narrative: [
    "My exploration of Artificial Intelligence began with a solid academic foundation in Computer Science and Engineering at Sethu Institute of Technology (Class of 2026, 7.5 CGPA). Fascinated by data patterns and predictive modeling, I dedicated myself to mastering Python as the primary language for algorithmic computation, mathematical modeling, and machine learning systems.",
    "Transitioning from traditional statistical analysis into deep neural networks, I engineered an advanced Brain Tumor Detection system utilizing Faster R-CNN with ResNet-50 feature extraction. By implementing intersection-over-union (IoU) optimization and deploying real-time inference via Python Flask, I bridged academic deep learning theory with practical healthcare diagnostic applications.",
    "Today, I continuously expand into Generative AI architectures, exploring Google Cloud Generative AI Studio, autonomous AI agents, retrieval-augmented generation (RAG) pipelines, and vector database embeddings—crafting resilient, scalable AI solutions built on robust Python backends."
  ],
  timeline: [
    {
      step: "01",
      phase: "Foundations",
      title: "Python Programming & Algorithmic Foundations",
      period: "2024 – 2025",
      description: "Mastered object-oriented Python, algorithmic problem-solving, structured data manipulation with NumPy and Pandas, and relational querying with SQL.",
      badge: "Simplilearn Verified",
      icon: "Code2"
    },
    {
      step: "02",
      phase: "Machine Learning",
      title: "Machine Learning Models & Supervised Learning",
      period: "2025 – 2026",
      description: "Implemented regression, decision trees, random forests, clustering, cross-validation, and performance metrics using Scikit-learn in Python.",
      badge: "Verified SkillUp",
      icon: "Cpu"
    },
    {
      step: "03",
      phase: "Deep Learning",
      title: "Computer Vision & Object Localization",
      period: "2025 – 2026",
      description: "Engineered deep convolutional models, Faster R-CNN with ResNet-50 backbone, region proposal networks, and IoU hyperparameter optimization.",
      badge: "Applied Project",
      icon: "BrainCircuit"
    },
    {
      step: "04",
      phase: "Generative AI",
      title: "Generative AI Studio, AI Agents & LLMs",
      period: "2026",
      description: "Trained on Google Cloud Generative AI Studio, prompt engineering, multi-turn AI agents, retrieval-augmented generation (RAG), and modern LLM application workflows.",
      badge: "Google Cloud / SkillUp",
      icon: "Sparkles"
    }
  ]
};

export const genAiSkillsData = [
  // 1. PROGRAMMING & FUNDAMENTALS (4 items)
  {
    id: "python",
    name: "Python 3.11+",
    subtitle: "Core AI Language",
    categoryGroup: "programming",
    category: "Programming & Math",
    description: "Core language for AI algorithmic logic, data processing, and model training workflows.",
    icon: "Code2"
  },
  {
    id: "numpy-pandas",
    name: "NumPy & Pandas",
    subtitle: "Array & Tabular Data",
    categoryGroup: "programming",
    category: "Programming & Math",
    description: "Vectorized array mathematics, dataframe transformations, and data preprocessing hygiene.",
    icon: "FileSpreadsheet"
  },
  {
    id: "oop-structures",
    name: "OOP & Data Structures",
    subtitle: "Modular Architecture",
    categoryGroup: "programming",
    category: "Programming & Math",
    description: "Object-oriented modular code architectures, algorithm efficiency, and stateful pipelines.",
    icon: "Workflow"
  },
  {
    id: "statistics-prob",
    name: "Statistics & Probability",
    subtitle: "Mathematical Modeling",
    categoryGroup: "programming",
    category: "Programming & Math",
    description: "Foundational mathematics for probability distributions, hypothesis testing, and inference.",
    icon: "TrendingUp"
  },

  // 2. MACHINE LEARNING (5 items)
  {
    id: "scikit-learn",
    name: "Scikit-learn",
    subtitle: "Predictive Modeling",
    categoryGroup: "ml",
    category: "Machine Learning",
    description: "Comprehensive Python toolkit for classification, regression, clustering, and validation pipelines.",
    icon: "Cpu"
  },
  {
    id: "supervised-learning",
    name: "Supervised Learning",
    subtitle: "Regression & Trees",
    categoryGroup: "ml",
    category: "Machine Learning",
    description: "Training predictive models including linear regression, decision trees, and random forests.",
    icon: "CheckCircle2"
  },
  {
    id: "unsupervised-learning",
    name: "Unsupervised Learning",
    subtitle: "K-Means & Clustering",
    categoryGroup: "ml",
    category: "Machine Learning",
    description: "Clustering algorithms (K-Means), dimensionality reduction, and pattern discovery in unlabeled data.",
    icon: "Layers"
  },
  {
    id: "feature-engineering",
    name: "Data Preprocessing",
    subtitle: "Feature Engineering",
    categoryGroup: "ml",
    category: "Machine Learning",
    description: "Data normalization, imputation, standard scaling, and one-hot categorical encoding.",
    icon: "Sliders"
  },
  {
    id: "model-evaluation",
    name: "Model Evaluation",
    subtitle: "ROC-AUC & Metrics",
    categoryGroup: "ml",
    category: "Machine Learning",
    description: "Assessing performance using ROC-AUC, precision, recall, F1-scores, and cross-validation.",
    icon: "ShieldCheck"
  },

  // 3. DEEP LEARNING & COMPUTER VISION (4 items)
  {
    id: "neural-networks",
    name: "Neural Networks (CNNs)",
    subtitle: "Deep Architecture",
    categoryGroup: "deeplearning",
    category: "Deep Learning",
    description: "Multi-layer perceptrons and deep convolutional architectures for feature learning and classification.",
    icon: "BrainCircuit"
  },
  {
    id: "tensorflow",
    name: "TensorFlow",
    subtitle: "Neural Framework",
    categoryGroup: "deeplearning",
    category: "Deep Learning",
    description: "End-to-end open-source machine learning platform for building and training neural graphs.",
    icon: "Cpu"
  },
  {
    id: "pytorch",
    name: "PyTorch",
    subtitle: "Dynamic Tensors",
    categoryGroup: "deeplearning",
    category: "Deep Learning",
    description: "Dynamic tensor computation framework for deep neural networks and machine learning research.",
    icon: "Layers"
  },
  {
    id: "computer-vision",
    name: "Computer Vision & Faster R-CNN",
    subtitle: "Object Detection & IoU",
    categoryGroup: "deeplearning",
    category: "Deep Learning",
    description: "Deep convolutional object localization, region proposal networks, and IoU bounding boxes.",
    icon: "Eye"
  },

  // 4. GENERATIVE AI & LLMS (5 items)
  {
    id: "llms",
    name: "Large Language Models (LLMs)",
    subtitle: "Foundation Models",
    categoryGroup: "genai",
    category: "Generative AI",
    description: "Foundation model architectures, transformer attention mechanisms, and textual generation.",
    icon: "Sparkles"
  },
  {
    id: "prompt-engineering",
    name: "Prompt Engineering",
    subtitle: "Contextual Steering",
    categoryGroup: "genai",
    category: "Generative AI",
    description: "Designing zero-shot, few-shot, and chain-of-thought prompts for deterministic model steering.",
    icon: "MessageSquare"
  },
  {
    id: "rag",
    name: "RAG & Vector Retrieval",
    subtitle: "Semantic Grounding",
    categoryGroup: "genai",
    category: "Generative AI",
    description: "Retrieval-Augmented Generation integrating vector embeddings to minimize model hallucinations.",
    icon: "Database"
  },
  {
    id: "ai-assistants",
    name: "AI Applications & Assistants",
    subtitle: "Goal-Oriented Systems",
    categoryGroup: "genai",
    category: "Generative AI",
    description: "Multi-turn intelligent assistants with context retention, task execution, and response synthesis.",
    icon: "Workflow"
  },
  {
    id: "genai-studio",
    name: "Google Cloud Gen AI Studio",
    subtitle: "Enterprise Generative AI",
    categoryGroup: "genai",
    category: "Generative AI",
    description: "Enterprise platform for generative AI model exploration, prompt testing, and deployment.",
    icon: "Sparkles"
  },

  // 5. TOOLS & ENVIRONMENT (4 items)
  {
    id: "vscode",
    name: "VS Code",
    subtitle: "Primary Development IDE",
    categoryGroup: "tools",
    category: "Tools & Environment",
    description: "Primary development IDE configured with Python linting, remote SSH, and debugging tools.",
    icon: "Terminal"
  },
  {
    id: "jupyter",
    name: "Jupyter Notebook",
    subtitle: "Interactive Lab",
    categoryGroup: "tools",
    category: "Tools & Environment",
    description: "Interactive computing environment for model prototyping, EDA, and data visualization.",
    icon: "Terminal"
  },
  {
    id: "git-github",
    name: "Git & GitHub",
    subtitle: "Version Control",
    categoryGroup: "tools",
    category: "Tools & Environment",
    description: "Distributed version control system for source code tracking and collaborative repository management.",
    icon: "GitBranch"
  },
  {
    id: "flask",
    name: "Flask",
    subtitle: "Model Serving API",
    categoryGroup: "tools",
    category: "Tools & Environment",
    description: "Lightweight REST API endpoints for real-time model inference and JSON data delivery.",
    icon: "Server"
  }
];

export const genAiSoftSkills = [
  {
    name: "Analytical Thinking",
    description: "Deconstructing complex data distributions and identifying underlying mathematical patterns.",
    icon: "TrendingUp",
    number: "01"
  },
  {
    name: "Problem Solving",
    description: "Formulating structured algorithmic solutions for challenging machine learning tasks.",
    icon: "CheckCircle2",
    number: "02"
  },
  {
    name: "Attention to Detail",
    description: "Maintaining data hygiene, hyperparameter precision, and error-free code implementation.",
    icon: "ShieldCheck",
    number: "03"
  },
  {
    name: "Communication",
    description: "Translating model metrics and complex AI concepts into clear, actionable insights.",
    icon: "MessageSquare",
    number: "04"
  }
];

export const genAiProjectsData = [
  {
    id: "brain-tumor-detection",
    title: "Brain Tumor Detection & IoU Optimization",
    subtitle: "Deep Learning Medical Computer Vision with Flask REST Deployment",
    category: "Deep Learning & CV",
    status: "Completed",
    featured: true,
    technologies: ["Python", "Faster R-CNN", "ResNet-50", "Flask", "OpenCV", "NumPy", "Matplotlib"],
    problemStatement: "Early and accurate detection of brain tumors in MRI scans requires high-sensitivity localization to identify abnormal tissue without alarming false positives.",
    description: "Built a production-grade Deep Learning system to detect and localize brain tumors in MRI brain scans with high precision using Faster R-CNN with a ResNet-50 feature extractor.",
    keyFeatures: [
      "Custom region proposal networks (RPN) for precise bounding box localization",
      "ResNet-50 residual feature extraction preserving high-dimensional anatomical details",
      "Intersection-over-Union (IoU) threshold calibration to eliminate false positives",
      "Integrated Flask web endpoint for instant image upload and visual inference overlay"
    ],
    github: "https://github.com/mailmohammedabeeth-code",
    demo: "#",
    metrics: [
      { label: "Architecture", value: "Faster R-CNN" },
      { label: "Backbone", value: "ResNet-50" },
      { label: "Optimization", value: "IoU Tuning" },
      { label: "Serving", value: "Flask REST API" }
    ]
  },
  {
    id: "ai-agent-rag-pipeline",
    title: "AI Knowledge Agent & Contextual Q&A",
    subtitle: "Generative AI Studio & Multi-Step Agentic Reasoning System",
    category: "Generative AI",
    status: "Active Deployment",
    featured: false,
    technologies: ["Google Cloud Gen AI", "Python", "Prompt Engineering", "AI Agents", "REST APIs"],
    problemStatement: "Standard language model querying often produces ungrounded hallucinations when answering domain-specific organizational questions.",
    description: "Explored and built an intelligent agent pipeline leveraging Google Cloud Generative AI Studio and LLM prompting to perform automated query decomposition and factual document retrieval.",
    keyFeatures: [
      "System prompt design with zero-shot and few-shot contextual steering",
      "Task-oriented AI agent logic for automated question answering and summarization",
      "Vectorized knowledge retrieval integration reducing model hallucination",
      "Python client integration for seamless programmatic access"
    ],
    github: "https://github.com/mailmohammedabeeth-code",
    demo: "#",
    metrics: [
      { label: "Platform", value: "Google Cloud Gen AI" },
      { label: "Method", value: "Multi-Turn Agent" },
      { label: "Focus", value: "Context Retention" },
      { label: "Language", value: "Python 3.11" }
    ]
  }
];

export const genAiArchitectureFlow = [
  {
    step: "01",
    title: "Data Preprocessing & Augmentation",
    description: "Raw medical imagery and textual datasets are ingested, normalized, cleaned, and augmented to ensure high generalization and prevent model overfitting.",
    icon: "Database"
  },
  {
    step: "02",
    title: "Feature Extraction & Neural Encoding",
    description: "Deep convolutional backbones (ResNet-50) or transformer vector embeddings map unstructured inputs into dense mathematical feature representations.",
    icon: "Layers"
  },
  {
    step: "03",
    title: "Prediction, Localization & Generation",
    description: "Dual-head classification and bounding-box regression localize regions of interest, while generative LLM decoders synthesize grounded textual answers.",
    icon: "BrainCircuit"
  },
  {
    step: "04",
    title: "Evaluation & Flask REST Deployment",
    description: "Models undergo rigorous IoU, precision, recall, and loss evaluation before being containerized and served via low-latency Python Flask endpoints.",
    icon: "Server"
  }
];

export const genAiToolkit = [
  {
    name: "Python 3.11",
    category: "Core Language",
    description: "Primary programming language for machine learning, deep learning models, and algorithmic pipelines.",
    badge: "Core AI Language",
    icon: "Code2"
  },
  {
    name: "NumPy & Pandas",
    category: "Data Preprocessing",
    description: "Vectorized array mathematics, multi-dimensional matrix operations, and high-performance dataframe engineering.",
    badge: "Mathematical Data",
    icon: "FileSpreadsheet"
  },
  {
    name: "Scikit-learn",
    category: "Machine Learning",
    description: "Supervised and unsupervised predictive modeling, regression, decision trees, random forests, and cross-validation.",
    badge: "ML Standard",
    icon: "Cpu"
  },
  {
    name: "TensorFlow",
    category: "Deep Learning",
    description: "End-to-end platform for constructing computational neural graphs, backpropagation, and deep network training.",
    badge: "Neural Framework",
    icon: "Cpu"
  },
  {
    name: "PyTorch",
    category: "Deep Learning",
    description: "Dynamic tensor computation framework powering deep neural network research and gradient optimization.",
    badge: "Dynamic Tensors",
    icon: "Layers"
  },
  {
    name: "Faster R-CNN",
    category: "Computer Vision",
    description: "Two-stage object detection architecture with Region Proposal Networks and IoU bounding-box optimization.",
    badge: "Vision Architecture",
    icon: "Eye"
  },
  {
    name: "Google Cloud Gen AI",
    category: "Generative AI",
    description: "Generative AI Studio exploration, multimodal foundation models, and prompt tuning environments.",
    badge: "Cloud Foundation",
    icon: "Sparkles"
  },
  {
    name: "Prompt Engineering & RAG",
    category: "LLM Systems",
    description: "Contextual prompt steering, few-shot conditioning, and retrieval-augmented generation to ground responses.",
    badge: "LLM Workflows",
    icon: "MessageSquare"
  },
  {
    name: "Jupyter Notebook",
    category: "Interactive Environment",
    description: "Interactive computing notebook for rapid model prototyping, exploratory data analysis, and visualizations.",
    badge: "Prototyping Lab",
    icon: "Terminal"
  },
  {
    name: "VS Code",
    category: "Development IDE",
    description: "Primary IDE configured with Python interpreters, virtual environments, Git integration, and debugging.",
    badge: "Primary IDE",
    icon: "Terminal"
  },
  {
    name: "Git & GitHub",
    category: "Version Control",
    description: "Distributed version control for tracking model architectures, training scripts, and collaborative repositories.",
    badge: "Source Management",
    icon: "GitBranch"
  },
  {
    name: "Flask",
    category: "Model Serving API",
    description: "Lightweight Python web framework for exposing REST endpoints to serve real-time model inferences.",
    badge: "Model Inference API",
    icon: "Server"
  }
];

export const genAiExperience = [
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

export const genAiCertifications = [
  {
    id: "cert-machine-learning-python",
    title: "Machine Learning Using Python",
    issuer: "Simplilearn SkillUp",
    date: "14th October 2026",
    year: "2026",
    credentialId: "10887220",
    type: "verified-pdf",
    category: "Machine Learning & Predictive Systems",
    badge: "Verified SkillUp",
    pdfUrl: "/certificates/genai-ml-certification-new.pdf",
    highlights: "Mastery of machine learning algorithms, supervised and unsupervised learning, classification, regression, model evaluation, and predictive modeling using Python.",
    isUploaded: true
  },
  {
    id: "cert-intro-genai-studio",
    title: "Introduction to Generative AI Studio",
    issuer: "Google Cloud / Simplilearn SkillUp",
    date: "13th October 2026",
    year: "2026",
    credentialId: "10884970",
    type: "verified-pdf",
    category: "Generative AI & LLMs",
    badge: "Google Cloud Verified",
    pdfUrl: "/certificates/simplilearn-generative-ai-studio.pdf",
    highlights: "Exploration of Google Cloud Generative AI Studio, generative model prompting, multimodal AI, and enterprise foundation models.",
    isUploaded: true
  },
  {
    id: "cert-ai-agents-beginners",
    title: "AI Agents for Beginners",
    issuer: "Simplilearn SkillUp",
    date: "13th October 2026",
    year: "2026",
    credentialId: "10885338",
    type: "verified-pdf",
    category: "Autonomous AI Agents",
    badge: "Verified SkillUp",
    pdfUrl: "/certificates/simplilearn-ai-agents.pdf",
    highlights: "Fundamentals of autonomous artificial intelligence agents, goal-directed behavior, environment observation, decision reasoning loops, and multi-agent interaction.",
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
    highlights: "Foundational Python syntax, control structures, functions, data structures, and algorithmic scripting logic essential for AI and data science.",
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
    highlights: "Relational database querying, multi-table joins, subqueries, aggregations, and schema manipulation for machine learning feature pipelines.",
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
    category: "HCI & AI Interface Ergonomics",
    badge: "NPTEL Elite Certificate",
    score: "70% (Assignments: 25/25, Proctored Exam: 45/75)",
    pdfUrl: "/certificates/nptel-human-computer-interaction.pdf",
    highlights: "Awarded Elite certification by Ministry of Education, Govt. of India for human-centered design, user cognition, and AI interface ergonomics.",
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
    highlights: "Distributed systems, virtualization, compute resource scaling, and cloud deployment paradigms for hosting machine learning and AI workloads.",
    isUploaded: true
  }
];
