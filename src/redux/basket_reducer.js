import { OrderAPI } from "../api/api"
import { OrdersAPI } from "../api/stitch"




let SET_BASKET_PRODUCTS = "SET_BASKET_PRODUCTS"
let CHANGE_VALUE = "CHANGE_VALUE"
let TOGGLE_MODAL = "TOGGLE_MODAL"
let SET_ORDER_ID = "SET_ORDER_ID"
let CLEAN_BASKET = "CLEAN_BASKET"
let DELETE_PRODUCT = "DELETE_PRODUCT"





let InitialState = {
    products: [],
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


        case SET_ORDER_ID:
            return {
                ...state,
                response: action.res.insertedId
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
const setRes = (res) => ({ type: SET_ORDER_ID, res })
export const cleanBasket = () => ({ type: CLEAN_BASKET })
export const deleteProductFromBasket = (product) => ({ type: DELETE_PRODUCT, product })


export const sendOrder = (name, secondName, products, phone, total) => {
    return (dispatch) => {
        let params = {
            name: name,
            secondName: secondName,
            products: products,
            phone: phone,
            total: total,
            date: new Date(),
            saleStatus: 1,
            _id: Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000,
        }


        return OrdersAPI.sendOrder(params).then(res => {
            dispatch(setRes(res))
        })
        // return OrderAPI.addOrder(params).then(response => {
        //     if (response.status === 200) {
        //         dispatch(setRes(response.data.insertId));
        //     }
        // })
    }
}




export default basket_reducer;