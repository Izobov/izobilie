import React from 'react';
import { connect } from 'react-redux';
import Catalog from './Catalog';
import { setProducts, setCurentCategory, updateProducts, addCategory, addProduct, updateCategory, deleteCategory, deleteProduct } from '../../redux/catalog_reducer';
import { setBasketProducts } from '../../redux/basket_reducer';



class CatalogContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = { img: '' };
        this.onCategoryClick = this.onCategoryClick.bind(this);

        this.onProductsSubmit = this.onProductsSubmit.bind(this)
        this.pushInBasket = this.pushInBasket.bind(this)
        this.SetImg = this.SetImg.bind(this)
        this.onAddCategorySubmit = this.onAddCategorySubmit.bind(this)
        this.onAddProductSubmit = this.onAddProductSubmit.bind(this)
        this.onUpdateCategorySubmit = this.onUpdateCategorySubmit.bind(this)
        this.deleteCategory = this.deleteCategory.bind(this)
        this.deleteProduct = this.deleteProduct.bind(this)
    }

    SetImg(img) {
        if (this.state.img !== img) {
            this.setState({ img: img })
        }
    }
    deleteProduct(id, category_id) {
        this.props.deleteProduct(id, category_id)
    }

    deleteCategory(id, catalog_id) {
        this.props.deleteCategory(id, catalog_id)
    }

    onProductsSubmit(values) {
        debugger
        this.props.updateProducts(this.state.img, values);
    }

    onUpdateCategorySubmit(values) {
        debugger
        this.props.updateCategory(this.state.img, values)
    }

    onAddCategorySubmit(values) {

        this.props.addCategory(this.state.img, values)
    }

    onAddProductSubmit(values) {

        this.props.addProduct(this.state.img, values)
    }



    onCategoryClick(id, name) {
        this.props.setCurentCategory(name)
        this.props.setProducts(id)
    }

    pushInBasket(name, img, price, count, product_id) {
        let total = count * price

        let product = { name, img, price, count, total, product_id };
        this.props.setBasketProducts(product)


    }

    render() {

        return <Catalog {...this.props} onCategoryClick={this.onCategoryClick} pushInBasket={this.pushInBasket}
            onProductsSubmit={this.onProductsSubmit} onUpdateCategorySubmit={this.onUpdateCategorySubmit}
            SetImg={this.SetImg} onAddCategorySubmit={this.onAddCategorySubmit}
            onAddProductSubmit={this.onAddProductSubmit} deleteCategory={this.deleteCategory} deleteProduct={this.deleteProduct} />
    }
}

let mapStateToProps = (state) => {
    return {
        categories: state.catalog.categories,
        products: state.catalog.products,
        currentCatalog: state.catalog.currentCatalog,
        currentCategory: state.catalog.currentCategory,
        isAuth: state.auth.isAuth
    }
}




export default connect(mapStateToProps, {
    addProduct, addCategory, setProducts, setCurentCategory,
    setBasketProducts, updateProducts, updateCategory,
    deleteCategory, deleteProduct
})(CatalogContainer)