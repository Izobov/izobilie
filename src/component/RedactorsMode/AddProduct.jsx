import React from 'react'
import s from '../Product/product.module.css'
import { useState } from 'react'


const AddProduct = (props) => {


    const [inputValue, setValue] = useState(0);
    const [redactorMode, setRedactorMode] = useState(false)
    const [nameInput, setNameInput] = useState("Название")
    const [inputImg, setInputImg] = useState()
    const [inputSize, setInputSize] = useState()
    const [inputColor, setInputColor] = useState()
    const [inputManufacturer, setManufacturer] = useState()
    const [inputPrice, setInputPrice] = useState(0.00)
    const [inputDescription, setDescription] = useState()
    const [inputCategoryName, setCategoryName] = useState()
    const [inputSectionName, setSectionName] = useState()
    // let params = { name: name, categoryName: categoryName, sectionName: sectionName, size: size, color: color, price: price, img: img }

    // let categoryOptions = props.catalog.map(i => {
    //     if (categoryName === i.name) {

    //         return <option selected onClick={() => { setCategoryName(i.name) }}>{i.name}</option>
    //     }
    //     return <option onClick={() => { setCategoryName(i.name) }}>{i.name}</option>
    // })

    // let sectionsOptions = filteredCatalog.sections.map(i => {
    //     if (sectionName === i.name) {

    //         return <option selected onClick={() => { setSectionName(i.name) }}>{i.name}</option>
    //     }
    //     return <option onClick={() => { setSectionName(i.name) }}>{i.name}</option>
    // })




    return <div className={s.wrapper}>
        <div>
            <img src={inputImg} alt="" />
            <input type="text" value={inputImg} onChange={e => setInputImg(e.target.value)} />
        </div>
        <div className={s.info}>
            <h2>{nameInput}</h2>
            <input type="text" value={nameInput} onChange={e => setNameInput(e.target.value)} />

            <div className={s.spanWrapper}>

                <p> {inputColor}</p>
                <input type="text" value={inputColor} placeholder="Цвет" onChange={e => setInputColor(e.target.value)} />


            </div>
            <div className={s.spanWrapper}>
                <p> {inputSize}</p>
                <input type="text" value={inputSize} placeholder="Размер" onChange={e => setInputSize(e.target.value)} />

            </div>
            <div className={s.spanWrapper}>

                <p>{inputManufacturer}</p>
                <input type="text" value={inputManufacturer} placeholder="Производитель" onChange={e => setManufacturer(e.target.value)} />

            </div>
            <div className={s.spanWrapper}>
                <p>{inputDescription}</p>
                <input type="text" value={inputDescription} placeholder="Описание" onChange={e => setDescription(e.target.value)} />
            </div >
            <div className={s.spanWrapper}>
                <p>{inputPrice}</p>
                <input type="text" value={inputPrice} onChange={e => setInputPrice(e.target.value)} />
            </div>

            <div>

                <div className={s.add} onClick={() => {
                    if (inputValue === 0) {
                        setValue(1)
                    }
                    props.pushInBasket(inputValue)
                }}> Сохранить </div>
            </div>
        </div >
    </div >



}


export default AddProduct