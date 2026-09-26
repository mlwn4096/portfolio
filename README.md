# Melwin Santhosh — Developer Portfolio & CV Portal (Light Table Edition)

🌐 **Live Website**: [https://www.mlwn.in/](https://www.mlwn.in/)

A custom **Light Table** portfolio backed by **Node.js** and **Express**. Cool paper, ink typography, a calibrated portrait frame, numbered section navigation, and ruled project sheets replace the previous visual theme. All portfolio copy, links, React behavior, resume files, and API data are preserved.

The readable presentation source lives in `public/theme/light-table.css` and `public/theme/light-table.js`. Fonts are served locally with their licenses in `public/theme/fonts`. The deployed React bundle remains unchanged. See [design and review notes](docs/light-table.md) for the five independent originality reviews and validation details. This redesign is local and has not been pushed or deployed.

---

## 🚀 Quick Start

### 1. Run the Server
```bash
cd portfolio
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
│   ├── index.html         # Light Table single-page application entrypoint
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
