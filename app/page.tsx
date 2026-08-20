import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <nav className="nav" aria-label="Main navigation">
          <Link className="logo" href="/" aria-label="Moonlight Marine home">
            <span className="mark">M</span><span>Moonlight<br />Marine</span>
          </Link>
          <div className="nav-links"><Link href="/">Home</Link><Link href="/services">Services</Link><Link href="/contact">Contact</Link></div>
          <Link className="button button-small" href="/contact">Request service</Link>
        </nav>
        <div className="hero-content">
          <p className="eyebrow">Madisonville, Louisiana</p>
          <h1>Service for<br /><em>life on the water.</em></h1>
          <p className="hero-copy">Responsive marine repair, maintenance, and support for the systems that make every journey possible.</p>
          <Link className="text-link" href="/services">Explore services <span>→</span></Link>
        </div>
        <div className="tide-note"><span>01</span><span>Service, support,<br />and seaworthy solutions</span></div>
        <div className="sun" aria-hidden="true" /><div className="horizon" aria-hidden="true" />
      </section>
      <section className="story" id="story">
        <p className="eyebrow">The Moonlight standard</p>
        <div className="story-grid">
          <h2>Ready when<br />you need us<br /><em>most.</em></h2>
          <div><p>We return calls within 24 hours and emails within 48 hours. We make every attempt to have someone aboard your vessel within 96 hours of initial contact for an appraisal and assessment of your project.</p><Link className="text-link dark-link" href="/services">Our services <span>→</span></Link></div>
        </div>
      </section>
      <section className="contact" id="contact">
        <p className="eyebrow">Get in touch</p><h2>Let&apos;s keep you<br /><em>underway.</em></h2>
        <Link className="button" href="/contact">Contact Moonlight</Link>
      </section>
      <footer><span>© {new Date().getFullYear()} Moonlight Marine</span><span>Madisonville, LA</span></footer>
    </main>
  );
}
