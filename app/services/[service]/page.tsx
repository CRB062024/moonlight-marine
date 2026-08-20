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
    <main className="site-page">
      <header className="inner-nav">
        <Link className="logo dark-logo" href="/"><span className="mark">M</span><span>Moonlight<br />Marine</span></Link>
        <nav><Link href="/">Home</Link><Link href="/services">Services</Link><Link href="/contact">Contact</Link></nav>
      </header>
      <section className="detail">
        <Link className="back-link" href="/services">← All services</Link>
        <p className="eyebrow">Moonlight Marine</p><h1>{service.title}</h1>
        <div className="detail-copy">
          {service.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          {service.bullets && <ul>{service.bullets.map((item) => <li key={item}>{item}</li>)}</ul>}
          <Link className="button ink-button" href="/contact">Request service</Link>
        </div>
      </section>
    </main>
  );
}
