/** Wavy divider. `className` sets the text color = fill color of the next section. */
export function Wave({ className = "", flip = false }: { className?: string; flip?: boolean }) {
  return (
    <div aria-hidden className={`relative -my-px overflow-hidden leading-none ${className}`} style={flip ? { transform: "scaleY(-1)" } : undefined}>
      <svg className="wave-drift block h-12 w-[106%] md:h-20" viewBox="0 0 1440 80" preserveAspectRatio="none">
        <path fill="currentColor" d="M0 40 C 120 0 240 0 360 40 S 600 80 720 40 S 960 0 1080 40 S 1320 80 1440 40 L1440 80 L0 80 Z" />
      </svg>
    </div>
  );
}
