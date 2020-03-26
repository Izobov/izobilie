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
  let [show, setShow] = useState(true)

  let submit = () => {
    setRedactorMode(false);
    props.onSubmit(inputValue);
  };

  let catalogItems = props.catalog.map(i => (

    <NavLink className={s.item} key={i.catalog_id}
      to="/catalog"
      onClick={() => {
        setShow(!show)
        props.onClick(i.catalog_id, i.name);
      }}
    >
      <img src={img} alt="" className={!show && s.icon} />
      {props.isAuth && i.catalog_id}
      {show && i.name}
    </NavLink>

  ));

  return (
    <aside className={s.asideShow} className={show ? s.asideShow : s.aside}>
      <div className={s.logoWrapper}>
        {show ?
          <img src={logo} alt="" className={s.logo} /> :
          <img src={logo2} className={s.logo2} />
        }
      </div>

      <h2 className={s.h2}>{show ? "Каталог" : " "}</h2>


      {catalogItems}
      {props.isAuth && (
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
      )}
    </aside>
  );
};

export default Sidebar;
