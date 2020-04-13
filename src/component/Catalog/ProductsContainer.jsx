import React from 'react';
import { connect } from 'react-redux';
import Catalog from './Catalog';
import { setProductsThunk, setCurentCategory, updateProducts, insertProduct, deleteProduct } from '../../redux/catalog_reducer';
import { setBasketProducts } from '../../redux/basket_reducer';



class CatalogContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = { img: '' };
        this.onCategoryClick = this.onCategoryClick.bind(this);

        this.onProductsSubmit = this.onProductsSubmit.bind(this)
        this.pushInBasket = this.pushInBasket.bind(this)
        this.SetImg = this.SetImg.bind(this)

        this.onAddProductSubmit = this.onAddProductSubmit.bind(this)


        this.deleteProduct = this.deleteProduct.bind(this)
    }

    SetImg(img) {

        if (this.state.img !== img) {
            this.setState({ img: img })
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



    onCategoryClick(id, name) {
        this.props.setCurentCategory(name)
        this.props.setProducts(id)
    }

    pushInBasket(product, count) {
        if (count > 0) {
            product.count = count;

        } else {
            product.count = 1
        }
        this.props.setBasketProducts(product)


    }

    render() {

        return <Catalog {...this.props} onCategoryClick={this.onCategoryClick} pushInBasket={this.pushInBasket}
            onProductsSubmit={this.onProductsSubmit}
            SetImg={this.SetImg}
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




export default connect(mapStateToProps, {
    insertProduct, setProductsThunk, setCurentCategory,
    setBasketProducts, deleteProduct
})(CatalogContainer)