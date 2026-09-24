import Link from "next/link";
import { services } from "./data";

const serviceLinks = services;

function SharedHeader({ active }: { active: "home" | "services" | "about" | "contact" }) {
  return (
    <header className="topbar">
      <Link className="brand" href="/" aria-label="Moonlight Marine home">
        <span className="crescent" aria-hidden="true" />
        <span className="brand-copy">
          <span className="brand-word">MOONLIGHT</span>
          <span className="brand-sub"><i /> <span className="marine-word"><span className="marine-initial">M</span>ARINE</span> <i /></span>
        </span>
      </Link>
      <nav className="main-nav" aria-label="Main navigation">
        <Link className={active === "home" ? "active" : ""} href="/">HOME</Link>
        <details className="services-dropdown" open={active === "services"}>
          <summary>SERVICES <span aria-hidden="true">⌄</span></summary>
          <div className="services-menu">
            {serviceLinks.map(([title, slug]) => <Link href={`/services/${slug}`} key={slug}>{title}</Link>)}
          </div>
        </details>
        <Link className={active === "about" ? "active" : ""} href="/about">ABOUT</Link>
        <Link className={active === "contact" ? "active" : ""} href="/contact">CONTACT</Link>
      </nav>
      <div className="partner-links">
        <a href="https://abycinc.org/" target="_blank" rel="noreferrer">ABYC <span>↗</span></a>
        <a href="https://bayousailing.com/" target="_blank" rel="noreferrer">BAYOU SAILING <span>↗</span></a>
      </div>
    </header>
  );
}

export default function ServicesPage() {
  return (
    <main className="site-page shared-page">
      <SharedHeader active="services" />
      <section className="page-hero" style={{ position: "relative", overflow: "hidden" }}>
        <div style={{ position: "relative", zIndex: 2 }}>
          <p className="eyebrow">Marine services</p><h1>Ready for<br /><em>whatever&apos;s next.</em></h1>
          <p>Experienced, responsive service for the systems and moments that keep you on the water.</p>
        </div>
        <div className="shared-page-photo">
          <img src="/moonlight-restored-sailboat.jpg?v=final20260924" alt="Sailboat on the water" width="1200" height="1200" loading="eager" fetchPriority="high" />
        </div>
      </section>
      <section className="service-grid">
        {services.map((service, index) => (
          <Link className="service-card" href={`/services/${service.slug}`} key={service.slug}>
            <span>0{index + 1}</span><h2>{service.title}</h2><b>Explore <i>→</i></b>
          </Link>
        ))}
      </section>
    </main>
  );
}
