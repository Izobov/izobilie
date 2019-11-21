import React from 'react';
import { NavLink } from "react-router-dom"
import s from './header.module.css'
import basket from '../../img/icons/basket.png'
import search from '../../img/icons/search.png'

const Header = (props) => {
    return <header className={s.header}>
        <div className={s.logo}>
            Лого
        </div>
        <div className={s.searchWrapper}>

            <input type="text" className={s.search} placeholder="поиск..." />
            <img src={search} alt="" />
        </div>
        <div className={s.navbar}>
            <NavLink to='/about'>О нас</NavLink>
            <NavLink to='/contacts'> Контакты</NavLink>
        </div>

        <NavLink className={s.basket} to='/basket'>
            <img src={basket} alt="" />
        </NavLink>
    </header>
}

export default Header;