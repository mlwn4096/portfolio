"""Build the public, one-page resume from the portfolio's verified profile."""

from pathlib import Path
from html import escape
from io import BytesIO

from PIL import Image
from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.utils import ImageReader
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfgen import canvas
from reportlab.platypus import Paragraph


ROOT = Path(__file__).resolve().parents[1]
PUBLIC = ROOT / "public"
PHOTO = PUBLIC / "melwin-blue.png"  # first portrait used by the portfolio
PDF = PUBLIC / "Melwin_Santhosh_CV.pdf"

name = "Melwin Santhosh"
role = "Software Development & AI  |  Integrated MCA Student"
contact = [
    ("Palai, Kerala, India", None),
    ("+91 6235764096", "tel:+916235764096"),
    ("melwinsanthoah4096@gmail.com", "mailto:melwinsanthoah4096@gmail.com"),
    ("mlwn.in", "https://mlwn.in"),
    ("github.com/mlwn4096", "https://github.com/mlwn4096"),
    ("LinkedIn", "https://www.linkedin.com/in/melwin-santhosh-784550378"),
]
summary = (
    "Integrated MCA student at SJCET, Palai, building web and AI systems. Contribute to the "
    "PRAX professional learning platform and develop practical projects in geospatial machine "
    "learning, API security, and frontend engineering."
)
experience = [
    "Contribute to PRAX, an invite-only professional learning initiative by Vantcrest Labs Pvt. Ltd., with platform work covering member progression, project challenges, mentorship, and experience documentation.",
    "Help shape community workflows that connect practical engineering projects, peer feedback, and career opportunities.",
]
projects = [
    (
        "UHI — Urban Heat Intelligence",
        "github.com/j33v4nz/visat",
        [
            "Co-developed a Kochi heat action planner for HackMe'26 using Landsat/Sentinel data and physics-informed XGBoost; reported spatial cross-validation R² of 0.83 over 54,168 grid cells.",
            "Built Streamlit planning tools spanning 74 wards, including cooling budget scenarios, development screening, and heat exposure views.",
        ],
    ),
    (
        "NeuroBots — Zero Trust API Defense",
        "github.com/mlwn4096/NeuroBots",
        [
            "Built an API authorization defense project for BOLA/BFLA scenarios using behavioral analysis, NetworkX graphs, Markov models, and LangChain-assisted threat summaries.",
            "Used React, FastAPI, Redis, PostgreSQL, and Docker across the interface, API gateway, data layer, and local deployment workflow.",
        ],
    ),
    (
        "Personal Developer Portfolio",
        "mlwn.in",
        [
            "Built a responsive portfolio with an interactive CLI, Node.js/Express API, downloadable resume, and accessible project presentation.",
        ],
    ),
]
skills = [
    ("Languages & web", "Python, JavaScript, HTML, CSS, React, Node.js, Express, FastAPI, Streamlit"),
    ("Data & tooling", "XGBoost, PostgreSQL, Redis, Docker, Git, Bash, Linux, NetworkX"),
    ("Focus areas", "Geospatial ML, API security, AI-assisted workflows, responsive UI"),
]
activities = [
    "HackMe'26 AI/ML track, VISAT Engineering College (September 2026): co-developed UHI for urban heat mitigation.",
    "Best Team Award, INSENDIUM 10.0 Startup Bootcamp (2025); member of a six-person team.",
    "Participated in Gnosis AI Hackathon at INCEPTA 2026 and HashItUp 24-hour National Hackathon (2025); attended an IBM watsonx Orchestrate workshop (2026).",
]


