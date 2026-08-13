import { NextResponse } from "next/server";

type RsvpPayload = {
  name: string;
  wish: string;
  attending: string;
  guests: string;
  side: string;
};

export async function POST(request: Request) {
  const webhookUrl = process.env.RSVP_SHEET_WEBHOOK_URL;
  if (!webhookUrl) {
    return NextResponse.json({ error: "RSVP_SHEET_WEBHOOK_URL chưa được cấu hình" }, { status: 500 });
  }

  const body = (await request.json()) as Partial<RsvpPayload>;
  if (!body.name || typeof body.name !== "string") {
    return NextResponse.json({ error: "Thiếu tên khách mời" }, { status: 400 });
  }

  const payload: RsvpPayload = {
    name: body.name,
    wish: body.wish ?? "",
    attending: body.attending ?? "",
    guests: body.guests ?? "",
    side: body.side ?? "",
  };

  const sheetResponse = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify(payload),
  });

  if (!sheetResponse.ok) {
    return NextResponse.json({ error: "Không thể lưu vào Google Sheet" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
