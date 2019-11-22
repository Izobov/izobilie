import React from 'react';
import { connect } from 'react-redux';

import Catalog from './Catalog';
import { setProducts, setCurentCategory } from '../../redux/catalog_reducer';
import { setBasketProducts } from '../../redux/basket_reducer';



class CatalogContainer extends React.Component {

    constructor(props) {
        super(props);
        this.onCategoryClick = this.onCategoryClick.bind(this);

        this.pushInBasket = this.pushInBasket.bind(this)
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

        return <Catalog {...this.props} onCategoryClick={this.onCategoryClick} pushInBasket={this.pushInBasket} />
    }
}

let mapStateToProps = (state) => {
    return {
        categories: state.catalog.categories,
        products: state.catalog.products,
        currentCatalog: state.catalog.currentCatalog,
        currentCategory: state.catalog.currentCategory
    }
}



export default connect(mapStateToProps, { setProducts, setCurentCategory, setBasketProducts })(CatalogContainer)