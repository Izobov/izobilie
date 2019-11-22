import React from 'react';
import s from './modal.module.css'








const Modal = (props) => {



    return <div className={s.window}>
        <div className={s.wrapper}>
            <div className={s.title}>
                <h3>{props.title}</h3>
                <div onClick={props.Close} className={s.close}>Закрыть</div>
            </div>
            <div className={s.body}>
                {props.children}

            </div>
            <div className={s.footer}>
                {props.ok &&

                    <div onClick={props.submit} className={s.submit}>{props.ok}</div>
                }


            </div>
        </div>

    </div>

}

export default Modal;