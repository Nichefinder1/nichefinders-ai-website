#!/usr/bin/env python3
"""
Generate branded blog hero images for NicheFinders.ai
1200x630px | Dark navy + orange brand palette | Clean geometric design
"""

import math
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

OUTPUT_DIR = Path(__file__).parent.parent / "public" / "blog"
OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

W, H = 1200, 630

# Brand colors
NAVY_DEEP    = (0, 26, 58)       # #001A3A
NAVY         = (0, 40, 85)       # #002855
NAVY_MID     = (0, 61, 122)      # #003D7A
BLUE         = (0, 85, 164)      # #0055A4
BLUE_LIGHT   = (200, 217, 230)   # #C8D9E6
ORANGE       = (204, 85, 0)      # #CC5500
ORANGE_GLOW  = (230, 102, 22)    # #E06616
WHITE        = (255, 255, 255)
WHITE_DIM    = (200, 215, 230)
GRID_LINE    = (0, 85, 164, 25)  # blue, very transparent


def get_font(size: int, bold: bool = False) -> ImageFont.FreeTypeFont:
    """Try system fonts, fall back to default."""
    candidates = [
        "/System/Library/Fonts/Helvetica.ttc",
        "/System/Library/Fonts/SFNSDisplay.ttf",
        "/Library/Fonts/Arial.ttf",
        "/System/Library/Fonts/Supplemental/Arial.ttf",
    ]
    for path in candidates:
        try:
            return ImageFont.truetype(path, size)
        except Exception:
            pass
    return ImageFont.load_default()


def draw_background(draw: ImageDraw.ImageDraw, img: Image.Image):
    """Dark navy gradient base."""
    for y in range(H):
        t = y / H
        r = int(NAVY_DEEP[0] + (NAVY[0] - NAVY_DEEP[0]) * t)
        g = int(NAVY_DEEP[1] + (NAVY[1] - NAVY_DEEP[1]) * t)
        b = int(NAVY_DEEP[2] + (NAVY[2] - NAVY_DEEP[2]) * t)
        draw.line([(0, y), (W, y)], fill=(r, g, b))


def draw_grid(draw: ImageDraw.ImageDraw):
    """Subtle perspective grid lines."""
    grid_color = (0, 85, 164, 20)
    # Vertical lines fading to horizon
    for x in range(0, W + 1, 80):
        draw.line([(x, 0), (x, H)], fill=(0, 70, 140, 15), width=1)
    # Horizontal lines
    for y in range(0, H + 1, 60):
        draw.line([(0, y), (W, y)], fill=(0, 70, 140, 15), width=1)


def draw_orange_accent(img: Image.Image, draw: ImageDraw.ImageDraw, variant: int = 0):
    """Orange accent bar + glow at bottom."""
    # Bottom accent bar
    draw.rectangle([(0, H - 6), (W, H)], fill=ORANGE)
    # Left vertical accent
    draw.rectangle([(0, 0), (6, H)], fill=ORANGE)
    # Orange glow orb (varies by variant)
    positions = [(950, 80), (200, 100), (1000, 500), (600, 80), (900, 400),
                 (150, 400), (1050, 200), (700, 120)]
    ox, oy = positions[variant % len(positions)]
    alphas = [12, 20, 35, 55]
    for i, r in enumerate([180, 120, 70, 35]):
        overlay = Image.new("RGBA", (W, H), (0, 0, 0, 0))
        od = ImageDraw.Draw(overlay)
        od.ellipse([(ox - r, oy - r), (ox + r, oy + r)], fill=(*ORANGE, alphas[i]))
        img.paste(overlay, mask=overlay)


def draw_circuit_nodes(draw: ImageDraw.ImageDraw, variant: int = 0):
    """Abstract circuit/network node pattern — right side."""
    import random
    rng = random.Random(variant * 42 + 7)
    nodes = [(rng.randint(700, 1150), rng.randint(60, 570)) for _ in range(12)]
    # Draw connections
    for i, (x1, y1) in enumerate(nodes):
        for j, (x2, y2) in enumerate(nodes):
            if i >= j:
                continue
            dist = math.hypot(x2 - x1, y2 - y1)
            if dist < 220:
                alpha = int(80 * (1 - dist / 220))
                draw.line([(x1, y1), (x2, y2)], fill=(*BLUE, alpha), width=1)
    # Draw nodes
    for i, (x, y) in enumerate(nodes):
        r = 5 if i % 3 != 0 else 9
        color = ORANGE if i % 5 == 0 else BLUE_LIGHT
        draw.ellipse([(x - r, y - r), (x + r, y + r)], fill=color)


