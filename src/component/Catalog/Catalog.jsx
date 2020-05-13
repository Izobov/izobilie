import React, { useState } from 'react';

import s from './catalog.module.css'
import Cards from './Cards/Cards';

import AddProduct from '../RedactorsMode/AddProduct';
import SidebarContainer from "../Sidebar/SidebarContainer"
import { NavLink } from 'react-router-dom';







const Catalog = (props) => {


    const [addProduct, setAddProduct] = useState(false)

    const onAddProductSubmit = (values) => {
        props.onAddProductSubmit(values)
        setAddProduct(false)
    }


    let productsElements = props.products.map(item => <Cards product={item} key={item.product_id} pushInBasket={props.pushInBasket} isAuth={props.isAuth}
        onSubmit={props.onProductsSubmit} deleteProduct={props.deleteProduct} basket={props.basket} catalog={props.catalog} updateProduct={props.updateProduct} CurrentProduct={props.CurrentProduct} />)
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
                        {addProduct ? <AddProduct SetImg={props.SetImg} Cancel={setAddProduct} onSubmit={onAddProductSubmit} catalog={props.catalog} currentCategory={props.currentCategory} currentSection={props.currentSection} /> :
                            <NavLink to="/productadd" onClick={() => props.CurrentProduct(false)}>

                                < div>
                                    <div className={s.circle}><span>+</span></div>
                                </div>
                            </NavLink>
                        }
                    </div>
                </>}
                {productsElements}

            </div>


        </main >
    </>
}

export default Catalog;