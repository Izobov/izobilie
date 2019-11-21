import React from 'react';
import { connect } from 'react-redux';

import Catalog from './Catalog';
import { setProducts, setCurentCategory } from '../../redux/catalog_reducer';



class CatalogContainer extends React.Component {

    constructor(props) {
        super(props);
        this.onCategoryClick = this.onCategoryClick.bind(this)
    }

    onCategoryClick(id, name) {
        this.props.setCurentCategory(name)
        this.props.setProducts(id)
    }

    render() {

        return <Catalog {...this.props} onCategoryClick={this.onCategoryClick} />
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



export default connect(mapStateToProps, { setProducts, setCurentCategory })(CatalogContainer)