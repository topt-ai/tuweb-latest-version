import { NextRequest, NextResponse } from 'next/server';

const N8N_WEBHOOK_URL = 'https://tommy-1.app.n8n.cloud/webhook/276df222-63bf-4020-a35b-23c47416bdb8';

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'invalid_json' }, { status: 400 });
  }

  const { name, phone, email, website, message } = (body ?? {}) as Record<string, unknown>;

  if (
    typeof name !== 'string' || !name.trim() ||
    typeof phone !== 'string' || !phone.trim() ||
    typeof email !== 'string' || !email.trim() ||
    typeof message !== 'string' || !message.trim() ||
    (website !== undefined && typeof website !== 'string')
  ) {
    return NextResponse.json({ ok: false, error: 'missing_fields' }, { status: 400 });
  }

  try {
    const res = await fetch(N8N_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: name.trim(),
        phone: phone.trim(),
        email: email.trim(),
        website: typeof website === 'string' ? website.trim() : '',
        message: message.trim(),
        source: 'tuwebsv.com',
        submittedAt: new Date().toISOString(),
      }),
    });

    if (!res.ok) {
      return NextResponse.json({ ok: false, error: 'webhook_error' }, { status: 502 });
    }
  } catch {
    return NextResponse.json({ ok: false, error: 'webhook_unreachable' }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
