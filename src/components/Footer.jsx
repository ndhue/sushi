import React from 'react'
import fb from "../assets/facebook.svg"
import ins from "../assets/instagram.svg"
import twt from "../assets/twitter.svg"

export const Footer = () => {
  return (
    <footer className="footer flex-between">
      <h3 className="footer__logo">
        <span>Sushi</span>store
      </h3>
      <ul className="footer__nav">
        <li><a href="#menu">Menu</a></li>
        <li><a href="#food">Food</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#about-us">About Us</a></li>
      </ul>
      <ul className="footer__social">
        <li className="flex-center">
          <img src={fb} alt="facebook" />
        </li>
        <li className="flex-center">
          <img src={ins} alt="instagram" />
        </li>
        <li className="flex-center">
          <img src={twt} alt="twitter" />
        </li>
      </ul>
    </footer>

  )
}
