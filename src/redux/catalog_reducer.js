import {
    CatalogAPI,
    ProductAPI,
    CategoryAPI,
    SearchAPI
} from "../api/api"
import {
    CategoryAPIStitch,
    DBconnect,
    ProductAPIStitch,
    SectionAPIStitch
} from "../api/stitch"


let SET_CATALOG = "SET_CATALOG"
let SET_CATEGORIES = "SET_CATEGORIES"
let SET_PRODUCTS = "SET_PRODUCTS"
let SET_TOP = "SET_TOP"
let SET_CURRENT_SECTION = "SET_CURRENT_SECTION"
let SET_CURRENT_CATEGORY = "SET_CURRENT_CATEGORY"



let InitialState = {
    catalog: [],
    currentCategory: '',
    currentSection: '',
    categories: [],
    products: [],
    topProducts: []

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
        case SET_TOP:

            return {
                ...state,
                topProducts: action.products
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

const setTop = (products) => ({

    type: SET_TOP,
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


}





export const setProductsThunk = (params) => {

    return (dispatch) => {

        return ProductAPIStitch.getProducts(params).then(response => {
            dispatch(setProductsSuccess(response))
        })
    }
}




export const insertCategory = (params) => {
    return (dispatch) => {
        CategoryAPIStitch.insertCategory(params).then(res => {

            return dispatch(setCatalogThunk())
        })
    }
}

export const deleteCategory = (params) => {
    return (dispatch) => {

        CategoryAPIStitch.deleteCategory(params).then(res => {
            return dispatch(setCatalogThunk())
        })
    }
}

export const addSection = (name, id) => {
    return (dispatch) => {

        return SectionAPIStitch.addSection(name, id).then(res => {
            dispatch(setCatalogThunk())
        })
    }
}

export const deleteSection = (name, id) => {
    return (dispatch) => {

        return SectionAPIStitch.deleteSection(name, id).then(res => {
            dispatch(setCatalogThunk())
        })
    }
}

// export const updateCategory = (file, data) => {
//     return (dispatch) => {
//         return CategoryAPI.updateCategory(file, data).then(response => {
//             // if (response.status === 200) {
//             //     dispatch(setCategories(data.catalog_id))
//             // }
//         })
//     }
// }

export const getTopProducts = () => {
    return (dispatch) => {
        return ProductAPIStitch.getTopProducts().then(res => {

            dispatch(setTop(res))
        })
    }
}


export const insertProduct = (params, section, category) => {
    return (dispatch) => {

        ProductAPIStitch.insertProduct(params)
            .then(res => {
                dispatch(setProductsThunk())
                if (section) {
                    return dispatch(setProductsThunk({ sectionName: section }))
                }
                else { dispatch(setProductsThunk({ categoryName: category })) }

            })
    }
}



export const deleteProduct = (params, section, category) => {
    return (dispatch) => {
        ProductAPIStitch.deleteProduct(params)
            .then(res => {
                if (section) {
                    return dispatch(setProductsThunk({ sectionName: section }))

                } else {
                    return dispatch(setProductsThunk({ categoryName: category }))
                }
            })
    }
}

export const updateProducts = (params, id) => {
    return (dispatch) => {

        ProductAPIStitch.updateProducts(params, id)
            .then(res => {
                if (params.sectionName) {
                    return dispatch(setProductsThunk({ sectionName: params.sectionName }))

                } else {
                    return dispatch(setProductsThunk({ categoryName: params.categoryName }))
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
