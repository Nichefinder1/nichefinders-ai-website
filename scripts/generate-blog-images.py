#!/usr/bin/env python3
"""Generate AI-branded blog hero images using Pollinations.ai (free, no billing required)."""

import sys
import time
import urllib.request
import urllib.parse
from pathlib import Path

OUTPUT_DIR = Path(__file__).parent.parent / "public" / "blog"
OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

IMAGES = [
    {
        "filename": "florida-business-ai-automation-nichefinders.jpg",
        "prompt": (
            "Professional business photography style. A modern Florida business owner in a clean office "
            "reviewing AI automation dashboards on dual monitors showing lead conversion charts and "
            "workflow diagrams. Dark navy and orange color palette. Confident, forward-thinking atmosphere. "
            "High-end corporate photography, shallow depth of field, crisp details. No text overlays."
        ),
    },
    {
        "filename": "home-service-ai-lead-response-nichefinders.jpg",
        "prompt": (
            "Professional photography. An HVAC technician in branded uniform checking his smartphone "
            "showing instant lead notifications and automated text responses, with an air conditioning "
            "unit in the background. Florida suburban home exterior. Dark navy and orange brand colors "
            "subtly present. Photorealistic, sharp focus, natural lighting. No text overlays."
        ),
    },
    {
        "filename": "automate-home-service-business-nichefinders.jpg",
        "prompt": (
            "Professional business concept photography. A clean, organized operations dashboard on a "
            "large monitor showing interconnected automation workflows for a home service company — "
            "scheduling, lead routing, reviews, invoicing all connected. Modern office environment, "
            "dark background with glowing navy and orange UI elements. Tech-forward, professional. "
            "No text overlays."
        ),
    },
    {
        "filename": "ai-voice-agent-call-answering-nichefinders.jpg",
        "prompt": (
            "Professional technology photography. A sleek smartphone displaying an AI voice assistant "
            "interface with waveform visualization, alongside a traditional office phone handset. "
            "Modern minimalist desk surface, dark navy and orange accent lighting. Contrast between "
            "old and new call answering methods. Sharp, clean, corporate aesthetic. No text overlays."
        ),
    },
    {
        "filename": "hvac-business-automation-nichefinders.jpg",
        "prompt": (
            "Professional photography. Florida HVAC service business scene: a branded service van "
            "parked at a residential home, technician tablet in foreground showing automated scheduling "
            "and job confirmation screens. Warm Florida sunlight, lush landscaping. Dark navy and orange "
            "uniform. High-end photography, confident operational feel. No text overlays."
        ),
    },
    {
        "filename": "ai-automation-contractors-florida-nichefinders.jpg",
        "prompt": (
            "Professional photography. Florida contractor standing confidently on a commercial job site "
            "in Tampa, reviewing automated lead and project data on a rugged tablet. Skyline visible in "
            "background, hard hat and branded gear, construction equipment around. Dark navy and orange "
            "color palette. Competent, growth-focused business owner. No text overlays."
        ),
    },
    {
        "filename": "ai-operating-system-business-nichefinders.jpg",
        "prompt": (
            "Professional concept photography. An interconnected neural network visualization overlaid "
            "on a modern Florida business interior — showing 15 operational nodes all connected: leads, "
            "scheduling, reviews, invoicing, reporting glowing in dark navy and orange. Clean, futuristic, "
            "professional. The AI OS as a living system. High-end digital art meets corporate photography. "
            "No text overlays."
        ),
    },
    {
        "filename": "ai-automation-vs-hiring-roi-nichefinders.jpg",
        "prompt": (
            "Professional business photography. A split-scene concept: left side shows a traditional "
            "office coordinator at a desk with phone and paperwork; right side shows sleek AI automation "
            "dashboards with real-time metrics and zero manual effort. Dark navy background, orange "
            "accent lighting on the automation side. Clean ROI comparison visual. No text overlays."
        ),
    },
]

def generate_image(item: dict) -> bool:
    filename = item["filename"]
    output_path = OUTPUT_DIR / filename
    print(f"Generating: {filename}...")

    encoded = urllib.parse.quote(item["prompt"])
    seed = abs(hash(filename)) % 99999
    url = f"https://image.pollinations.ai/prompt/{encoded}?width=1200&height=630&model=flux&seed={seed}&nologo=true"

    for attempt in range(3):
        try:
            if attempt > 0:
                wait = 30 * attempt
                print(f"  Retry {attempt} — waiting {wait}s...")
                time.sleep(wait)

            req = urllib.request.Request(url, headers={"User-Agent": "NicheFinders/1.0"})
            with urllib.request.urlopen(req, timeout=90) as resp:
                image_bytes = resp.read()

            if len(image_bytes) < 10000:
                print(f"  FAILED: Response too small ({len(image_bytes)} bytes)")
                continue

            output_path.write_bytes(image_bytes)
            size_kb = len(image_bytes) // 1024
            print(f"  OK: {filename} ({size_kb}KB)")
            return True

        except Exception as e:
            print(f"  Attempt {attempt + 1} failed: {e}")

    return False


if __name__ == "__main__":
    success = 0
    failed = []

    for i, item in enumerate(IMAGES):
        if (OUTPUT_DIR / item["filename"]).exists() and (OUTPUT_DIR / item["filename"]).stat().st_size > 10000:
            print(f"  SKIP (exists): {item['filename']}")
            success += 1
            continue
        if generate_image(item):
            success += 1
        else:
            failed.append(item["filename"])
        if i < len(IMAGES) - 1:
            time.sleep(15)

    print(f"\nDone: {success}/{len(IMAGES)} images generated")
    if failed:
        print("Failed:")
        for f in failed:
            print(f"  - {f}")
        sys.exit(1)
