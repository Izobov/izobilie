import React from 'react';

import s from './catalog.module.css'
import Category from './Categories/Categories';
import Products from './Products/Products';







const Catalog = (props) => {


    let productsElements = props.products.map(item => <Products color={item.color} img={item.img} material={item.material}
        name={item.name} price={item.price} size={item.size} description={item.description} key={item.product_id} pushInBasket={props.pushInBasket} product_id={item.product_id} />)
    let categoryElements = props.categories.map(item => <Category name={item.name} img={item.img} key={item.category_id} category_id={item.category_id} onCategoryClick={props.onCategoryClick} />)

    return <main>
        <h2>{props.currentCatalog}</h2>
        <h3>{props.currentCategory}</h3>
        <div className={s.main}>
            {categoryElements.length !== 0 ? categoryElements : productsElements}

        </div>


    </main>
}

export default Catalog;