import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { useState } from 'react';
import s from '../assests/styles/Login.module.css'
import { Context } from '../Context/Context';

const Login = () => {
    const StateContext = useContext(Context)

    const [login, setLogin] = useState('')
    const inputLoginInfo = (e) => {
        setLogin(e.currentTarget.value)
    }
    const [password, setPassword] = useState('')
    const inputPasswordInfo = (e) => {
        setPassword(e.currentTarget.value)
    }
    const [isError, setError] = useState(false)

    const OnButtonClickFunc = (login, password) => {
        if (login === StateContext.state.login && password === StateContext.state.password) {
            StateContext.dispatch({ type: 'login' })
        }
        else {
            setError(true)
        }
    }
    if (StateContext.state.isAuth) return <Redirect to={'/product'} />;
    return (
        <div className={s.container}>
            <div className={s.login_Form + ' ' + s.login_Form_Width}>
                <div className={s.header_Container}>
                    <div className={s.header}>Авторизация</div>
                    <div className={s.line}></div>
                </div>
                <div className={s.inputs}>
                    <input placeholder='Логин' value={login} onChange={inputLoginInfo} /><br />
                    <input placeholder='Пароль' type='password' value={password} onChange={inputPasswordInfo} />
                    <div className={s.error_Container}>
                        {isError ? <div className={s.error}>Неправильно введенный логин или пароль</div> : ''}
                    </div>
                    <button onClick={() => OnButtonClickFunc(login, password)}>Войти</button>
                </div>

            </div>
        </div>
    )
}


export default Login 