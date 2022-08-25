import React from 'react'
import './footer.css'
// import react-icons

const Footer = () => {
  return (
    <footer id='footer'>
      <a href="#" className='footer__logo'>FEMRONAL</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testmonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com">F</a>
        <a href="https://instagram.com">F</a>
        <a href="https://twitter.com">F</a>
      </div>

      <div className="footer__copyright">
        <small> &copy; FEMRONAL. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer