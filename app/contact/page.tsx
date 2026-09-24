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

export default function ContactPage() {
  return (
    <main className="site-page shared-page contact-page">
      <header className="topbar">
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
          <Link href="/about">ABOUT</Link>
          <Link className="active" href="/contact">CONTACT</Link>
        </nav>
        <div className="partner-links">
          <a href="https://abycinc.org/" target="_blank" rel="noreferrer">ABYC <span>↗</span></a>
          <a href="https://bayousailing.com/" target="_blank" rel="noreferrer">BAYOU SAILING <span>↗</span></a>
        </div>
      </header>

      <section className="contact-hero">
        <div className="contact-copy">
          <p className="eyebrow">Contact Moonlight Marine</p>
          <h1>Let&apos;s get<br /><em>underway.</em></h1>
          <div className="detail-copy contact-list">
            <p><small>Phone</small><a href="tel:+15046069029">(504) 606-9029</a></p>
            <p><small>Fax</small><span>(985) 845-7468</span></p>
            <p><small>Email</small><a href="mailto:info@moonlightmarine.com">info@moonlightmarine.com</a></p>
            <p><small>Location</small><span>Madisonville, LA 70447</span></p>
          </div>
        </div>
        <div className="contact-photo">
          <img src="/moonlight-approved-hero-square.jpg?v=sitewide-20260924" alt="Sailboat on the water at sunset" width="1200" height="1200" loading="eager" fetchPriority="high" />
        </div>
      </section>
    </main>
  );
}
