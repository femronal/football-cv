import React from 'react'
import './contact.css'
// import react-icons

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">

        <div className="contact__options">

          <article className="contact__option">
            <span>E</span>
            <h4>Email</h4>
            <h5>okunolafemi8@gmail.com</h5>
            <a href="mailto:okunolafemi8@gmail.com" target='_blank'> Send a message</a>
          </article>

          <article className="contact__option">
            <span>M</span>
            <h4>Messenger</h4>
            <h5>Godswill Femi</h5>
            <a href="mailto:okunolafemi8@gmail.com" target='_blank'> Send a message</a>
          </article>

          <article className="contact__option">
            <span>W</span>
            <h4>WhatsApp</h4>
            <h5>+234813936559</h5>
            <a href="mailto:okunolafemi8@gmail.com" target='_blank'> Send a message</a>
          </article>

        </div>

        {/* ==== FORM ==== */}
        <form action="">
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