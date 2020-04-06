import { OrderAPI } from "../api/api"




let SET_BASKET_PRODUCTS = "SET_BASKET_PRODUCTS"
let CHANGE_VALUE = "CHANGE_VALUE"
let TOGGLE_MODAL = "TOGGLE_MODAL"
let SET_ORDER_ID = "SET_ORDER_ID"
let CLEAN_BASKET = "CLEAN_BASKET"
let DELETE_PRODUCT = "DELETE_PRODUCT"





let InitialState = {
    products: [{ name: "Шпингалет", price: 23.23, count: 1, size: "23x23" }],
    showModal: false,
    response: false,

}

const basket_reducer = (state = InitialState, action) => {
    switch (action.type) {
        case SET_BASKET_PRODUCTS:


            let filter = state.products.filter(i => {
                return i === action.products
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

            let prod = state.products.filter(i => i === action.product)
            prod.count = action.value
            return {
                ...state,
                products: [...state.products]
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

        case DELETE_PRODUCT:

            return {
                ...state,
                products: state.products.filter(item => item !== action.product)
            }

        default: return state
    }
}


export const setBasketProducts = (products) => ({ type: SET_BASKET_PRODUCTS, products })
export const changeCount = (product, value) => ({ type: CHANGE_VALUE, product, value })
export const modal = (boolean) => ({ type: TOGGLE_MODAL, boolean })
const setRes = (res) => ({ type: SET_ORDER_ID, res })
export const cleanBasket = () => ({ type: CLEAN_BASKET })
export const deleteProductFromBasket = (product) => ({ type: DELETE_PRODUCT, product })


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