def draw_text_block(img: Image.Image, draw: ImageDraw.ImageDraw,
                    category: str, title: str, subtitle: str):
    """Category tag, title, subtitle — left-aligned."""
    # Category pill
    cat_font = get_font(16)
    bbox = draw.textbbox((0, 0), category.upper(), font=cat_font)
    tw = bbox[2] - bbox[0]
    px, py = 60, 60
    draw.rounded_rectangle([(px - 12, py - 8), (px + tw + 12, py + 24)],
                            radius=4, fill=ORANGE)
    draw.text((px, py), category.upper(), font=cat_font, fill=WHITE)

    # Title
    title_font = get_font(52, bold=True)
    max_w = 700
    words = title.split()
    lines, line = [], []
    for word in words:
        test = " ".join(line + [word])
        bb = draw.textbbox((0, 0), test, font=title_font)
        if bb[2] - bb[0] > max_w and line:
            lines.append(" ".join(line))
            line = [word]
        else:
            line.append(word)
    if line:
        lines.append(" ".join(line))

    ty = 120
    for i, ln in enumerate(lines[:3]):
        # Shadow
        draw.text((62, ty + 2), ln, font=title_font, fill=(0, 0, 0, 120))
        draw.text((60, ty), ln, font=title_font, fill=WHITE)
        ty += 65

    # Subtitle
    sub_font = get_font(22)
    sub_words = subtitle.split()
    sub_lines, sub_line = [], []
    for word in sub_words:
        test = " ".join(sub_line + [word])
        bb = draw.textbbox((0, 0), test, font=sub_font)
        if bb[2] - bb[0] > 660 and sub_line:
            sub_lines.append(" ".join(sub_line))
            sub_line = [word]
        else:
            sub_line.append(word)
    if sub_line:
        sub_lines.append(" ".join(sub_line))

    sy = ty + 18
    for ln in sub_lines[:2]:
        draw.text((60, sy), ln, font=sub_font, fill=(*BLUE_LIGHT, 200))
        sy += 32

    # NicheFinders brand mark
    brand_font = get_font(17)
    draw.text((60, H - 45), "NicheFinders.ai", font=brand_font, fill=(*ORANGE, 220))
    draw.text((60, H - 45), "NicheFinders.ai", font=brand_font, fill=(*ORANGE, 220))


