import React from 'react'
import { Field, reduxForm } from 'redux-form'
import s from './redactor.module.css'
import { useState } from 'react'


const AddCategory = (props) => {

    const [img, setImg] = useState()

    return <form onSubmit={props.handleSubmit}  >
        <div className={s.card}>
            <div className={s.wrapper}>
                <div className={s.description} >
                    <div className={s.redactorName}>
                        <h2>Название:</h2>
                        <Field component='input' type='text' name='name' />
                    </div>
                    <div>
                        <span>Выберите картинку:</span>
                        <input type="file" onChange={e => setImg(e.target.files[0])} />
                    </div>
                    <div>
                        <Field component='input' type='text' name='catalog_id' />
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
    form: 'AddCategory',
})(AddCategory)