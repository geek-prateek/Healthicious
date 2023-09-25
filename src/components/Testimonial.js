import "./Testimonial.css";
import avatar from './Images/avatar.png';
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function App() {
  return (
    <>
    <h1 style={{fontFamily: "serif", color: "purple", textAlign: "center"}}>TESTIMONIALS</h1>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div className="container" style={{borderRadius:"20px"}}>
            <a href="https://www.linkedin.com/in/geekprateek/"><img src="https://media.licdn.com/dms/image/D4D35AQForHD6Q9Hgdw/profile-framedphoto-shrink_400_400/0/1690340203923?e=1696161600&v=beta&t=DMmDAqH02dv-fl8ve5_PMNgGdWpNJaqo9T3if2gag_s" alt="avatar" style={{width: "7vw",borderRadius:"50px"}}/></a>
            <div className="content"><p style={{fontStyle: "italic"}}>" I absolutely love this product! It has completely changed the way I work and has made my life so much easier. I can't imagine going back to the old way of doing things " <br/> <i style={{color: "purple", margin: "20px"}} class="bi bi-quote"></i> - Prateek Kumar</p></div>
            <i style={{color: "yellow"}} class="bi bi-star-fill"></i>
            <i style={{color: "yellow"}} class="bi bi-star-fill"></i>
            <i style={{color: "yellow"}} class="bi bi-star-fill"></i>
            <i style={{color: "yellow"}} class="bi bi-star-fill"></i>
            <i style={{color: "yellow"}} class="bi bi-star-fill"></i>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="container" style={{borderRadius:"20px"}}>
            <a href="https://www.linkedin.com/in/vivek-kumar-0855a822a/"><img src="https://media.licdn.com/dms/image/D4D35AQHrT6VlFTbqig/profile-framedphoto-shrink_800_800/0/1690899471873?e=1696161600&v=beta&t=31m7_Ttcu2FdW9vs-R2hIYZTy4xCDTTLncB3SBY2OsA" alt="avatar" style={{width: "7vw",borderRadius:"50px"}}/></a>
            <div className="content"><p style={{fontStyle: "italic"}}>" I've been using this service for a while now, and I can't believe I didn't start sooner. It's saved me so much time and effort, and the results speak for themselves. I'm a satisfied customer. " <br/> <i style={{color: "blue", margin: "20px"}} class="bi bi-quote"></i> - Vivek Kumar</p></div>
            <i style={{color: "yellow"}} class="bi bi-star-fill"></i>
            <i style={{color: "yellow"}} class="bi bi-star-fill"></i>
            <i style={{color: "yellow"}} class="bi bi-star-fill"></i>
            <i style={{color: "yellow"}} class="bi bi-star-half"></i>
            <i style={{color: "yellow"}} class="bi bi-star"></i>          
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="container" style={{borderRadius:"20px"}}>
            <a href="https://www.linkedin.com/in/khushal-suthar-2480a8231/"><img src="https://media.licdn.com/dms/image/D4D35AQEEnizz1smYzA/profile-framedphoto-shrink_800_800/0/1690898793966?e=1696161600&v=beta&t=w5huNixdD1mKbWtkkzs9HInFk8xdBnynI4NJdSazaks" alt="avatar" style={{width: "7vw",borderRadius:"50px"}}/></a>
            <div className="content"><p style={{fontStyle: "italic"}}>" This app is a game-changer. It's user-friendly, intuitive, and has all the features I need. I've become so much more productive since I started using it. " <br/> <i style={{color: "green", margin: "20px"}} class="bi bi-quote"></i> - Khushal Suthar</p></div>
            <i style={{color: "yellow"}} class="bi bi-star-fill"></i>
            <i style={{color: "yellow"}} class="bi bi-star-fill"></i>
            <i style={{color: "yellow"}} class="bi bi-star-fill"></i>
            <i style={{color: "yellow"}} class="bi bi-star-fill"></i>
            <i style={{color: "yellow"}} class="bi bi-star"></i>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="container" style={{borderRadius:"20px"}}>
            <a href="https://www.linkedin.com/in/hello98077saurav/"><img src="https://media.licdn.com/dms/image/D5603AQEgIm32SZvHFg/profile-displayphoto-shrink_800_800/0/1668484518968?e=1701302400&v=beta&t=EhwtN6NiARahKPAWTnAP0QUC9quUvuymeRE6DS9R8sU" alt="avatar" style={{width: "7vw",borderRadius:"50px"}}/></a>
            <div className="content"><p style={{fontStyle: "italic"}}>" I've recommended this service to all my friends and colleagues because I believe it's a must-have. It simplifies complex tasks and makes them enjoyable. I can't imagine my life without it. " <br/> <i style={{color: "red", margin: "20px"}} class="bi bi-quote"></i> - Saurav Kumar</p></div>
            <i style={{color: "yellow"}} class="bi bi-star-fill"></i>
            <i style={{color: "yellow"}} class="bi bi-star-fill"></i>
            <i style={{color: "yellow"}} class="bi bi-star-fill"></i>
            <i style={{color: "yellow"}} class="bi bi-star-fill"></i>
            <i style={{color: "yellow"}} class="bi bi-star-half"></i>
          </div>
        </SwiperSlide>
        
      </Swiper>
    </>
  );
}