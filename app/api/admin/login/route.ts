import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { password } = await req.json();
    const valid = password && password === (process.env.ADMIN_PASSWORD ?? "admin123@");
    if (valid) return NextResponse.json({ ok: true });
    return NextResponse.json({ ok: false }, { status: 401 });
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
}
