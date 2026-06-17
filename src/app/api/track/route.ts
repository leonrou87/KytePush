import { createHash } from "crypto";
import type { NextRequest } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// 1x1 transparent GIF
const PIXEL = Buffer.from(
  "R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
  "base64"
);

function pixel() {
  return new Response(PIXEL, {
    status: 200,
    headers: {
      "Content-Type": "image/gif",
      "Cache-Control": "no-store, no-cache, must-revalidate, private",
      "Access-Control-Allow-Origin": "*",
    },
  });
}

export async function GET(req: NextRequest) {
  try {
    const url = new URL(req.url);
    const q = url.searchParams;
    const site = (q.get("s") || "unknown").slice(0, 48);
    const path = (q.get("p") || "/").slice(0, 256);
    const referrer = (q.get("r") || "").slice(0, 512) || null;

    const h = req.headers;
    const ua = (h.get("user-agent") || "").slice(0, 300);
    const ip =
      (h.get("x-forwarded-for") || "").split(",")[0].trim() ||
      h.get("x-real-ip") ||
      "0.0.0.0";
    const country = h.get("x-vercel-ip-country") || null;

    // Anonymous daily visitor id — no raw IP stored
    const day = new Date().toISOString().slice(0, 10);
    const visitor = createHash("sha256")
      .update(`${ip}|${ua}|${day}|kytepush`)
      .digest("hex")
      .slice(0, 16);

    const SUPABASE_URL = process.env.SUPABASE_URL;
    const KEY = process.env.SUPABASE_SERVICE_KEY;
    if (SUPABASE_URL && KEY) {
      // ignore obvious bots
      const isBot = /bot|crawl|spider|preview|facebookexternalhit|slurp/i.test(ua);
      if (!isBot) {
        await fetch(`${SUPABASE_URL}/rest/v1/page_events`, {
          method: "POST",
          headers: {
            apikey: KEY,
            Authorization: `Bearer ${KEY}`,
            "Content-Type": "application/json",
            Prefer: "return=minimal",
          },
          body: JSON.stringify({ site, path, referrer, visitor, country, ua }),
        });
      }
    }
  } catch {
    // never let tracking break the page that called us
  }
  return pixel();
}
