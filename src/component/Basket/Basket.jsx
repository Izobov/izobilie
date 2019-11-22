import React from 'react';
import s from './basket.module.css'
import { useState } from 'react'
import Portal from '../Portal/Portal';
import Modal from '../Modal/Modal';
import SubmitForm from '../SubmitForm/SubmitForm';







const Basket = (props) => {


    // const [openModal, setModal] = useState(false)
    let totalOrder = 0;

    const onSubmit = (form) => {
        debugger;
        props.onSubmit(form.FirstName, form.SecondName, form.phone, totalOrder)
        props.onClick(false)

    }

    if (props.products.length !== 0) {

        return <div>

            {props.products.map(i => <div className={s.card} key={Math.random()}>

                <img src={i.img} alt="" />
                <h3>{i.name}</h3>
                <input type="number" min='0' value={i.count} onChange={(e) => { props.onChange(i.product_id, e) }} />
                <span>Цена:</span>
                <span>{i.price}</span>
                <span>Стоимость:</span>
                <span>{i.price * i.count}</span>
                <div className={s.none}>

                    {totalOrder += i.price * i.count}
                </div>

            </div>
            )}

            <div>
                <span>Общая стоимость:</span>
                <span>{totalOrder}</span>
            </div>
            <div>
                <button onClick={() => { props.onClick(true) }} >Оформить заказ</button>
            </div>

            {props.showModal &&
                <Portal>
                    <Modal title='test' Close={() => { props.onClick(false) }}>
                        <div>
                            <SubmitForm onSubmit={onSubmit} />
                        </div>

                    </Modal>
                </Portal>
            }


        </div>
    } else {
        return <div className={s.wrapper}>
            <h4>Корзина пуста</h4>
        </div>
    }


}

export default Basket;