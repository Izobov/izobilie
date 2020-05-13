import React from "react";
import { NavLink } from "react-router-dom";
import s from "./sidebar.module.css";
import { useState } from "react";





const Sidebar = props => {
  let auth = props.isAuth



  let [redactorMode, setRedactorMode] = useState(false);
  let [redactorSection, setRedactorSection] = useState(false)
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


  let catalogItem = props.catalog.map(i => <div className={s.item} key={i._id}>
    {i.name}
    {i.sections && <div className={s.sectionsWrapper} key={i._id}>
      {i.sections.map(d =>


        <div className={s.section}>
          <div className={s.mainSection}>
            {auth && <div className={s.delete} onClick={e => {
              e.stopPropagation();
              props.deleteSection(d.name, i._id)
            }}>&#10006;</div>}
            <NavLink to={"catalog/section/" + d.name}>


              <span onClick={() => props.onClick({ sectionName: d.name }, i.name)}>
                {d.name}
              </span>
            </NavLink>
          </div>
          {d.nestedSection && d.nestedSection.nestedSections.map(sec =>
            <div className={s.nested}>
              <NavLink to={"catalog/nestedsection/" + sec}>
                <span className={s.secondSection} onClick={e => { e.stopPropagation(); props.onClick({ nestedSection: sec }, i.name) }}>-{sec} </span>
              </NavLink>
              {auth &&
                <div className={s.deleteSection} onClick={(e) => { e.stopPropagation(); props.update(i.name, d.name, [...d.nestedSection.nestedSections.filter(i => i !== sec)]) }} >&#10006;</div>
              }

            </div>
          )}

          {auth && (d.name === redactorSection ?
            <div className={s.inputWrapper2} >
              <span>-{sectionInput}</span>
              <input type="text" value={sectionInput} onChange={e => setSectionInput(e.target.value)} />
              <div className={s.buttons}>
                <div className={s.cancel} onClick={(e) => { e.stopPropagation(); setSectionInput('Название'); setRedactorSection(false) }}>Отменить</div>
                <div className={s.add} onClick={(e) => { e.stopPropagation(); setRedactorSection(false); props.update(i.name, d.name, d.nestedSection ? [...d.nestedSection.nestedSections, sectionInput] : [sectionInput]) }}>Отправить</div>
              </div>
            </div>
            :

            <span className={s.secondSection} onClick={(e) => { e.stopPropagation(); setRedactorSection(d.name) }}>- добавить</span>)
          }
        </div>

      )}

      {auth && (redactorMode ?
        <div className={s.inputWrapper} >
          <span>{sectionInput}</span>
          <input type="text" value={sectionInput} onChange={e => setSectionInput(e.target.value)} />
          <div className={s.buttons}>
            <div className={s.cancel} onClick={() => { setSectionInput('Название'); setRedactorMode(false) }}>Отменить</div>
            <div className={s.add} onClick={() => { setRedactorMode(false); props.addSection(sectionInput, i._id) }}>Отправить</div>
          </div>
        </div> :
        <div className={s.mainSection} onClick={() => setRedactorMode(true)}>
          &#10010;
      </div>)
      }


    </div>}
  </div>)

  return <div className={s.nav}>
    {catalogItem}
    <NavLink to='/about' className={s.item}>О нас</NavLink>
    <NavLink to='/payinfo' className={s.item}> Доставка и оплата</NavLink>
    <NavLink to='/contacts' className={s.item}> Контакты</NavLink>
    {props.isAuth && <NavLink to='/orders' className={s.item}>Заказы</NavLink>}
  </div>








};

export default Sidebar;
