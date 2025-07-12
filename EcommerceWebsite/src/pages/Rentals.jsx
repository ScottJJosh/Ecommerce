import React from "react";
import "../Styles/landingPage.css";

function Rentals() {
  return (
    <div className="rentals-root">
      {/* HERO SECTION */}
      <section
        className="rentals-hero"
        style={{
          backgroundImage:
           "url('https://le-de.cdn-website.com/c7f29ca3554141a4831c527997a539c7/dms3rep/multi/opt/DSC07336-2880w.jpg')",
        }}
      >
        <div className="rentals-hero-overlay">
          <div className="rentals-hero-content">
            <h1>TREAT YOURSELF TO THE ULTIMATE ESCAPE</h1>
            <h3>BOOK THE IDEAL VACATION HOME IN PORT ARANSAS, TEXAS</h3>
            <a href="/" className="rentals-hero-btn">
              View All Our Rentals
            </a>
          </div>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="rentals-intro">
        <div className="rentals-intro-text">
          <h2>
            STEP INTO YOUR NEXT
            <br />
            DREAM VACATION RENTAL
          </h2>
          <h3>Beachway Vacation Rentals</h3>
          <p>
            Welcome to your #1 source for Vacation Rentals in Port Aransas, Texas.
            Located in old town Port Aransas, dip your toes in the sand at one of
            our nearby beaches or explore the local restaurants and nightlife just
            steps away from the property!
          </p>
        </div>
        <div
          className="rentals-intro-image"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80')",
          }}
        />
      </section>

      {/* AMENITIES SECTION */}
      <section className="rentals-amenities">
        <div className="amenity">
          <svg viewBox="0 0 70 70">
            <circle cx="35" cy="35" r="30" fill="#4896a6" />
          </svg>
          <h3>PRIME LOCATION</h3>
          <p>
            Beachway provides a unique experience for guests near the intersection
            of Beach and Station. Easy access to "restaurant row", bars, shops,
            and the beach make this an exceptional community.
          </p>
        </div>
        <div className="amenity">
          <svg viewBox="0 0 100 100">
            <rect x="20" y="20" width="60" height="60" fill="#4896a6" />
          </svg>
          <h3>MASTERFULLY PLANNED COMMON AREA</h3>
          <p>
            Artificial turf, gorgeous palm trees, and 3 comfortable seating
            arrangements with fire pits line the community common area. Guests can
            enjoy a laid-back Port A evening around 1 of the fire pits with
            family and friends.
          </p>
        </div>
        <div className="amenity">
          <svg viewBox="0 0 100 100">
            <ellipse cx="50" cy="50" rx="40" ry="20" fill="#4896a6" />
          </svg>
          <h3>OUTDOOR LIVING</h3>
          <p>
            Private heated pools and rooftop terraces allow guests to enjoy the
            fresh salt air and take in the sights of Port Aransas. The Beachway
            Community is located in the island town of Port A w/c is considered by
            many to be "The Beach of Texas".
          </p>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="rentals-cta">
        <span>WANT TO STAY WITH US?</span>
        <a href="/" className="rentals-cta-btn">
          BOOK NOW
        </a>
      </section>
    </div>
  );
}

export default Rentals;