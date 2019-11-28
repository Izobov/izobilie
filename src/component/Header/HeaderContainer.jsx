import React from 'react';

import { connect } from 'react-redux';

import Header from './Header';
import { logout } from '../../redux/auth_reducer';



class HeaderContainer extends React.Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this)

    }

    onClick() {
        this.props.logout()
    }

    render() {

        return <Header {...this.props} onClick={this.onClick} />
    }
}

let mapStateToProps = (state) => {
    return {
        countOfProducts: state.basket.products.length,
        isAuth: state.auth.isAuth
    }
}



export default connect(mapStateToProps, { logout })(HeaderContainer)