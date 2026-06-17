import Link from "next/link";
import { isAuthed, signOut } from "./actions";
import { PasswordGate } from "./PasswordGate";

export const dynamic = "force-dynamic";
export const metadata = { title: "KYTEPUSH — Fleet Analytics" };

/* ── Fleet definition ───────────────────────────────────────────────── */
type Node = { key: string; label: string; url: string; cat: string };
const FLEET: Node[] = [
  { key: "kytepush", label: "Core", url: "https://kytepush.com", cat: "Company" },
  { key: "curated", label: "Curated", url: "https://curated.kytepush.com", cat: "Commerce" },
  { key: "faultlines", label: "Fault Lines", url: "https://faultlines.kytepush.com", cat: "Media" },
  { key: "stitch", label: "Stitch", url: "https://stitch.kytepush.com", cat: "Travel" },
  { key: "diamondedge", label: "Edge", url: "https://edge.kytepush.com", cat: "Sport" },
  { key: "yieldmap", label: "YieldMap", url: "https://yieldmap.kytepush.com", cat: "Finance" },
];
// map tracking "site" → fleet label
const SITE_LABEL: Record<string, string> = {
  core: "Core", curated: "Curated", faultlines: "Fault Lines",
  stitch: "Stitch", edge: "Edge", diamondedge: "Edge", yieldmap: "YieldMap",
};

type Probe = { node: Node; status: number; ms: number; online: boolean };
type Deploys = { key: string; total: number; last: number | null; week: number; byDay: number[] };

async function probe(node: Node): Promise<Probe> {
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), 8000);
  const start = Date.now();
  try {
    const res = await fetch(node.url, { method: "GET", cache: "no-store", redirect: "follow", signal: ctrl.signal });
    return { node, status: res.status, ms: Date.now() - start, online: res.status < 400 };
  } catch {
    return { node, status: 0, ms: Date.now() - start, online: false };
  } finally {
    clearTimeout(t);
  }
}

async function deploys(key: string): Promise<Deploys> {
  const token = process.env.VERCEL_TOKEN;
  const team = process.env.VERCEL_TEAM_ID;
  const empty: Deploys = { key, total: 0, last: null, week: 0, byDay: [0, 0, 0, 0, 0, 0, 0] };
  if (!token) return empty;
  try {
    const url = `https://api.vercel.com/v6/deployments?app=${key}&teamId=${team}&target=production&limit=100`;
    const res = await fetch(url, { headers: { Authorization: `Bearer ${token}` }, cache: "no-store" });
    if (!res.ok) return empty;
    const data = await res.json();
    const list: { createdAt: number }[] = data.deployments ?? [];
    const now = Date.now();
    const byDay = [0, 0, 0, 0, 0, 0, 0];
    let week = 0;
    for (const d of list) {
      const dayIdx = Math.floor((now - d.createdAt) / 86_400_000);
      if (dayIdx >= 0 && dayIdx < 7) { byDay[6 - dayIdx] += 1; week += 1; }
    }
    return { key, total: list.length, last: list[0]?.createdAt ?? null, week, byDay };
  } catch { return empty; }
}

type Vis = {
  ok: boolean;
  pv: number;
  visitors: number;
  byDay: number[];
  bySite: { label: string; n: number }[];
  topPages: { k: string; n: number }[];
  topRef: { k: string; n: number }[];
};

