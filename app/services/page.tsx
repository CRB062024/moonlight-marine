import Link from "next/link";
import { services } from "./data";

export default function ServicesPage() {
  return (
    <main className="site-page">
      <header className="inner-nav">
        <Link className="logo dark-logo" href="/"><span className="mark">M</span><span>Moonlight<br />Marine</span></Link>
        <nav><Link href="/">Home</Link><Link href="/services">Services</Link><Link href="/contact">Contact</Link></nav>
      </header>
      <section className="page-hero">
        <p className="eyebrow">Marine services</p><h1>Ready for<br /><em>whatever&apos;s next.</em></h1>
        <p>Experienced, responsive service for the systems and moments that keep you on the water.</p>
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
