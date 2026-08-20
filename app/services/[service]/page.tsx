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
      <section className="detail" style={{ position: "relative", paddingLeft: "270px" }}>
        <div style={{ position: "absolute", left: "55px", top: "55px", width: "175px", height: "175px", borderRadius: "50%", overflow: "hidden", border: "5px solid #e9ad2f", boxShadow: "0 12px 35px rgba(6,23,45,.18)" }}>
          <img src="/moonlight-approved-hero-square.jpg" alt="Moonlit sailboat on the water" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
        </div>
        <div style={{ maxWidth: "900px" }}>
          <Link className="back-link" href="/services">← All services</Link>
          <p className="eyebrow">Moonlight Marine</p><h1>{service.title}</h1>
          <div className="detail-copy">
            {service.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            {service.bullets && <ul>{service.bullets.map((item) => <li key={item}>{item}</li>)}</ul>}
            <Link className="button ink-button" href="/contact">Request service</Link>
          </div>
        </div>
      </section>
      <style>{`@media(max-width:780px){.detail{padding-left:22px!important;padding-top:250px!important}.detail>div:first-child{left:50%!important;top:32px!important;transform:translateX(-50%);width:190px!important;height:190px!important}}`}</style>
    </main>
  );
}
