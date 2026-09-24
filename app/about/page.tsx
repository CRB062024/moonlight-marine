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

export default function AboutPage() {
  return (
    <main className="about-page">
      <header className="topbar about-topbar">
        <Link className="brand" href="/" aria-label="Moonlight Marine home">
          <span className="crescent" aria-hidden="true" />
          <span className="brand-copy">
            <span className="brand-word">MOONLIGHT</span>
            <span className="brand-sub"><i /> <span className="marine-word"><span className="marine-initial">M</span>ARINE</span> <i /></span>
          </span>
        </Link>
        <nav className="main-nav" aria-label="Main navigation">
          <Link href="/">HOME</Link>
          <details className="services-dropdown">
            <summary>SERVICES <span aria-hidden="true">⌄</span></summary>
            <div className="services-menu">
              {services.map(([title, slug]) => <Link href={`/services/${slug}`} key={slug}>{title}</Link>)}
            </div>
          </details>
          <Link className="active" href="/about">ABOUT</Link>
          <Link href="/contact">CONTACT</Link>
        </nav>
        <div className="partner-links">
          <a href="https://abycinc.org/" target="_blank" rel="noreferrer">ABYC <span>↗</span></a>
          <a href="https://bayousailing.com/" target="_blank" rel="noreferrer">BAYOU SAILING <span>↗</span></a>
        </div>
      </header>

      <section className="about-hero">
        <div className="about-hero-copy">
          <p className="eyebrow">About Moonlight Marine</p>
          <h1>Working your way<br /><em>back to the water.</em></h1>
          <p>Responsive marine service built around practical experience, careful troubleshooting, quality workmanship, and getting your vessel ready for what comes next.</p>
        </div>
        <div className="about-image-frame">
          <img src="https://raw.githubusercontent.com/CRB062024/moonlight-marine/main/public/moonlight-new-hero.jpg?v=photos-restore-final" alt="Sailboat at sunset on open water" width="1200" height="1200" loading="eager" fetchPriority="high" />
        </div>
      </section>

      <section className="about-story">
        <div>
          <p className="eyebrow">The Moonlight standard</p>
          <h2>Service that respects<br /><em>your time on the water.</em></h2>
        </div>
        <div className="about-copy">
          <p>We strive to give the best service possible. We return calls within 24 hours and emails within 48 hours. We make every attempt possible to have someone aboard your vessel within 96 hours of initial contact for an appraisal and assessment of your project.</p>
          <p>Our work covers the practical systems that keep a vessel operating—from marine electrical troubleshooting and wiring to electronics, maintenance, mechanical, plumbing, diving, and salvage support.</p>
          <p>Our marine electrical technicians are ABYC-certified and bring more than 15 years of marine wiring and troubleshooting experience. We use ABYC color coding in our electrical work and approach each project as an individual consultation.</p>
        </div>
      </section>

      <section className="about-values">
        <div className="value-card"><span>01</span><h3>RESPONSIVE</h3><p>Clear communication and a deliberate effort to get aboard your vessel quickly.</p></div>
        <div className="value-card"><span>02</span><h3>EXPERIENCED</h3><p>Hands-on marine experience across electrical, electronics, mechanical, maintenance, and more.</p></div>
        <div className="value-card"><span>03</span><h3>BUILT FOR THE WATER</h3><p>Practical solutions designed around the vessel, the system, and the way you use both.</p></div>
      </section>

      <section className="about-cta">
        <p className="eyebrow">Ready when you are</p>
        <h2>Let&apos;s get you<br /><em>back on the water.</em></h2>
        <Link className="button ink-button" href="/contact">Contact Moonlightmarine</Link>
      </section>
    </main>
  );
}
