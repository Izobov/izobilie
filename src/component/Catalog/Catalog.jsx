import React, { useState } from 'react';

import s from './catalog.module.css'
import Products from './Products/Products';

import AddProduct from '../RedactorsMode/AddProduct';







const Catalog = (props) => {


    const [addProduct, setAddProduct] = useState(false)

    const onAddProductSubmit = (values) => {
        props.onAddProductSubmit(values)
        setAddProduct(false)
    }


    let productsElements = props.products.map(item => <Products product={item} key={item.product_id} pushInBasket={props.pushInBasket} isAuth={props.isAuth}
        onSubmit={props.onProductsSubmit} deleteProduct={props.deleteProduct} basket={props.basket} catalog={props.catalog} updateProduct={props.updateProduct} />)
    return <main className={s.wrapper}>
        <div className={s.header}>

            <h2 >
                {props.currentCategory}

            </h2>

        </div>

        <div className={s.title}>


            <h3>{props.currentSection}</h3>
        </div>
        <div className={s.main}>
            {props.isAuth && <>
                <div className={s.newItem}>
                    {addProduct ? <AddProduct SetImg={props.SetImg} Cancel={setAddProduct} onSubmit={onAddProductSubmit} catalog={props.catalog} currentCategory={props.currentCategory} currentSection={props.currentSection} /> :
                        < div onClick={() => setAddProduct(true)}>
                            <div className={s.circle}><span>+</span></div>
                        </div>
                    }
                </div>
            </>}
            {productsElements}

        </div>


    </main >
}

export default Catalog;