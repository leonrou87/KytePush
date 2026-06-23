import type { NextRequest } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const EMAIL = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));
    const email = String(body?.email ?? "").trim().toLowerCase().slice(0, 200);
    if (!EMAIL.test(email)) {
      return Response.json({ ok: false, error: "Enter a valid email address." }, { status: 400 });
    }

    const base = process.env.SUPABASE_URL;
    const key = process.env.SUPABASE_SERVICE_KEY;
    if (!base || !key) {
      return Response.json({ ok: false, error: "Waitlist is not configured." }, { status: 500 });
    }

    const res = await fetch(`${base}/rest/v1/waitlist`, {
      method: "POST",
      headers: {
        apikey: key,
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
        Prefer: "return=minimal",
      },
      body: JSON.stringify({
        email,
        source: String(body?.source ?? "home").slice(0, 48),
        referrer: (req.headers.get("referer") || "").slice(0, 512) || null,
        user_agent: (req.headers.get("user-agent") || "").slice(0, 300),
      }),
    });

    if (res.status === 201 || res.status === 204) return Response.json({ ok: true });
    if (res.status === 409) return Response.json({ ok: true, already: true }); // already on list
    return Response.json({ ok: false, error: "Something went wrong. Try again." }, { status: 502 });
  } catch {
    return Response.json({ ok: false, error: "Something went wrong. Try again." }, { status: 500 });
  }
}
