import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const ADMIN_PASSWORD = "admin123@";
const DATA_DIR = path.join(process.cwd(), "data");

function readFile(name: string) {
  try {
    return JSON.parse(fs.readFileSync(path.join(DATA_DIR, `${name}.json`), "utf-8"));
  } catch {
    return null;
  }
}

function writeFile(name: string, data: unknown) {
  if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
  fs.writeFileSync(path.join(DATA_DIR, `${name}.json`), JSON.stringify(data, null, 2));
}

export async function GET() {
  return NextResponse.json({
    faq:           readFile("faq")           ?? [],
    testimonials:  readFile("testimonials")  ?? [],
    freeResources: readFile("free-resources") ?? { tools: [], prompts: [], resources: [] },
    siteConfig:    readFile("site-config")   ?? {},
    courses:       readFile("courses")       ?? [],
    services:      readFile("services")      ?? [],
  });
}

export async function POST(req: NextRequest) {
  const auth = req.headers.get("Authorization");
  if (auth !== `Bearer ${ADMIN_PASSWORD}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { section, data } = await req.json();

  const fileMap: Record<string, string> = {
    faq: "faq",
    testimonials: "testimonials",
    freeResources: "free-resources",
    siteConfig: "site-config",
    courses: "courses",
    services: "services",
  };

  const fileName = fileMap[section];
  if (!fileName) {
    return NextResponse.json({ error: "Unknown section" }, { status: 400 });
  }

  writeFile(fileName, data);
  return NextResponse.json({ success: true });
}
