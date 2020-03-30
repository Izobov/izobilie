import React from "react";
import Swiper from 'react-id-swiper';
import s from "./home.module.css";
import 'swiper/css/swiper.css';
import img1 from "../../img/slider/img1.jpg";
import img2 from '../../img/slider/img2.jpg';
import img3 from '../../img/slider/img3.jpg';
import img4 from '../../img/slider/img4.jpg';
import img5 from '../../img/slider/img5.jpg';

const Slider = () => {
    const params = {
        effect: 'fade',
        loop: true,
        speed: 1500,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false
        },

    }

    return (
        <Swiper {...params} className={s.slider}>
            <div><img className={s.sliderImg} src={img1} alt="" /></div>
            <div><img className={s.sliderImg} src={img2} alt="" /></div>
            <div><img className={s.sliderImg} src={img3} alt="" /></div>
            <div><img className={s.sliderImg} src={img4} alt="" /></div>
            <div><img className={s.sliderImg} src={img5} alt="" /></div>
        </Swiper>)
}

export default Slider