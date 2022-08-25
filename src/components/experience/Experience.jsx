import React from 'react'
import './experience.css'
// import {BsPatchCheckFill} from './react-icons'

const Experience = () => {
  return (
    <section id='experiences'>
      <h5>The Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">

      {/* ========== FRONT END ========== */}

          <div className="experience__frontend">
            <h3>Frontend Development</h3>
            <div className="experience__content">

              <article className="experience__details">
                  <span>H</span>
                  
                  <div>
                    <h4>HTML</h4>
                    <small className="text-light">Experienced</small>
                  </div> 
              </article>
              
              <article className="experience__details">
                  <span>C</span>
                  
                  <div>
                    <h4>CSS</h4>
                    <small className="text-light">Intermediate</small>
                  </div>
              </article>
            
              <article className="experience__details">
                  <span>H</span>
                  
                  <div>
                    <h4>HTML</h4>
                    <small className="text-light">Experienced</small>
                  </div> 
              </article>
              
              <article className="experience__details">
                  <span>C</span>

                  <div>
                    <h4>CSS</h4>
                    <small className="text-light">Intermediate</small>
                  </div>
              </article>
            
              <article className="experience__details">
                  <span>H</span>
                  
                  <div>
                    <h4>HTML</h4>
                    <small className="text-light">Experienced</small>
                  </div> 
              </article>
              
              <article className="experience__details">
                  <span>C</span>

                  <div>
                    <h4>CSS</h4>
                    <small className="text-light">Intermediate</small>
                  </div>
                  
              </article>
            
            </div>
          </div>

        {/* ========== BACK END ========== */}

          <div className="experience__backend">
            <h3>Backend Development</h3>
            <div className="experience__content">

              <article className="experience__details">
                  <span>H</span>

                  <div>
                    <h4>HTML</h4>
                    <small className="text-light">Experienced</small>
                  </div>            
              </article>
              
              <article className="experience__details">
                  <span>C</span>
                  
                  <div>
                    <h4>CSS</h4>
                    <small className="text-light">Intermediate</small>
                  </div>
              </article>
            
              <article className="experience__details">
                  <span>H</span>

                  <div>
                    <h4>HTML</h4>
                    <small className="text-light">Experienced</small>
                  </div>
              </article>
              
              <article className="experience__details">
                  <span>C</span>

                  <div>
                  <h4>CSS</h4>
                  <small className="text-light">Intermediate</small>
                  </div>
              </article>
            
              <article className="experience__details">
                  <span>H</span>

                  <div>
                  <h4>HTML</h4>
                  <small className="text-light">Experienced</small>
                  </div>
              </article>
              
              <article className="experience__details">
                  <span>C</span>

                  <div>
                  <h4>CSS</h4>
                  <small className="text-light">Intermediate</small>
                  </div>       
              </article>
            
            </div>
          </div>

      </div>
    </section>
  )
}

export default Experience