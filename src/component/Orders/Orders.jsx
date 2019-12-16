import React from 'react';
import s from './orders.module.css'







const Orders = (props) => {
    if (!props.orders) {
        return <div className='title_text'>
            <h2>Нет заказов</h2>
        </div>
    } else {

        return <div>
            <div className='title_text'>

                <h2>Активные заказы</h2>
            </div>
            {props.orders.map(item => <div className={s.wrapper}>
                <div className={s.card}>
                    <div className={s.id}>
                        №{item.order_id}
                    </div>
                    <div className={s.name}>
                        <strong>{item.Name}</strong>
                        <strong>{item.SecondName}</strong>
                    </div>
                    <div className={s.phone}>
                        {item.phone}
                    </div>
                    <div>{item.products.map(i => <div>
                        <span> Продукт: {i.name}</span>
                        <span> Количество: {i.count}</span>
                        <span>x</span>
                        <span>{i.price} руб </span>

                        <span> на сумму: {i.total}руб</span>
                    </div>)}
                    </div>
                    <div>
                        <strong>
                            Общая сумма: {item.total} {/* Сумма общего заказа*/}
                        </strong>
                    </div>
                </div>

                <div className={s.buttons}>
                    <div className={s.success} onClick={() => { props.onClick(true, item.order_id) }}>Продали</div>
                    <div className={s.lose} onClick={() => { props.onClick(false, item.order_id) }}>Не продали</div>
                </div>
            </div>

            )}
        </div>



    }

}

export default Orders;