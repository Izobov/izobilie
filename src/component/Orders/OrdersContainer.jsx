import React from 'react';
import { connect } from 'react-redux';
import { getOrders, updateOrders } from '../../redux/orders_reducer';
import Orders from './Orders';



class OrdersContainer extends React.Component {

    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);

        // this.pushInBasket = this.pushInBasket.bind(this)
    }


    componentWillMount() {
        this.props.getOrders()
    }

    onClick(value, id) {
        this.props.updateOrders(value, id)
    }

    render() {

        return <Orders {...this.props} onClick={this.onClick} />
    }
}

let mapStateToProps = (state) => {
    return {
        orders: state.orders.orders
    }
}



export default connect(mapStateToProps, { getOrders, updateOrders })(OrdersContainer)