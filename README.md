# Mohammed Abeeth H - Personal Portfolio Website

> **Aspiring Data Analyst | Python Developer**  
> *"I transform raw data into meaningful insights and build practical solutions using technology."*

A modern, visually stunning, dark-themed personal portfolio built with **React**, **Vite**, **Tailwind CSS**, and **Lucide React**. Designed to showcase engineering foundations, data analytics expertise, Python development projects, internship experience, and academic achievements.

---

## 🌟 Key Features

- **Futuristic & Clean UI**: Dark theme by default (`#080B14`, `#111827`, `#3B82F6`, `#06B6D4`) with built-in Dark/Light mode toggle.
- **Interactive Typing Hero**: Highlighting core identities (Data Analyst, Python Developer, SQL Enthusiast, Power BI Developer).
- **Comprehensive Technical Skills**: Categorized into *Data Analytics*, *Programming*, *Python Libraries*, and *Other Technologies* with realistic visual progress bars and practical usage notes.
- **Industry Experience Showcase**: Dedicated timeline for the *Junior Data Analyst Internship* at **Aatzy Technology** (Dec 2025 – May 2026).
- **Interactive Project Cards**:
  1. Brain Tumor Detection – IoU Optimization (Faster R-CNN, ResNet-50, Flask)
  2. Help Desk Ticket Management System (Python, Flask, PostgreSQL)
  3. Food Waste Tracker (Python, SQL, Analytics)
  4. Vegetable Sales Analytics Dashboard (Tamil Nadu Dataset, Excel Pivot & Slicers)
  5. God Eye View (OpenSky Network API, TomTom API, Google Maps 3D Tiles)
- **Deep-Dive Case Study Modals**: In-depth architecture review, technical highlights, and demo links.
- **Downloadable & Previewable Resume**: Includes an interactive in-browser preview modal and direct PDF download link.
- **Functional Contact Form & Channels**: Complete with real-time validation, celebration confetti effect, direct email copy button, and WhatsApp quick-chat link.
- **Deployment Ready**: Pre-configured for seamless zero-config deployment on **Vercel** or **Netlify**.

---

## 🚀 Quick Start Guide

### 1. Prerequisites
Ensure you have [Node.js](https://nodejs.org/) installed (v18 or higher recommended).

### 2. Installation
```bash
npm install
```

### 3. Development Server
Start the local development server:
```bash
npm run dev
```
Open your browser at `http://localhost:3000`.

### 4. Production Build
Create an optimized production build in the `dist` directory:
```bash
npm run build
```

To preview the production build locally:
```bash
npm run preview
```

---

## 🛠️ How to Customize Your Portfolio

All personal information, links, projects, and skills are centrally organized in a single file:
👉 `src/data/portfolioData.js`

### 1. Updating Your GitHub and Project Links
Open `src/data/portfolioData.js`:
- Update `personalInfo.github` with your profile URL.
- Update each project's `github` and `demo` fields.

### 2. Updating Your Resume PDF
Place your latest resume PDF in the `public/` folder named:
`public/Mohammed_Abeeth_H_Resume.pdf`

### 3. Adding Project Screenshots
When you have actual project screenshots:
1. Place the images in `public/projects/` (e.g. `public/projects/brain-tumor.png`).
2. In `src/data/portfolioData.js`, add the image path to the project object (e.g. `image: '/projects/brain-tumor.png'`).

### 4. Updating Contact Phone / WhatsApp
Update `personalInfo.phone` in `src/data/portfolioData.js` to automatically update the functional WhatsApp chat button.

---

## 🚢 Deployment Instructions

### Deploy to Vercel (Recommended)
1. Push your repository to GitHub.
2. Sign in to [Vercel](https://vercel.com).
3. Click **"Add New Project"** and select this repository.
4. Framework preset: **Vite**.
5. Click **"Deploy"**!

### Deploy to Netlify
1. Push your repository to GitHub.
2. Sign in to [Netlify](https://netlify.com).
3. Click **"Add new site"** -> **"Import an existing project"**.
4. Netlify will automatically detect `netlify.toml` with `npm run build` and publish directory `dist`.
5. Click **"Deploy site"**!

---

## 📄 License
Created for Mohammed Abeeth H. All rights reserved.

