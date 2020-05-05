import React from "react";
import { NavLink } from "react-router-dom";
import s from "./sidebar.module.css";
import { useState } from "react";
import { SectionAPIStitch } from "../../api/stitch";




const Sidebar = props => {
  let auth = props.isAuth

  function update(id, name, arr) {
    SectionAPIStitch.updateSecondSection(id, name, arr)
  }
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

            <span >
              {d.name}
            </span>
          </div>
          {d.nestedSection && d.nestedSection.nestedSections.map(sec =>
            <span className={s.secondSection}>-{sec}</span>)}

          {d.name === redactorSection ?
            <div className={s.inputWrapper2} >
              <span>-{sectionInput}</span>
              <input type="text" value={sectionInput} onChange={e => setSectionInput(e.target.value)} />
              <div className={s.buttons}>
                <div className={s.cancel} onClick={() => { setSectionInput('Название'); setRedactorMode(false) }}>Отменить</div>
                <div className={s.add} onClick={() => { console.log(i); setRedactorMode(false); update(i.name, d.name, d.nestedSection ? [...d.nestedSection.nestedSections, sectionInput] : [{ name: sectionInput }]) }}>Отправить</div>
              </div>
            </div>
            :

            <span onClick={() => setRedactorSection(d.name)}>- &#10010;</span>
          }
        </div>
      )}

      {/* {auth && */}
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
      {/* } */}

    </div>}
  </div>)

  return <div className={s.nav}>
    {catalogItem}
    <NavLink to='/about' className={s.item}>О нас</NavLink>
    <NavLink to='/contacts' className={s.item}> Доставка и оплата</NavLink>
    <NavLink to='/contacts' className={s.item}> Контакты</NavLink>
    {props.isAuth && <NavLink to='/orders' className={s.item}>Заказы</NavLink>}
  </div>








};

export default Sidebar;
