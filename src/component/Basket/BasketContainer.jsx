import React from 'react';
import { connect } from 'react-redux';


import { setProducts, setCurentCategory } from '../../redux/catalog_reducer';
import Basket from './Basket';



class BasketContainer extends React.Component {

    constructor(props) {
        super(props);
        // this.onCategoryClick = this.onCategoryClick.bind(this)
    }


    render() {

        return <Basket {...this.props} />
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



export default connect(mapStateToProps, { setProducts, setCurentCategory })(BasketContainer)