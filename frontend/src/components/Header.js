import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="header">
      <div className="header-content">
        <img
          src={require("./profile-pic.png")}
          alt="Lingam Vamshi Krishna Reddy"
          className="profile-pic"
        />
        <nav className="desktop-nav">
          <ul>
            {menuItems.map((item) => (
              <li key={item.name}>
                <a href={item.href}>{item.name}</a>
              </li>
            ))}
          </ul>
        </nav>
        <button className="mobile-menu-button" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? 'X' : '☰'}
        </button>
      </div>
      {isMenuOpen && (
        <nav className="mobile-nav">
          <ul>
            {menuItems.map((item) => (
              <li key={item.name}>
                <a href={item.href} onClick={() => setIsMenuOpen(false)}>{item.name}</a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;