import React from 'react'
import './testimonials.css'
import Avt1 from '../../assets/avatar1.jpg'

// import Swiper core and required modules
import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


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

      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
          {
            data.map(({avatar, name, review}, index) => {
              return(
                <SwiperSlide key={index} className="testimonial">
                <div className="coach__avatar">
                  <img src={avatar}/>
                </div>
                <h5 className='coach__name'>{name}</h5>
                <small className="coach__review">
                 {review}
                </small>
              </SwiperSlide>
              )
            })
          }

      </Swiper>
    </section>
  )
}

export default Testimonials