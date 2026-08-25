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
          <span className="brand-word">MOONLIGHT</span>
          <span className="brand-sub"><i /> MARINE <i /></span>
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
          <img src="/moonlight-approved-hero-square.jpg" alt="Moonlit sailboat on the water" className="approved-hero-image" />
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
        <a href="tel:+15041234567" className="footer-item"><span className="footer-icon">⌕</span> (504) 123-4567</a>
        <a href="mailto:info@moonlightmarine.com" className="footer-item"><span className="footer-icon">✉</span> info@moonlightmarine.com</a>
        <span className="footer-item"><span className="footer-icon">●</span> New Orleans, Louisiana</span>
        <div className="socials"><a href="#" aria-label="Facebook">f</a><a href="#" aria-label="Instagram">◎</a></div>
      </footer>
    </main>
  );
}
