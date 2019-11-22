import React from 'react';
import s from './input.module.css'


export const Input = ({ input, meta, ...props }) => {
    const error = meta.touched && meta.error;
    return (
        <div className={s.input + " " + (error ? s.error : "")}>
            <input {...input} {...props} />
            {error && <span>{meta.error}</span>}
        </div>
    )
}