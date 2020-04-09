import React, { useState, useEffect } from 'react';
import s from './orders.module.css'
import { Redirect } from 'react-router-dom'







const Orders = (props) => {

    let [orders, setOrders] = useState(props.orders)
    let [value, setValue] = useState('')
    let [active, setActive] = useState('_id')
    useEffect(() => {
        setOrders(props.orders)
    }, [props.orders])

    function filter() {
        let filtered
        if (active === "_id") {
            filtered = props.orders.filter(i => i[active] === +value
            )
        } else {
            filtered = props.orders.filter(i => i[active] === value)
        }
        return setOrders(filtered)

    }

    if (!props.isAuth) { return <Redirect to='/' /> }


    return <div className={s.ordersWrapper}>
        <div className={s.title}>

            <h2>{orders.length ? "Активные заказы" : "Нет заказов"}</h2>
        </div>
        <div className={s.filtersWrapper}>
            <input type="text" value={value} onChange={e => setValue(e.target.value)} />
            <select>

                <option onClick={() => setActive("_id")}>№Заказа</option>
                <option onClick={() => setActive("secondName")}>Фамилия</option>
                <option onClick={() => setActive("phone")}>Телефон</option>
            </select>
            <div className={s.btn} onClick={() => filter()}> Поиск</div>
            <div className={s.cancel} onClick={() => setOrders(props.orders)}> Сбросить</div>

        </div>
        {orders.map(item => <div className={s.wrapper}>
            <div className={s.card}>
                <div className={s.id}>
                    №{item._id}
                </div>
                <div className={s.name}>
                    <strong>{item.name}</strong>
                    <strong>{item.secondName}</strong>
                </div>
                <div className={s.phone}>
                    {item.phone}
                </div>
                <div>{item.products.map(i => <div className={s.productWrapper}>
                    <p> Продукт: {i.name}</p>
                    <p> Количество: {i.count} шт</p>

                    <p>цена: {i.price} руб </p>

                    <p> на сумму: {i.count * i.price}руб</p>
                </div>)}
                </div>
                <div className={s.total}>
                    <strong>
                        Общая сумма: {item.total} {/* Сумма общего заказа*/}
                    </strong>
                </div>
            </div>

            <div className={s.buttons}>
                <div className={s.btn} onClick={() => { props.onClick(item, 2) }}>Продали</div>
                <div className={s.lose} onClick={() => { props.onClick(item, 3) }}>Не продали</div>
            </div>
        </div>

        )}
    </div>





}

export default Orders;