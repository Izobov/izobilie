import React from 'react';
import s from './product.module.css'
import { useState } from 'react'
import RedactorProduct from './RedactorMode/RedactorProduct';






const Products = (props) => {


    let product = props.product
    const [inputValue, setValue] = useState(0);
    const [redactorMode, setRedactorMode] = useState(false)


    let isInBasket = !!props.basket.find(el => {
        return el._id.toString() === product._id.toString()
    })



    // const onSubmit = (values) => {
    //     props.onSubmit(values);
    //     setRedactorMode(false)
    // }




    let decrment = () => {
        if (inputValue > 0) {
            setValue(inputValue - 1)
        }
    }

    if (redactorMode) {
        // return <RedactorProduct initialValues={{
        //     name: props.name, size: props.size, color: props.color,
        //     material: props.material, price: props.price, catalog: props.catalog_id, category: props.category_id,
        //     product_id: props.product_id, img: props.img
        // }} Cancel={setRedactorMode} onSubmit={onSubmit} SetImg={props.SetImg} img={props.img} />
    } else {

        return <div className={s.wrapper}>

            <div className={s.cardFront}>
                <img src={product.img} alt="" />
                <div className={s.info}>

                    <h2>{product.name}</h2>
                    <span>Размер:{product.size}</span>
                    <span>Цвет:{product.color}</span>
                    <span className={s.price}>{product.price}руб</span>
                </div>
            </div>
            <div className={s.cardHover}>

                {props.isAuth ? <div className={s.btn}>
                    <div className={s.add}>Изменить</div>
                    <div className={`${s.add} ${s.delete}`} onClick={() => {
                        props.deleteProduct({ _id: product._id })
                    }}>Удалить</div>

                </div> :
                    <div>

                        <div className={s.inputWrapper}>

                            <div className={s.minusButton} onClick={() => decrment()} > -</div>
                            <input type="number" className={s.input} min="0" value={inputValue} onChange={(e) => setValue(e.target.value)} />
                            <div className={s.plusButton} onClick={() => setValue(inputValue + 1)}>+</div>
                        </div>

                        <div className={isInBasket ? `${s.add} ${s.success}` : s.add} onClick={() => {
                            if (inputValue === 0) {
                                setValue(1)
                            }
                            props.pushInBasket(product, inputValue)
                        }}>{isInBasket ? "Товар в корзине" : "В корзину"}</div>
                    </div>
                }
            </div>
        </div>





    }


}

export default Products;