import { OrderAPI } from "../api/api"

let SET_ORDERS = "SET_ORDERS"







let InitialState = {
    orders: false,

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
        OrderAPI.getOrders().then(response => {
            dispatch(setOrdersSuccess(response.data))
        })
    }
}

export const updateOrders = (value, id) => {
    return (dispatch) => {
        OrderAPI.updateOrder(value, id).then(response => {
            if (response.status === 200) {
                dispatch()
            }
        })
    }
}





export default oreders_reducer;