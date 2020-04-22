import React from 'react';
import { NavLink } from "react-router-dom"
import s from './header.module.css'

import logo1 from '../../img/logo/izobilie4.png'
import logo2 from '../../img/logo/Logo.png'

const Header = (props) => {
    console.log(window.innerWidth <= 320)
    return <header className={s.header}>

        <div className={s.contacts}>
            <span>
                +375(29) 655-99-38
            </span>
            <span>
                +375(29) 329-89-85
            </span>
        </div>
        <NavLink to='/'>

            <div className={s.logo}>
                <img src={window.innerWidth <= 344 ? logo2 : logo1} alt="" />
            </div>
        </NavLink>
        <div className={s.navbar}>

            <NavLink to='/about'>О нас</NavLink>
            <NavLink to='/contacts'> Доставка и оплата</NavLink>
            {props.isAuth && <NavLink to='/orders'>Заказы</NavLink>}
            {props.isAuth && <div className={s.btn} onClick={props.onClick}> Выйти</div>}
        </div>



    </header>
}

export default Header;