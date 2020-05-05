import React from 'react';
import { connect } from 'react-redux';
import { setProductsThunk, setCurentCategory, updateProducts, insertProduct, deleteProduct, setCurrentProduct } from '../../redux/catalog_reducer';
import { setBasketProducts } from '../../redux/basket_reducer';
import Product from './Product';
import SidebarContainer from '../Sidebar/SidebarContainer';



class ProductContainer extends React.Component {

    constructor(props) {

        super(props);

        this.onCategoryClick = this.onCategoryClick.bind(this);

        this.onProductsSubmit = this.onProductsSubmit.bind(this)
        this.pushInBasket = this.pushInBasket.bind(this)


        this.onAddProductSubmit = this.onAddProductSubmit.bind(this)

        this.updateProducts = this.updateProducts.bind(this)
        this.deleteProduct = this.deleteProduct.bind(this)
        this.onSetCurrentProduct = this.onSetCurrentProduct.bind(this)
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

    pushInBasket(product, count) {
        if (count > 0) {
            product.count = count;

        } else {
            product.count = 1
        }
        console.log(this.props)
        this.props.setBasketProducts(product)
        this.props.setBasketProducts(product)


    }

    render() {

        return <>
            <SidebarContainer />
            <Product {...this.props} pushInBasket={this.pushInBasket} />
        </>
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
        catalog: state.catalog.catalog,
        currentProduct: state.catalog.currentProduct
    }
}




export default connect(mapStateToProps, {
    insertProduct, setProductsThunk, setCurentCategory,
    updateProducts,
    setBasketProducts, deleteProduct,
    setCurrentProduct
})(ProductContainer)