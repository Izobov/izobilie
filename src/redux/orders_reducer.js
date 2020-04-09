import { OrderAPI } from "../api/api"
import { OrdersAPI } from "../api/stitch"

let SET_ORDERS = "SET_ORDERS"







let InitialState = {
    orders: [],

}

const oreders_reducer = (state = InitialState, action) => {
    switch (action.type) {
        case SET_ORDERS:

            return {
                ...state,
                orders: action.orders

            }




        default: return state
    }
}


const setOrdersSuccess = (orders) => ({ type: SET_ORDERS, orders })


export const getOrders = () => {
    return (dispatch) => {
        OrdersAPI.getOrders().then(res => {
            dispatch(setOrdersSuccess(res))
        })
    }

}

export const updateOrders = (order, status) => {
    return (dispatch) => {
        OrdersAPI.updateOrders(order, status)

    }
}





export default oreders_reducer;