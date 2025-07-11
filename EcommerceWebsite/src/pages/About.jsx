import React from "react";
import "../Styles/About.css";
import Footer from "../components/Footer";

function About() {
  return (
    <div className="about-root">
      {/* HERO SECTION */}
      <section
        className="about-hero"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.45),rgba(0,0,0,0.45)), url('https://le-de.cdn-website.com/c7f29ca3554141a4831c527997a539c7/dms3rep/multi/opt/DJI_0466-2880w.jpg')",
        }}
      >
        <div className="about-hero-content">
          <h2>ABOUT US</h2>
          <h3>The Best Luxury Real Estate in Port Aransas, TX</h3>
          <hr className="about-divider" />
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="about-mission-vision">
        <div className="about-mv-col">
          <h4>OUR MISSION</h4>
          <p>
            To deliver a relaxed and refined buying and selling experience. We stand out from the rest with our standards of integrity, expertise and sophistication.
          </p>
          <h4>OUR VISION</h4>
          <p>
            Located in Port Aransas, Beachway Vacation Rentals is a vacation rental management company specializing in providing the ultimate 5-star vacation experience for our guests!<br />
            <br />
            Browse our current vacation rentals and call us or book using our online reservation system! We can’t wait to host you at one of our amazing properties!
          </p>
        </div>
        <div
          className="about-mv-img"
          style={{
            backgroundImage:
              "url('https://le-de.cdn-website.com/c7f29ca3554141a4831c527997a539c7/dms3rep/multi/opt/DSC06856-2880w.jpg')",
          }}
        />
      </section>

      {/* ICON ROW */}
      <section className="about-icons-row">
        <div className="about-icon-block">
          <div className="about-icon">
            {/* House SVG */}
            <svg viewBox="0 0 100 100" width="45" height="45">
              <path d="M81.7,38.8L50.6,18c-0.3-0.2-0.8-0.2-1.2,0L18.3,38.8c-0.4,0.3-0.6,0.7-0.4,1.2c0.1,0.4,0.5,0.7,1,0.7h9.3v40.5
                c0,0.6,0.5,1,1,1h10.4h20.8h10.4c0.6,0,1-0.5,1-1V40.7h9.3c0.5,0,0.9-0.3,1-0.7C82.3,39.5,82.1,39,81.7,38.8z M40.7,80.1V51h18.7
                v29.1H40.7z M70.8,38.6c-0.6,0-1,0.5-1,1v40.5h-8.3V50c0-0.6-0.5-1-1-1H39.6c-0.6,0-1,0.5-1,1v30.1h-8.3V39.6c0-0.6-0.5-1-1-1h-7
                L50,20.1l27.7,18.5H70.8z" fill="#4896a6"/>
            </svg>
          </div>
          <h4>EXCLUSIVE SERVICE</h4>
          <p>
            Our agents are top producers, providing every client with the highest level of service to achieve their goals.
          </p>
        </div>
        <div className="about-icon-block">
          <div className="about-icon">
            {/* Map Marker SVG */}
            <svg viewBox="0 0 100 100" width="45" height="45">
              <g>
                <path d="M69.1,25.3C64,20.2,57.2,17.4,50,17.4c-7.2,0-14,2.8-19.1,7.9c-10.5,10.5-10.5,27.6,0,38.2L50,82.6l19.1-19.1
                  C79.6,53,79.6,35.8,69.1,25.3z M67.6,62L50,79.6L32.4,62c-9.7-9.7-9.7-25.5,0-35.2c4.7-4.7,11-7.3,17.6-7.3
                  c6.7,0,12.9,2.6,17.6,7.3C77.3,36.5,77.3,52.3,67.6,62z" fill="#4896a6"/>
                <path d="M50,33c-6.3,0-11.4,5.1-11.4,11.4c0,6.3,5.1,11.4,11.4,11.4c6.3,0,11.4-5.1,11.4-11.4C61.4,38.1,56.3,33,50,33z M50,53.8
                  c-5.2,0-9.3-4.2-9.3-9.3c0-5.2,4.2-9.3,9.3-9.3c5.2,0,9.3,4.2,9.3,9.3C59.3,49.6,55.2,53.8,50,53.8z" fill="#4896a6"/>
              </g>
            </svg>
          </div>
          <h4>LOCATION IS EVERYTHING</h4>
          <p>
            We represent residential properties throughout the West San Fernando Valley and Greater Los Angeles Area.
          </p>
        </div>
        <div className="about-icon-block">
          <div className="about-icon">
            {/* Key SVG */}
            <svg viewBox="0 0 100 100" width="45" height="45">
              <g>
                <path d="M71.7,15.7L37.9,49.5c-1.5-0.4-3-0.6-4.5-0.6c-9.8,0-17.7,7.9-17.7,17.7c0,9.8,7.9,17.7,17.7,17.7
                  c9.8,0,17.7-7.9,17.7-17.7c0-1.5-0.2-3-0.6-4.5l11.6-11.6V40h11.1V29h11.1V15.7H71.7z M82.1,26.8H71v11.1H60v11.7L48,61.5l0.2,0.6
                  c0.4,1.5,0.7,3,0.7,4.5c0,8.5-6.9,15.5-15.5,15.5c-8.5,0-15.5-6.9-15.5-15.5c0-8.5,6.9-15.5,15.5-15.5c1.5,0,3,0.2,4.5,0.7l0.6,0.2
                  l34-34h9.5V26.8z" fill="#4896a6"/>
                <circle cx="33.4" cy="66.6" r="2.2" fill="#4896a6"/>
              </g>
            </svg>
          </div>
          <h4>GUARANTEED SERVICE</h4>
          <p>
            With exceptional integrity, negotiating skills and marketing strategies, we promise the best price for your property.
          </p>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="about-cta">
        <div className="about-cta-content">
          <h2>WANT TO STAY WITH US?</h2>
          <a
            href="https://beachway.guestybookings.com/properties"
            target="_blank"
            rel="noopener noreferrer"
            className="about-cta-btn"
          >
            BOOK NOW
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default About;
