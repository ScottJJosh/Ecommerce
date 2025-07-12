import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="landingHeader">
      <img
        className="logo"
        src="/Ecommerce/beachwayPicture.png"
        alt="Beachway Logo"
        style={{ height: "5rem", width: "auto" }}
      />
      <nav>
        <ul className="navLinks">
          <li><Link to="/Ecommerce">Beachway Rentals</Link></li>
          <li><Link to="/Amenities">Key Amenities</Link></li>
          <li><Link to="/About">About us</Link></li>
          <li><Link to="/Contact">Contact</Link></li>
        </ul>
      </nav>
      <Link to="/Ecommerce" className="rentalsBtn">View Our Rentals</Link>
    </div>
  );
}

export default Header;
