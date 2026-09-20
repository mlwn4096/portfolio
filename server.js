const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Request logging
app.use((req, res, next) => {
  const start = Date.now();
  res.on('finish', () => {
    const duration = Date.now() - start;
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url} ${res.statusCode} - ${duration}ms`);
  });
  next();
});

// CV Data API
const cvData = {
  name: "Melwin Santhosh",
  tagline: "Integrated MCA Student | AI & Software Development",
  location: "Palai, Kerala, India",
  website: "https://mlwn.in",
  email: "melwinsanthoah4096@gmail.com",
  phone: "+91 6235764096",
  whatsapp: "https://wa.me/916235764096",
  linkedin: "https://www.linkedin.com/in/melwin-santhosh-784550378",
  github: "https://github.com/mlwn4096",
  profile: "Integrated MCA student at St. Joseph’s College of Engineering and Technology (SJCET), Palai, with a strong interest in Artificial Intelligence, software development, web technologies, and multimedia. Interested in learning through practical projects and building technology-focused products and initiatives. Currently contributing to the development of PRAX, an invite-only professional learning and collaboration initiative by Vantcrest Labs Pvt. Ltd.",
  education: [
    {
      degree: "Integrated MCA",
      institution: "St. Joseph's College of Engineering and Technology (SJCET), Palai",
      period: "2025–2030",
      details: "Areas of interest: Artificial Intelligence and software development"
    },
    {
      degree: "Class XII — CBSE",
      institution: "SKPS, Kaduthuruthy",
      period: "2025"
    },
    {
      degree: "Class X — CBSE",
      institution: "SKPS, Kaduthuruthy",
      period: "2023"
    }
  ],
  experience: [
    {
      role: "Platform Contributor",
      organization: "PRAX — Initiative by Vantcrest Labs Pvt. Ltd.",
      period: "2026 - Present",
      highlights: [
        "Contributing to the development of an invite-only professional community focused on practical experience, continuous learning, and real-world exposure.",
        "Working on platform modules that enable members to learn, build projects, document experiences, collaborate, receive feedback, and pursue opportunities.",
        "Contributing to community structure, member progression, project/challenge systems, and mentorship frameworks.",
        "Exploring connections between practical project experience and professional opportunities."
      ]
    }
  ],
  projects: [
    {
      title: "PRAX Web Platform",
      category: "Full-Stack Web / Community Architecture",
      description: "Digital platform supporting the PRAX community with member progression, project/challenge tracks, mentorship engagement, and experience documentation.",
      tags: ["Web Platform", "Community", "UI/UX", "Workflow Automation"]
    },
    {
      title: "Personal Developer Portfolio & Hub",
      category: "Frontend & Node.js Application",
      description: "Responsive personal portfolio website presenting software projects, systems expertise, and experience using modern UI/UX design and terminal aesthetics.",
      tags: ["Node.js", "Express", "HTML5/CSS3", "JavaScript", "CLI Aesthetic"]
    },
    {
      title: "AI-Assisted Development Toolchains",
      category: "AI & Developer Tooling",
      description: "Automated scripting, prompt workflows, and Linux command-line productivity pipelines designed to accelerate full-stack development cycles.",
      tags: ["AI", "Bash", "Linux", "Productivity"]
    }
  ],
  skills: {
    operatingSystems: ["Linux Environments", "Linux Mint", "Fedora", "Shell Navigation & Admin"],
    cliAndWorkflows: ["Terminal CLI Workflows", "Bash Shell Scripting", "Git", "System Diagnostics & Troubleshooting"],
    webDevelopment: ["Web Application Development", "Modern Frontend Development", "HTML5", "CSS3", "JavaScript", "Responsive UI/UX"],
    aiAndWorkflows: ["Artificial Intelligence Concepts", "AI-Assisted Development", "Prompt Engineering"],
    hardwareAndSystems: ["Computer Architecture", "Hardware Diagnostics & Assembly", "System Tuning"],
    coreInterests: ["Software Engineering", "Web Technologies", "Multimedia & Digital Media", "Open-Source"]
  }
};

// Routes

// 1. JSON API endpoint
app.get('/api/info', (req, res) => {
  res.json(cvData);
});

// 2. Direct CV PDF Download endpoint
app.get('/api/cv', (req, res) => {
  const pdfPath = path.join(__dirname, 'public', 'Melwin_Santhosh_CV.pdf');
  if (fs.existsSync(pdfPath)) {
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename="Melwin_Santhosh_CV.pdf"');
    return res.sendFile(pdfPath);
  }
  
  // Fallback to /sdcard/downloads path if public copy is not found
  const fallbackPath = '/sdcard/downloads/mlwn/Melwin_Santhosh_CV_copy.pdf';
  if (fs.existsSync(fallbackPath)) {
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename="Melwin_Santhosh_CV.pdf"');
    return res.sendFile(fallbackPath);
  }

  res.status(404).json({ error: 'CV PDF not found' });
});

app.get('/download-cv', (req, res) => {
  res.redirect('/api/cv');
});

// 3. Contact Form Submission endpoint
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: 'Please provide name, email, and message.' });
  }

  console.log(`[Contact Form Received] From: ${name} (${email}) - Message: ${message.substring(0, 100)}...`);
  
  res.json({
    success: true,
    message: `Thank you ${name}! Your message has been received. Melwin will get back to you at ${email}.`
  });
});

// 4. Health Check
app.get('/health', (req, res) => {
  res.json({ status: 'healthy', uptime: process.uptime(), timestamp: new Date() });
});

// Asset safety handler: Never serve index.html for static asset requests to prevent MIME type crashes
app.use((req, res, next) => {
  if (req.path.startsWith('/assets/') || req.path.match(/\.(js|css|png|jpg|jpeg|gif|svg|ico|json|map|pdf|txt|xml|webmanifest)$/i)) {
    // If a JS asset was requested that was not found statically, serve the canonical working JS bundle
    if (req.path.startsWith('/assets/') && req.path.endsWith('.js')) {
      const canonicalJs = path.join(__dirname, 'public', 'assets', 'index-rMVczcx5.js');
      if (fs.existsSync(canonicalJs)) {
        res.setHeader('Content-Type', 'application/javascript; charset=UTF-8');
        return res.sendFile(canonicalJs);
      }
    }
    // If a CSS asset was requested that was not found statically, serve the canonical working CSS bundle
    if (req.path.startsWith('/assets/') && req.path.endsWith('.css')) {
      const canonicalCss = path.join(__dirname, 'public', 'assets', 'index-KD1H7ggb.css');
      if (fs.existsSync(canonicalCss)) {
        res.setHeader('Content-Type', 'text/css; charset=UTF-8');
        return res.sendFile(canonicalCss);
      }
    }
    return res.status(404).send('Asset not found');
  }
  next();
});

// Fallback to index.html for SPA/static routing
app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start server when run directly
if (process.env.NODE_ENV !== 'production' || !process.env.VERCEL) {
  app.listen(PORT, '0.0.0.0', () => {
    console.log(`====================================================`);
    console.log(`🚀 Melwin Santhosh Portfolio Server running!`);
    console.log(`📡 Local URL:    http://localhost:${PORT}`);
    console.log(`📄 Download CV:  http://localhost:${PORT}/api/cv`);
    console.log(`⚡ Node Version: ${process.version}`);
    console.log(`====================================================`);
  });
}

module.exports = app;
