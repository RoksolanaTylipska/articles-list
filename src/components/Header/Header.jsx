import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header({ theme, setTheme }) {

  const handleTheme = () => {
    if (theme === 'dark') {
      localStorage.setItem('theme', 'light');
      setTheme('light');
    } else {
      localStorage.setItem('theme', 'dark');
      setTheme('dark');
    }
  }

  return (
    <header className="header">
      <nav className="header__nav">
        <ul className="header__menu">
          <li className="header__menu-item"><Link to="/articles">Articles</Link></li>
          <li className="header__menu-item"><Link to="/news">News</Link></li>
        </ul>
      </nav>
      <button className='header__button' onClick={handleTheme}></button>
    </header>
  );
}

export default Header;