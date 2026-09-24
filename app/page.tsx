import Link from "next/link";

const services = [
  ["General", "general"],
  ["Diving", "diving"],
  ["Electrical", "electrical"],
  ["Electronics", "electronics"],
  ["Maintenance", "maintenance"],
  ["Mechanical", "mechanical"],
  ["Plumbing", "plumbing"],
  ["Salvage", "salvage"],
] as const;

const features = [
  { icon: "shield", title: "SAFETY FIRST", text: "Reliable systems built to keep you safe on the water." },
  { icon: "bolt", title: "EXPERT DIAGNOSTICS", text: "Advanced troubleshooting and precision solutions." },
  { icon: "wrench", title: "QUALITY WORKMANSHIP", text: "Top-tier craftsmanship and attention to detail." },
  { icon: "boat", title: "MARINE EXPERIENCE", text: "Years of hands-on experience you can depend on." },
];

function FeatureIcon({ icon }: { icon: string }) {
  const common = { fill: "none", stroke: "currentColor", strokeWidth: 2.4, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  if (icon === "shield") return <svg viewBox="0 0 48 48" aria-hidden="true"><path {...common} d="M24 4 39 10v11c0 10-6 18-15 23C15 39 9 31 9 21V10l15-6Z"/><path {...common} d="m17 24 5 5 10-11"/></svg>;
  if (icon === "bolt") return <svg viewBox="0 0 48 48" aria-hidden="true"><path {...common} d="M28 3 10 27h13l-3 18 18-25H25l3-17Z"/></svg>;
  if (icon === "wrench") return <svg viewBox="0 0 48 48" aria-hidden="true"><path {...common} d="m29 8 4 4-16 16-4-4L29 8Z"/><path {...common} d="M34 5a9 9 0 0 0 9 11l-7 7-6-6 7-7A9 9 0 0 0 34 5Z"/><circle {...common} cx="12" cy="36" r="6"/></svg>;
  return <svg viewBox="0 0 48 48" aria-hidden="true"><path {...common} d="M5 31h38l-6 7H13l-8-7Z"/><path {...common} d="M20 31V12h13l4 19M20 16h13"/><path {...common} d="M8 40c3 2 6 2 9 0 3 2 6 2 9 0 3 2 6 2 9 0"/></svg>;
}

export default function Home() {
  return (
    <main className="mock-home">
      <header className="topbar">
        <Link className="brand" href="/" aria-label="Moonlight Marine home">
          <span className="crescent" aria-hidden="true" />
          <span className="brand-copy">
            <span className="brand-word">MOONLIGHT</span>
            <span className="brand-sub"><i /> <span className="marine-word"><span className="marine-initial">M</span>ARINE</span> <i /></span>
          </span>
        </Link>
        <nav className="main-nav" aria-label="Main navigation">
          <Link className="active" href="/">HOME</Link>
          <details className="services-dropdown">
            <summary>SERVICES <span aria-hidden="true">⌄</span></summary>
            <div className="services-menu">
              {services.map(([title, slug]) => <Link href={`/services/${slug}`} key={slug}>{title}</Link>)}
            </div>
          </details>
          <Link href="/about">ABOUT</Link>
          <Link href="/contact">CONTACT</Link>
        </nav>
        <div className="partner-links">
          <a href="https://abycinc.org/" target="_blank" rel="noreferrer">ABYC <span>↗</span></a>
          <a href="https://bayousailing.com/" target="_blank" rel="noreferrer">BAYOU SAILING <span>↗</span></a>
        </div>
      </header>

      <section className="design-hero">
        <div className="blueprint" aria-hidden="true" />
        <div className="hero-copy-new">
          <h1>GETTING YOU BACK<br /><em>ON THE WATER</em></h1>
          <div className="gold-rule" />
          <p>Specializing in marine electrical systems, diagnostics, and custom solutions for power, safety, and performance you can trust.</p>
          <div className="hero-actions">
            <Link className="primary-cta" href="/services/electrical"><span>ϟ</span> OUR SERVICES</Link>
            <Link className="secondary-cta" href="/contact">CONTACT US</Link>
          </div>
        </div>
        <div className="sailboat-frame">
          <img src="data:image/webp;base64,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" alt="Sailboat at sunset on open water" className="approved-hero-image" width="1200" height="1200" loading="eager" fetchPriority="high" />
        </div>
      </section>

      <section className="feature-strip" aria-label="Moonlight Marine advantages">
        {features.map((feature) => (
          <div className="feature" key={feature.title}>
            <div className="feature-icon"><FeatureIcon icon={feature.icon} /></div>
            <h2>{feature.title}</h2>
            <p>{feature.text}</p>
          </div>
        ))}
      </section>

      <footer className="design-footer">
        <a href="tel:+15046069029" className="footer-item"><span className="footer-icon">⌕</span> (504) 606-9029</a>
        <a href="mailto:info@moonlightmarine.com" className="footer-item"><span className="footer-icon">✉</span> info@moonlightmarine.com</a>
        <span className="footer-item"><span className="footer-icon">●</span> New Orleans, Louisiana</span>
        <div className="socials"><a href="#" aria-label="Facebook">f</a><a href="#" aria-label="Instagram">◎</a></div>
      </footer>
    </main>
  );
}
