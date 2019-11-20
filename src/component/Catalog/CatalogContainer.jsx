import React from 'react';
import { connect } from 'react-redux';

import Catalog from './Catalog';



class CatalogContainer extends React.Component {




    render() {

        return <Catalog {...this.props} />
    }
}

let mapStateToProps = (state) => {
    return {
        categories: state.catalog.categories,
        products: state.catalog.products
    }
}

export default connect(mapStateToProps)(CatalogContainer)