// Central Data Configuration for the Dedicated Cloud Engineering & DevOps Portfolio Page
// All content is modular, typed, and editable for easy updates.

export const cloudHero = {
  title: "CLOUD ENGINEERING",
  subtitle: "Cloud Infrastructure | DevOps | Automation",
  name: "Mohammed Abeeth H",
  role: "Cloud & DevOps Engineer | Software Engineer",
  location: "Tamil Nadu, India",
  tagline: "Architecting resilient cloud infrastructure on AWS, containerizing microservices with Docker, configuring Linux server environments, automating CI/CD pipelines, and provisioning reproducible environments.",
  resumePdfPath: "/documents/mohammed-abeeth-cloud-engineer-resume.pdf",
  cloudResumePdfPath: "/documents/mohammed-abeeth-cloud-engineer-resume.pdf",
  devOpsResumePdfPath: "/documents/mohammed-abeeth-devops-engineer-resume.pdf",
  resumes: [
    {
      id: "cloud-engineer",
      role: "Cloud Engineer",
      category: "Cloud Infrastructure & AWS Services",
      description: "AWS cloud provisioning, Linux server administration, scalable infrastructure architecture, and secure networking.",
      filename: "Mohammed_Abeeth_H_Cloud_Engineer_Resume.pdf",
      pdfUrl: "/documents/mohammed-abeeth-cloud-engineer-resume.pdf"
    },
    {
      id: "devops-engineer",
      role: "DevOps Engineer",
      category: "CI/CD & Pipeline Automation",
      description: "Docker containerization, Jenkins & GitHub Actions CI/CD pipelines, automated deployments, and reproducible environments.",
      filename: "Mohammed_Abeeth_H_DevOps_Engineer_Resume.pdf",
      pdfUrl: "/documents/mohammed-abeeth-devops-engineer-resume.pdf"
    }
  ],
  metrics: [
    { label: "Primary Cloud", value: "AWS & EC2" },
    { label: "Containerization", value: "Docker & Compose" },
    { label: "Operating System", value: "Linux & Ubuntu Server" },
    { label: "Automation", value: "CI/CD & GitHub Actions" }
  ]
};

export const cloudJourney = {
  heading: "My Cloud Engineering Journey",
  subheading: "Building Infrastructure, Automating Workflows, and Exploring Cloud Technologies.",
  narrative: [
    "My journey into cloud infrastructure began through rigorous academic coursework at Sethu Institute of Technology (B.E. Computer Science & Engineering, Class of 2026) and completed the 12-week NPTEL Cloud Computing course conducted by IIT Kharagpur, earning verified national certification in cloud service models, virtualization, and distributed systems.",
    "Driven by a passion for scalable systems engineering, I expanded from software development into cloud administration: provisioning virtual servers on AWS EC2, configuring Linux distributions (Ubuntu Server), managing network protocols (TCP/IP, DNS, SSH, SSL/TLS), and engineering custom multi-tier container stacks with Docker and Docker Compose.",
    "Today, I focus on building reliable deployment workflows — writing automated CI/CD pipelines on GitHub Actions, configuring reverse proxies with Nginx, exploring Terraform for declarative infrastructure as code, and continuously mastering cloud compute and storage architectures."
  ],
  timeline: [
    {
      step: "01",
      phase: "Foundations",
      title: "Cloud Computing Fundamentals & Virtualization",
      period: "2024 – 2025",
      description: "Completed 12-week IIT Kharagpur / NPTEL Cloud Computing program. Mastered IaaS, PaaS, SaaS models, hypervisors, virtualization, resource pooling, and distributed storage.",
      badge: "IIT Kharagpur Verified",
      icon: "Cloud"
    },
    {
      step: "02",
      phase: "Systems",
      title: "Linux Administration & Command Line",
      period: "2024 – 2025",
      description: "Hands-on mastery of Linux terminal, file systems, permissions (chmod, chown), process management, systemd daemon services, and shell automation.",
      badge: "Linux SysAdmin",
      icon: "Terminal"
    },
    {
      step: "03",
      phase: "Cloud Compute",
      title: "AWS Fundamentals & EC2 Instance Management",
      period: "2025 – 2026",
      description: "Provisioned and hardened AWS EC2 Ubuntu instances. Configured security groups, key pairs, S3 storage buckets, IAM access policies, and static IP routing.",
      badge: "AWS Verified",
      icon: "Server"
    },
    {
      step: "04",
      phase: "Containers",
      title: "Docker & Containerization Mastery",
      period: "2025 – 2026",
      description: "Engineered multi-stage Dockerfiles for Python/Flask web apps and Node.js microservices. Isolated environments, mounted volumes, managed container networks, and orchestrated stacks with Docker Compose.",
      badge: "Docker Standard",
      icon: "Boxes"
    },
    {
      step: "05",
      phase: "Automation",
      title: "DevOps Fundamentals & CI/CD Pipelines",
      period: "2026",
      description: "Designed GitHub Actions workflows for automated code linting, unit test execution, Docker image building, and automated pushes to registries with zero-downtime deployment targets.",
      badge: "Automated CI/CD",
      icon: "GitBranch"
    },
    {
      step: "06",
      phase: "IaC (Active)",
      title: "Terraform & Infrastructure as Code",
      period: "2026 (Active Learning)",
      description: "Exploring declarative HCL configurations to provision, version, and destroy cloud infrastructure predictably with state tracking and repeatability.",
      badge: "Currently Learning",
      icon: "Sliders"
    }
  ]
};

