import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="landingHeader">
      <span className="logo">IC</span>
      <nav>
        <ul className="navLinks">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/contact">Contact</Link></li> {/* Optional for later */}
        </ul>
      </nav>
    </div>
  );
}

export default Header;
