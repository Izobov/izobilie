import React from 'react';
import { connect } from 'react-redux';
import { useState } from 'react'
import s from './login.module.css'
import { Auth } from '../../redux/auth_reducer';
import { Redirect } from 'react-router-dom'
import { AuthAPIStitch } from '../../api/stitch';



const Login = (props) => {
    const [nameValue, setNameValue] = useState()
    const [passwordValue, setPasswordValue] = useState()

    const onSubmit = () => {

        props.onLogin(nameValue, passwordValue)

    }


    return <div className={s.wrapper}>

        <h2>Добро пожаловать!</h2>
        <div className={s.loginWrapper}>
            <form>
                <div className={s.inputWrapper}>

                    <span className={s.span}>Логин:</span>
                    <input className={s.input} type="text" placeholder='ваш логин' value={nameValue} onChange={(e) => { setNameValue(e.target.value) }} />
                </div>
                <div className={s.inputWrapper}>

                    <span className={s.span}>Пароль:</span>
                    <input className={s.input} type="password" placeholder='пароль' value={passwordValue} onChange={(e) => { setPasswordValue(e.target.value) }} />
                </div>
                <span className={s.error}>{props.error ? props.error : ''}</span>
                <div className={s.submit} onClick={onSubmit}> Войти</div>
            </form>

        </div>
    </div>
}

let mapStateToProps = (state) => {

    return {
        isAuth: state.auth.isAuth,
        error: state.auth.error
    }
}





export default connect(mapStateToProps, { Auth })(Login)