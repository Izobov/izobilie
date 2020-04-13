import React from "react";
import { NavLink } from "react-router-dom";
import s from "./sidebar.module.css";
import { useState } from "react";


const Sidebar = props => {

  let [redactorMode, setRedactorMode] = useState(false);
  let [inputName, setInputName] = useState('Название раздела');
  let [img, setImg]=useState('')
  let [showSidebar, setShowSidebar] = useState(false)


  let submit = () => {
    setRedactorMode(false);
    let params={name:inputName, img:img, sections:[]}
    props.onSubmit(params);
  };

  let catalogItems = props.catalog.map(i => (
    <div>


      <NavLink className={s.item} key={i.catalog_id}
        to="/products"
        onClick={() => {
          props.onClick({ categoryName: i.name }, i.name);
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
                props.onClick({ sectionName: item.name }, i.name)
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
              <div className={s.redactorWrapper}>
                {img&& <img src={img} className={s.icon}/>}
                <input type="text" onChange={e=>setImg(e.target.value)} placeholder="ссылка картинки"/>
                <div className={s.redactorName}>

                  <span className={s.inputName}>{inputName}</span>
                  <input
                    type="text"
                    placeholder="название раздела"
                  
                    onChange={e => {
                    setInputName(e.target.value);
                  }}
                  />
                  </div>
                  <div className={s.buttons}>

                <div className={s.cancel} onClick={() => setRedactorMode(false)}>
              
              Отмена
              </div>
                <div 
                  className={s.addButton}
                  onClick={() => {
                    submit();
                  }}
                  >
                  Отправить
                </div>
                  </div>
              </div>
              
            ) : (
                
                <div className={s.circle} onClick={()=>{
                  setShowSidebar(true)
                  setRedactorMode(true)
                }}><span>+</span></div>
              )}
           
          </div>
        )
      }
    </aside >
  );
};

export default Sidebar;
