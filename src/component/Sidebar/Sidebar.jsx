import React from "react";
import { NavLink } from "react-router-dom";
import s from "./sidebar.module.css";
import { useState } from "react";


const Sidebar = props => {

  let [redactorMode, setRedactorMode] = useState(false);
  let [inputName, setInputName] = useState('Название раздела');
  let [img, setImg] = useState('')
  let [showSidebar, setShowSidebar] = useState(false)
  let [addSection, setAddSection] = useState(false)
  let [sectionInput, setSectionInput] = useState('Название')


  let submit = () => {
    setRedactorMode(false);
    let params = { name: inputName, img: img, sections: [] }
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
          {props.isAuth && <span className={s.delete} onClick={(e) => {
            e.stopPropagation()

            props.deleteCategory({ _id: i._id })
          }}>&#10006;</span>}

          <span className={s.name}>
            {i.name}

            {i.sections.length && !showSidebar ? <span className={s.arrow}>  &#8594; </span> : ''}
          </span>
          {(i.sections.length > 0 || props.isAuth) && <div className={s.sections}>
            {i.sections.map(item =>

              <span className={s.sectionName} onClick={(e) => {
                e.stopPropagation()
                props.onClick({ sectionName: item.name }, i.name)
              }} >{item.name}
                {props.isAuth &&
                  <span className={s.deleteSection} onClick={e => {
                    e.stopPropagation()
                    props.deleteSection(item.name, i._id)


                  }}>&#10006;</span>
                }
              </span>
            )}
            {props.isAuth && <span className={` ${s.sectionName} ${s.addSection}`}>
              {addSection ? <div className={s.add}>
                <span >{sectionInput}</span>
                <input type="text" value={sectionInput} onChange={e => setSectionInput(e.target.value)} />
                <div className={s.sectionButtons}>
                  <span className={s.deleteIcon} onClick={e => {
                    e.stopPropagation();
                    setAddSection(false)
                  }}>&#10006;</span>

                  <span className={s.successIcon}
                    onClick={(e) => {
                      e.stopPropagation();
                      props.addSection(sectionInput, i._id)
                      setAddSection(false)
                    }}
                  >&#10004;</span>
                </div>
              </div> :
                <div className={s.plus} onClick={e => {
                  e.stopPropagation()
                  setAddSection(true)
                }} >
                  &#10010;</div>
              }
            </span>}
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
                {img && <img src={img} className={s.icon} />}
                <input type="text" onChange={e => setImg(e.target.value)} placeholder="ссылка картинки" />
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

                <div className={s.circle} onClick={() => {
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