export const cloudSkillsData = [
  // 1. CLOUD COMPUTING (2 tools)
  {
    id: "aws",
    name: "AWS",
    subtitle: "Amazon Web Services",
    categoryGroup: "cloud",
    category: "Cloud Platform",
    description: "Public cloud platform for scalable compute, object storage, and managed services.",
    icon: "Cloud"
  },
  {
    id: "ec2",
    name: "Amazon EC2",
    subtitle: "Elastic Compute Cloud",
    categoryGroup: "cloud",
    category: "Cloud Compute",
    description: "Scalable virtual machine instances with security groups, key pairs, and VPC routing.",
    icon: "Server"
  },

  // 2. CONTAINERIZATION (3 tools)
  {
    id: "docker",
    name: "Docker",
    subtitle: "Container Engine",
    categoryGroup: "containers",
    category: "Container Runtime",
    description: "Lightweight container runtime for packaging and isolating applications consistently.",
    icon: "Boxes"
  },
  {
    id: "dockerfiles",
    name: "Dockerfiles",
    subtitle: "Image Definition",
    categoryGroup: "containers",
    category: "Image Architecture",
    description: "Multi-stage build instructions for compiling lightweight, secure container images.",
    icon: "Layers"
  },
  {
    id: "container-fundamentals",
    name: "Container Fundamentals",
    subtitle: "Lifecycle & Isolation",
    categoryGroup: "containers",
    category: "Virtualization",
    description: "Container lifecycle, isolated namespaces, persistent volumes, and bridge networking.",
    icon: "Cpu"
  },

  // 3. INFRASTRUCTURE AS CODE (3 tools)
  {
    id: "terraform",
    name: "Terraform",
    subtitle: "Declarative IaC",
    categoryGroup: "iac",
    category: "Infrastructure as Code",
    description: "Declarative tool for provisioning, versioning, and managing cloud infrastructure safely.",
    icon: "Sliders"
  },
  {
    id: "hcl",
    name: "HCL",
    subtitle: "HashiCorp Configuration",
    categoryGroup: "iac",
    category: "Configuration Language",
    description: "HashiCorp Configuration Language for authoring human-readable infrastructure templates.",
    icon: "Code2"
  },
  {
    id: "infra-provisioning",
    name: "Infrastructure Provisioning",
    subtitle: "Resource Lifecycle",
    categoryGroup: "iac",
    category: "Cloud Automation",
    description: "Automated lifecycle management of cloud resources with state tracking and repeatability.",
    icon: "Cloud"
  },

  // 4. DEVOPS & VERSION CONTROL (3 tools)
  {
    id: "git",
    name: "Git",
    subtitle: "Distributed Version Control",
    categoryGroup: "devops",
    category: "Version Control",
    description: "Distributed version control system for tracking source code history and branching.",
    icon: "GitBranch"
  },
  {
    id: "github",
    name: "GitHub",
    subtitle: "Cloud Code Hosting",
    categoryGroup: "devops",
    category: "Collaboration Platform",
    description: "Cloud hosting platform for Git repositories, code reviews, and developer collaboration.",
    icon: "GitBranch"
  },
  {
    id: "cicd-fundamentals",
    name: "CI/CD Fundamentals",
    subtitle: "Continuous Integration",
    categoryGroup: "devops",
    category: "DevOps Pipeline",
    description: "Automated pipelines for linting, testing, building, and deploying software updates.",
    icon: "ShieldCheck"
  },

  // 5. DEVELOPMENT ENVIRONMENT (3 tools)
  {
    id: "vscode",
    name: "VS Code",
    subtitle: "Primary Development IDE",
    categoryGroup: "env",
    category: "Development IDE",
    description: "Primary code editor with remote SSH, container debugging, and syntax tooling.",
    icon: "Terminal"
  },
  {
    id: "jenkins",
    name: "Jenkins",
    subtitle: "CI/CD Automation",
    categoryGroup: "env",
    category: "CI/CD Automation",
    description: "Automates build, testing, and deployment workflows.",
    icon: "Cpu"
  },
  {
    id: "cli-fundamentals",
    name: "Command Line Fundamentals",
    subtitle: "Terminal & Shell Navigation",
    categoryGroup: "env",
    category: "Shell & CLI",
    description: "Bash commands, file permissions, shell automation, and headless server navigation.",
    icon: "Terminal"
  }
];