def make_pdf():
    from reportlab.lib.pagesizes import A4

    regular = "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"
    bold = "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"
    pdfmetrics.registerFont(TTFont("Resume", regular))
    pdfmetrics.registerFont(TTFont("ResumeBold", bold))
    pdfmetrics.registerFontFamily("Resume", normal="Resume", bold="ResumeBold")
    navy = colors.HexColor("#183247")
    ink = colors.HexColor("#202b35")
    muted = colors.HexColor("#52616d")
    line = colors.HexColor("#cbd6dd")
    w, h = A4
    x = 43
    right = w - 43
    width = right - x
    c = canvas.Canvas(str(PDF), pagesize=A4)
    c.setTitle("Melwin Santhosh | Resume")
    c.setAuthor(name)
    style = ParagraphStyle("body", fontName="Resume", fontSize=8.55, leading=12.6, textColor=ink, alignment=TA_LEFT)
    small = ParagraphStyle("small", parent=style, fontSize=8.1, leading=11.7)

    def paragraph(text, y, max_width=width, use=style, indent=0):
        p = Paragraph(text, use)
        _, ph = p.wrap(max_width, 1000)
        p.drawOn(c, x + indent, y - ph)
        return y - ph

    def heading(title, y):
        y -= 16
        c.setFont("ResumeBold", 9.4)
        c.setFillColor(navy)
        c.drawString(x, y, title.upper())
        c.setStrokeColor(line)
        c.setLineWidth(.65)
        c.line(x, y - 4, right, y - 4)
        return y - 13

    def bullet(text, y):
        c.setFillColor(navy)
        c.circle(x + 3, y - 5, 1.65, fill=1, stroke=0)
        return paragraph(escape(text), y, width - 15, small, 14) - 4

    # Crop the same portrait used by the site to a compact headshot.
    portrait = Image.open(PHOTO).convert("RGB")
    portrait = portrait.crop((170, 100, 920, 965)).resize((330, 380), Image.Resampling.LANCZOS)
    image_bytes = BytesIO()
    portrait.save(image_bytes, format="JPEG", quality=88)
    image_bytes.seek(0)
    c.drawImage(ImageReader(image_bytes), right - 85, h - 136, width=85, height=98, mask="auto")

    y = h - 49
    c.setFillColor(navy)
    c.setFont("ResumeBold", 22)
    c.drawString(x, y, name)
    y -= 19
    c.setFont("Resume", 10.2)
    c.drawString(x, y, role)
    y -= 21
    c.setFont("Resume", 8.1)
    c.setFillColor(muted)
    for label, link in contact[:3]:
        c.drawString(x, y, label)
        if link:
            c.linkURL(link, (x, y - 2, x + pdfmetrics.stringWidth(label, "Resume", 8.1), y + 10), relative=0)
        y -= 14
    y -= 1
    for label, link in contact[3:]:
        c.drawString(x, y, label)
        c.linkURL(link, (x, y - 2, x + pdfmetrics.stringWidth(label, "Resume", 8.1), y + 10), relative=0)
        x += pdfmetrics.stringWidth(label, "Resume", 8.1) + 17
    x = 43
    y = h - 150
    c.setStrokeColor(line)
    c.line(x, y, right, y)

    y = heading("Profile", y)
    y = paragraph(escape(summary), y) - 2

    y = heading("Experience", y)
    c.setFillColor(ink)
    c.setFont("ResumeBold", 9.1)
    c.drawString(x, y, "Platform Contributor  |  PRAX · Vantcrest Labs Pvt. Ltd.")
    c.setFont("Resume", 8.1)
    c.setFillColor(muted)
    c.drawRightString(right, y, "2026–present")
    y -= 8
    for item in experience:
        y = bullet(item, y)

    y = heading("Selected projects", y)
    for title, url, bullets in projects:
        c.setFont("ResumeBold", 9.1)
        c.setFillColor(ink)
        c.drawString(x, y, title)
        c.setFont("Resume", 8.1)
        c.setFillColor(muted)
        c.drawRightString(right, y, url)
        c.linkURL("https://" + url, (right - pdfmetrics.stringWidth(url, "Resume", 8.1), y - 2, right, y + 10), relative=0)
        y -= 8
        for item in bullets:
            y = bullet(item, y)
        y -= 3

    y = heading("Education", y)
    c.setFont("ResumeBold", 9.1)
    c.setFillColor(ink)
    c.drawString(x, y, "Integrated Master of Computer Applications")
    c.setFont("Resume", 8.1)
    c.setFillColor(muted)
    c.drawRightString(right, y, "2025–2030 (expected)")
    y -= 14
    y = paragraph("St. Joseph’s College of Engineering and Technology (SJCET), Palai", y) - 2

    y = heading("Technical skills", y)
    for label, value in skills:
        y = paragraph(f"<b>{escape(label)}:</b> {escape(value)}", y) - 5

    y = heading("Activities & recognition", y)
    for item in activities:
        y = bullet(item, y)
    if y < 36:
        raise RuntimeError(f"Resume exceeds one A4 page (bottom={y:.1f})")
    c.save()


