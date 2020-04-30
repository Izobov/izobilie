import React from 'react'
import s from './contacts.module.css'
import cash from "../../img/icons/cash.png";
import card from '../../img/icons/bank.png'

const Contacts = (props) => {
    return <div>
        <div className={s.titleText}>

            <h2 > Способы оплаты и доставка</h2>
        </div>


        <div className={s.content}>
            <div className={s.payWay}>
                <img src={cash} alt="" />
                <p>В нашем магазине Вы можете расплатиться наличными. Все расчеты производяться в национальной валюте РБ</p>

            </div>
            <div className={s.payWay}>
                <img src={card} alt="" />
                <p>Вы также можете расплатиться картой MasterCard или Visa, также мы принимаем к оплате карты БЕЛКАРТ </p>

            </div>

            <div className={s.info}>
                <p>
                    Выдача заказа производится по адресу: ул Уручская 19, павильон №224. Оплата производится любым из перечисленных способов после проверки товара. При выдаче заказа необходимо назвать номер заказа из 4-х цифр, а также Фамилию и Имя покупателя.
                    
                </p>
                <p> Время работы: вт-вс 8:00 - 16:00. пн-выходной</p>
                <p>Контактные телефоны:+375(29)655-99-38 (A1)   +375(29)329-89-85 (A1)  +375(29)653-09-37 (A1)</p>
            </div>
        </div>
        <div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2347.7330959483747!2d27.690399015497757!3d53.95424838011089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbc93826962d09%3A0x3ef3b52124440e53!2z0KHRgtGA0L7QuNGC0LXQu9GM0L3Ri9C5INGA0YvQvdC-0Log0KPRgNGD0YfRjNC1!5e0!3m2!1sru!2sby!4v1573459082879!5m2!1sru!2sby" className={s.map}></iframe>
        </div>
       

    </div>


}

export default Contacts;