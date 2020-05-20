import React from 'react'
import s from './redactor.module.css'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'





const AddProduct = (props) => {
    let product = props.currentProduct

    const [nameInput, setNameInput] = useState(product.name || "Название")
    const [inputImg, setInputImg] = useState(product.img || "")
    const [inputSize, setInputSize] = useState(product.size || "")
    const [inputColor, setInputColor] = useState(product.color || '')
    const [inputManufacturer, setManufacturer] = useState(product.manufacturer || "")
    const [inputPrice, setInputPrice] = useState(product.price || 0.00)
    const [inputDescription, setDescription] = useState(product.description || "")
    const [inputCategoryName, setCategoryName] = useState(product.categoryName || props.currentCategory)
    const [inputSectionName, setSectionName] = useState(product.sectionName || props.currentSection)
    const [inputNestedSection, setNestedSection] = useState(product.nestedSections || '')
    let params = { name: nameInput, categoryName: inputCategoryName, sectionName: inputSectionName, nestedSection: inputNestedSection, size: inputSize, color: inputColor, price: inputPrice, img: inputImg, description: inputDescription, manufacturer: inputManufacturer, nestedSection: inputNestedSection }

    let categoryOptions = props.catalog.map(i => {
        return <option onClick={() => { FilterCatalog(i.name) }}>{i.name}</option>
    })


    let filteredCatalog = props.catalog.filter(i => i.name === inputCategoryName);
    let section = filteredCatalog[0].sections.find(i => i.name === inputSectionName)
    let nestedSectionOptions

    if (section && section.nestedSection) {
        nestedSectionOptions = section.nestedSection.nestedSections.map(i => {
            return <option onClick={() => setNestedSection(i)}>{i}</option>
        })
    }

    // let nestedSections= filteredCatalog[0]
    function FilterCatalog(name) {
        filteredCatalog = props.catalog.filter(i => i.name === name)
        setCategoryName(name)
        setSectionName(filteredCatalog[0].sections[0].name)
    }
    function Save() {
        if (product) {
            props.update(params, product._id)
        } else {
            props.save(params, inputSectionName, inputCategoryName)
        }
    }

    function Delete() {
        props.delete({ _id: product._id }, inputSectionName, inputCategoryName)
    }

    let sectionsOptions = filteredCatalog[0].sections.map(i => {
        return <option onClick={() => { setSectionName(i.name) }}>{i.name}</option>
    })






    return <div className={s.wrapper}>
        <div className={s.imgWrapper}>
            <img src={inputImg} alt="" />
            <input type="text" value={inputImg} onChange={e => setInputImg(e.target.value)} placeholder="ссылка на картинку" />
        </div>
        <div className={s.info}>
            <h2>{nameInput}</h2>
            <input type="text" value={nameInput} onChange={e => setNameInput(e.target.value)} placeholder="Название" />

            <select name="" id="">
                {categoryOptions}

            </select>
            <select name="" id="">
                {sectionsOptions}
            </select>
            {nestedSectionOptions &&
                <select>
                    <option selected> нет</option>
                    {nestedSectionOptions}
                </select>}

            <div className={s.spanWrapper}>

                <p>Цвет: {inputColor}</p>
                <input type="text" value={inputColor} placeholder="Цвет" onChange={e => setInputColor(e.target.value)} />


            </div>
            <div className={s.spanWrapper}>
                <p>Размер:  {inputSize}</p>
                <input type="text" value={inputSize} placeholder="Размер" onChange={e => setInputSize(e.target.value)} />

            </div>
            <div className={s.spanWrapper}>

                <p>Производитель: {inputManufacturer}</p>
                <input type="text" value={inputManufacturer} placeholder="Производитель" onChange={e => setManufacturer(e.target.value)} />

            </div>
            <div className={s.spanWrapper}>
                <p>Описание: {inputDescription}</p>
                <textarea type="textarea" value={inputDescription} placeholder="Описание" onChange={e => setDescription(e.target.value)} cols="50" rows="10" />

            </div >
            <div className={s.spanWrapper}>
                <p className={s.price}>{inputPrice} руб</p>
                <input type="text" value={inputPrice} onChange={e => setInputPrice(e.target.value)} />
            </div>

            <div className={s.buttonsWrapper}>
                <NavLink to="catalog">

                    <div className={s.add} onClick={() => Save()}> Сохранить </div>
                </NavLink>
                {product &&
                    <NavLink to="catalog">
                        <div className={s.delete} onClick={() => Delete()}> Удалить</div>
                    </NavLink>
                }
            </div>
        </div >
    </div >

}


export default AddProduct