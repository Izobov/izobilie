import React from 'react';
import Sidebar from './Sidebar';
import { connect } from 'react-redux';
import { setCatalogThunk, setCurentCatalog } from '../../redux/catalog_reducer';
import { setCategories } from '../../redux/catalog_reducer';
import { CatalogAPI } from '../../api/api';



class SidebarContainer extends React.Component {

    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    componentDidMount() {

        this.props.setCatalogThunk()
    }

    onClick(id, name) {
        this.props.setCategories(id)
        this.props.setCurentCatalog(name)
    }

    onSubmit(name) {
        CatalogAPI.addCatalog(name)

    }

    render() {

        return <Sidebar {...this.props} onClick={this.onClick} onSubmit={this.onSubmit} />
    }
}

let mapStateToProps = (state) => {
    return {
        catalog: state.catalog.catalog,
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, { setCatalogThunk, setCategories, setCurentCatalog })(SidebarContainer)