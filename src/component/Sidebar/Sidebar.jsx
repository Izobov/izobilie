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
        <ul>
            Каталог
            {catalogItems}

        </ul>


    </aside>
}

export default Sidebar;