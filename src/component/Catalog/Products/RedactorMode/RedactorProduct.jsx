import React from 'react'
import { Field, reduxForm } from 'redux-form'
import s from '../product.module.css'


const Redactor = (props) => {

    return <form onSubmit={props.handleSubmit} >
        <div className={s.card}>
            <div className={s.wrapper}>
                <div>
                    <img src={props.img} alt="" />
                    <Field component='input' type="file" name='img' />
                </div>
                <div className={s.description} >
                    <div className={s.redactorName}>
                        <h2>Название:</h2>
                        <Field component='input' type='text' name='name' />
                    </div>
                    <div className={s.info}>
                        <div className={s.characteristic}>
                            <span>Размер:</span>
                            <span>Цвет:</span>
                            <span>Материал:</span>
                        </div>
                        <div className={s.value}>
                            <Field component='input' type='text' value={props.size} name='size' />
                            <Field component='input' type='text' value={props.color} name='color' />
                            <Field component='input' type='text' value={props.material} name='material' />
                        </div>
                    </div>
                </div>
                <div className={s.buttons}>
                    <div>

                        <strong>Цена:</strong>
                        <Field component='input' type='text' value={props.price} name='price' />
                        <span> руб</span>
                    </div>


                    <div onClick={props.Cancel}>Отменить</div>
                    <label htmlFor="submit">
                        <div> Сохранить</div>
                    </label>
                    <button id='submit'></button>
                </div>
            </div>
        </div>
    </form>

}


export default reduxForm({
    form: 'ProductRedactor',
})(Redactor)