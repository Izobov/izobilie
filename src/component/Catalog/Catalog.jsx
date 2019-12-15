import React, { useState, useEffect } from 'react';

import s from './catalog.module.css'
import Category from './Categories/Categories';
import Products from './Products/Products';
import AddCategory from '../RedactorsMode/AddCategory';
import AddProduct from '../RedactorsMode/AddProduct';







const Catalog = (props) => {

    const [addCategory, setAddCategory] = useState(false)
    const [addProduct, setAddProduct] = useState(false)

    const onAddCategorySubmit = (values) => {
        props.onAddCategorySubmit(values)
        setAddCategory(false)
    }
    const onAddProductSubmit = (values) => {
        props.onAddProductSubmit(values)
        setAddProduct(false)
    }


    let productsElements = props.products.map(item => <Products color={item.color} img={item.img} material={item.material}
        name={item.name} price={item.price} size={item.size} description={item.description} key={item.product_id} pushInBasket={props.pushInBasket} product_id={item.product_id} isAuth={props.isAuth}
        catalog_id={item.catalog_id} category_id={item.category_id} onSubmit={props.onProductsSubmit} SetImg={props.SetImg} />)
    let categoryElements = props.categories.map(item => <Category name={item.name} img={item.img} key={item.category_id} category_id={item.category_id} onCategoryClick={props.onCategoryClick}
        isAuth={props.isAuth} />)

    return <main>
        {props.currentCategory ? <h2>{props.currentCategory}</h2> : <h2>{props.currentCatalog}</h2>}

        <div className={s.main}>
            {props.isAuth && <>
                <div className={s.newItem} >
                    {addCategory ? <AddCategory SetImg={props.SetImg} Cancel={setAddCategory} onSubmit={onAddCategorySubmit} />
                        : < div onClick={() => setAddCategory(true)}>
                            <h2>Добавить категорию</h2>
                            <div className={s.circle}><span>+</span></div>
                        </div>
                    }

                </div>
                <div className={s.newItem}>
                    {addProduct ? <AddProduct SetImg={props.SetImg} Cancel={setAddProduct} onSubmit={onAddProductSubmit} /> :
                        < div onClick={() => setAddProduct(true)}>
                            <h2>Добавить товар</h2>
                            <div className={s.circle}><span>+</span></div>
                        </div>
                    }
                </div>
            </>}
            {categoryElements.length !== 0 ? categoryElements : productsElements}

        </div>


    </main>
}

export default Catalog;