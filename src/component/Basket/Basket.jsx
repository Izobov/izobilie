import React from 'react';
import s from './basket.module.css'
import Portal from '../Portal/Portal';
import Modal from '../Modal/Modal';
import SubmitForm from '../SubmitForm/SubmitForm';







const Basket = (props) => {


    let totalOrder = 0;

    const onSubmit = (form) => {

        props.onSubmit(form.FirstName, form.SecondName, form.phone, totalOrder)
        // props.onClick(false)

    }

    if (props.products.length !== 0) {

        return <div>
            <div className='title_text'>

                <h2 > Корзина</h2>
            </div>

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

            <div onClick={() => { props.onClick(true) }} className={s.orderButton} >Оформить заказ!</div>


            {props.showModal &&                                                     // Сначала выскочит форма для заполнения
                < Portal >
                    <Modal title='Пожалуйста заполните форму!' Close={props.onClick}>
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
    } else {
        return <div className={s.wrapper}>
            <h4>Корзина пуста</h4>
        </div>
    }


}

export default Basket;