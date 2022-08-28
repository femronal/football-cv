import React from 'react'
import {BsYoutube} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'


const HeaderSocials = () => {
  return (
    <div>
        <div className="header__socials">
            <a href="https://www.youtube.com/channel/UCqTUpI4O1wJJLObomHF88Pg" target="_blank" rel="noopener noreferrer"><BsYoutube/></a>
            <a href="https://www.instagram.com/femronal/" target="_blank" rel="noopener noreferrer"><BsInstagram/></a>
            <a href="+2348139036559" target="_blank" rel="noopener noreferrer"><BsWhatsapp/></a>
        </div>
    </div>
  )
}

export default HeaderSocials