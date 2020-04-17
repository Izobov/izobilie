import React from 'react'
import s from './about.module.css'
import aney from '../../img/us/man1.jpg'
import izob1 from '../../img/us/man2.jpg'
import izob2 from '../../img/us/girl.jpg'

const About = (props) => {
    return <div className={s.wrapper}>
        <div className={s.title}>

            {/* <h2 > О нас</h2> */}
        </div>
        <div className={s.paralax}>
            <div className={s.paralaxContent}>
                <h2>Наша история</h2>
            </div>
            <div className={s.content} >
                <p>Мы начали свою деятельность в хххх году. За хх лет мы обрели богатый опыт продаж и стали настоящими проффесионалами своего дела. Наша клиентская база насчитывает свыше 20 000 клиентов, по всей Республике Беларусь.
                Мы выстроили крепкие партнерские отношения с такими производителями как ....
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
                <p>Мы ценим каждого клиента и партнера. Главная цель нашего бизнеса-создать крепкие связи с нашими клиентами. Именно поэтому у нас работает команда профессоналов, цель которых не просто продать товар, но и помочь вам подобрать именно то, что вам необходимо.</p>
            </div>

            <div className={s.paralaxContent}>
                <h2>Наша команда</h2>
            </div>
            <div className={s.content}>

                <div className={s.card}>
                    <img src={aney} alt="" />
                    <div className={s.info}>

                        <h3>Анейчик Игорь</h3>
                        <p>Телефон: +375(29)653-09-37 (A1)</p>
                    </div>
                </div>
                <div className={s.card}>
                    <img src={aney} alt="" />
                    <div className={s.info}>

                        <h3>Изобов Леонид</h3>
                        <p>Телефон: +375(29)655-99-38 (A1)</p>
                    </div>
                </div>
                <div className={s.card}>
                    <img src={aney} alt="" />
                    <div className={s.info}>

                        <h3>Изобова Ольга</h3>
                        <p>Телефон: +375(29)329-89-85 (A1)</p>
                    </div>
                </div>

            </div>
        </div>


    </div>
}

export default About