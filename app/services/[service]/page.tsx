import Link from "next/link";
import { notFound } from "next/navigation";
import { getService, services } from "../data";

export function generateStaticParams() {
  return services.map((service) => ({ service: service.slug }));
}

export default function ServicePage({ params }: { params: { service: string } }) {
  const service = getService(params.service);
  if (!service) notFound();

  return (
    <main className="site-page shared-page">
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
          <details className="services-dropdown active">
            <summary>SERVICES <span aria-hidden="true">⌄</span></summary>
            <div className="services-menu">
              {services.map((item) => <Link href={`/services/${item.slug}`} key={item.slug}>{item.title}</Link>)}
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

      <section className="detail service-detail">
        <div className="detail-photo">
          <img src="/moonlight-closeup-sailboat-hero.jpg?v=sitewide-20260924" alt="Close-up of sailboat on the water" width="1200" height="1200" loading="eager" fetchPriority="high" />
        </div>
        <div className="detail-content">
          <Link className="back-link" href="/services">← All services</Link>
          <p className="eyebrow">Moonlight Marine</p>
          <h1>{service.title}</h1>
          <div className="detail-copy">
            {service.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            {service.bullets && <ul>{service.bullets.map((item) => <li key={item}>{item}</li>)}</ul>}
            <Link className="button ink-button" href="/contact">Request service</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
