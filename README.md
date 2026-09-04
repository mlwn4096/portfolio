# Melwin Santhosh — Developer Portfolio & CV Portal (Neo-Brutalism Edition)

🌐 **Live Website**: [https://www.mlwn.in/](https://www.mlwn.in/)

A bold, high-contrast **Neo-Brutalist** developer portfolio and systems portal built with modern frontend engineering and backed by **Node.js** & **Express**. Features the raw, tactile aesthetic of neo-brutalism (Space Grotesk typography, pure ink borders, solid 45-degree offset shadows, mechanical button clicks, and physical card lifts) alongside serverless REST resume endpoints and direct ATS CV download delivery.

---

## 🚀 Quick Start

### 1. Run the Server
```bash
cd /root/projects/portfolio-nodejs
node server.js
# or
npm start
```

### 2. View in Browser
Open:
- **Web Portfolio**: [http://localhost:3000](http://localhost:3000)
- **Direct CV Download**: [http://localhost:3000/api/cv](http://localhost:3000/api/cv)
- **JSON Resume API**: [http://localhost:3000/api/info](http://localhost:3000/api/info)
- **Health Check**: [http://localhost:3000/health](http://localhost:3000/health)

---

## 📂 Project Structure

```text
portfolio-nodejs/
├── server.js              # Express web server & serverless API routes
├── vercel.json            # Vercel deployment configuration
├── package.json           # Project dependencies & scripts
├── public/
│   ├── index.html         # Neo-brutalist single-page application entrypoint
│   ├── assets/            # Production bundled JS & CSS assets
│   ├── Melwin_Santhosh_CV.pdf  # ATS-compliant single-page CV
│   ├── cv.html            # Standalone printable HTML CV
│   ├── cv.txt             # Plain ASCII text resume
│   ├── favicon.svg        # Neo-brutalist geometric favicon
│   └── icons.svg          # High-contrast geometric vector sprites
└── README.md              # Documentation
```

---

## 🌟 Key Features

1. **Integrated MCA Profile & Background**:
   - St. Joseph's College of Engineering and Technology (SJCET), Palai (2025–2030).
   - Core Platform Contributor at PRAX (Vantcrest Labs Pvt. Ltd.).
   - Academic milestones (SKPS Class XII & Class X).

2. **Interactive Terminal Simulator**:
   - Visitors can type real commands: `help`, `about`, `skills`, `projects`, `experience`, `education`, `contact`, `cv`, `clear`.
   - Typing `cv` or `download` instantly downloads `Melwin_Santhosh_CV.pdf` directly to their browser!

3. **CV Download API**:
   - Route `GET /api/cv` sends `Content-Disposition: attachment; filename="Melwin_Santhosh_CV.pdf"` so mobile and desktop browsers save the file directly to the Downloads folder.

4. **REST Endpoints**:
   - `GET /api/info` - Structured JSON representation of Melwin's resume.
   - `POST /api/contact` - AJAX endpoint for sending contact messages.
   - `GET /health` - Service monitoring endpoint.
