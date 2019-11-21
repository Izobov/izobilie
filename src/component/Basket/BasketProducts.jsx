import React from 'react';
import s from './basket.module.css'
import { useState } from 'react'






const BasketProducts = (props) => {
    const [value, setValue] = useState(props.count)
    return <div className={s.card} >

        <img src={props.img} alt="" />
        <h3>{props.name}</h3>
        <input type="number" value={value} />
        <span>Цена:</span>
        <span>{props.price}</span>
        <span>Стоимость:</span>
        <span>{props.total}</span>

    </div>


}

export default BasketProducts;