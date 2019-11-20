import React from 'react';
import { NavLink } from "react-router-dom"
import s from './catalog.module.css'
import Category from './Categories/Categories';
import Product from './Product/Product';






const Catalog = (props) => {


    let categoryElements = props.categories.map(item => <Category name={item.name} img={item.img} key={item.category_id} />)
    return <main className={s.main}>

        {categoryElements}
        {/* <Product /> */}

    </main>
}

export default Catalog;