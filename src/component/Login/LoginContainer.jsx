import React from 'react';
import { connect } from 'react-redux';
import { compose } from "redux";
import Login from './Login';
import { loginThuk } from '../../redux/auth_reducer';
import { Redirect } from 'react-router-dom';



class LoginContainer extends React.Component {

    constructor(props) {

        super(props);

        this.onLogin = this.onLogin.bind(this)

    }

    onLogin(email, password) {
        this.props.loginThuk(email, password)
    }


    render() {
        if (this.props.isAuth) { return <Redirect to='/' /> }
        else { return <Login {...this.props} onLogin={this.onLogin} /> }

    }
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,

    }
}




export default compose(
    connect(mapStateToProps, { loginThuk }),


)(LoginContainer)