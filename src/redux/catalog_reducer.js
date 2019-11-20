import { CatalogAPI } from "../api/api"


let SET_CATALOG = "SET_CATALOG"
let SET_CATEGORIES = "SET_CATEGORIES"


let InitialState = {
    catalog: [],
    categories: [],
    products: [],

}

const catalog_reducer = (state = InitialState, action) => {
    switch (action.type) {
        case SET_CATALOG:
            return {
                ...state,
                catalog: action.catalog
            }

        case SET_CATEGORIES:
            return {
                ...state,
                categories: action.categories
            }

        default: return state
    }
}


const setCatalog = (catalog) => ({ type: SET_CATALOG, catalog })
const setCategoriesSuccess = (categories) => ({ type: SET_CATEGORIES, categories })

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
            dispatch(setCategoriesSuccess(response))
        })
    }
}

export default catalog_reducer;