import React from 'react';
import s from './product.module.css'
import { useState } from 'react'
import RedactorProduct from './RedactorMode/RedactorProduct';






const Products = (props) => {

    const [inputValue, setValue] = useState(0);
    const [redactorMode, setRedactorMode] = useState(false)
    const onCancel = () => {
        setRedactorMode(false)
    }
    if (redactorMode) {
        return <RedactorProduct initialValues={{
            name: props.name, size: props.size, color: props.color,
            material: props.material, price: props.price, catalog: props.catalog_id, category: props.category_id,
            product_id: props.product_id, img: props.img
        }} {...props} Cancel={onCancel} />
    } else {

        return <div className={s.card}>
            <div className={s.wrapper}>
                <img src={props.img} alt="" />
                <div className={s.description} >
                    <h2>{props.name}</h2>
                    <div className={s.info}>
                        <div className={s.characteristic}>
                            {props.isAuth && <span>Раздела</span>}
                            {props.isAuth && <span> Категории</span>}
                            <span>Размер:</span>
                            <span>Цвет:</span>
                            <span>Материал:</span>
                        </div>
                        <div className={s.value}>
                            {props.isAuth && <span>{props.catalog_id}</span>}
                            {props.isAuth && (props.category_id.length !== 0 ? <span>{props.category_id}</span> : <span>Без категории</span>)}
                            <span>{props.size}</span>
                            <span>{props.color}</span>
                            <span>{props.material}</span>
                        </div>
                    </div>


                </div>
                <div className={s.buttons}>
                    <strong>{props.price}руб</strong>

                    <input type="number" value={inputValue} className={s.countInput} onChange={(e) => { setValue(e.target.value) }} min="0" />
                    {props.isAuth && <div className={s.delete}>Удалить</div>}
                    {props.isAuth ? <div onClick={() => setRedactorMode(true)}>Редактировать</div>

                        : <button onClick={() => { props.pushInBasket(props.name, props.img, props.price, inputValue, props.product_id) }}>В корзину</button>
                    }
                </div>
            </div>


        </div>
    }


}

export default Products;