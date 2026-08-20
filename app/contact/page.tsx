import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="site-page">
      <header className="inner-nav">
        <Link className="logo dark-logo" href="/"><span className="mark">M</span><span>Moonlight<br />Marine</span></Link>
        <nav><Link href="/">Home</Link><Link href="/services">Services</Link><Link href="/contact">Contact</Link></nav>
      </header>
      <section className="detail contact-detail">
        <p className="eyebrow">Contact Moonlight Marine</p><h1>Let&apos;s get<br /><em>underway.</em></h1>
        <div className="detail-copy contact-list">
          <p><small>Phone</small><a href="tel:+15046069029">(504) 606-9029</a></p>
          <p><small>Fax</small><span>(985) 845-7468</span></p>
          <p><small>Email</small><a href="mailto:info@moonlightmarine.com">info@moonlightmarine.com</a></p>
          <p><small>Location</small><span>Madisonville, LA 70447</span></p>
        </div>
      </section>
    </main>
  );
}
