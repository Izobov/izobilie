import React from 'react';
import s from './product.module.css'
import { useState } from 'react'







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



    // const onSubmit = (values) => {
    //     props.onSubmit(values);
    //     setRedactorMode(false)
    // }




    let decrment = () => {
        if (inputValue > 0) {
            setValue(inputValue - 1)
        }
    }


    return <div>
        <div>
            <img src={product.img} alt="" />
        </div>
        <div className={s.info}>
            <h2>{product.name}</h2>
            <div>
                <span>Цвет:</span>
                <p> {product.color}</p>

            </div>
            <div>
                <span>Размер:</span>
                <p> {product.size}</p>

            </div>
            <div>
                <span>Производитель:  </span>
                <p>{product.manufacturer || ''}</p>

            </div>
            <div>
                <span>Описание:  </span>
                <p>{product.description || ''}</p>

            </div>
            <div>
                <span>Цена:</span>
                <p>{product.price}</p>
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
        </div>
    </div>
    {/* <div className={s.cardHover}>

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
        </div> */}

    {/* {redactorMode && <div className={`${s.cardFront} ${s.redactor}`} >
            <img src={product.img} alt="" />
            <div className={s.info}>


                <input type="text" value={inputImg} onChange={e => setInputImg(e.target.value)} />
                <input type="text" value={nameInput} onChange={e => setNameInput(e.target.value)} />
                <select name="Category" id="">
                    {categoryOptions}
                </select>
                {sectionsOptions.length > 0 && <select name="Sections" id="">
                    <option selected onClick={() => setSectionName(null)}>нет</option>
                    {sectionsOptions}
                </select>}

                <input type="text" value={inputSize} onChange={e => setInputSize(e.target.value)} />
                <input type="text" value={inputColor} onChange={e => setInputColor(e.target.value)} />
                <input type="text" className={s.price} value={inputPrice} onChange={e => { setInputPrice(e.target.value) }} />


                <div>
                    <div className={s.add} onClick={() => { setRedactorMode(false); update() }}>Ок</div>
                    <div className={`${s.add} ${s.delete}`} onClick={() => setRedactorMode(false)}>Отменить</div>
                </div>


            </div>
        </div>} */}








}

export default Product;