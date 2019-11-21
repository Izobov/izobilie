import { CatalogAPI } from "../api/api"



let SET_BASKET_PRODUCTS = "SET_BASKET_PRODUCTS"
let CHANGE_VALUE = "CHANGE_VALUE"




let InitialState = {
    products: [],

}

const basket_reducer = (state = InitialState, action) => {
    switch (action.type) {
        case SET_BASKET_PRODUCTS:

            let filter = state.products.filter(i => {
                return i.product_id === action.products.product_id
            })

            if (filter.length === 0) {
                alert("товар добавлен в корзину")
                return {
                    ...state,
                    products: [...state.products, action.products]
                }
            } else {
                alert("этот товар уже имеется в вашей корзине")
                return {
                    ...state
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

        default: return state
    }
}


export const setBasketProducts = (products) => ({ type: SET_BASKET_PRODUCTS, products })
export const changeCount = (product_id, value) => ({ type: CHANGE_VALUE, product_id, value })




export default basket_reducer;