import React from 'react'
import { Field, reduxForm } from 'redux-form'
import s from './redactor.module.css'
import { useState } from 'react'


const AddProduct = (props) => {

    const [img, setImg] = useState(props.img)
    props.SetImg(img)

    return <form onSubmit={props.handleSubmit}  >
        <div className={s.card}>
            <div className={s.wrapper}>
                <div className={s.redactorName}>
                    <h2>Название:</h2>
                    <Field component='input' type='text' name='name' />
                </div>
                <div>
                    <input type="file" onChange={e => setImg(e.target.files[0])} />
                </div>
                <div className={s.description} >
                    <div className={s.info}>
                        <div className={s.characteristic}>
                            <span>Каталога:</span>
                            <span>Категории:</span>
                            <span>Размер:</span>
                            <span>Цвет:</span>
                            <span>Материал:</span>
                            <span>Цена:</span>
                        </div>
                        <div className={s.value}>
                            <Field component='input' type='number' name='catalog' min={1} />
                            <Field component='input' type='number' name='category' />
                            <Field component='input' type='text' name='size' />
                            <Field component='input' type='text' name='color' />
                            <Field component='input' type='text' name='material' />
                            <Field component='input' type='text' name='price' />
                        </div>
                    </div>
                </div>
                <div className={s.buttons}>
                    <div onClick={() => props.Cancel(false)}>Отменить</div>
                    <label htmlFor="submit" onClick={() => props.SetImg(img)}>
                        <div> Сохранить</div>
                    </label>
                    <button id='submit' className={s.submit}></button>
                </div>
            </div>
        </div>
    </form>

}


export default reduxForm({
    form: 'AddProduct',
})(AddProduct)