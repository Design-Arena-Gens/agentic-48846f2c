#!/usr/bin/env node
/* eslint-disable no-console */

import { mkdirSync, existsSync } from "node:fs";
import { spawnSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";
import ffmpegPath from "ffmpeg-static";

if (!ffmpegPath) {
  console.error("Unable to resolve ffmpeg binary path from ffmpeg-static.");
  process.exit(1);
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..", "");
const outputDir = path.join(projectRoot, "public", "videos");
const outputFile = path.join(outputDir, "iphone-17-pro-max.mp4");

mkdirSync(outputDir, { recursive: true });

const fontCandidates = [
  "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf",
  "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",
  "/usr/share/fonts/opentype/liberation2/LiberationSans-Bold.ttf"
];

const fontPath = fontCandidates.find((candidate) => existsSync(candidate));

if (!fontPath) {
  console.error("No suitable font file found for drawtext filter.");
  process.exit(1);
}

const sanitizeText = (text) =>
  text
    .replace(/:/g, "\\:")
    .replace(/,/g, "\\,")
    .replace(/'/g, "\\'");

const textLayers = [
  {
    text: "iPhone 17 Pro Max",
    start: 0,
    end: 5,
    y: "(h/2 - 300)",
    size: 150,
    color: "white"
  },
  {
    text: "Titanium vision. Neural velocity. Cinematic mastery.",
    start: 0.6,
    end: 6.6,
    y: "(h/2 - 160)",
    size: 56,
    color: "0xD6DBFF"
  },
  {
    text: "FusionQuad Optics",
    start: 5.25,
    end: 10.25,
    y: "(h/2 - 230)",
    size: 120,
    color: "white"
  },
  {
    text: "Adaptive 48MP prisma sensor with neural spectrum night vision",
    start: 5.75,
    end: 11,
    y: "(h/2 - 90)",
    size: 48,
    color: "0xD6DBFF"
  },
  {
    text: "A19 Neural Fusion",
    start: 10.5,
    end: 15,
    y: "(h/2 - 220)",
    size: 120,
    color: "white"
  },
  {
    text: "Ray traced gaming · ProRes 8K · VisionOS live stage",
    start: 11,
    end: 16,
    y: "(h/2 - 80)",
    size: 48,
    color: "0xD6DBFF"
  },
  {
    text: "Pre-order November 2025",
    start: 15.5,
    end: 20,
    y: "(h/2 - 200)",
    size: 110,
    color: "white"
  },
  {
    text: "Available in Nebula Black · Starlight Blue · Aurora Sand",
    start: 16,
    end: 20,
    y: "(h/2 - 40)",
    size: 50,
    color: "0xD6DBFF"
  }
];

const drawboxLayers = [
  "drawbox=x=0:y=0:w=iw:h=ih:color=0x05060A:t=fill",
  "drawbox=x=0:y=0:w=iw:h=ih:color=0x0d1220@0.65:t=fill",
  "drawbox=x=0:y=0:w=iw:h=ih/2:color=0x4b6bff@0.18:t=fill:enable='between(t,0,10)'",
  "drawbox=x=0:y=ih/2:w=iw:h=ih/2:color=0xff3d8e@0.16:t=fill:enable='between(t,10,20)'",
  "drawbox=x=w/2-20:y=0:w=40:h=ih:color=0xffffff@0.04:t=fill:enable='between(t,4,16)'",
  "drawbox=x=0:y=ih*0.72:w=iw:h=ih*0.28:color=0xffffff@0.05:t=fill:enable='between(t,8,20)'"
];

const textFilters = textLayers.map((layer) => {
  const { text, start, end, y, size, color } = layer;
  return `drawtext=fontfile=${fontPath}:text='${sanitizeText(text)}':fontsize=${size}:fontcolor=${color}:x=(w-text_w)/2:y=${y}:enable='between(t,${start},${end})':line_spacing=10`;
});

const filterGraph = [...drawboxLayers, ...textFilters, "format=yuv420p"].join(",");

const args = [
  "-y",
  "-f",
  "lavfi",
  "-i",
  "color=c=0x05060A:s=3840x2160:d=20",
  "-f",
  "lavfi",
  "-i",
  "anullsrc=channel_layout=stereo:sample_rate=48000",
  "-vf",
  filterGraph,
  "-shortest",
  "-c:v",
  "libx264",
  "-preset",
  "medium",
  "-profile:v",
  "high",
  "-pix_fmt",
  "yuv420p",
  "-crf",
  "18",
  "-c:a",
  "aac",
  "-b:a",
  "256k",
  outputFile
];

console.log("Generating video asset using ffmpeg-static...");

const render = spawnSync(ffmpegPath, args, { stdio: "inherit" });

if (render.status !== 0) {
  console.error(`ffmpeg exited with status ${render.status}`);
  process.exit(render.status ?? 1);
}

console.log(`Video successfully rendered to ${outputFile}`);
