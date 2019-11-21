import React from 'react';
import s from './category.module.css'






const Category = (props) => {

    return <div className={s.card} onClick={() => { props.onCategoryClick(props.category_id, props.name) }}>
        <img src={props.img} alt="" />
        <h2>{props.name}</h2>


    </div>
}

export default Category;