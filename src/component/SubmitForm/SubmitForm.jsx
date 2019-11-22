import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { required } from './validator'
import { Input } from './Input'
import s from './form.module.css'


const Form = (props) => {
    return <form onSubmit={props.handleSubmit} >
        <div className={s.name}>
            <Field component={Input} placeholder='Имя' name={'FirstName'} validate={[required]} />
            <Field component={Input} placeholder='Фамилия' name={'SecondName'} validate={[required]} />
        </div>
        <div className={s.phone}>
            <Field component={Input} placeholder='Введите номер вашего телефона' name={'phone'} validate={[required]} />
        </div>
        <div className={s.submitWrapper}>
            <label htmlFor="btn" className={s.submit}>
                <div> Оформить</div>
            </label>
            <button id='btn' className={s.btn}> </button>
        </div>
    </form>
}

export default reduxForm({
    form: 'Submit'
})(Form)