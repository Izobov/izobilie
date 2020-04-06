import React from 'react';
import { connect } from 'react-redux';
import Basket from './Basket';
import { changeCount, modal, sendOrder, cleanBasket, deleteProductFromBasket } from '../../redux/basket_reducer';



class BasketContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            total: 0
        }
        // this.onCategoryClick = this.onCategoryClick.bind(this)
        this.onChange = this.onChange.bind(this)
        this.onClick = this.onClick.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.Close = this.Close.bind(this)
        this.deleteProduct = this.deleteProduct.bind(this)

    }


    onChange(product, e) {

        this.props.changeCount(product, e)
    }

    onSubmit(name, secondname, phone, total) {
        this.props.sendOrder(name, secondname, this.props.products, phone, total)

    }

    Close() {
        this.props.cleanBasket()
    }

    shouldComponentUpdate(nextProps, nextState) {

        return this.props.products !== nextProps.products
    }

    onClick(boolean) {
        this.props.modal(boolean)

    }
    deleteProduct(product) {
        setTimeout(() => {
            this.props.deleteProductFromBasket(product)
        }, 800

        )
    }

    render() {

        return <Basket {...this.props} onChange={this.onChange} onSubmit={this.onSubmit} onClick={this.onClick} Close={this.Close} deleteProduct={this.deleteProduct} />
    }
}

let mapStateToProps = (state) => {
    return {
        products: state.basket.products,
        showModal: state.basket.showModal,
        response: state.basket.response
    }
}



export default connect(mapStateToProps, { cleanBasket, changeCount, modal, sendOrder, deleteProductFromBasket })(BasketContainer)