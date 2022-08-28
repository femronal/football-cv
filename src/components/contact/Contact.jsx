import React from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {BsWhatsapp} from 'react-icons/bs'
import {RiMessengerLine} from 'react-icons/ri'
import { useRef } from 'react';
import emailjs from 'emailjs-com'


const Contact = () => {
    const form  = useRef()

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_7s73fmp', 'service_7s73fmp', form.current, 'hlesWH5dgLc33z78S')

    };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2> 

      <div className="container contact__container">

        <div className="contact__options">

          <article className="contact__option">
            <span><AiOutlineMail/></span>
            <h4>Email</h4>
            <h5>okunolafemi8@gmail.com</h5>
            <a href="mailto:okunolafemi8@gmail.com" target='_blank'> Send a message</a>
          </article>

          <article className="contact__option">
            <span> <RiMessengerLine/> </span>
            <h5>Messenger</h5>
            <h4>Godswill Femi</h4>
            <a href="https://m.me/godswill.femi.5" target='_blank'> Send a message</a>
          </article>

          <article className="contact__option">
            <span><BsWhatsapp/></span>
            <h5>WhatsApp</h5>
            <h4>+2348139036559</h4>
            <a href="https://api.whatsapp.com/send?phone+234813936559" target='_blank'> Send a message</a>
          </article>

        </div>

        {/* ==== FORM ==== */}
        <form ref={form} onSubmit={useRef}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
          <button type='submit' className='btn btn-primary'>Submit</button>
        </form>
      </div>
      
    </section>
  )
}

export default Contact