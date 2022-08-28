import React from 'react'
import './services.css'
import {FaCheck} from 'react-icons/fa'

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">

        {/* ========= UI/UX DESIGN ===========*/}

        <article className="service">
          <div className="service__head">
            <h3>UI / UX Design</h3>
          </div>

            <ul className="service__list">
              <li>
                <span className="service-list-icon"><FaCheck/></span>
                <p>Lorem, ipsum dolor sit amet consectetur aipisicing elit.</p>
              </li>

              <li>
                <span className="service-list-icon"><FaCheck/></span>
                <p>Lorem, ipsum dolor sit amet consectetur aipisicing elit.</p>
              </li>

              <li>
                <span className="service-list-icon"><FaCheck/></span>
                <p>Lorem, ipsum dolor sit amet consectetur aipisicing elit.</p>
              </li>

              <li>
                <span className="service-list-icon"><FaCheck/></span>
                <p>Lorem, ipsum dolor sit amet consectetur aipisicing elit.</p>
              </li>

              <li>
                <span className="service-list-icon"><FaCheck/></span>
                <p>Lorem, ipsum dolor sit amet consectetur aipisicing elit.</p>
              </li>

              <li>
                <span className="service-list-icon"><FaCheck/></span>
                <p>Lorem, ipsum dolor sit amet consectetur aipisicing elit.</p>
              </li>
            </ul>
          
        </article>

        {/* ========= WEB DEVELOPMENT ===========*/}

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

            <ul className="service__list">
              <li>
                <span className="service-list-icon"><FaCheck/></span>
                <p>Lorem, ipsum dolor sit amet consectetur aipisicing elit.</p>
              </li>

              <li>
                <span className="service-list-icon"><FaCheck/></span>
                <p>Lorem, ipsum dolor sit amet consectetur aipisicing elit.</p>
              </li>

              <li>
                <span className="service-list-icon"><FaCheck/></span>
                <p>Lorem, ipsum dolor sit amet consectetur aipisicing elit.</p>
              </li>

              <li>
                <span className="service-list-icon"><FaCheck/></span>
                <p>Lorem, ipsum dolor sit amet consectetur aipisicing elit.</p>
              </li>

              <li>
                <span className="service-list-icon"><FaCheck/></span>
                <p>Lorem, ipsum dolor sit amet consectetur aipisicing elit.</p>
              </li>

              <li>
                <span className="service-list-icon"><FaCheck/></span>
                <p>Lorem, ipsum dolor sit amet consectetur aipisicing elit.</p>
              </li>

              <li>
                <span className="service-list-icon"><FaCheck/></span>
                <p>Lorem, ipsum dolor sit amet consectetur aipisicing elit.</p>
              </li>
              
            </ul>
          
        </article>

         {/* ========= CONTENT CREATION ===========*/}

         <article className="service content__creation">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>
            <ul className="service__list">
              <li>
                <span className="service-list-icon"><FaCheck/></span>
                <p>Lorem, ipsum dolor sit amet consectetur aipisicing elit.</p>
              </li>

              <li>
                <span className="service-list-icon"><FaCheck/></span>
                <p>Lorem, ipsum dolor sit amet consectetur aipisicing elit.</p>
              </li>

              <li>
                <span className="service-list-icon"><FaCheck/></span>
                <p>Lorem, ipsum dolor sit amet consectetur aipisicing elit.</p>
              </li>

              <li>
                <span className="service-list-icon"><FaCheck/></span>
                <p>Lorem, ipsum dolor sit amet consectetur aipisicing elit.</p>
              </li>

              <li>
                <span className="service-list-icon"><FaCheck/></span>
                <p>Lorem, ipsum dolor sit amet consectetur aipisicing elit.</p>
              </li>

              <li>
                <span className="service-list-icon"><FaCheck/></span>
                <p>Lorem, ipsum dolor sit amet consectetur aipisicing elit.</p>
              </li>
            </ul>
          
        </article>
      </div>
    </section>
  )
}

export default Services