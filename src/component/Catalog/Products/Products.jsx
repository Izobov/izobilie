import React from 'react';
import s from './product.module.css'
import { useState } from 'react'
import RedactorProduct from './RedactorMode/RedactorProduct';






const Products = (props) => {


    const [inputValue, setValue] = useState(0);
    const [redactorMode, setRedactorMode] = useState(false)
    // const onSubmit = (values) => {
    //     props.onSubmit(values);
    //     setRedactorMode(false)
    // }

    // const [touched, setTouched] = useState(false);
    // const OnAddButtonClick = () => {
    //     setTouched(true);
    //     props.pushInBasket(props.name, props.img, props.price, inputValue, props.product_id)

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
                <img src={props.img} alt="" />
                <h2>{props.name}</h2>
                <span>Размер:{props.size}</span>
                <span>Цвет:{props.color}</span>
                <span className={s.price}>{props.price}руб</span>
            </div>
            <div className={s.cardBack}>
                <div className={s.inputWrapper}>
                    <div className={s.plusButton} onClick={() => setValue(inputValue + 1)}>+</div>

                    <input type="number" className={s.input} min="0" value={inputValue} onChange={(e) => setValue(e.target.value)} />
                    <div className={s.minusButton} onClick={() => decrment()} > -</div>
                </div>
                <div className={s.add}>В корзину</div>
            </div>
            <div className={s.cardHover}>
                <div className={s.inputWrapper}>
                    <div className={s.plusButton} onClick={() => setValue(inputValue + 1)}>+</div>

                    <input type="number" className={s.input} min="0" value={inputValue} onChange={(e) => setValue(e.target.value)} />
                    <div className={s.minusButton} onClick={() => decrment()} > -</div>
                </div>
                <div className={s.add}>В корзину</div>
            </div>
        </div>




        //<div className={s.card}>
        //     <div className={s.wrapper}>
        //         <img src={props.img} alt="" />
        //         <div className={s.description} >
        //             <h2>{props.name}</h2>
        //             <div className={s.info}>
        //                 <div className={s.characteristic}>
        //                     {props.isAuth && <span>Раздела</span>}
        //                     {props.isAuth && <span> Категории</span>}
        //                     <span>Размер:</span>
        //                     <span>Цвет:</span>
        //                     <span>Материал:</span>
        //                 </div>
        //                 <div className={s.value}>
        //                     {props.isAuth && <span>{props.catalog_id}</span>}
        //                     {props.isAuth && (props.category_id.length !== 0 ? <span>{props.category_id}</span> : <span>Без категории</span>)}
        //                     <span>{props.size}</span>
        //                     <span>{props.color}</span>
        //                     <span>{props.material}</span>
        //                 </div>
        //             </div>


        //         </div>
        //         <div className={s.buttons}>
        //             <strong>{props.price}руб</strong>

        //             <input type="number" value={inputValue} className={s.countInput} onChange={(e) => { setValue(e.target.value) }} min="0" />
        //             {props.isAuth && <div className={s.delete} onClick={() => props.deleteProduct(props.product_id, props.category_id)}>Удалить</div>}
        //             <div className={s.addButtonWrapper}>
        //                 {props.isAuth ? <div className={touched ? s.active : s.addButton} onClick={() => setRedactorMode(true)}>Редактировать</div>

        //                     : <div className={touched ? s.active : s.addButton} onClick={() => OnAddButtonClick()}>{touched ? <span>В корзине!</span> : <span>В корзину</span>}</div>
        //                 }

        //             </div>

        //         </div>
        //     </div>


        // </div>
    }


}

export default Products;