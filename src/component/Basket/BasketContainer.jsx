import React from 'react';
import { connect } from 'react-redux';
import Basket from './Basket';
import { changeCount } from '../../redux/basket_reducer';



class BasketContainer extends React.Component {

    constructor(props) {
        super(props);
        // this.onCategoryClick = this.onCategoryClick.bind(this)
        this.onChange = this.onChange.bind(this)
    }

    onChange(product_id, e) {

        this.props.changeCount(product_id, e.target.valueAsNumber)
    }

    shouldComponentUpdate(nextProps, nextState) {
        return this.props.products !== nextProps.products
    }

    render() {

        return <Basket {...this.props} onChange={this.onChange} />
    }
}

let mapStateToProps = (state) => {
    return {
        products: state.basket.products
    }
}



export default connect(mapStateToProps, { changeCount })(BasketContainer)