import React, { useState } from 'react';

import s from './catalog.module.css'
import Products from './Products/Products';
import AddCategory from '../RedactorsMode/AddCategory';
import AddProduct from '../RedactorsMode/AddProduct';







const Catalog = (props) => {

    const [addCategory, setAddCategory] = useState(false)
    const [addProduct, setAddProduct] = useState(false)

    // const onAddCategorySubmit = (values) => {
    //     props.onAddCategorySubmit(values)
    //     setAddCategory(false)
    // }
    const onAddProductSubmit = (values) => {
        props.onAddProductSubmit(values)
        setAddProduct(false)
    }


    let productsElements = props.products.map(item => <Products product={item} key={item.product_id} pushInBasket={props.pushInBasket} isAuth={props.isAuth}
        onSubmit={props.onProductsSubmit} SetImg={props.SetImg} deleteProduct={props.deleteProduct} basket={props.basket} />)
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
                    {addProduct ? <AddProduct SetImg={props.SetImg} Cancel={setAddProduct} onSubmit={onAddProductSubmit} /> :
                        < div onClick={() => setAddProduct(true)}>
                            <h2>Добавить товар</h2>
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