import React from 'react'
import s from './footer.module.css';
import logo from '../../img/logo/Logo.png'

const Footer = (props) => {
    return <footer>

        <div> <img src={logo} alt="" /></div>
        <p>&copy;all rigths reserved</p>

    </footer>
}

export default Footer