def draw_stat_box(img: Image.Image, draw: ImageDraw.ImageDraw,
                  stats: list[tuple[str, str]]):
    """3 stats in bottom-right corner."""
    bx, by = W - 320, H - 160
    # Glass card
    overlay = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    od = ImageDraw.Draw(overlay)
    od.rounded_rectangle([(bx, by), (W - 40, H - 30)],
                          radius=12, fill=(0, 61, 122, 160))
    img.paste(overlay, mask=overlay)
    draw.rounded_rectangle([(bx, by), (W - 40, H - 30)],
                            radius=12, outline=(*BLUE, 80), width=1)

    stat_font = get_font(28, bold=True)
    label_font = get_font(13)
    col_w = (W - 40 - bx) // len(stats)
    for i, (val, label) in enumerate(stats):
        cx = bx + col_w * i + col_w // 2
        cy = by + 20
        bb = draw.textbbox((0, 0), val, font=stat_font)
        draw.text((cx - (bb[2] - bb[0]) // 2, cy), val, font=stat_font, fill=ORANGE)
        bb2 = draw.textbbox((0, 0), label, font=label_font)
        draw.text((cx - (bb2[2] - bb2[0]) // 2, cy + 40), label,
                  font=label_font, fill=BLUE_LIGHT)


IMAGES = [
    {
        "filename": "florida-business-ai-automation-nichefinders.jpg",
        "category": "AI Strategy",
        "title": "AI Automation\nfor Florida\nBusinesses",
        "subtitle": "Why Florida service companies are winning with AI",
        "stats": [("391%", "Faster Response"), ("24/7", "Coverage"), ("5–7wk", "ROI")],
        "variant": 0,
    },
    {
        "filename": "home-service-ai-lead-response-nichefinders.jpg",
        "category": "Lead Response",
        "title": "AI Lead\nResponse for\nHome Services",
        "subtitle": "Close more jobs from the same leads — automatically",
        "stats": [("60s", "Response"), ("+28%", "Close Rate"), ("0", "Missed Leads")],
        "variant": 1,
    },
    {
        "filename": "automate-home-service-business-nichefinders.jpg",
        "category": "Operations",
        "title": "How to\nAutomate Your\nService Business",
        "subtitle": "Step-by-step automation framework for home service companies",
        "stats": [("15", "Systems"), ("4–6wk", "Build Time"), ("$0", "Manual Work")],
        "variant": 2,
    },
    {
        "filename": "ai-voice-agent-call-answering-nichefinders.jpg",
        "category": "AI Voice",
        "title": "AI Voice Agents\nvs. Traditional\nCall Answering",
        "subtitle": "What the data says about AI vs. receptionists and answering services",
        "stats": [("$480/mo", "AI Agent"), ("$4,600/mo", "Receptionist"), ("38%", "Book Rate")],
        "variant": 3,
    },
    {
        "filename": "hvac-business-automation-nichefinders.jpg",
        "category": "Home Services",
        "title": "HVAC Business\nAutomation:\nWhat Moves Revenue",
        "subtitle": "The 5 systems Florida HVAC companies build first",
        "stats": [("52%", "Close Rate"), ("5x", "More Reviews"), ("−70%", "No-Shows")],
        "variant": 4,
    },
    {
        "filename": "ai-automation-contractors-florida-nichefinders.jpg",
        "category": "Contractors",
        "title": "AI Automation\nfor Florida\nContractors",
        "subtitle": "Tampa · Jacksonville · Orlando · Miami — what's working now",
        "stats": [("+28%", "Lead Conversion"), ("3.5x", "Reviews"), ("140+", "Jobs/90 Days")],
        "variant": 5,
    },
    {
        "filename": "ai-operating-system-business-nichefinders.jpg",
        "category": "AI Strategy",
        "title": "What Is an\nAI Operating\nSystem?",
        "subtitle": "Point solutions automate one thing. An AI OS automates everything.",
        "stats": [("15", "Clusters"), ("6mo", "Build"), ("$0", "Vendor Lock-in")],
        "variant": 6,
    },
    {
        "filename": "ai-automation-vs-hiring-roi-nichefinders.jpg",
        "category": "ROI Analysis",
        "title": "AI Automation\nvs. Hiring:\nThe Real Math",
        "subtitle": "How to make the right call for your service business",
        "stats": [("$42K", "Annual Savings"), ("3–4wk", "Go Live"), ("24/7", "vs. 40hrs")],
        "variant": 7,
    },
]


def generate(item: dict):
    filename = item["filename"]
    print(f"Generating: {filename}...", end=" ", flush=True)

    img = Image.new("RGBA", (W, H), NAVY_DEEP)
    draw = ImageDraw.Draw(img, "RGBA")

    draw_background(draw, img)
    draw_grid(draw)
    draw_orange_accent(img, draw, item["variant"])
    draw_circuit_nodes(draw, item["variant"])
    draw_text_block(img, draw, item["category"], item["title"], item["subtitle"])
    draw_stat_box(img, draw, item["stats"])

    # Convert to RGB JPEG
    rgb = img.convert("RGB")
    out = OUTPUT_DIR / filename
    rgb.save(out, "JPEG", quality=92, optimize=True)
    size_kb = out.stat().st_size // 1024
    print(f"OK ({size_kb}KB)")


if __name__ == "__main__":
    for item in IMAGES:
        generate(item)
    print(f"\nDone: {len(IMAGES)}/8 images generated")
