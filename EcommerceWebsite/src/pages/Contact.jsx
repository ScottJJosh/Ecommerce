import React from "react";
import "../Styles/Contact.css"; // Create this file for the styles

function Contact() {
  return (
    <section className="contact-hero">
      <div className="contact-overlay">
        <div className="contact-content">
          <h3 className="contact-subtitle">Luxury Properties</h3>
          <h1 className="contact-title">Contact Us</h1>
          <div className="contact-underline"></div>
          <form className="contact-form">
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <input type="tel" placeholder="Phone" required />
            <textarea placeholder="Message" rows={3} required />
            <button type="submit">SUBMIT</button>
          </form>
        </div>
      </div>
      {/* Contact Info + Map Section */}
      <div className="contact-info-map">
        <div className="contact-info">
          <h3>
            CALL US <span>361-749-4255</span>
          </h3>
          <p>
            237 N STATION ST,
            <br />
            PORT ARANSAS, TX 78373, USA
          </p>
          <a href="mailto:hello@hometeamvr.com">hello@hometeamvr.com</a>
        </div>
        <div className="contact-map">
          <iframe
            title="Port Aransas Map"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-97.0707%2C27.8266%2C-97.0457%2C27.8416&amp;layer=mapnik&amp;marker=27.8341%2C-97.0582"
            style={{ border: 0, width: "100%", height: "250px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      {/* Call to Action Section */}
      <div className="contact-cta">
        <span>WANT TO STAY WITH US?</span>
        <a href="/" className="cta-btn">
          BOOK NOW
        </a>
      </div>
    </section>
  );
}

export default Contact;
