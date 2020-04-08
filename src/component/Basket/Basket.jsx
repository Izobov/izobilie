import React, { useState, useEffect } from 'react';
import s from './basket.module.css'
import Portal from '../Portal/Portal';
import Modal from '../Modal/Modal';
import SubmitForm from '../SubmitForm/SubmitForm';
import BasketProduct from './BasketProduct';
import basket from '../../img/icons/basket.png'








const Basket = (props) => {



    let [showBasket, setShowBasket] = useState(!!props.products.length)
    let [showModal, setShowModal] = useState(false)

    let totalOrder = 0



    const onSubmit = (form) => {

        props.onSubmit(form.FirstName, form.SecondName, form.phone, totalOrder)


    }
    let productsElements = props.products.map(item => {
        totalOrder += +(item.count * item.price).toFixed(2)
        return <BasketProduct product={item} onChange={props.onChange} deleteProduct={props.deleteProduct} key={item._id} />
    })

    return <>
        <div className={s.basketIcon} onClick={() => { setShowBasket(false) }} >
            <img src={basket} alt="" />
            {/* <span className={s.basketCount} >{props.products.length}</span> */}

        </div>
        {props.products.length && <div className={s.wrapper}>
            <div className={s.title}>

                <h2 > Корзина</h2>
            </div>

            <div className={s.elementsWrapper}>
                {productsElements}
            </div>

            <div className={s.total}>

                <span> Общая стоимость: </span>
                <span>
                    {totalOrder.toFixed(2)} BYN

                </span>
            </div>


            <div onClick={() => { setShowModal(true) }} className={s.orderButton} >Оформить заказ!</div>
            <span className={s.clean} onClick={() => props.cleanBasket()}>Очистить корзину</span>


            {showModal &&                                                     // Сначала выскочит форма для заполнения
                < Portal >
                    <Modal title='Пожалуйста заполните форму!' Close={setShowModal}>
                        <div>
                            <SubmitForm onSubmit={onSubmit} />
                        </div>

                    </Modal>
                </Portal>                                 // По клику отправить форму на сервер

            }
            {props.showModal && props.response && // После ответа сервера выскочит еще одно модальное окно с информацией

                < Portal >
                    <Modal title='Спасибо за заказ!' Close={props.Close} ok="Ok" >

                        {props.response !== 500 ? <div>
                            Ваш заказ успешно размещен! Пожалуйста запомните номер вашего заказа: №{props.response}!
               <div> Вы можете забрать ваш заказ по адресу: ул Уручская 19, павильон №224</div>  {/*Если пришел положительный ответ, выдаст клиенту номер его заказа */}
                        </div>
                            : <div>
                                Извините на сервере возникла ошибка! Попробуйте чуть позже! {/*Если пришел отрицательный ответ, выдаст клиенту ошибку*/}
                                <div>Либо наберите нас по телефону: 8029 329-89-85</div>
                            </div>}
                    </Modal>
                </Portal>
            }

        </div >
        }
        {props.products.length || <div className={s.wrapper}>
            <h4>Корзина пуста</h4>
        </div>
        }
    </>

}

export default Basket;