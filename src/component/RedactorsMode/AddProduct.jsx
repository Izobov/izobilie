import React from 'react'
import s from './redactor.module.css'
import { useState } from 'react'


const AddProduct = (props) => {


    const [img, setImg] = useState('')
    const [name, setName] = useState("Название:")
    const [categoryName, setCategoryName] = useState(props.currentCategory || props.catalog[0].name)
    let filteredCatalog = props.catalog.find(i => i.name === categoryName)
    const [sectionName, setSectionName] = useState(props.currentSection)
    const [size, setSize] = useState()
    const [color, setColor] = useState()
    const [price, setPrice] = useState()
    let params = { name: name, categoryName: categoryName, sectionName: sectionName, size: size, color: color, price: price, img: img }

    let categoryOptions = props.catalog.map(i => {
        if (categoryName === i.name) {

            return <option selected onClick={() => { setCategoryName(i.name) }}>{i.name}</option>
        }
        return <option onClick={() => { setCategoryName(i.name) }}>{i.name}</option>
    })

    let sectionsOptions = filteredCatalog.sections.map(i => {
        if (sectionName === i.name) {

            return <option selected onClick={() => { setSectionName(i.name) }}>{i.name}</option>
        }
        return <option onClick={() => { setSectionName(i.name) }}>{i.name}</option>
    })




    return <div className={s.wrapper}>
        <div className={s.card}>
            {img ? <img src={img} className={s.img} /> : ''}
            <div className={s.description}>
                <input type="text" onChange={e => setImg(e.target.value)} placeholder="ссылка на картинку" />
                <h2>{name}</h2>
                <input type="text" onChange={e => setName(e.target.value)} placeholder="название продукта" />
                <span>Категория:</span>
                <select name="categoryName" id="">
                    {categoryOptions}
                </select>
                {sectionsOptions.length > 0 && <span>Секция:</span>}
                {sectionsOptions.length > 0 &&
                    <select name="sectionName" id="">
                        <option selected>нет</option>
                        {sectionsOptions}
                    </select>
                }
                <span>Размер:</span>
                <input type="text" onChange={e => setSize(e.target.value)} />
                <span>Цвет:</span>
                <input type="text" onChange={e => setColor(e.target.value)} />
                <span>Цена:</span>
                <input type="number" onChange={e => setPrice(e.target.valueAsNumber.toFixed(2))} />

                <div className={s.buttons}>
                    <div onClick={() => props.Cancel(false)} className={s.cancel}>Отменить</div>

                    <div className={s.addButton} onClick={() => props.onSubmit(params)}> Сохранить</div>
                </div>
            </div>
        </div>
    </div>




}


export default AddProduct