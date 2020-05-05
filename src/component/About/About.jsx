import React from 'react'
import s from './about.module.css'
import SidebarContainer from '../Sidebar/SidebarContainer'


const About = (props) => {
    return <>
        <SidebarContainer />
        <div className={s.wrapper}>

            <div className={s.title}>


            </div>
            <div className={s.paralax}>
                <div className={s.paralaxContent}>
                    <h2>Наша история</h2>
                </div>
                <div className={s.content} >
                    <p>Мы начали свою деятельность в хххх году. За хх лет мы обрели богатый опыт продаж и стали настоящими професcионалами своего дела. Наша  база насчитывает свыше 20 000 клиентов, по всей Республике Беларусь.
                    Мы выстроили крепкие партнерские отношения с такими производителями, как ....
                 </p>
                </div>
                <div className={s.paralaxContent}>
                    <h2>Наша миссия</h2>
                </div>
                <div className={s.mask}></div>
                <div className={s.content2}>
                    <p>Мы твердо уверены, что красота скрывается в деталях, поэтому наша цель - привнести не только красоту в Ваш дом в виде всевозможных дверных ручек, крипежей и им подобным, но и обеспечить максимальную надежность в каждой детали</p>
                </div>
                <div className={s.paralaxContent}>
                    <h2>Наша ценности</h2>
                </div>
                <div className={s.content}>
                    <p>Мы ценим каждого клиента и партнера. Главная цель нашего бизнеса-создать крепкие связи с нашими клиентами. Именно поэтому у нас работает команда профессионалов, цель которых не просто продать товар, но и помочь  подобрать именно то, что Вам необходимо.</p>
                </div>



            </div>


        </div>
    </>
}

export default About