import React from 'react';
import s from './catalog.module.css'
import Cards from './Cards/Cards';
import SidebarContainer from "../Sidebar/SidebarContainer"
import { NavLink } from 'react-router-dom';







const Catalog = (props) => {
    let productsElements = props.products.map(item => <Cards product={item} key={item.product_id} isAuth={props.isAuth}
        basket={props.basket} />)

    return <>
        <SidebarContainer />
        <main className={s.wrapper}>

            <div className={s.header}>

                <h2 >
                    {props.currentCategory}

                </h2>
                <h3>{props.currentSection}</h3>

            </div>
            <div className={s.main}>
                {props.isAuth && <>
                    <div className={s.newItem}>

                        <NavLink to="/productadd" >

                            < div>
                                <div className={s.circle}><span>+</span></div>
                            </div>
                        </NavLink>

                    </div>
                </>}
                {productsElements}

            </div>


        </main >
    </>
}

export default Catalog;