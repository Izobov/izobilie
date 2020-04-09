import {
    CatalogAPI,
    ProductAPI,
    CategoryAPI,
    SearchAPI
} from "../api/api"
import {
    CategoryAPIStitch,
    DBconnect,
    ProductAPIStitch
} from "../api/stitch"


let SET_CATALOG = "SET_CATALOG"
let SET_CATEGORIES = "SET_CATEGORIES"
let SET_PRODUCTS = "SET_PRODUCTS"
let SET_CURRENT_SECTION = "SET_CURRENT_SECTION"
let SET_CURRENT_CATEGORY = "SET_CURRENT_CATEGORY"



let InitialState = {
    catalog: [],
    currentCategory: '',
    currentSection: '',
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
        case SET_CURRENT_SECTION:
            return {
                ...state,
                currentSection: action.name,
            }
        case SET_CURRENT_CATEGORY:
            return {
                ...state,
                currentCategory: action.name,
                currentSection: ''
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

        default:
            return state
    }
}


const setCatalog = (catalog) => ({
    type: SET_CATALOG,
    catalog
})
const setCategoriesSuccess = (categories) => ({
    type: SET_CATEGORIES,
    categories
})
const setProductsSuccess = (products) => ({
    type: SET_PRODUCTS,
    products
})
export const setCurentSection = (name) => ({
    type: SET_CURRENT_SECTION,
    name
})
export const setCurentCategory = (name) => ({
    type: SET_CURRENT_CATEGORY,
    name
})

export const setCatalogThunk = () => {

    return (dispatch) => {



        CategoryAPIStitch.getCategory().then(res => {
            dispatch(setCatalog(res))
        })
    }




    //  CatalogAPI.getCatalog().then(response => {

    //     dispatch(setCatalog(response))
    // })


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
// asdassssssssssasdasd


export const setProductsThunk = (params) => {

    return (dispatch) => {

        return ProductAPIStitch.getProducts(params).then(response => {
            dispatch(setProductsSuccess(response))
        })
    }
}


//asddddddddddddddasdddd
export const updateProducts = (file, data) => {
    return (dispatch) => {
        return ProductAPI.updateProducts(file, data).then(response => {

            if (response.status === 200) {

                dispatch(setProductsThunk(data.category))
            }
        })
    }
}

export const addCategory = (file, data) => {

    return (dispatch) => {
        return CategoryAPI.addCategory(file, data).then(response => {
            if (response.status === 200) {
                dispatch(setCategories(data.catalog_id))
            }
        })
    }
}

export const updateCategory = (file, data) => {
    return (dispatch) => {
        return CategoryAPI.updateCategory(file, data).then(response => {
            if (response.status === 200) {
                dispatch(setCategories(data.catalog_id))
            }
        })
    }
}

export const deleteCategory = (id, catalog_id) => {
    return (dispatch) => {
        return CategoryAPI.deleteCategory(id).then(response => {
            if (response.status === 200) {
                dispatch(setCategories(catalog_id))
            }
        })
    }
}

export const addProduct = (file, data) => {

    return (dispatch) => {
        return ProductAPI.addProduct(file, data).then(response => {
            if (response.status === 200) {
                dispatch(setProductsThunk(data.category_id))
            }
        })
    }
}

export const deleteProduct = (id, category_id) => {
    return dispatch => {
        return ProductAPI.deleteProduct(id).then(response => {
            if (response.status === 200) {
                dispatch(setProductsThunk(category_id))
            }
        })
    }
}

export const Search = (search) => {
    return dispatch => {
        return SearchAPI.getSearch(search).then(response => {
            if (response.status === 200) {
                dispatch(setCategoriesSuccess([]))
                dispatch(setProductsSuccess(response.data))
            }
        })
    }
}

export default catalog_reducer;