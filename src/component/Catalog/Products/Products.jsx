import React from 'react';
import s from './product.module.css'
import { useState } from 'react'






const Products = (props) => {

    const [inputValue, setValue] = useState(0)

    return <div className={s.card}>
        <div className={s.wrapper}>
            <img src={props.img} alt="" />
            <div className={s.description} >
                <h2>{props.name}</h2>
                <div className={s.info}>
                    <div className={s.characteristic}>
                        <span>Размер:</span>
                        <span>Цвет:</span>
                        <span>Материал:</span>
                    </div>
                    <div className={s.value}>
                        <span>{props.size}</span>
                        <span>{props.color}</span>
                        <span>{props.material}</span>
                    </div>
                </div>


            </div>
            <div className={s.buttons}>
                <strong>{props.price}</strong>
                <button>Подробнее</button>
                <input type="number" value={inputValue} onChange={(e) => { setValue(e.target.value) }} />
                <button onClick={() => { props.pushInBasket(props.name, props.img, props.price, inputValue, props.product_id) }}>В корзину</button>
            </div>
        </div>


    </div>
}

export default Products;