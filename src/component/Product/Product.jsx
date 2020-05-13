import React from 'react';
import s from './product.module.css'
import { useState, useEffect } from 'react'







const Product = (props) => {


    let product = props.currentProduct

    let catalog = props.catalog

    const [inputValue, setValue] = useState(0);
    const [redactorMode, setRedactorMode] = useState(false)
    const [nameInput, setNameInput] = useState(product.name)
    const [inputImg, setInputImg] = useState(product.img)
    const [inputSize, setInputSize] = useState(product.size)
    const [inputColor, setInputColor] = useState(product.color)
    const [inputPrice, setInputPrice] = useState(product.price)
    const [inputCategoryName, setCategoryName] = useState(product.categoryName)
    const [inputSectionName, setSectionName] = useState(product.sectionName)

    let categoryOptions = catalog.map(i => {
        if (i.name === product.categoryName) {

            return <option selected onClick={() => { setCategoryName(i.name) }}>{i.name}</option>
        }
        return <option onClick={() => { setCategoryName(i.name) }}>{i.name}</option>
    })
    let sectionsOptions = []
    // let sectionsOptions = catalog.find(i => i.name === inputCategoryName).sections.map(i => {
    //     if (i.name === product.sectionName) {

    //         return <option selected onClick={() => { setSectionName(i.name) }}>{i.name}</option>
    //     }
    //     return <option onClick={() => { setSectionName(i.name) }}>{i.name}</option>
    // })

    let update = () => {
        let price = +inputPrice

        props.updateProduct({ name: nameInput, img: inputImg, size: inputSize, color: inputColor, price: price.toFixed(2), categoryName: inputCategoryName, sectionName: inputSectionName }, product._id)
    }

    let isInBasket = !!props.basket.find(el => {
        return el._id.toString() === product._id.toString()
    })

    useEffect(() => {

        if (!isInBasket) {
            setValue(0)
        }
    }, [props.basket])



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
        <div>
            <img src={product.img} alt="" />
        </div>
        <div className={s.info}>
            <h2>{product.name}</h2>
            <div className={s.spanWrapper}>
                <span>Цвет: </span>
                <p> {product.color}</p>

            </div>
            <div className={s.spanWrapper}>
                <span>Размер: </span>
                <p> {product.size}</p>

            </div>
            <div className={s.spanWrapper}>
                <span>Производитель:  </span>
                <p>{product.manufacturer || ''}</p>

            </div>
            <div className={s.spanWrapper}>
                <span>Описание:  </span>
                <p>{product.description || ''}</p>

            </div >
            <div className={s.spanWrapper}>

                <p className={s.price}>{product.price} руб</p>
            </div>

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
        </div >
    </div >

}

export default Product;