import React from 'react';
import { NavLink } from "react-router-dom"
import s from './header.module.css'
import basket from '../../img/icons/basket.png'
import logo from '../../img/logo/izobilie4.png'

const Header = (props) => {
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
                <img src={logo} alt="" />
            </div>
        </NavLink>
        <div className={s.navbar}>
            {/* <NavLink to='/'> Главная</NavLink> */}
            <NavLink to='/about'>О нас</NavLink>
            <NavLink to='/contacts'> Доставка и оплата</NavLink>
            {props.isAuth && <NavLink to='/orders'>Заказы</NavLink>}
        </div>

        {props.isAuth && <div className={s.btn} onClick={props.onClick}> Выйти</div>}


    </header>
}

export default Header;