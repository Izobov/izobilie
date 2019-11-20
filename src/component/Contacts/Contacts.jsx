import React from 'react'
import s from './contacts.module.css'

const Contacts = (props) => {
    return <div>
        <h2>Наши контакты</h2>
        <div className={s.wrapper}>
            <div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2347.7330959483747!2d27.690399015497757!3d53.95424838011089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbc93826962d09%3A0x3ef3b52124440e53!2z0KHRgtGA0L7QuNGC0LXQu9GM0L3Ri9C5INGA0YvQvdC-0Log0KPRgNGD0YfRjNC1!5e0!3m2!1sru!2sby!4v1573459082879!5m2!1sru!2sby" className={s.map}></iframe>
            </div>
            <div className={s.contactInfo}>
                <span>
                    <strong>
                        Прием заказов:
                    </strong>
                    +375 (29) 329-89-85
                </span>
                <span>
                    <strong>
                        Пункты выдачи заказа:
                    </strong>
                    ул Уручанская 19, павильон №224
                    <br />
                    +375 (29) 655-99-38
                    </span>
                <span>
                    <strong>
                        Время работы:
                    </strong>
                    вт-вс 8:00 - 16:00
                </span>
            </div>

        </div>

    </div>
}

export default Contacts;