def make_html():
    def li(items):
        return "\n".join(f"<li>{escape(item)}</li>" for item in items)

    html = f'''<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>Melwin Santhosh — Resume</title>
<style>
*{{box-sizing:border-box}} body{{margin:0;background:#edf1f3;color:#202b35;font:14px/1.5 Arial,sans-serif}}
.toolbar{{max-width:850px;margin:20px auto 10px;display:flex;justify-content:flex-end;gap:10px}}
.toolbar a,.toolbar button{{background:#183247;color:white;border:0;border-radius:4px;padding:9px 13px;text-decoration:none;font:600 13px Arial;cursor:pointer}}
main{{max-width:850px;margin:0 auto 24px;background:white;padding:48px 54px;box-shadow:0 8px 30px #1c354017}}
header{{display:flex;justify-content:space-between;gap:28px;border-bottom:1px solid #cbd6dd;padding-bottom:18px}}
h1{{font-size:30px;line-height:1.1;color:#183247;margin:0 0 5px}}.role{{font-size:15px;margin:0 0 13px}}
.contact{{display:flex;flex-wrap:wrap;gap:2px 16px;max-width:600px;font-size:12px;color:#52616d}} a{{color:#183247}}.photo{{width:105px;height:122px;object-fit:cover;object-position:center 20%;flex:none}}
h2{{font-size:12px;text-transform:uppercase;letter-spacing:.08em;color:#183247;border-bottom:1px solid #cbd6dd;margin:18px 0 9px;padding-bottom:4px}}
h3{{font-size:14px;margin:0}}p{{margin:0 0 7px}}.row{{display:flex;justify-content:space-between;gap:16px;align-items:baseline}}.date,.url{{font-size:12px;color:#52616d;white-space:nowrap}}
ul{{margin:5px 0 10px;padding-left:19px}}li{{margin:0 0 4px}}.skills p{{margin-bottom:4px}}
@media(max-width:620px){{main{{padding:28px 22px}}.photo{{width:78px;height:92px}}.row{{display:block}}.date,.url{{display:block}}h1{{font-size:25px}}}}
@media print{{@page{{size:A4;margin:12mm}}body{{background:white;font-size:10pt}}.toolbar{{display:none}}main{{max-width:none;margin:0;padding:0;box-shadow:none}}h2{{break-after:avoid}}li{{break-inside:avoid}}a{{text-decoration:none;color:inherit}}}}
</style></head><body>
<div class="toolbar"><a href="/Melwin_Santhosh_CV.pdf" download>Download PDF</a><button onclick="window.print()">Print</button></div>
<main><header><div><h1>{name}</h1><p class="role">{role}</p><div class="contact">{''.join(f'<span>{f"<a href={chr(34)+link+chr(34)}>{escape(label)}</a>" if link else escape(label)}</span>' for label,link in contact)}</div></div><img class="photo" src="/melwin-blue.png" alt="Portrait of Melwin Santhosh"></header>
<section><h2>Profile</h2><p>{escape(summary)}</p></section>
<section><h2>Experience</h2><div class="row"><h3>Platform Contributor | PRAX · Vantcrest Labs Pvt. Ltd.</h3><span class="date">2026–present</span></div><ul>{li(experience)}</ul></section>
<section><h2>Selected projects</h2>
{''.join(f'<div class="row"><h3>{escape(title)}</h3><a class="url" href="https://{escape(url)}">{escape(url)}</a></div><ul>{li(bullets)}</ul>' for title,url,bullets in projects)}
</section><section><h2>Education</h2><div class="row"><h3>Integrated Master of Computer Applications</h3><span class="date">2025–2030 (expected)</span></div><p>St. Joseph’s College of Engineering and Technology (SJCET), Palai</p></section>
<section class="skills"><h2>Technical skills</h2>{''.join(f'<p><strong>{escape(label)}:</strong> {escape(value)}</p>' for label,value in skills)}</section>
<section><h2>Activities & recognition</h2><ul>{li(activities)}</ul></section>
</main></body></html>'''
    (PUBLIC / "cv.html").write_text(html, encoding="utf-8")


def make_text():
    lines = [name.upper(), role, " | ".join(label for label, _ in contact), "", "PROFILE", summary, "", "EXPERIENCE", "Platform Contributor | PRAX · Vantcrest Labs Pvt. Ltd. | 2026–present"]
    lines += ["- " + item for item in experience]
    lines += ["", "SELECTED PROJECTS"]
    for title, url, bullets in projects:
        lines += [f"{title} | {url}"] + ["- " + item for item in bullets]
    lines += ["", "EDUCATION", "Integrated Master of Computer Applications | SJCET, Palai | 2025–2030 (expected)", "", "TECHNICAL SKILLS"]
    lines += [f"{label}: {value}" for label, value in skills]
    lines += ["", "ACTIVITIES & RECOGNITION"] + ["- " + item for item in activities]
    (PUBLIC / "cv.txt").write_text("\n".join(lines) + "\n", encoding="utf-8")


if __name__ == "__main__":
    make_pdf()
    make_html()
    make_text()