async function visitorStats(): Promise<Vis> {
  const base = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_KEY;
  const empty: Vis = { ok: false, pv: 0, visitors: 0, byDay: [0, 0, 0, 0, 0, 0, 0], bySite: [], topPages: [], topRef: [] };
  if (!base || !key) return empty;
  try {
    const since = new Date(Date.now() - 7 * 86_400_000).toISOString();
    const url = `${base}/rest/v1/page_events?select=site,path,referrer,visitor,created_at&created_at=gte.${since}&order=created_at.desc&limit=20000`;
    const res = await fetch(url, { headers: { apikey: key, Authorization: `Bearer ${key}` }, cache: "no-store" });
    if (!res.ok) return empty;
    const rows: { site: string; path: string; referrer: string | null; visitor: string; created_at: string }[] = await res.json();
    const now = Date.now();
    const byDay = [0, 0, 0, 0, 0, 0, 0];
    const visitors = new Set<string>();
    const site = new Map<string, number>();
    const page = new Map<string, number>();
    const ref = new Map<string, number>();
    for (const r of rows) {
      const dayIdx = Math.floor((now - new Date(r.created_at).getTime()) / 86_400_000);
      if (dayIdx >= 0 && dayIdx < 7) byDay[6 - dayIdx] += 1;
      if (r.visitor) visitors.add(r.visitor);
      const sl = SITE_LABEL[r.site] ?? r.site;
      site.set(sl, (site.get(sl) ?? 0) + 1);
      const pk = `${SITE_LABEL[r.site] ?? r.site} ${r.path}`;
      page.set(pk, (page.get(pk) ?? 0) + 1);
      let rl = "Direct";
      if (r.referrer) { try { rl = new URL(r.referrer).hostname.replace(/^www\./, ""); } catch { rl = "Other"; } }
      if (rl.endsWith("kytepush.com")) rl = "Internal";
      ref.set(rl, (ref.get(rl) ?? 0) + 1);
    }
    const top = (m: Map<string, number>, n: number) =>
      [...m.entries()].sort((a, b) => b[1] - a[1]).slice(0, n).map(([k, v]) => ({ k, n: v }));
    return {
      ok: true,
      pv: rows.length,
      visitors: visitors.size,
      byDay,
      bySite: top(site, 8).map((x) => ({ label: x.k, n: x.n })),
      topPages: top(page, 6),
      topRef: top(ref, 6),
    };
  } catch { return empty; }
}

function ago(ts: number | null): string {
  if (!ts) return "—";
  const s = Math.floor((Date.now() - ts) / 1000);
  if (s < 60) return `${s}s ago`;
  if (s < 3600) return `${Math.floor(s / 60)}m ago`;
  if (s < 86400) return `${Math.floor(s / 3600)}h ago`;
  return `${Math.floor(s / 86400)}d ago`;
}

const dayLabels = () => {
  const out: string[] = [];
  const names = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  for (let i = 6; i >= 0; i--) out.push(names[new Date(Date.now() - i * 86_400_000).getDay()]);
  return out;
};

