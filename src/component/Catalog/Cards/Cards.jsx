import React from 'react';
import s from "./card.module.css"
import { NavLink } from "react-router-dom";







const Cards = (props) => {



    let product = props.product



    let isInBasket = !!props.basket.find(el => {
        return el._id.toString() === product._id.toString()
    })









    return <div className={s.cardFront}>
        <img src={product.img} alt="" />
        <div className={s.info}>

            <h2>{product.name}</h2>
            <span>Размер:{product.size}</span>
            <span>Цвет:{product.color}</span>
            <span className={s.price}>{product.price}руб</span>
            <div className={s.buttonWrapper}>
                {props.isAuth ?
                    <NavLink to={`/productadd/${product._id}`}>
                        <div className={s.add} > Редактировать</div>
                    </NavLink> :
                    <NavLink to={`/product/${product._id}`}>
                        <div className={isInBasket ? `${s.add} ${s.success}` : s.add}>{isInBasket ? "Товар в корзине" : "В корзину"}</div>
                    </NavLink>
                }
            </div>
        </div>
    </div >









}

export default Cards;