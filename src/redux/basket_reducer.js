import { OrderAPI } from "../api/api"




let SET_BASKET_PRODUCTS = "SET_BASKET_PRODUCTS"
let CHANGE_VALUE = "CHANGE_VALUE"
let TOGGLE_MODAL = "TOGGLE_MODAL"
let SET_ORDER_ID = "SET_ORDER_ID"
let CLEAN_BASKET = "CLEAN_BASKET"





let InitialState = {
    products: [],
    showModal: false,
    response: false,

}

const basket_reducer = (state = InitialState, action) => {
    switch (action.type) {
        case SET_BASKET_PRODUCTS:

            let filter = state.products.filter(i => {
                return i.product_id === action.products.product_id
            })

            if (filter.length === 0) {
                return {
                    ...state,
                    products: [...state.products, action.products],

                }
            } else {
                alert("этот товар уже имеется в вашей корзине")
                return {
                    ...state,

                }
            }

        case CHANGE_VALUE:

            let newArray = []
            for (let i = 0; i < state.products.length; i++) {

                if (state.products[i].product_id === action.product_id) {

                    newArray.push(state.products[i] = {
                        ...state.products[i],
                        count: action.value
                    })
                } else {
                    newArray.push(state.products[i])
                }

            }

            return {
                ...state,
                products: newArray
            }

        case TOGGLE_MODAL:
            return {
                ...state,
                showModal: action.boolean,
            }

        case SET_ORDER_ID:
            return {
                ...state,
                response: action.res
            }

        case CLEAN_BASKET:
            return {
                ...state,
                products: []
            }


        default: return state
    }
}


export const setBasketProducts = (products) => ({ type: SET_BASKET_PRODUCTS, products })
export const changeCount = (product_id, value) => ({ type: CHANGE_VALUE, product_id, value })
export const modal = (boolean) => ({ type: TOGGLE_MODAL, boolean })
const setRes = (res) => ({ type: SET_ORDER_ID, res })
export const cleanBasket = () => ({ type: CLEAN_BASKET })


export const sendOrder = (name, secondName, products, phone, total) => {
    return (dispatch) => {

        return OrderAPI.addOrder(name, secondName, products, phone, total).then(response => {
            if (response.status === 200) {
                dispatch(setRes(response.data.insertId));
            }
        })
    }
}




export default basket_reducer;