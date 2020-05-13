import React from 'react';
import { NavLink } from "react-router-dom"
import s from './header.module.css'

import logo1 from '../../img/logo/izobilie4.png'


const Header = (props) => {
    return <header className={s.header}>


        <NavLink to='/'>

            <div className={s.logo}>
                <img src={logo1} alt="" />
            </div>
        </NavLink>
        <input type="text" />
        <div className={s.btn}>поиск</div>
        {props.isAuth && <div className={s.btn} onClick={props.onClick}> Выйти</div>}
        <div className={s.navbar}>
        </div>



    </header>
}

export default Header;