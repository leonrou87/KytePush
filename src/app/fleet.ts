// The KytePush suite — single source of truth for the homepage and footer.

export type DomainId = "sports" | "media" | "life" | "golf" | "markets" | "tools";
export type Status = "live" | "beta" | "lab";

export type Domain = { id: DomainId; name: string; blurb: string; color: string };

export const domains: Domain[] = [
  { id: "sports", name: "Sports intelligence", blurb: "Models that watch the game with you and keep an honest record.", color: "#8fa6ff" },
  { id: "media", name: "Media & culture", blurb: "New shapes for news, style and fame.", color: "#ff9a7a" },
  { id: "life", name: "Everyday life", blurb: "Quiet software for families, trips and homes.", color: "#7fe8cc" },
  { id: "golf", name: "Golf", blurb: "Tee sheets, scorecards and the side bets that settle themselves.", color: "#b4e68c" },
  { id: "markets", name: "Markets", blurb: "Research desks for prediction markets and equities.", color: "#ffcb66" },
  { id: "tools", name: "Assistants & creation", blurb: "Agents that think with you and build with you.", color: "#c5adff" },
];

export type Product = {
  name: string;
  domain: DomainId;
  line: string;
  href: string | null;
  host?: string;
  shot?: string;
  status: Status;
};

export const products: Product[] = [
  { name: "DiamondEdge", shot: "/shots/diamondedge.webp", domain: "sports", status: "live", href: "https://diamondedge.kytepush.com", host: "diamondedge.kytepush.com",
    line: "Baseball game stories and picks, with every pick graded in public, win or lose." },
  { name: "Inplay", shot: "/shots/inplay.webp", domain: "sports", status: "live", href: "https://inplay.kytepush.com", host: "inplay.kytepush.com",
    line: "Live projected totals for MLB, NBA, NFL and NHL, with a recorded call at every decision moment." },
  { name: "Ice", shot: "/shots/ice.webp", domain: "sports", status: "live", href: "https://nhl.kytepush.com", host: "nhl.kytepush.com",
    line: "Hockey intelligence: model win probabilities set against the market, game by game." },

  { name: "Fault Lines", shot: "/shots/faultlines.webp", domain: "media", status: "live", href: "https://faultlines.kytepush.com", host: "faultlines.kytepush.com",
    line: "The day's top stories told neutrally, plus how the left and the right each frame the same facts." },
  { name: "Clout", shot: "/shots/clout.webp", domain: "media", status: "live", href: "https://clout.kytepush.com", host: "clout.kytepush.com",
    line: "Collectible cards for the people moving culture, each priced by a live momentum index." },
  { name: "Curated", shot: "/shots/curated.webp", domain: "media", status: "live", href: "https://curated.kytepush.com", host: "curated.kytepush.com",
    line: "A magazine you can shop: complete looks from real brands, found by occasion or aesthetic." },

  { name: "Stitch", shot: "/shots/stitch.webp", domain: "life", status: "live", href: "https://stitch.kytepush.com", host: "stitch.kytepush.com",
    line: "Say where you're going and get a day-by-day itinerary with real places and real prices." },
  { name: "Nanny", shot: "/shots/nanny.webp", domain: "life", status: "live", href: "https://nanny.kytepush.com", host: "nanny.kytepush.com",
    line: "Calm scheduling between a family and their nanny: shifts, hours and reminders in one place." },
  { name: "Sound Bearing", shot: "/shots/soundbearing.webp", domain: "life", status: "live", href: "https://builder.kytepush.com", host: "builder.kytepush.com",
    line: "An owner's representative for home projects: the scope written, the bids compared, side by side." },
  { name: "Atmos Tales", domain: "life", status: "beta", href: null,
    line: "Thirty illustrated children's books, each drawn in three art styles, for phones and tablets." },

  { name: "Sandbaggers", shot: "/shots/sandbaggers.webp", domain: "golf", status: "live", href: "https://golf.kytepush.com", host: "golf.kytepush.com",
    line: "Tee times, scorecards, side games and a running ledger for a golf group that plays for keeps." },
  { name: "Bandon Ledger", shot: "/shots/bandon.webp", domain: "golf", status: "live", href: "https://bandon.kytepush.com", host: "bandon.kytepush.com",
    line: "Split a golf trip's bets and bills without anyone making an account." },
  { name: "Fairway", domain: "golf", status: "lab", href: null,
    line: "Course GPS and a scorecard built for a tablet on the cart." },

  { name: "YieldFarmer", domain: "markets", status: "lab", href: null,
    line: "Finds and works the liquidity rewards on Polymarket and Kalshi." },
  { name: "StrikeEdge", domain: "markets", status: "lab", href: null,
    line: "One same-day options idea a day, with guardrails written from past mistakes." },
  { name: "Momentum", domain: "markets", status: "lab", href: null,
    line: "An intraday stock research desk that reports its own hit rate, however modest." },

  { name: "Jarvis", domain: "tools", status: "live", href: "/jarvis",
    line: "A personal assistant that learns how you think and runs errands across your tools." },
  { name: "Foundry", domain: "tools", status: "lab", href: null,
    line: "Describe a game, play it a minute later, keep changing it by talking." },
];

export const statusLabel: Record<Status, string> = { live: "Live", beta: "Beta", lab: "In the lab" };

export const domainById = Object.fromEntries(domains.map((d) => [d.id, d])) as Record<DomainId, Domain>;
