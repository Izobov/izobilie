import React from "react";
import { NavLink } from "react-router-dom";
import s from "./sidebar.module.css";
import { useState } from "react";
import img from "../../img/icons/kitchen.png";
import logo from '../../img/logo/izobilie.png';
import logo2 from '../../img/logo/izobilie.png';

const Sidebar = props => {
  let [redactorMode, setRedactorMode] = useState(false);
  let [inputValue, setInputValue] = useState();


  let submit = () => {
    setRedactorMode(false);
    props.onSubmit(inputValue);
  };

  let catalogItems = props.catalog.map(i => (

    <NavLink className={s.item} key={i.catalog_id}
      to="/products"
      onClick={() => {
        props.onClick({ categoryId: i.name });
      }}
    >
      <img src={img} alt="" className={s.icon} />
      {props.isAuth && i.catalog_id}
      {i.name}
    </NavLink>

  ));

  return (
    <aside className={s.aside}  >
      <div className={s.logoWrapper}>
        <h2 className={s.h2}>Каталог</h2>
      </div>



      {catalogItems}


      {
        props.isAuth && (
          <div className={s.wrapper}>
            {redactorMode ? (
              <div>
                <input
                  type="text"
                  placeholder="название раздела"
                  value={inputValue}
                  onChange={e => {
                    setInputValue(e.target.value);
                  }}
                />
                <div
                  className={s.submit}
                  onClick={() => {
                    submit();
                  }}
                >
                  Отправить
              </div>
              </div>
            ) : (
                <div
                  className={s.submit}
                  onClick={() => {
                    setRedactorMode(true);
                  }}
                >
                  Создать раздел
                </div>
              )}
            {redactorMode && (
              <div className={s.cancel} onClick={() => setRedactorMode(false)}>
                {" "}
              Отмена{" "}
              </div>
            )}
          </div>
        )
      }
    </aside >
  );
};

export default Sidebar;
