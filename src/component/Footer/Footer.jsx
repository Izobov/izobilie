import React from 'react'
import s from './footer.module.css';
import logo from '../../img/logo/Logo.png'
import { NavLink } from "react-router-dom"

const Footer = (props) => {
    return <footer>
        <div className={s.nav}><NavLink to='/'>Главная</NavLink>
            <NavLink to='/about' > О нас</NavLink>
            <NavLink to='/contacts'>Доставка и оплата</NavLink></div>



        <div className={s.logoWrapper}> <img src={logo} alt="" />

            <p>&copy;all rigths reserved</p>
        </div>
        <div className={s.contacts}>
            <span>
                Контактные телефоны:
            </span>
            <span>

                 +375(29)655-99-38 (A1),
            </span>
            <span>

                 +375(29)653-09-37 (A1),
            </span>
            <span>
                 +375(29)329-89-85 (A1)
                
            </span>
            <soan>Время работы: вт-вс 9:00-17:00, пн-выходной</soan>
        </div>

        <span className={s.marketing}> По вопросам разработки сайта обращаться по телефону:+375(29)384-53-50</span>

    </footer>
}

export default Footer