import React, { useState } from 'react';
import s from './basket.module.css'








const BasketProduct = (props) => {

    let [deleted, setDeleted] = useState(false)
    function Delete(product) {
        setDeleted(true)
        props.deleteProduct(product)
    }

    let product = props.product


    return <div className={s.cardWrapper}>
        <div className={deleted ? `${s.card} ${s.deleted} ` : s.card} key={product._id}>
            <span className={s.deleteIcon} onClick={() => Delete(product)}>&#10006;</span>

            <div className={s.info}>
                <h3>{product.name}</h3>
                <span>Размер: {product.size}</span>


                <span>Цена: {product.price}</span>


            </div>
            <div className={s.inputWrapper}>

                <div className={s.inputButton} onClick={() => { if (product.count > 1) { props.onChange(product, --product.count) } }} > -</div>
                <input type="number" min='0' value={product.count} onChange={(e) => props.onChange(product, e.target.valueAsNumber)} />
                <div className={s.inputButton} onClick={() => props.onChange(product, ++product.count)}>+</div>
            </div>


            <span className={s.price}>{+(product.price * product.count).toFixed(2)} BYN</span>


        </div>
    </div>

}

export default BasketProduct;