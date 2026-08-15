import { NextResponse } from "next/server";
import { MAX_WISH_MESSAGE, MAX_WISH_NAME, type Wish } from "@/lib/wishes";

/**
 * Both verbs talk to the Apps Script deployment: `type: "wish"` on writes,
 * `?type=wishes` on reads. The env var keeps its original name so an already
 * configured deployment doesn't need re-pointing.
 */
function webhookUrl() {
  return process.env.RSVP_SHEET_WEBHOOK_URL;
}

export async function GET() {
  const url = webhookUrl();
  if (!url) {
    return NextResponse.json({ error: "RSVP_SHEET_WEBHOOK_URL chưa được cấu hình" }, { status: 500 });
  }

  try {
    // Route Handlers aren't cached by default in Next 16, but the outbound
    // fetch still needs opting out so new wishes appear without a redeploy.
    const res = await fetch(`${url}?type=wishes`, { cache: "no-store" });
    if (!res.ok) {
      return NextResponse.json({ error: "Không thể đọc lời chúc" }, { status: 502 });
    }

    const data = (await res.json()) as { wishes?: Wish[] };
    return NextResponse.json({ wishes: data.wishes ?? [] });
  } catch {
    return NextResponse.json({ error: "Không thể đọc lời chúc" }, { status: 502 });
  }
}

export async function POST(request: Request) {
  const url = webhookUrl();
  if (!url) {
    return NextResponse.json({ error: "RSVP_SHEET_WEBHOOK_URL chưa được cấu hình" }, { status: 500 });
  }

  const body = (await request.json()) as Partial<{ name: string; message: string }>;
  const name = typeof body.name === "string" ? body.name.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";

  if (!name || !message) {
    return NextResponse.json({ error: "Vui lòng nhập tên và lời chúc" }, { status: 400 });
  }
  if (name.length > MAX_WISH_NAME || message.length > MAX_WISH_MESSAGE) {
    return NextResponse.json({ error: "Nội dung quá dài" }, { status: 400 });
  }

  const sheetResponse = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify({ type: "wish", name, message }),
  });

  if (!sheetResponse.ok) {
    return NextResponse.json({ error: "Không thể lưu lời chúc" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
