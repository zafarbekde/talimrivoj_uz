import React from 'react';
import '../../css/navbar_css/Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <ul className="navbar">
        <li><a href="#">Courses</a></li>
        <li><a href="#">Team</a></li>
        <li><a href="#">Eleltron platform</a></li>
        <li><a href="#">Offerta</a></li>
      </ul>
      <div className="navbar-right">
        <a href="#" className="navbar-link">Online Payment</a>
        <a href="#" className="navbar-link">Login</a>
        <div className="language-section">
          <select>
            <option value="en">O'zbekcha</option>
            <option value="fr">Russian</option>
            <option value="es">English</option>
          </select>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
