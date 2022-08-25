import React from 'react'
import './testimonials.css'
import Avt1 from '../../assets/avatar1.jpg'
// import swiper ==== DONT FORGET!!! ====

const data = [
  {
    avatar: Avt1,
    name: "Johan Cruyff",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ratione natus ullam voluptate accusamus pariatur cumque, fugiat, non animi quod unde. Dolores ea harum iure debitis delectus, tempora reprehenderit suscipit."
  }, 

  {
    avatar: Avt1,
    name: "Johan Cruyff",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ratione natus ullam voluptate accusamus pariatur cumque, fugiat, non animi quod unde. Dolores ea harum iure debitis delectus, tempora reprehenderit suscipit."
  },

  {
    avatar: Avt1,
    name: "Johan Cruyff",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ratione natus ullam voluptate accusamus pariatur cumque, fugiat, non animi quod unde. Dolores ea harum iure debitis delectus, tempora reprehenderit suscipit."
  },

  {
    avatar: Avt1,
    name: "Johan Cruyff",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ratione natus ullam voluptate accusamus pariatur cumque, fugiat, non animi quod unde. Dolores ea harum iure debitis delectus, tempora reprehenderit suscipit."
  }

]

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review From Coaches</h5>
      <h2>Testimonial</h2>

      <div className="container testimonials__container">
          {
            data.map(({avatar, name, review}, index) => {
              return(
                <article key={index} className="testimonial">
                <div className="coach__avatar">
                  <img src={avatar}/>
                </div>
                <h5 className='coach__name'>{name}</h5>
                <small className="coach__review">
                 {review}
                </small>
              </article>
              )
            })
          }

      </div>
    </section>
  )
}

export default Testimonials