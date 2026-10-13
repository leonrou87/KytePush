/* House mark — a single lifted sheet, catching light */
export function Mark({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="kp-mark" x1="4" y1="3" x2="20" y2="21" gradientUnits="userSpaceOnUse">
          <stop stopColor="#c7d0ff" />
          <stop offset="0.5" stopColor="#ffc4dc" />
          <stop offset="1" stopColor="#ffe2b0" />
        </linearGradient>
      </defs>
      <path d="M12 2 C15.5 6 18.6 8.4 20.5 9.2 C17 13 14 17 12 22 C10 17 7 13 3.5 9.2 C5.4 8.4 8.5 6 12 2 Z" fill="url(#kp-mark)" />
      <path d="M12 2 C11 8 11.4 15 12 22" stroke="rgba(30,20,70,0.35)" strokeWidth="0.9" />
    </svg>
  );
}