export default async function Analytics() {
  if (!(await isAuthed())) return <PasswordGate />;

  const [probes, deployData, vis] = await Promise.all([
    Promise.all(FLEET.map(probe)),
    Promise.all(FLEET.map((n) => deploys(n.key))),
    visitorStats(),
  ]);
  const dep = Object.fromEntries(deployData.map((d) => [d.key, d]));

  const online = probes.filter((p) => p.online).length;
  const onlineProbes = probes.filter((p) => p.online && p.ms > 0);
  const avgMs = onlineProbes.length ? Math.round(onlineProbes.reduce((a, p) => a + p.ms, 0) / onlineProbes.length) : 0;
  const totalDeploys = deployData.reduce((a, d) => a + d.total, 0);
  const weekDeploys = deployData.reduce((a, d) => a + d.week, 0);
  const fleetByDay = Array.from({ length: 7 }, (_, i) => deployData.reduce((a, d) => a + d.byDay[i], 0));
  const maxDeploy = Math.max(1, ...fleetByDay);
  const maxPv = Math.max(1, ...vis.byDay);
  const maxSite = Math.max(1, ...vis.bySite.map((s) => s.n));
  const labels = dayLabels();
  const stamp = new Date().toISOString().replace("T", " ").slice(0, 19) + " UTC";

  const Stat = ({ v, l, accent }: { v: string; l: string; accent?: boolean }) => (
    <div className="bg-background border border-border p-6">
      <div className={`font-display text-3xl sm:text-4xl font-extrabold ${accent ? "animate-gradient-text" : "text-foreground"}`}>{v}</div>
      <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-dim mt-1.5">{l}</div>
    </div>
  );

  const BarRow = ({ label, n, max }: { label: string; n: number; max: number }) => (
    <div className="flex items-center gap-3 py-2">
      <span className="font-mono text-[11px] text-foreground w-28 shrink-0 truncate" title={label}>{label}</span>
      <div className="flex-1 h-1.5 bg-surface relative overflow-hidden">
        <div className="absolute inset-y-0 left-0 bg-accent/60" style={{ width: `${(n / max) * 100}%` }} />
      </div>
      <span className="font-mono text-[11px] text-muted w-12 text-right">{n}</span>
    </div>
  );

  return (
    <div className="relative min-h-screen scanlines">
      <div className="absolute inset-0 z-0 tech-grid opacity-40" />
      <div className="nebula w-[40rem] h-[40rem] -top-40 -right-32 opacity-40 z-0" style={{ background: "radial-gradient(circle, rgba(90,162,255,0.16), transparent 65%)" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-14">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-[0.35em] text-accent">// Operations</span>
            <h1 className="font-display text-4xl sm:text-6xl font-extrabold uppercase tracking-tight mt-4 text-foreground">
              Fleet <span className="animate-gradient-text">Analytics</span>
            </h1>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-dim mt-3">Live telemetry · synced {stamp}</p>
          </div>
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-live">
              <span className="w-2 h-2 rounded-full bg-live pulse-dot" />{online}/{FLEET.length} online
            </span>
            <form action={signOut}>
              <button className="font-mono text-[10px] uppercase tracking-wider text-muted-dim hover:text-foreground border border-border px-3 py-1.5 transition-colors">Lock</button>
            </form>
          </div>
        </div>

        {/* Telemetry row */}
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-px bg-border border border-border mb-8">
          <Stat v={vis.pv.toLocaleString()} l="Pageviews · 7d" accent />
          <Stat v={vis.visitors.toLocaleString()} l="Visitors · 7d" accent />
          <Stat v={`${online}/${FLEET.length}`} l="Systems online" />
          <Stat v={`${avgMs}ms`} l="Avg response" />
          <Stat v={String(weekDeploys)} l="Deploys · 7d" />
          <Stat v={String(totalDeploys)} l="Deploys · total" />
        </div>

        {/* ── VISITOR ANALYTICS ─────────────────────────────────────── */}
        <h2 className="font-mono text-[11px] uppercase tracking-[0.25em] text-accent mb-4">// Visitor analytics · last 7 days</h2>
        {!vis.ok || vis.pv === 0 ? (
          <div className="bg-background border border-dashed border-border p-10 text-center mb-8">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-amber mb-4 animate-glow" />
            <p className="font-display text-lg font-bold uppercase tracking-tight text-foreground mb-2">Collecting…</p>
            <p className="text-sm text-muted leading-relaxed max-w-md mx-auto">
              The tracking beacon is live and the pipeline is connected. Pageviews
              will appear here as visitors arrive across the fleet.
            </p>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-px bg-border border border-border mb-8">
            {/* Trend */}
            <div className="bg-background p-7 lg:col-span-2">
              <h3 className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-dim mb-7">Pageviews · daily</h3>
              <div className="flex items-end justify-between gap-2 h-44">
                {vis.byDay.map((v, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-2">
                    <span className="font-mono text-[10px] text-muted">{v || ""}</span>
                    <div className="w-full bg-surface relative" style={{ height: "100%" }}>
                      <div className="absolute bottom-0 left-0 right-0 bg-accent/70 border-t border-accent" style={{ height: `${(v / maxPv) * 100}%` }} />
                    </div>
                    <span className="font-mono text-[9px] uppercase tracking-wider text-muted-dim">{labels[i]}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* By site */}
            <div className="bg-background p-7">
              <h3 className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-dim mb-5">By product</h3>
              <div>{vis.bySite.map((s) => <BarRow key={s.label} label={s.label} n={s.n} max={maxSite} />)}</div>
            </div>
            {/* Top pages */}
            <div className="bg-background p-7 lg:col-span-2">
              <h3 className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-dim mb-5">Top pages</h3>
              <div className="space-y-1.5">
                {vis.topPages.map((p) => (
                  <div key={p.k} className="flex items-center justify-between gap-4 font-mono text-[11px]">
                    <span className="text-foreground truncate" title={p.k}>{p.k}</span>
                    <span className="text-muted shrink-0">{p.n}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Sources */}
            <div className="bg-background p-7">
              <h3 className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-dim mb-5">Top sources</h3>
              <div className="space-y-1.5">
                {vis.topRef.map((r) => (
                  <div key={r.k} className="flex items-center justify-between gap-4 font-mono text-[11px]">
                    <span className="text-foreground truncate" title={r.k}>{r.k}</span>
                    <span className="text-muted shrink-0">{r.n}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── LIVE SYSTEMS ──────────────────────────────────────────── */}
        <h2 className="font-mono text-[11px] uppercase tracking-[0.25em] text-accent mb-4">// Live systems</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border mb-8">
          {probes.map((p) => {
            const d = dep[p.node.key];
            return (
              <div key={p.node.key} className="bg-background p-5">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2.5">
                    <span className={`w-2 h-2 rounded-full ${p.online ? "bg-live pulse-dot" : "bg-rose"}`} />
                    <span className="font-display text-base font-bold uppercase tracking-tight text-foreground">{p.node.label}</span>
                    <span className="font-mono text-[9px] uppercase tracking-widest text-muted-dim">{p.node.cat}</span>
                  </div>
                  <span className={`font-mono text-[10px] ${p.online ? "text-live" : "text-rose"}`}>{p.online ? p.status : "DOWN"}</span>
                </div>
                <div className="grid grid-cols-3 gap-2 font-mono text-[10px] uppercase tracking-wider text-muted-dim">
                  <div><span className="block text-foreground text-sm font-sans font-semibold normal-case tracking-normal">{p.ms}ms</span>latency</div>
                  <div><span className="block text-foreground text-sm font-sans font-semibold normal-case tracking-normal">{d?.week ?? 0}</span>deploys 7d</div>
                  <div><span className="block text-foreground text-sm font-sans font-semibold normal-case tracking-normal">{ago(d?.last ?? null)}</span>shipped</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── DEPLOYMENT ACTIVITY ───────────────────────────────────── */}
        <div className="grid lg:grid-cols-2 gap-5">
          <div className="bg-background border border-border p-7">
            <h2 className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-dim mb-1">Deployment activity</h2>
            <p className="font-mono text-[10px] text-muted-dim mb-7">Production ships across the fleet · last 7 days</p>
            <div className="flex items-end justify-between gap-2 h-40">
              {fleetByDay.map((v, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-2">
                  <span className="font-mono text-[10px] text-muted">{v || ""}</span>
                  <div className="w-full bg-surface relative" style={{ height: "100%" }}>
                    <div className="absolute bottom-0 left-0 right-0 bg-accent/70 border-t border-accent" style={{ height: `${(v / maxDeploy) * 100}%` }} />
                  </div>
                  <span className="font-mono text-[9px] uppercase tracking-wider text-muted-dim">{labels[i]}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-background border border-border p-7">
            <h2 className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-dim mb-5">System ledger</h2>
            <div className="space-y-px">
              {[...deployData].sort((a, b) => b.total - a.total).map((d) => {
                const node = FLEET.find((n) => n.key === d.key)!;
                const max = Math.max(1, ...deployData.map((x) => x.total));
                return (
                  <div key={d.key} className="flex items-center gap-3 py-2">
                    <span className="font-display text-sm font-bold uppercase tracking-tight text-foreground w-24 shrink-0">{node.label}</span>
                    <div className="flex-1 h-1.5 bg-surface relative overflow-hidden">
                      <div className="absolute inset-y-0 left-0 bg-accent/60" style={{ width: `${(d.total / max) * 100}%` }} />
                    </div>
                    <span className="font-mono text-[11px] text-muted w-20 text-right">{d.total} dep</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-10 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-muted-dim">
          <Link href="/" className="hover:text-foreground transition-colors">← Back to site</Link>
          <span>KYTEPUSH OPS · {stamp}</span>
        </div>
      </div>
    </div>
  );
}
