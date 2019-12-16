import React from 'react';
import { NavLink } from "react-router-dom"
import s from './header.module.css'
import basket from '../../img/icons/basket.png'
import search from '../../img/icons/search.png'
import logo from '../../img/logo/izobilie4.png'

const Header = (props) => {
    return <header className={s.header}>
        <div className={s.logo}>
            <img src={logo} alt="" />
        </div>
        <div className={s.searchWrapper}>

            <input type="text" className={s.search} placeholder="поиск..." onChange={(e) => props.onChange(e.target.value)} onKeyDown={(e) => props.onKeyDown(e.keyCode)} />
            <img src={search} alt="" onClick={() => props.onKeyDown(13)} />
        </div>
        <div className={s.navbar}>
            <NavLink to='/about'>О нас</NavLink>
            <NavLink to='/contacts'> Контакты</NavLink>
            {props.isAuth && <NavLink to='/orders'>Заказы</NavLink>}
        </div>

        {props.isAuth && <div className={s.btn} onClick={props.onClick}> Выйти</div>}

        <NavLink className={s.basket} to='/basket'>
            <img src={basket} alt="" />
            <div className={s.count}>{props.countOfProducts}</div>
        </NavLink>
    </header>
}

export default Header;