import { CatalogAPI } from "../api/api"


let SET_CATALOG = "SET_CATALOG"
let SET_CATEGORIES = "SET_CATEGORIES"
let SET_PRODUCTS = "SET_PRODUCTS"
let SET_CURRENT_CATALOG = "SET_CURRENT_CATALOG"
let SET_CURRENT_CATEGORY = "SET_CURRENT_CATEGORY"



let InitialState = {
    products: [],

}

const basket_reducer = (state = InitialState, action) => {
    switch (action.type) {
        case SET_CATALOG:
            return {
                ...state,
                catalog: action.catalog
            }
        case SET_CURRENT_CATALOG:
            return {
                ...state,
                currentCatalog: action.name,
                curentCategory: ''
            }
        case SET_CURRENT_CATEGORY:
            return {
                ...state,
                curentCategory: action.name
            }

        case SET_CATEGORIES:

            return {
                ...state,
                categories: action.categories

            }
        case SET_PRODUCTS:
            return {
                ...state,
                categories: [],
                products: action.products
            }

        default: return state
    }
}


const setCatalog = (catalog) => ({ type: SET_CATALOG, catalog })
const setCategoriesSuccess = (categories) => ({ type: SET_CATEGORIES, categories })
const setProductsSuccess = (products) => ({ type: SET_PRODUCTS, products })
export const setCurentCatalog = (name) => ({ type: SET_CURRENT_CATALOG, name })
export const setCurentCategory = (name) => ({ type: SET_CURRENT_CATEGORY, name })

export const setCatalogThunk = () => {

    return (dispatch) => {
        return CatalogAPI.getCatalog().then(response => {

            dispatch(setCatalog(response))
        })

    }
}

export const setCategories = (id) => {
    return (dispatch) => {

        return CatalogAPI.getCategories(id).then(response => {
            if (response.length !== 0) {
                dispatch(setCategoriesSuccess(response))
            } else {
                CatalogAPI.unsuccessGetCategories(id).then(response => {
                    dispatch(setProductsSuccess(response))
                })
            }
        })
    }
}

export const setProducts = (id) => {
    return (dispatch) => {
        return CatalogAPI.getProducts(id).then(response => {
            dispatch(setProductsSuccess(response))
        })
    }
}

export default basket_reducer;