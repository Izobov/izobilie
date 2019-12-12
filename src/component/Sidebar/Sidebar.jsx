import React from 'react';
import { NavLink } from "react-router-dom"
import s from './sidebar.module.css'
import { useState } from 'react';






const Sidebar = (props) => {

    let [redactorMode, setRedactorMode] = useState(false);
    let [inputValue, setInputValue] = useState()

    let createNewItem = () => {
        setRedactorMode(true)
    };

    let submit = () => {
        setRedactorMode(false)
        props.onSubmit(inputValue)
    }

    let catalogItems = props.catalog.map((i) => <div key={i.catalog_id} className={s.item}>
        <NavLink to='/catalog' onClick={() => { props.onClick(i.catalog_id, i.name) }}>
            {props.isAuth && i.catalog_id}
            {i.name}
        </NavLink>
    </div>)


    return <aside className={s.aside}>

        <h2>

            Каталог
        </h2>
        {catalogItems}
        {props.isAuth && <div>
            {redactorMode ? <div>
                <input type="text" placeholder='название раздела' value={inputValue} onChange={(e) => { setInputValue(e.target.value) }} />
                <div className={s.button} onClick={() => { submit() }}>Отправить</div>
            </div>
                : <div className={s.button} onClick={() => { createNewItem() }}>Создать раздел</div>
            }
        </div>}




    </aside>
}

export default Sidebar;