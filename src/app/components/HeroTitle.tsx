/*
  The hero line, set letter by letter. Each letter carries its index (--i);
  Silk writes --push, --lift and --wt onto #lift-title every frame, and CSS
  turns those into a travelling wave, so the words ride the same wind as the silk.
*/
export function HeroTitle({ lines }: { lines: string[] }) {
  let i = 0;
  return (
    <h1
      id="lift-title"
      aria-label={lines.join(" ")}
      className="lift display-hero text-ink"
      style={{ fontSize: "clamp(4rem, 12.5vw, 12.5rem)" }}
    >
      {lines.map((line, li) => (
        <span key={li} className="block" aria-hidden="true">
          {line.split(" ").map((word, wi, words) => (
            <span key={wi} className="inline-block whitespace-nowrap">
              {[...word].map((ch) => (
                <span key={i} className="wind-letter" style={{ "--i": i++ } as React.CSSProperties}>
                  {ch}
                </span>
              ))}
              {wi < words.length - 1 ? " " : ""}
            </span>
          ))}
        </span>
      ))}
    </h1>
  );
}
