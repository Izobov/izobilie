import React, { useState } from 'react';
import s from './category.module.css'
import UpdateCategory from '../../RedactorsMode/UpdateCategory';






const Category = (props) => {

    const [redactorMode, setRedactorMode] = useState(false)
    const onSubmit = (values) => {
        props.onSubmit(values);
        setRedactorMode(false)
    }

    return <div className={s.card}>
        {props.isAuth && <div className={s.buttons + " " + (redactorMode ? s.hidden : '')}>
            <div className={s.redactor} onClick={() => { setRedactorMode(true) }}>Редактировать</div>
            <div className={s.delete} onClick={() => props.deleteCategory(props.category_id, props.catalog_id)}>Удалить</div>
        </div>}
        {redactorMode ? <UpdateCategory SetImg={props.SetImg} onSubmit={onSubmit} Cancel={setRedactorMode}
            initialValues={{ name: props.name, catalog_id: props.catalog_id, img: props.img, category_id: props.category_id }} /> : <div onClick={() => { props.onCategoryClick(props.category_id, props.name) }} className={s.card_content}>
                <img src={props.img} alt="" />
                <h2 >{props.name}</h2>
                {props.isAuth && <span>№Категории: {props.category_id}</span>}</div>
        }



    </div>
}

export default Category;