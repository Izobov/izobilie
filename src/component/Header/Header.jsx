import React from 'react';
import { NavLink } from "react-router-dom"
import s from './header.module.css'
import basket from '../../img/icons/basket.png'

const Header = (props) => {
    return <header className={s.header}>
        <div className={s.logo}>
            Лого
        </div>
        <div className={s.navbar}>
            <NavLink to='/'>О нас</NavLink>
            <NavLink to='/'> Контакты</NavLink>
        </div>

        <NavLink className={s.basket} to='/'>
            <img src={basket} alt="" />
        </NavLink>
    </header>
}

export default Header;