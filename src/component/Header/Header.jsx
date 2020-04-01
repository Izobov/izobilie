import React from 'react';
import { NavLink } from "react-router-dom"
import s from './header.module.css'
import basket from '../../img/icons/basket3.png'
import search from '../../img/icons/search.png'
import logo from '../../img/logo/izobilie4.png'

const Header = (props) => {
    return <header className={s.header}>
        <NavLink to='/'>

            <div className={s.logo}>
                <img src={logo} alt="" />
            </div>
        </NavLink>
        {/* <div className={s.searchWrapper}>

            <input type="text" className={s.search} placeholder="поиск..." onChange={(e) => props.onChange(e.target.value)} onKeyDown={(e) => props.onKeyDown(e.keyCode)} />
            <img src={search} alt="" onClick={() => props.onKeyDown(13)} />
        </div> */}
        <div className={s.contacts}>
            <span>
                +375(29) 655-99-38
            </span>
            <span>
                +375(29) 329-89-85
            </span>
        </div>
        <div className={s.navbar}>
            <NavLink to='/'> Главная</NavLink>
            <NavLink to='/about'>О нас</NavLink>
            <NavLink to='/contacts'> Доставка и оплата</NavLink>
            {props.isAuth && <NavLink to='/orders'>Заказы</NavLink>}
        </div>
        {/* <div className={s.info}>
            <span>вт-вс: 8:00-16:00 </span>
            <span> пн: выходной</span>
        </div> */}
        {props.isAuth && <div className={s.btn} onClick={props.onClick}> Выйти</div>}

        <NavLink className={s.basket} to='/basket'>
            <img src={basket} alt="" />
            <div className={s.count}>{props.countOfProducts}</div>
        </NavLink>
    </header>
}

export default Header;