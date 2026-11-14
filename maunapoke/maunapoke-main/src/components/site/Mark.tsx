import logo from "@/assets/logo-brown.png";
import salmon from "@/assets/fish-salmon.png";
import tuna from "@/assets/fish-tuna.png";
import volcano from "@/assets/volcano.png";

const shapes = { logo, salmon, tuna, volcano } as const;
const ratios = { logo: 1060 / 912, salmon: 395 / 187, tuna: 376 / 200, volcano: 760 / 186 };

/** Shape from the logo, colored by the current text color. */
export function Mark({ shape, className = "", label }: { shape: keyof typeof shapes; className?: string; label?: string }) {
  const url = `url(${shapes[shape]})`;
  return (
    <span
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      className={`mark ${className}`}
      style={{ maskImage: url, WebkitMaskImage: url, aspectRatio: String(ratios[shape]) }}
    />
  );
}
