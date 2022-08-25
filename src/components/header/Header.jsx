import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/okunola-femi-femronal.jpeg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
      <header>

        <div className="container header__container">

            <h5>Hello, I am</h5>
            <h1>Okunola Femi</h1> 
            <h5 className="text-light">Semi-Professional Footballer</h5>
            <CTA />
            <HeaderSocials/>

            <div className="me">
              <img src= {ME} alt="" srcset="" />
            </div>

            <a href="#contact" className="scroll__down">Scroll Down</a>

        </div>

       
      </header>
  )
}

export default Header