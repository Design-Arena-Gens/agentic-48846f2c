import Link from "next/link";

const featureHighlights = [
  {
    title: "FusionQuad Camera Array",
    headline: "48MP Prisma sensor",
    body: "Capture cinematic depth with the adaptive tetra-prism telephoto lens and neural-spectrum night capture." 
  },
  {
    title: "A19 Neural Fusion",
    headline: "32-core neural engine",
    body: "Accelerate real-time ray traced gaming, ProRes 8K workflows, and generative capture pipelines." 
  },
  {
    title: "EnduraGlass 2",
    headline: "4x impact resistance",
    body: "Ceramic-infused lattice with nano-etched texture keeps clarity pristine under any condition." 
  },
  {
    title: "PulsePower Battery",
    headline: "36 hours adaptive",
    body: "A denser graphene matrix intelligently routes power for two days of flagship performance." 
  }
];

const timelineMoments = [
  {
    title: "Sculpted Titanium Frame",
    description:
      "Watch the bezels dissolve as aerospace-grade titanium arcs into a liquid microcurve profile." 
  },
  {
    title: "Lens Orchestra",
    description:
      "The new FusionQuad array choreographs macro, ultra, tele, and spectral capture with adaptive glass anti-glare." 
  },
  {
    title: "Neural Performance",
    description:
      "Experience A19 Neural Fusion driving tri-cluster efficiency cores and photon-trace GPUs for surreal fluidity." 
  },
  {
    title: "Always-On Continuum",
    description:
      "A luminous LTPO 2 display glides from 1Hz artful standby to 240Hz e-sport response instantly." 
  }
];

const experiencePillars = [
  {
    title: "Cinematic Broadcast",
    text: "Masterfully sequenced cuts reveal the new pro color science, volumetric lighting, and macro parallax effects." 
  },
  {
    title: "Immersive Soundscape",
    text: "Spatial duo-speaker array and adaptive beamforming microphones recreate studio-grade clarity." 
  },
  {
    title: "Sustainably Brilliant",
    text: "100% recycled rare earths, ocean-recovered titanium, and renewable manufacturing energy." 
  }
];

