import React from 'react'
import searchIcon from "../assets/search.svg"
import menuIcon from "../assets/menu.svg"
export const Header = () => {
  return (
    <header>
      <nav className='header__nav'>
        <div className="header__logo">
          <h4 data-aos="fade-down">SushiStore</h4>
          <div className="header__logo-overlay"></div>
        </div>
        {/* DESKTOP */}
        <ul className='header__menu' data-aos="fade-down">
            <li>
              <a href='#menu'>Menu</a>
            </li>
            <li>
              <a href='#food'>Food</a>
            </li><li>
              <a href='#services'>Services</a>
            </li>
            <li>
              <a href='#about-us'>About us</a>
            </li>
            <li>
              <img src={searchIcon} alt='search icon' />
            </li>
          </ul>
          {/* MOBILE */}
          <ul className='header__menu-mobile' data-aos="fade-down">
            <li>
              <img src={menuIcon} alt="menu" />
            </li>
          </ul>
      </nav>
    </header>
  )
}
