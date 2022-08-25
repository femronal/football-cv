import React from 'react'
import './about.css'
import ME from '../../assets/okunola-femi-femronal.jpeg'
// import {FaAward} from 'react-icons'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about__container">

        <div className="about__me">
          <div className="about__me-img">
              <img src={ME} alt="Picture of Okunola Femi, Aka Femronal" sizes="" srcset="" />
          </div>
        </div>

        <div className="about__content">
            <div className="about__cards">

              <article className="about__card">
                <span className="about__icon">AW</span>
                <h5>Experience</h5>
                <small>3+ Years Working</small>
              </article>

              <article className="about__card">
                <span className="about__icon">AW</span>
                <h5>Experience</h5>
                <small>3+ Years Working</small>
              </article>

              <article className="about__card">
                <span className="about__icon">AW</span>
                <h5>Experience</h5>
                <small>3+ Years Working</small>
              </article>
            </div>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam molestias commodi consequatur vitae vel ullam, excepturi est mollitia hic suscipit quasi ipsa explicabo saepe veritatis quae temporibus, distinctio enim rem?</p>
            <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>

      </div>
    </section>
  )
}

export default About