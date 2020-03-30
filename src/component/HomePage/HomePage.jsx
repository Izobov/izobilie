import React from "react";
import { NavLink } from "react-router-dom";
import s from "./home.module.css";
import { useState } from "react";
import Slider from './Slider'
import inst from "../../img/icons/instagram.svg"


const HomePage = props => {


    return <div className={s.wrapper}>

        <Slider />
        <div>
            <h2>Топ продаж</h2>
        </div >
        <div>
            <h2>
                <img src={inst} alt="" /> Следите за нами в инстаграмм  <a href="https://www.instagram.com/invites/contact/?i=1576hqix.." target>&#64;izo_bilie. </a>
            </h2>
        </div>
        <div className={s.map}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2347.7330959483747!2d27.690399015497757!3d53.95424838011089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbc93826962d09%3A0x3ef3b52124440e53!2z0KHRgtGA0L7QuNGC0LXQu9GM0L3Ri9C5INGA0YvQvdC-0Log0KPRgNGD0YfRjNC1!5e0!3m2!1sru!2sby!4v1573459082879!5m2!1sru!2sby" className={s.map}></iframe>
        </div>
    </div >

};

export default HomePage;
