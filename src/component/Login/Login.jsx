import React from 'react';
import { connect } from 'react-redux';
import Basket from './Basket';
import { changeCount, modal, sendOrder } from '../../redux/basket_reducer';



class BasketContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            modal: false
        }
        // this.onCategoryClick = this.onCategoryClick.bind(this)
        this.onChange = this.onChange.bind(this)
        this.onClick = this.onClick.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(product_id, e) {

        this.props.changeCount(product_id, e.target.valueAsNumber)
    }

    onSubmit(name, secondname, phone, total) {
        this.props.sendOrder(name, secondname, this.props.products, phone, total)

    }


    shouldComponentUpdate(nextProps, nextState) {
        return this.props !== nextProps
    }

    onClick(boolean) {
        this.props.modal(boolean)
    }

    render() {

        return <Basket {...this.props} onChange={this.onChange} onSubmit={this.onSubmit} onClick={this.onClick} />
    }
}

let mapStateToProps = (state) => {
    return {
        products: state.basket.products,
        showModal: state.basket.showModal,
        response: state.basket.response
    }
}



export default connect(mapStateToProps, { changeCount, modal, sendOrder })(BasketContainer)