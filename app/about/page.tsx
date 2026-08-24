import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="about-page">
      <header className="inner-nav about-nav">
        <Link className="logo dark-logo" href="/" aria-label="Moonlight Marine home">
          <span className="mark">M</span><span>Moonlight<br />Marine</span>
        </Link>
        <nav aria-label="About navigation">
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/about" aria-current="page">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </header>

      <section className="about-hero">
        <div className="about-hero-copy">
          <p className="eyebrow">About Moonlight Marine</p>
          <h1>Working your way<br /><em>back to the water.</em></h1>
          <p>Responsive marine service built around practical experience, careful troubleshooting, quality workmanship, and getting your vessel ready for what comes next.</p>
        </div>
        <div className="about-image-frame">
          <Image src="/moonlight-approved-hero-square.jpg" alt="Moonlit sailboat on the water" fill priority sizes="(max-width: 780px) 92vw, 45vw" />
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
        <Link className="button ink-button" href="/contact">Contact Moonlight</Link>
      </section>
    </main>
  );
}
