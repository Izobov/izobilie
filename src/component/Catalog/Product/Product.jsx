import React from 'react';
import s from './product.module.css'






const Product = (props) => {


    return <div className={s.card}>
        <div className={s.wrapper}>
            <img src="https://picsum.photos/200/200" alt="" />
            <div className={s.description} >
                <h2>Название Продукта</h2>
                <div className={s.info}>
                    <div className={s.characteristic}>
                        <span>Размер:</span>
                        <span>Цвет:</span>
                        <span>Материал:</span>
                    </div>
                    <div className={s.value}>
                        <span>(44*32)мм</span>
                        <span>Золото</span>
                        <span>Сталь</span>
                    </div>
                </div>


            </div>
            <div className={s.buttons}>
                <strong>20 руб</strong>
                <button>Подробнее</button>
                <input type="number" />
                <button>В корзину</button>
            </div>
        </div>


    </div>
}

export default Product;