import React from "react";
import "../Styles/Amenities.css";

function Amenities() {
  return (
    <div className="amenities-root">
      {/* HERO SECTION */}
      <section
        className="amenities-hero"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.36),rgba(0,0,0,0.36)), url('https://le-de.cdn-website.com/c7f29ca3554141a4831c527997a539c7/dms3rep/multi/opt/Untitled+design+%288%29-2880w.png')",
        }}
      >
        <div className="amenities-hero-content">
          <h1>Key Amenities</h1>
          <p>
            Featuring a secluded rooftop patio with beach vistas, a private pool,
            community perks such as corn hole and fire pits, and the opportunity
            to include a golf cart with your purchase.
          </p>
        </div>
      </section>

      {/* AMENITY BLOCKS */}
      <section className="amenities-blocks">
        {/* Amenity 1 */}
        <div className="amenity-row">
          <div
            className="amenity-img"
            style={{
              backgroundImage:
                "url('https://le-de.cdn-website.com/c7f29ca3554141a4831c527997a539c7/dms3rep/multi/opt/image_2024-03-29_212037680-2880w.png')",
            }}
          />
          <div className="amenity-text">
            <h2>Private Roof Top Patio</h2>
            <p>
              The private rooftop patio offers an exclusive outdoor space for
              relaxation and entertainment, providing a serene environment to
              unwind or host gatherings with friends and family. With panoramic
              beach views stretching across the horizon, it's an ideal spot to
              soak in the sun or enjoy breathtaking sunsets, elevating the living
              experience to new heights.
            </p>
          </div>
        </div>
        {/* Amenity 2 */}
        <div className="amenity-row reverse">
          <div className="amenity-text">
            <h2>Private Pool</h2>
            <p>
              A private pool adds a touch of luxury and convenience to everyday
              living, offering a refreshing retreat right at your doorstep.
              Whether you're seeking a refreshing dip on a hot day or a relaxing
              swim under the stars, the pool provides a private oasis for
              leisure and recreation, perfect for cooling off or enjoying quality
              time with loved ones in a tranquil setting.
            </p>
          </div>
          <div
            className="amenity-img"
            style={{
              backgroundImage:
                "url('https://le-de.cdn-website.com/c7f29ca3554141a4831c527997a539c7/dms3rep/multi/opt/DSC06869-2-2880w.jpg')",
            }}
          />
        </div>
        {/* Amenity 3 */}
        <div className="amenity-row">
          <div
            className="amenity-img"
            style={{
              backgroundImage:
                "url('https://le-de.cdn-website.com/c7f29ca3554141a4831c527997a539c7/dms3rep/multi/opt/DSC07336-2880w.jpg')",
            }}
          />
          <div className="amenity-text">
            <h2>Beach Views from the Rooftop Patio</h2>
            <p>
              Enjoy the enchanting vistas of the beach from the rooftop patio,
              creating a picturesque backdrop that enhances the ambiance and
              allure of outdoor gatherings. Whether you're savoring morning coffee
              with a view or hosting evening cocktails against the backdrop of
              the shimmering coastline, the rooftop patio offers a captivating
              panorama that epitomizes coastal living at its finest.
            </p>
          </div>
        </div>
        {/* Amenity 4 */}
        <div className="amenity-row reverse">
          <div className="amenity-text">
            <h2>Community Corn Hole</h2>
            <p>
              Looking for a place with a strong sense of community? Look no
              further! This property boasts a friendly neighborhood atmosphere
              and even has a dedicated cornhole court for those summer barbecues.
            </p>
          </div>
          <div
            className="amenity-img"
            style={{
              backgroundImage:
                "url('https://le-de.cdn-website.com/md/pexels/dms3rep/multi/opt/pexels-photo-274108-2880w.jpeg')",
            }}
          />
        </div>
        {/* Amenity 5 */}
        <div className="amenity-row">
          <div
            className="amenity-img"
            style={{
              backgroundImage:
                "url('https://le-de.cdn-website.com/c7f29ca3554141a4831c527997a539c7/dms3rep/multi/opt/pexels-photo-7149028-ae0744c7-2880w.jpeg')",
            }}
          />
          <div className="amenity-text">
            <h2>Community Fire Pits</h2>
            <p>
              Crave cozy nights under the stars? Imagine gathering with friends
              by flickering flames at our on-site community fire pits. Roast
              marshmallows, share stories, and enjoy the fresh air – perfect for
              building lasting memories right outside your door.
            </p>
          </div>
        </div>
        {/* Amenity 6 */}
        <div className="amenity-row reverse">
          <div className="amenity-text">
            <h2>Golf Cart Can Be An Added Purchase</h2>
            <p>
              Enjoy the enchanting vistas of the beach from the rooftop patio,
              creating a picturesque backdrop that enhances the ambiance and
              allure of outdoor gatherings. Whether you're savoring morning coffee
              with a view or hosting evening cocktails against the backdrop of
              the shimmering coastline, the rooftop patio offers a captivating
              panorama that epitomizes coastal living at its finest.
            </p>
          </div>
          <div
            className="amenity-img"
            style={{
              backgroundImage:
                "url('https://le-de.cdn-website.com/c7f29ca3554141a4831c527997a539c7/dms3rep/multi/opt/DSC07200-2880w.jpg')",
            }}
          />
        </div>
      </section>
    </div>
  );
}

export default Amenities;