export const cloudSoftSkills = [
  {
    name: "Analytical Thinking",
    description: "Evaluating technical situations and identifying practical solutions.",
    icon: "TrendingUp",
    number: "01"
  },
  {
    name: "Problem Solving",
    description: "Resolving technical challenges through logical approaches.",
    icon: "CheckCircle2",
    number: "02"
  },
  {
    name: "Attention to Detail",
    description: "Maintaining accuracy in configurations and technical workflows.",
    icon: "ShieldCheck",
    number: "03"
  },
  {
    name: "Communication",
    description: "Explaining technical concepts and collaborating effectively.",
    icon: "MessageSquare",
    number: "04"
  }
];

export const cloudProjectsData = [
  {
    id: "project-cloud-deploy",
    title: "Cloud Deployment & Virtualization Engine",
    subtitle: "AWS EC2 Ubuntu Host with Nginx Reverse Proxy & SSL Automation",
    category: "Cloud Infrastructure",
    status: "Completed",
    featured: true,
    technologies: ["AWS EC2", "Ubuntu Linux", "Nginx", "SSL/TLS", "Systemd", "Git"],
    problemStatement: "Deploying web applications to public cloud hosts requires rigorous server configuration, firewall lockdown, automated process restarts, and encrypted TLS communication.",
    description: "Provisioned and configured an AWS EC2 Ubuntu instance hosting full-stack applications. Configured ufw firewalls, automated background systemd unit files, registered domain routing, and installed Let's Encrypt SSL certificates.",
    keyFeatures: [
      "AWS EC2 Provisioning: Configured custom Security Groups permitting only SSH (port 22) and web traffic (ports 80/443).",
      "Systemd Service Automation: Created custom systemd daemon units ensuring the Python web process auto-restarts upon server reboot or failure.",
      "Let's Encrypt TLS: Automated zero-cost SSL certificate renewal via Certbot for encrypted HTTPS communication.",
      "Reverse Proxy Routing: Routed domain requests through Nginx proxy pass with gzip compression headers.",
      "Security Hardening: Disabled password-based SSH authentication in favor of 4096-bit RSA keys."
    ],
    github: "https://github.com/mailmohammedabeeth-code",
    demo: "#",
    metrics: [
      { label: "Host", value: "AWS EC2 Ubuntu" },
      { label: "Security", value: "SSL/TLS + ufw" },
      { label: "Process Mgr", value: "Linux systemd" },
      { label: "Uptime", value: "Continuous Daemon" }
    ]
  },
  {
    id: "project-helpdesk-cloud",
    title: "Help Desk Ticket System — Containerized Service",
    subtitle: "Cloud-Ready REST API with Dockerized PostgreSQL & Health Probes",
    category: "Backend & Systems",
    status: "Completed",
    featured: false,
    technologies: ["Python Flask", "PostgreSQL", "Docker", "Postman", "REST APIs", "Linux"],
    problemStatement: "Internal support ticket engines require zero-configuration portable deployment so IT teams can stand up the service on any bare metal or cloud host in minutes.",
    description: "Refactored the core Help Desk IT Support Ticket Management service into a containerized microservice package. Integrated health check endpoints (`/healthz`), structured JSON logging for observability, and zero-dependency docker compose startup.",
    keyFeatures: [
      "Health Probes: Exposed `/health` and `/ready` endpoints for container orchestrators and load balancers to monitor service readiness.",
      "Structured Logging: Integrated JSON standard output logging for cloud log aggregation systems (CloudWatch/Loki).",
      "Dynamic Configuration: Fully parameterized via runtime environment variables (`DATABASE_URL`, `PORT`, `SECRET_KEY`).",
      "Relational Integrity: PostgreSQL relational schemas with automated table migrations and connection pooling."
    ],
    github: "https://github.com/mailmohammedabeeth-code",
    demo: "#",
    metrics: [
      { label: "Framework", value: "Python Flask" },
      { label: "Orchestration", value: "Docker Compose" },
      { label: "Database", value: "PostgreSQL" },
      { label: "Monitoring", value: "Healthz Probes" }
    ]
  }
];

