import React from 'react'
import './portfolio.css'
import IMG from '../../assets/portfolio.jpg'

const data = [
  {
    id: 1,
    image: IMG,
    title: 'Mechus Dashboard',
    github: 'htpps://github.com/femronal',
    demo: 'https://mechus.com '
  },
  {
    id: 2,
    image: IMG,
    title: 'Mechus Dashboard',
    github: 'htpps://github.com/femronal',
    demo: 'https://mechus.com '
  },
  {
    id: 3,
    image: IMG,
    title: 'Mechus Dashboard',
    github: 'htpps://github.com/femronal',
    demo: 'https://mechus.com '
  },
  {
    id: 4,
    image: IMG,
    title: 'Mechus Dashboard',
    github: 'htpps://github.com/femronal',
    demo: 'https://mechus.com '
  },
  {
    id: 5,
    image: IMG,
    title: 'Mechus Dashboard',
    github: 'htpps://github.com/femronal',
    demo: 'https://mechus.com '
  },
  {
    id: 6,
    image: IMG,
    title: 'Mechus Dashboard',
    github: 'htpps://github.com/femronal',
    demo: 'https://mechus.com '
  }
  
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className="portfolio-item">
                  <div className="portfolio-item-image">
                    <img src={image} alt={title}/>
                  </div>
                  <h3>{title}</h3>
                  <div className="portfolio-item-cta">
                    <a href={github} className='btn' target='_blank'>Mechus</a>
                    <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                  </div>        
              </article>
            )
          })
        }
   
      </div>
    </section>
  )
}

export default Portfolio