import React from 'react';
import "./Testcss.css";
import avatar from './Images/avatar.png';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


export default function 
() {
  
  return (
    <>
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
      ></Swiper>
    <h1 style={{color: 'purple', fontFamily: "Serif", textAlign: "center"}}>TESTIMONIAL</h1>
    <section>
    <SwiperSlide>
          <div className="container" style={{width: "30%", borderRadius:"20px"}}>
            <img src={avatar} alt="avatar" style={{width: "100%",borderRadius:"20px"}}/>
            <div className="content"><p style={{fontStyle: "italic"}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga, architecto voluptate neque quaerat ipsam amet dignissimos commodi, voluptatibus ducimus, facilis aliquid qui eius sapiente placeat quibusdam numquam quod accusamus nostrum.</p></div>
          </div>
    </SwiperSlide>
    <SwiperSlide>
          <div className="container" style={{width: "30%", borderRadius:"20px"}}>
            <img src={avatar} alt="avatar" style={{width: "100%",borderRadius:"20px"}}/>
            <div className="content"><p style={{fontStyle: "italic"}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga, architecto voluptate neque quaerat ipsam amet dignissimos commodi, voluptatibus ducimus, facilis aliquid qui eius sapiente placeat quibusdam numquam quod accusamus nostrum.</p></div>
          </div>
    </SwiperSlide>
    <SwiperSlide>
          <div className="container" style={{width: "30%", borderRadius:"20px"}}>
            <img src={avatar} alt="avatar" style={{width: "100%",borderRadius:"20px"}}/>
            <div className="content"><p style={{fontStyle: "italic"}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga, architecto voluptate neque quaerat ipsam amet dignissimos commodi, voluptatibus ducimus, facilis aliquid qui eius sapiente placeat quibusdam numquam quod accusamus nostrum.</p></div>
          </div>
    </SwiperSlide>
    <SwiperSlide>
          <div className="container" style={{width: "30%", borderRadius:"20px"}}>
            <img src={avatar} alt="avatar" style={{width: "100%",borderRadius:"20px"}}/>
            <div className="content"><p style={{fontStyle: "italic"}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga, architecto voluptate neque quaerat ipsam amet dignissimos commodi, voluptatibus ducimus, facilis aliquid qui eius sapiente placeat quibusdam numquam quod accusamus nostrum.</p></div>
          </div>
    </SwiperSlide>
    </section>

      </>
  )

}

