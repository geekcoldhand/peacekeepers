export default function HomePage() {
  return (
    <>
      <header
        style={{
          backgroundColor: "white",
          padding: "1rem 0",
          position: "sticky",
          top: 0,
          zIndex: 1000,
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        }}
      >
        <nav
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 1.5rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <img
              src="/images/peacekeepers.png"
              alt="Peacekeepers Real Estate Services"
              style={{ height: "50px", width: "auto" }}
            />
          </div>
          <ul className="nav-menu">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#quotes">Quotes</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section id="home" className="hero">
          <div className="hero-content">
            <h1>Bridging the Gap Between Buyers and Sellers</h1>
            <p className="hero-subtitle">Professional real estate services that ensure smooth, stress-free closings</p>
            <a href="#contact" className="cta-button">
              Get Started Today
            </a>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="services-section">
          <div className="container">
            <h2 className="section-title">Our Services</h2>
            <p className="section-subtitle">
              Comprehensive solutions to eliminate friction in your real estate transactions
            </p>

            <div className="services-grid">
              <div className="service-card">
                <div className="service-icon">🔧</div>
                <h3>Contracting Services</h3>
                <p>
                  Professional contractors ready to handle repairs, renovations, and maintenance work required for
                  closing. We coordinate all necessary improvements to meet buyer requirements and seller obligations.
                </p>
              </div>

              <div className="service-card">
                <div className="service-icon">✨</div>
                <h3>Cleaning Services</h3>
                <p>
                  Comprehensive cleaning solutions ensuring properties meet move-in standards. From deep cleaning to
                  final walkthroughs, we guarantee properties are pristine and ready for new owners.
                </p>
              </div>

              <div className="service-card">
                <div className="service-icon">⚖️</div>
                <h3>Eviction Services</h3>
                <p>
                  Professional eviction management handling the legal and logistical complexities. We work with all
                  parties to ensure smooth transitions while protecting everyone's interests throughout the process.
                </p>
              </div>

              <div className="service-card">
                <div className="service-icon">🤝</div>
                <h3>Liaison Services</h3>
                <p>
                  Expert mediation between buyers and sellers to resolve issues quickly. We facilitate communication,
                  coordinate schedules, and ensure all parties stay informed throughout the closing process.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="about-section">
          <div className="container">
            <div className="about-content">
              <div className="about-text">
                <h2>Why Choose Peacekeepers?</h2>
                <p>
                  Real estate transactions shouldn't fall apart over services that sellers can't or won't provide. We
                  step in as the missing piece, offering property management-style services that keep deals moving
                  forward.
                </p>
                <p>
                  Our team acts as your trusted liaison, coordinating between buyers and sellers to resolve issues
                  before they become deal-breakers. Whether it's arranging last-minute repairs, coordinating cleaning,
                  or managing complex situations, we handle the details so you can focus on closing.
                </p>
                <ul className="benefits-list">
                  <li>✓ Prevent closing delays and cancellations</li>
                  <li>✓ Professional coordination and communication</li>
                  <li>✓ Vetted contractors and service providers</li>
                  <li>✓ Single point of contact for all services</li>
                  <li>✓ Transparent pricing and timelines</li>
                </ul>
              </div>
              <div className="about-image">
                <img src="/modern-real-estate-professional-office.jpg" alt="Professional real estate services" />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact-section">
          <div className="container">
            <h2 className="section-title">Let's Work Together</h2>
            <p className="section-subtitle">Ready to ensure your transaction closes smoothly? Get in touch today.</p>

            <div className="contact-content">
              <form className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" name="name" required />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" name="email" required />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" name="phone" />
                </div>

                <div className="form-group">
                  <label htmlFor="service">Service Needed</label>
                  <select id="service" name="service">
                    <option value="">Select a service</option>
                    <option value="contracting">Contracting Services</option>
                    <option value="cleaning">Cleaning Services</option>
                    <option value="eviction">Eviction Services</option>
                    <option value="liaison">Liaison Services</option>
                    <option value="multiple">Multiple Services</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows={5}></textarea>
                </div>

                <button type="submit" className="submit-button">
                  Send Message
                </button>
              </form>

              <div className="contact-info">
                <div className="info-card">
                  <h3>Contact Information</h3>
                  <p>
                    <strong>Phone:</strong> (555) 123-4567
                  </p>
                  <p>
                    <strong>Email:</strong> info@peacekeepersre.com
                  </p>
                  <p>
                    <strong>Hours:</strong> Monday - Friday, 9AM - 6PM
                  </p>
                </div>

                <div className="info-card">
                  <h3>Service Area</h3>
                  <p>
                    We proudly serve the greater metropolitan area and surrounding communities. Contact us to confirm
                    service availability in your location.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer
        style={{
          backgroundColor: "#09244c",
          color: "white",
          padding: "2rem 1.5rem",
          textAlign: "center",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src="/images/peacekeepers.png"
            alt="Peacekeepers"
            style={{ height: "60px", width: "auto", marginBottom: "1rem", filter: "brightness(0) invert(1)" }}
          />
          <p style={{ margin: "0.5rem 0", fontSize: "0.9rem" }}>
            © 2025 Peacekeepers Real Estate Services. All rights reserved.
          </p>
          <p style={{ margin: "0.5rem 0", fontSize: "0.85rem", opacity: 0.8 }}>
            Bringing peace to real estate transactions
          </p>
        </div>
      </footer>
    </>
  )
}
