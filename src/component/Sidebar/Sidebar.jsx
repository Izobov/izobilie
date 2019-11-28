import React from 'react';
import { NavLink } from "react-router-dom"
import s from './sidebar.module.css'






const Sidebar = (props) => {
    let catalogItems = props.catalog.map((i) => <li key={i.catalog_id}>
        <NavLink to='/catalog' onClick={() => { props.onClick(i.catalog_id, i.name) }}>
            {i.name}
        </NavLink>
    </li>)


    return <aside className={s.aside}>

        <h2>

            Каталог
        </h2>
        {catalogItems}
        {props.isAuth && <div>
            <input type="text" placeholder='название раздела' />
            <div className={s.button}>Добавить раздел</div>
        </div>}




    </aside>
}

export default Sidebar;