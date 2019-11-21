import React from 'react';
import s from './basket.module.css'






const Basket = (props) => {


    return <div>

        <div className={s.card}>

            <div>Позиция №1</div>
            <img src="https://picsum.photos/200" alt="" />
            <h3>Название продукта</h3>
            <input type="number" value='2' />
            <span>Цена:</span>
            <span>20p</span>
            <span>Стоимость:</span>
            <span>40</span>

        </div>
        <div>
            <span>Общая стоимость:</span>
            <span>40p</span>
        </div>
        <div>
            <button>Оформить заказ</button>
        </div>
    </div>

}

export default Basket;