import React from 'react';
import s from './product.module.css'
import { useState } from 'react'







const Products = (props) => {


    let product = props.product
    const [inputValue, setValue] = useState(0);
    const [redactorMode, setRedactorMode] = useState(false)
    const [nameInput, setNameInput] = useState(product.name)
    const [inputImg, setInputImg] = useState(product.img)
    const [inputSize, setInputSize] = useState(product.size)
    const [inputColor, setInputColor] = useState(product.color)
    const [inputPrice, setInputPrice] = useState(product.price)


    let isInBasket = !!props.basket.find(el => {
        return el._id.toString() === product._id.toString()
    })



    // const onSubmit = (values) => {
    //     props.onSubmit(values);
    //     setRedactorMode(false)
    // }




    let decrment = () => {
        if (inputValue > 0) {
            setValue(inputValue - 1)
        }
    }


    return <div className={s.wrapper}>

        <div className={s.cardFront}>
            <img src={product.img} alt="" />
            <div className={s.info}>

                <h2>{product.name}</h2>
                <span>Размер:{product.size}</span>
                <span>Цвет:{product.color}</span>
                <span className={s.price}>{product.price}руб</span>
            </div>
        </div>
        <div className={s.cardHover}>

            {props.isAuth ? <div className={s.btn}>
                <div className={s.add} onClick={() => setRedactorMode(true)}>Изменить</div>
                <div className={`${s.add} ${s.delete}`} onClick={() => {
                    props.deleteProduct({ _id: product._id })
                }}>Удалить</div>

            </div> :
                <div>

                    <div className={s.inputWrapper}>

                        <div className={s.minusButton} onClick={() => decrment()} > -</div>
                        <input type="number" className={s.input} min="0" value={inputValue} onChange={(e) => setValue(e.target.value)} />
                        <div className={s.plusButton} onClick={() => setValue(inputValue + 1)}>+</div>
                    </div>

                    <div className={isInBasket ? `${s.add} ${s.success}` : s.add} onClick={() => {
                        if (inputValue === 0) {
                            setValue(1)
                        }
                        props.pushInBasket(product, inputValue)
                    }}>{isInBasket ? "Товар в корзине" : "В корзину"}</div>
                </div>
            }
        </div>

        {redactorMode && <div className={`${s.cardFront} ${s.redactor}`} >
            <img src={product.img} alt="" />
            <div className={s.info}>


                <input type="text" value={inputImg} onChange={e => setInputImg(e.target.value)} />
                <input type="text" value={nameInput} onChange={e => setNameInput(e.target.value)} />
                <input type="text" value={inputSize} onChange={e => setInputSize(e.target.value)} />
                <input type="text" value={inputColor} onChange={e => setInputColor(e.target.value)} />
                <input type="number" className={s.price} value={inputPrice} onChange={e => setInputPrice(e.target.valueAsNumber.toFixed(2))} />


                <div>
                    <div className={s.add}>Ок</div>
                    <div className={`${s.add} ${s.delete}`} onClick={() => setRedactorMode(false)}>Отменить</div>
                </div>


            </div>
        </div>}


    </div>





}

export default Products;