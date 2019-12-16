import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { logout } from '../../redux/auth_reducer';
import { Search } from '../../redux/catalog_reducer';
import { Redirect, NavLink } from 'react-router-dom';



class HeaderContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: false,
            touched: false,
        }

        this.onClick = this.onClick.bind(this)
        this.onChange = this.onChange.bind(this)
        this.onKeyDown = this.onKeyDown.bind(this)

    }

    Search(search) {
        this.props.Search(search);
        this.setState({ touched: true })

    }
    onKeyDown(key) {
        if (key === 13) {
            this.Search(this.state.search)
        }
    }
    onChange(e) {
        this.setState({ search: e })
        console.log(this.state.search)
    }

    onClick() {
        this.props.logout()
    }

    render() {

        return <><Header {...this.props} onClick={this.onClick} onChange={this.onChange} value={this.state.search} onKeyDown={this.onKeyDown} />
            {this.state.search && this.state.touched && <Redirect to='/catalog' />}</>

    }
}

let mapStateToProps = (state) => {
    return {
        countOfProducts: state.basket.products.length,
        isAuth: state.auth.isAuth
    }
}



export default connect(mapStateToProps, { Search, logout })(HeaderContainer)