const navigation = ["Explore", "The Experience", "About", "Contact"];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <nav className="nav" aria-label="Main navigation">
          <a className="logo" href="#" aria-label="Moonlight Marine home">
            <span className="mark">M</span><span>Moonlight<br />Marine</span>
          </a>
          <div className="nav-links">{navigation.map((item) => <a href="#" key={item}>{item}</a>)}</div>
          <a className="button button-small" href="#contact">Start your journey</a>
        </nav>
        <div className="hero-content">
          <p className="eyebrow">Est. on the water</p>
          <h1>Find your<br /><em>way back</em> to the water.</h1>
          <p className="hero-copy">Moonlight Marine is an invitation to slow down, explore farther, and make room for the moments that matter most.</p>
          <a className="text-link" href="#story">Discover Moonlight <span>→</span></a>
        </div>
        <div className="tide-note"><span>01</span><span>Where the horizon<br />becomes yours</span></div>
        <div className="sun" aria-hidden="true" /><div className="horizon" aria-hidden="true" />
      </section>
      <section className="story" id="story">
        <p className="eyebrow">The Moonlight standard</p>
        <div className="story-grid">
          <h2>Every journey<br />deserves a little<br /><em>more room.</em></h2>
          <div><p>We believe time on the water should feel effortless. Thoughtful details, capable design, and a genuine love of the coastline shape every Moonlight experience.</p><a className="text-link dark-link" href="#contact">Our story <span>→</span></a></div>
        </div>
      </section>
      <section className="contact" id="contact">
        <p className="eyebrow">Make it yours</p><h2>Let&apos;s chart<br />what&apos;s next.</h2>
        <a className="button" href="mailto:hello@moonlightmarine.com">Get in touch</a>
      </section>
      <footer><span>© {new Date().getFullYear()} Moonlight Marine</span><span>Made for life on the water</span></footer>
    </main>
  );
}
