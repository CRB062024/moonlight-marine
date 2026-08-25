import Link from "next/link";
import { MoonMark } from "@/components/moon-mark";

type SiteLogoProps = {
  /** "full" is the tall hero lockup used on the home page topbar.
   *  "compact" is the shorter lockup used in the inner-page navs. */
  variant?: "full" | "compact";
};

export function SiteLogo({ variant = "full" }: SiteLogoProps) {
  return (
    <Link
      className={`brand${variant === "compact" ? " brand-compact" : ""}`}
      href="/"
      aria-label="Moonlight Marine home"
    >
      <MoonMark className="crescent" />
      <span className="brand-word">MOONLIGHT</span>
      <span className="brand-sub">
        <i /> MARINE <i />
      </span>
    </Link>
  );
}
