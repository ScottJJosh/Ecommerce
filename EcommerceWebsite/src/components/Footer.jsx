import React from "react";
import "../Styles/Footer.css";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-section">
        <h4>ABOUT US</h4>
        <p>
          Beachway is a full-service short-term rental management service with a
          mission to unify the finest vacation rentals across the United States:
          homes that deliver on quality, design, first-class amenities and comfort.
        </p>
      </div>
      <div className="footer-section">
        <h4>LOCATION</h4>
        <p>
          <a
            href="https://www.google.com/maps/place/237+N+Station+St,+Port+Aransas,+TX+78373,+USA"
            target="_blank"
            rel="noopener noreferrer"
          >
            237 N Station St, Port Aransas, TX 78373, USA
          </a>
        </p>
      </div>
      <div className="footer-section">
        <h4>CONTACT US</h4>
        <p>361-749-4255</p>
      </div>
    </footer>
  );
}

export default Footer;