export const cloudToolkit = [
  {
    name: "AWS",
    category: "Cloud Platform",
    description: "Scalable cloud infrastructure, EC2 virtual compute, S3 object storage, and IAM role governance.",
    badge: "Cloud Foundation",
    icon: "Cloud"
  },
  {
    name: "Jenkins",
    category: "CI/CD Automation",
    description: "Automates software build, testing, and deployment pipelines.",
    badge: "Automation Tool",
    icon: "Cpu"
  },
  {
    name: "Docker",
    category: "Containerization",
    description: "Multi-stage Dockerfiles, image optimization, layer caching, volume persistence, and Compose stacks.",
    badge: "Container Standard",
    icon: "Boxes"
  },
  {
    name: "Terraform",
    category: "Infrastructure as Code",
    description: "Declarative infrastructure provisioning, HCL configurations, and cloud state tracking (Active Learning).",
    badge: "Currently Learning",
    icon: "Sliders"
  },
  {
    name: "Git & GitHub",
    category: "Version Control",
    description: "Distributed code branching, pull requests, semantic commit hygiene, and collaborative workflows.",
    badge: "Source Management",
    icon: "GitBranch"
  },
  {
    name: "VS Code",
    category: "Development IDE",
    description: "Primary IDE for infrastructure code, remote SSH development, terminal integration, and debugging.",
    badge: "Primary IDE",
    icon: "Terminal"
  },
  {
    name: "Linux (Ubuntu Server)",
    category: "Operating System",
    description: "Headless server administration, POSIX permissions, systemd daemon management, and bash automation.",
    badge: "Primary OS",
    icon: "Terminal"
  },
  {
    name: "GitHub Actions",
    category: "CI/CD & Automation",
    description: "YAML workflow triggers, automated test execution, Docker build matrix, and automated registry publishing.",
    badge: "Automation Core",
    icon: "GitBranch"
  }
];

