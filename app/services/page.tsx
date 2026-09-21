import Link from "next/link";
import { services } from "./data";

export default function ServicesPage() {
  return (
    <main className="site-page">
      <header className="inner-nav">
        <Link className="logo dark-logo" href="/"><span className="mark">M</span><span>Moonlight<br />Marine</span></Link>
        <nav><Link href="/">Home</Link><Link href="/services">Services</Link><Link href="/contact">Contact</Link></nav>
      </header>
      <section className="page-hero" style={{ position: "relative", overflow: "hidden" }}>
        <div style={{ position: "relative", zIndex: 2 }}>
          <p className="eyebrow">Marine services</p><h1>Ready for<br /><em>whatever&apos;s next.</em></h1>
          <p>Experienced, responsive service for the systems and moments that keep you on the water.</p>
        </div>
        <div style={{ position: "absolute", right: "7%", top: "50%", transform: "translateY(-50%)", width: "min(34vw,420px)", aspectRatio: "1", borderRadius: "50%", overflow: "hidden", border: "6px solid #e9ad2f", boxShadow: "0 20px 55px rgba(6,23,45,.22)" }}>
          <img src="https://raw.githubusercontent.com/CRB062024/moonlight-marine/main/public/moonlight-closeup-sailboat-hero.jpg?v=restore-20260921" alt="Close-up of sailboat on the water" width="1200" height="1200" loading="eager" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
        </div>
      </section>
      <section className="service-grid">
        {services.map((service, index) => (
          <Link className="service-card" href={`/services/${service.slug}`} key={service.slug}>
            <span>0{index + 1}</span><h2>{service.title}</h2><b>Explore <i>→</i></b>
          </Link>
        ))}
      </section>
      <style>{`@media(max-width:780px){.page-hero{min-height:620px!important;padding-bottom:300px!important}.page-hero>div:last-child{right:50%!important;top:auto!important;bottom:35px!important;transform:translateX(50%)!important;width:78vw!important}}`}</style>
    </main>
  );
}
