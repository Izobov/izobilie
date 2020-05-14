import React from 'react';
import { connect } from 'react-redux';
import Catalog from './Catalog';
import { setProductsThunk, setCurentCategory, setCurentSection } from '../../redux/catalog_reducer';
import { compose } from "redux";
import { withRouter } from 'react-router-dom';



class CatalogContainer extends React.Component {

    componentDidMount() {
        this.setProducts()

    }

    setProducts() {
        let action = this.props.match.params.action
        let name = this.props.match.params.name
        let category = this.props.match.params.category
        let params;
        if (action === "section") {
            params = { sectionName: name }
        } else {
            params = { nestedSection: name }
        }
        this.props.setCurentSection(name)
        this.props.setCurentCategory(category)
        this.props.setProductsThunk(params)
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params !== this.props.match.params) {
            this.setProducts()
        }

    }

    render() {

        return <Catalog {...this.props} />

    }
}

let mapStateToProps = (state) => {
    return {
        categories: state.catalog.categories,
        products: state.catalog.products,
        currentSection: state.catalog.currentSection,
        currentCategory: state.catalog.currentCategory,
        isAuth: state.auth.isAuth,
        basket: state.basket.products,
        catalog: state.catalog.catalog
    }
}




export default compose(
    connect(mapStateToProps, { setProductsThunk, setCurentCategory, setCurentSection }),
    withRouter

)(CatalogContainer)