export default function HomePage() {
  return (
    <main>
      <section id="hero" className="grid-2 glass gradient-border" style={{ padding: "3.5rem" }}>
        <article>
          <span className="chip">
            <span aria-hidden>●</span> Introducing the Future Flagship
          </span>
          <h1 className="section-title" style={{ marginTop: "1.5rem" }}>
            iPhone 17 Pro Max
          </h1>
          <p className="muted" style={{ fontSize: "1.1rem", marginTop: "1rem" }}>
            Witness the next chapter of pro storytelling in our original cinematic reveal.
            Engineered from aerospace titanium, energized by the A19 Neural Fusion chip, and filmed
            in immersive Dolby Vision.
          </p>
          <div style={{ display: "flex", gap: "1rem", marginTop: "2.5rem", flexWrap: "wrap" }}>
            <Link href="#video" className="cta-button">
              Watch the feature film
            </Link>
            <div className="pill" aria-hidden>
              8K ProRes &middot; Spatial Audio &middot; VisionOS ready
            </div>
          </div>
        </article>
        <div className="video-frame" id="video">
          <video
            src="/videos/iphone-17-pro-max.mp4"
            controls
            preload="metadata"
            poster="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80"
            style={{ aspectRatio: "16 / 9" }}
          >
            Your browser does not support the video tag.
          </video>
          <div className="video-overlay" />
        </div>
      </section>

      <section id="features" className="section">
        <h2 className="section-title">Engineered to Reframe Possibility</h2>
        <p className="muted">
          Each frame of the video accentuates Apple&apos;s most daring pro architecture yet: a titanium lattice
          polished to a liquid gloss, under-glass satellite radio contour, and the ever-on Continuum display.
        </p>
        <div className="spec-grid">
          {featureHighlights.map((feature) => (
            <div className="spec-card" key={feature.title}>
              <h3>{feature.title}</h3>
              <strong>{feature.headline}</strong>
              <p className="muted" style={{ marginTop: "0.5rem" }}>
                {feature.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="timeline" className="section glass" style={{ padding: "3rem" }}>
        <h2 className="section-title">Film Sequence Timeline</h2>
        <p className="muted">
          Follow the rhythm of our production storyboard — from reflective studio macro shots to the
          desert horizon drone finale.
        </p>
        <div className="timeline">
          {timelineMoments.map((moment, index) => (
            <div className="timeline-item" key={moment.title}>
              <div className="timeline-marker" aria-hidden />
              <div>
                <h3 style={{ fontSize: "1.35rem", fontWeight: 600 }}>{moment.title}</h3>
                <p className="muted" style={{ marginTop: "0.6rem" }}>
                  {moment.description}
                </p>
                <div className="pill" style={{ marginTop: "0.75rem" }}>
                  Scene {index + 1}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="behind-the-lens" className="section">
        <div className="grid-2">
          <div>
            <h2 className="section-title">Behind the Lens</h2>
            <p className="muted">
              Shot entirely on prototype hardware, our video harnesses volumetric lighting rigs, drone-mounted
              LiDAR stabilization, and neural color grading pipelines. Every highlight is rendered to honor
              the new photon-shielded sensor stack.
            </p>
            <div style={{ display: "grid", gap: "1rem", marginTop: "2rem" }}>
              {experiencePillars.map((pillar) => (
                <div className="subtle-card" key={pillar.title}>
                  <h3 style={{ fontSize: "1.1rem", fontWeight: 600 }}>{pillar.title}</h3>
                  <p className="muted" style={{ marginTop: "0.5rem" }}>
                    {pillar.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="glass" style={{ padding: "2.5rem", borderRadius: "28px" }}>
            <h3 style={{ fontSize: "1.25rem", fontWeight: 600 }}>Scene Palette</h3>
            <p className="muted" style={{ marginTop: "0.75rem" }}>
              The film cycles through a curated palette to mirror the titanium finish options.
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
                gap: "1rem",
                marginTop: "1.5rem"
              }}
            >
              {["Nebula Black", "Starlight Blue", "Titanium Silver", "Aurora Sand"].map((tone) => (
                <div key={tone} style={{ display: "grid", gap: "0.75rem" }}>
                  <div
                    style={{
                      borderRadius: "18px",
                      aspectRatio: "1 / 1",
                      backgroundImage:
                        tone === "Nebula Black"
                          ? "linear-gradient(140deg, #050607, #1e2430)"
                          : tone === "Starlight Blue"
                          ? "linear-gradient(140deg, #1c2e6f, #4a76ff)"
                          : tone === "Titanium Silver"
                          ? "linear-gradient(140deg, #d7d9dd, #a1a5b0)"
                          : "linear-gradient(140deg, #f5d9c2, #d0956f)"
                    }}
                  />
                  <span className="muted" style={{ fontSize: "0.85rem" }}>
                    {tone}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="download" className="section glass" style={{ padding: "3rem" }}>
        <div className="grid-2">
          <div>
            <h2 className="section-title">Ready for Your Story</h2>
            <p className="muted">
              Download the full-resolution video, share with your creative team, or remix the storyboard in
              your own editor. The iPhone 17 Pro Max is built for the creators defining tomorrow.
            </p>
            <div style={{ display: "flex", gap: "1rem", marginTop: "2rem", flexWrap: "wrap" }}>
              <a className="cta-button" href="/videos/iphone-17-pro-max.mp4" download>
                Download 4K video
              </a>
              <Link
                className="pill"
                href="https://www.apple.com/iphone"
                target="_blank"
                rel="noopener noreferrer"
              >
                Explore the Apple ecosystem
              </Link>
            </div>
          </div>
          <div>
            <h3 style={{ fontSize: "1.2rem", fontWeight: 600 }}>Video Technical Specs</h3>
            <ul
              className="muted"
              style={{
                marginTop: "1.25rem",
                listStyle: "none",
                padding: 0,
                display: "grid",
                gap: "0.75rem"
              }}
            >
              <li>Resolution: 3840 × 2160 (4K UHD)</li>
              <li>Codec: H.264, High@L5.1</li>
              <li>Color profile: Rec.709 with cinematic grading curve</li>
              <li>Audio: Stereo spatial mix @ 48 kHz</li>
              <li>Duration: 00:20</li>
            </ul>
          </div>
        </div>
      </section>

      <footer>
        <span>© {new Date().getFullYear()} Visionary Labs Studio</span>
        <nav className="footer-links">
          <Link href="#video">Watch</Link>
          <Link href="#timeline">Storyboard</Link>
          <Link href="#download">Press kit</Link>
        </nav>
      </footer>
    </main>
  );
}
