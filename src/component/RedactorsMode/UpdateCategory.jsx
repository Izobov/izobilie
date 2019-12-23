import React from 'react'
import { Field, reduxForm } from 'redux-form'
import s from './redactor.module.css'
import { useState } from 'react'


const UpdateCategory = (props) => {


    const [img, setImg] = useState(props.initialValues.img)
    props.SetImg(img)

    return <form onSubmit={props.handleSubmit}  >
        <div className={s.card}>
            <div className={s.wrapper}>
                <Field component='input' hidden name='category_id' />
                <div className={s.description} >
                    <div className={s.redactorName}>
                        <h2>Название:</h2>
                        <Field component='input' type='text' name='name' />


                        <span>Выберите картинку:</span>
                        <input type="file" onChange={e => setImg(e.target.files[0])} />

                        <span>Раздел</span>
                        <Field component='input' type='number' name='catalog_id' />
                    </div>
                </div>
                <div className={s.buttons}>

                    <div onClick={() => props.Cancel(false)} className={s.cancel}>Отменить</div>
                    <label htmlFor="submit" onClick={() => props.SetImg(img)}>
                        <div className={s.addButton}> Сохранить</div>
                    </label>
                    <button id='submit' className={s.submit}></button>
                </div>
            </div>
        </div>
    </form>

}


export default reduxForm({
    form: 'UpdateCategory',
})(UpdateCategory)