import React, { useState } from 'react';
import s from './basket.module.css'








const BasketProduct = (props) => {

    let product = props.product


    return <div className>

        <div className={s.card} key={product._id}>

            <div className={s.info}>
                <h3>{product.name}</h3>
                <span>Размер: {product.size}</span>


                <span>Цена: {product.price}</span>


            </div>
            <div className={s.inputWrapper}>

                <div className={s.inputButton} onClick={() => { if (product.count > 0) { props.onChange(product, --product.count) } }} > -</div>
                <input type="number" min='0' value={product.count} onChange={(e) => props.onChange(product, e.target.valueAsNumber)} />
                <div className={s.inputButton} onClick={() => props.onChange(product, ++product.count)}>+</div>
            </div>


            <span className={s.price}>{product.price * product.count} BYN</span>


        </div>
    </div>

}

export default BasketProduct;