export const cloudCertifications = [
  {
    id: "cert-nptel-cloud-computing",
    title: "Cloud Computing (12-Week Course)",
    issuer: "NPTEL (IIT Kharagpur / Swayam / MoE)",
    date: "Jul–Oct 2025 (12 Weeks)",
    year: "2025",
    credentialId: "NPTEL25CS107S362300937",
    type: "verified-pdf",
    category: "Cloud Infrastructure & Virtualization",
    badge: "IIT Kharagpur Verified",
    score: "55% (Assignments: 25/25, Proctored Exam: 30/75)",
    pdfUrl: "/certificates/nptel-cloud-computing.pdf",
    highlights: "Virtualization, distributed cloud systems, service models (IaaS, PaaS, SaaS), hypervisors, and cloud resource provisioning.",
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
  },
  {
    id: "cert-simplilearn-aws",
    title: "AWS Cloud Practitioner / Essentials",
    issuer: "Simplilearn SkillUp",
    date: "14th October 2026",
    year: "2026",
    credentialId: "10889966",
    type: "verified-pdf",
    category: "AWS Cloud Platforms",
    badge: "SkillUp Verified",
    pdfUrl: "/certificates/simplilearn-aws.pdf",
    highlights: "Core AWS architecture, EC2 compute instances, S3 storage, IAM security management, and cloud economic models.",
    isUploaded: true
  },
  {
    id: "cert-simplilearn-azure-fundamentals",
    title: "Azure Fundamentals",
    issuer: "Simplilearn SkillUp",
    date: "12th October 2026",
    year: "2026",
    credentialId: "10871180",
    type: "verified-pdf",
    category: "Microsoft Azure",
    badge: "SkillUp Verified",
    pdfUrl: "/certificates/simplilearn-azure-fundamentals.pdf",
    highlights: "Microsoft Azure cloud concepts, core Azure architectural components, compute services, and identity management.",
    isUploaded: true
  },
  {
    id: "cert-simplilearn-cloud-security",
    title: "Introduction to Cloud Security",
    issuer: "Simplilearn SkillUp",
    date: "14th October 2026",
    year: "2026",
    credentialId: "10888228",
    type: "verified-pdf",
    category: "Cloud Security & Governance",
    badge: "SkillUp Verified",
    pdfUrl: "/certificates/simplilearn-cloud-security.pdf",
    highlights: "Cloud security principles, shared responsibility model, identity & access governance, encryption, and threat mitigation.",
    isUploaded: true
  },
  {
    id: "cert-simplilearn-computer-networking",
    title: "Introduction to Computer Networking",
    issuer: "Simplilearn SkillUp",
    date: "13th October 2026",
    year: "2026",
    credentialId: "10876812",
    type: "verified-pdf",
    category: "Networking Protocols",
    badge: "SkillUp Verified",
    pdfUrl: "/certificates/simplilearn-computer-networking.pdf",
    highlights: "OSI and TCP/IP protocol stacks, IPv4 subnetting, routing mechanisms, DNS resolution, and network troubleshooting.",
    isUploaded: true
  },
  {
    id: "cert-simplilearn-python-beginners",
    title: "Python for Beginners",
    issuer: "Simplilearn SkillUp",
    date: "9th October 2026",
    year: "2026",
    credentialId: "10861093",
    type: "verified-pdf",
    category: "Python & Cloud Automation",
    badge: "SkillUp Verified",
    pdfUrl: "/certificates/cloud-certification-01.pdf",
    highlights: "Foundational Python programming, functions, conditionals, loops, data structures, and scripting fundamentals for infrastructure automation.",
    isUploaded: true
  }
];

export const cloudExperience = [
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
