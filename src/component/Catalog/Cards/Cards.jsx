import React from 'react';
import s from "./card.module.css"
import { useState } from 'react'
import { NavLink } from "react-router-dom";







const Cards = (props) => {



    let product = props.product

    let catalog = props.catalog

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
                    <NavLink to="productadd">
                        <div className={s.add} onClick={() => {


                            props.CurrentProduct(product)
                        }}> Редактировать</div>
                    </NavLink> :
                    <NavLink to="/product">
                        <div className={isInBasket ? `${s.add} ${s.success}` : s.add} onClick={() => {


                            props.CurrentProduct(product)
                        }}>{isInBasket ? "Товар в корзине" : "В корзину"}</div>
                    </NavLink>
                }
            </div>
        </div>
    </div>









}

export default Cards;