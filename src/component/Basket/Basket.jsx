import React from 'react';
import s from './basket.module.css'
import { useState } from 'react'






const Basket = (props) => {
    let totalOrder = 0;



    return <div>

        {props.products.map(i => <div className={s.card} key={Math.random()}>

            <img src={i.img} alt="" />
            <h3>{i.name}</h3>
            <input type="number" min='0' value={i.count} onChange={(e) => { props.onChange(i.product_id, e) }} />
            <span>Цена:</span>
            <span>{i.price}</span>
            <span>Стоимость:</span>
            <span>{i.price * i.count}</span>
            <div className={s.none}>

                {totalOrder += i.price * i.count}
            </div>

        </div>
        )}
        <div>
            <span>Общая стоимость:</span>
            <span>{totalOrder}</span>
        </div>
        <div>
            <button>Оформить заказ</button>
        </div>
    </div>

}

export default Basket;