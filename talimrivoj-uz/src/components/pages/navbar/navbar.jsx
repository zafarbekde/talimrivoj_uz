import React from 'react';
import '../../css/navbar_css/Navbar.css';
import '@fortawesome/fontawesome-free/css/all.css';

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
        <a href="#" className="navbar-link-login active">Login</a>
        <div className="language-section">
          <select>
            <option value="uz">O'zbekcha</option>
            <option value="ru">Russian</option>
            <option value="eng">English</option>
          </select>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
