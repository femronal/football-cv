import React from 'react'
import './nav.css'
// import {AiOutlineHome} from 'react-icons/ai'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>  
      <a href="#" onClick={() => setActiveNav('#')} className= {activeNav === '#' ? 'active' : ''}>H</a>
      <a href="#about" onClick={() => setActiveNav('#about')} className= {activeNav === '#about' ? 'active' : ''}>A</a>
      <a href="#services" onClick={() => setActiveNav('#services')} className= {activeNav === '#services' ? 'active' : ''}>S</a>
      <a href="#experiences" onClick={() => setActiveNav('#experiences')} className= {activeNav === '#experiences' ? 'active' : ''}>E</a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className= {activeNav === '#contact' ? 'active' : ''}>C</a>
    </nav>
  )
}

export default Nav