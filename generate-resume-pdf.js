import fs from 'fs';
import path from 'path';

// Generate a valid, clean PDF document for Mohammed Abeeth H
function createResumePdf() {
  const content = `%PDF-1.4
1 0 obj
<<
  /Type /Catalog
  /Pages 2 0 R
>>
endobj
2 0 obj
<<
  /Type /Pages
  /Kids [3 0 R]
  /Count 1
>>
endobj
3 0 obj
<<
  /Type /Page
  /Parent 2 0 R
  /Resources <<
    /Font <<
      /F1 4 0 R
      /F2 5 0 R
      /F3 6 0 R
    >>
  >>
  /MediaBox [0 0 612 792]
  /Contents 7 0 R
>>
endobj
4 0 obj
<<
  /Type /Font
  /Subtype /Type1
  /BaseFont /Helvetica-Bold
>>
endobj
5 0 obj
<<
  /Type /Font
  /Subtype /Type1
  /BaseFont /Helvetica
>>
endobj
6 0 obj
<<
  /Type /Font
  /Subtype /Type1
  /BaseFont /Helvetica-Oblique
>>
endobj
7 0 obj
<<
  /Length 1850
>>
stream
BT
/F1 20 Tf
50 740 Td
(MOHAMMED ABEETH H) Tj
0 -18 Td
/F1 11 Tf
(Aspiring Data Analyst | Python Developer) Tj
0 -15 Td
/F2 9 Tf
(Email: mail.mohammedabeeth@gmail.com | Phone: +91-9080081060 | Tamil Nadu, India) Tj
0 -12 Td
(LinkedIn: linkedin.com/in/mohammed-abeeth | GitHub: github.com/mailmohammedabeeth-code) Tj

0 -25 Td
/F1 12 Tf
(PROFESSIONAL SUMMARY) Tj
0 -14 Td
/F2 9 Tf
(Computer Science and Engineering graduate from Sethu Institute of Technology (2026) with specialized) Tj
0 -11 Td
(focus on Data Analytics and Python Development. Experienced in data scraping, cleaning, SQL queries,) Tj
0 -11 Td
(PostgreSQL, and building dynamic KPI dashboards with Microsoft Excel, Power BI, and Tableau.) Tj

0 -22 Td
/F1 12 Tf
(EDUCATION) Tj
0 -14 Td
/F1 10 Tf
(B.E. Computer Science and Engineering - Sethu Institute of Technology) Tj
0 -12 Td
/F2 9 Tf
(Graduation Year: 2026 | Location: Tamil Nadu, India) Tj

0 -22 Td
/F1 12 Tf
(WORK EXPERIENCE) Tj
0 -14 Td
/F1 10 Tf
(Junior Data Analyst Intern - Aatzy Technology) Tj
0 -12 Td
/F2 9 Tf
(December 2025 - May 2026) Tj
0 -12 Td
(- Conducted web scraping and structured data collection for internal analytics pipelines.) Tj
0 -11 Td
(- Performed competitor analysis, pricing benchmarking, and SEO keyword research.) Tj
0 -11 Td
(- Managed records using PostgreSQL and structured Excel spreadsheets; built reporting metrics.) Tj
0 -11 Td
(- Developed interactive dashboards in Power BI and Tableau.) Tj

0 -22 Td
/F1 12 Tf
(FEATURED PROJECTS) Tj
0 -14 Td
/F1 10 Tf
(1. Brain Tumor Detection - IoU Optimization) Tj
0 -11 Td
/F2 9 Tf
(Faster R-CNN architecture with ResNet-50 backbone, custom IoU threshold optimization, Flask REST API.) Tj
0 -14 Td
/F1 10 Tf
(2. Help Desk Ticket Management System) Tj
0 -11 Td
/F2 9 Tf
(Ticket creation, lifecycle assignment, PostgreSQL database schema, REST API built with Python and Flask.) Tj
0 -14 Td
(3. Food Waste Tracker) Tj
0 -11 Td
/F2 9 Tf
(Food surplus monitoring, wastage pattern analytics, sustainable distribution tracking using Python and SQL.) Tj
0 -14 Td
(4. Vegetable Sales Analytics Dashboard) Tj
0 -11 Td
/F2 9 Tf
(Tamil Nadu agricultural dataset analysis (Jan-Feb 2026) in Excel using Pivot Tables, slicers, and KPI cards.) Tj
0 -14 Td
(5. God Eye View) Tj
0 -11 Td
/F2 9 Tf
(Geospatial mapping and situational awareness integrating OpenSky Network API, TomTom API, and 3D Tiles.) Tj

0 -22 Td
/F1 12 Tf
(TECHNICAL SKILLS) Tj
0 -14 Td
/F2 9 Tf
(Data Analytics: Microsoft Excel, SQL, Power BI, Tableau) Tj
0 -11 Td
(Programming: Python, C, HTML, CSS) Tj
0 -11 Td
(Python Libraries: Pandas, NumPy, Matplotlib) Tj
0 -11 Td
(Databases & Tools: PostgreSQL, Flask, Git, Jupyter Notebook) Tj

0 -22 Td
/F1 12 Tf
(CERTIFICATIONS) Tj
0 -14 Td
/F2 9 Tf
(- Data Analyst Bootcamp - Udemy (2026)) Tj
0 -11 Td
(- Cloud Computing - NPTEL (2025)) Tj
0 -11 Td
(- Human Computer Interaction - NPTEL (2025)) Tj
ET
endstream
endobj
xref
0 8
0000000000 65535 f 
0000000009 00000 n 
0000000058 00000 n 
0000000115 00000 n 
0000000261 00000 n 
0000000344 00000 n 
0000000422 00000 n 
0000000508 00000 n 
trailer
<<
  /Size 8
  /Root 1 0 R
>>
startxref
2410
%%EOF`;

  const publicDir = path.resolve('public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  const dest = path.join(publicDir, 'Mohammed_Abeeth_H_Resume.pdf');
  fs.writeFileSync(dest, content);
  console.log('Successfully generated:', dest);
}

createResumePdf();

