import React from 'react';
import { connect } from 'react-redux';
import Catalog from './Catalog';
import { setProductsThunk, setCurentCategory, updateProducts, insertProduct, deleteProduct, setCurrentProduct } from '../../redux/catalog_reducer';
import { setBasketProducts } from '../../redux/basket_reducer';
import { compose } from "redux";
import { withRouter } from 'react-router-dom';



class CatalogContainer extends React.Component {

    constructor(props) {
        super(props);

        this.onCategoryClick = this.onCategoryClick.bind(this);

        this.onProductsSubmit = this.onProductsSubmit.bind(this)


        this.onAddProductSubmit = this.onAddProductSubmit.bind(this)

        this.updateProducts = this.updateProducts.bind(this)
        this.deleteProduct = this.deleteProduct.bind(this)
        this.onSetCurrentProduct = this.onSetCurrentProduct.bind(this)
    }


    componentDidMount() {
        this.setProducts()

    }

    setProducts() {
        let action = this.props.match.params.action
        let name = this.props.match.params.name
        let params;
        if (action === "section") {
            params = { sectionName: name }
        } else {
            params = { nestedSection: name }
        }
        this.props.setProductsThunk(params)
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params !== this.props.match.params) {
            this.setProducts()
        }

    }


    deleteProduct(params) {

        this.props.deleteProduct(params, this.props.currentSection, this.props.currentCategory)
    }

    onProductsSubmit(values) {

        this.props.updateProducts(this.state.img, values);
    }



    onAddProductSubmit(params) {


        this.props.insertProduct(params, this.props.currentSection, this.props.currentCategory)
    }

    updateProducts(params, id) {

        this.props.updateProducts(params, id)
    }


    onCategoryClick(id, name) {
        this.props.setCurentCategory(name)
        this.props.setProducts(id)
    }

    onSetCurrentProduct(product) {
        this.props.setCurrentProduct(product)
    }



    render() {

        return <Catalog {...this.props} onCategoryClick={this.onCategoryClick}
            onProductsSubmit={this.onProductsSubmit}
            updateProduct={this.updateProducts}
            CurrentProduct={this.onSetCurrentProduct}
            onAddProductSubmit={this.onAddProductSubmit} deleteProduct={this.deleteProduct} />

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
    connect(mapStateToProps, {
        insertProduct, setProductsThunk, setCurentCategory,
        updateProducts,
        setBasketProducts, deleteProduct,
        setCurrentProduct,
        setProductsThunk

    }),
    withRouter

)(CatalogContainer)