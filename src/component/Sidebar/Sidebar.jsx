import React from "react";
import { NavLink } from "react-router-dom";
import s from "./sidebar.module.css";
import { useState } from "react";


const Sidebar = props => {

  let [redactorMode, setRedactorMode] = useState(false);
  let [inputValue, setInputValue] = useState();
  let [showSidebar, setShowSidebar] = useState(false)


  let submit = () => {
    setRedactorMode(false);
    props.onSubmit(inputValue);
  };

  let catalogItems = props.catalog.map(i => (
    <div>


      <NavLink className={s.item} key={i.catalog_id}
        to="/products"
        onClick={() => {
          props.onClick({ categoryId: i.name }, i.name);
        }}
      >
        <img src={i.img} alt="" className={s.icon} />
        {props.isAuth && i.catalog_id}
        <div className={s.categoryName}>

          <span className={s.name}>
            {i.name}

            {i.sections.length && !showSidebar ? <span className={s.arrow}>  &#8594; </span> : ''}
          </span>
          {i.sections.length > 0 && <div className={s.sections}>
            {i.sections.map(item =>

              <span onClick={(e) => {
                e.stopPropagation()
                props.onClick({ sectionId: item.name }, i.name)
              }} >{item.name}</span>
            )}
          </div>
          }

        </div>
      </NavLink>
    </div >
  ));

  return (
    <aside className={showSidebar ? `${s.aside} ${s.showSidebar}` : s.aside}  >


      <div className={showSidebar ? `${s.hamburger} ${s.active} ` : s.hamburger} onClick={() => setShowSidebar(!showSidebar)} >
        <span className={s.line} ></span>
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
