import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:3230/',
})

export const CatalogAPI = {
    getCatalog() {

        return instance.get('catalog').then(response => { return response.data })
    },

    addCatalog(name) {
        return instance.post('catalog', { name }).then(response => { return response })
    },

    getCategories(id) {
        return instance.get(`categories/${id}`).then(response => {

            return response.data
        })
    },

    unsuccessGetCategories(id) {
        return instance.get(`catalog/product/${id}`).then(response => { return response.data })
    },

    getProducts(id) {


        return instance.get(`products/${id}`).then(response => { return response.data })
    }




}

export const CategoryAPI = {
    addCategory(file, data) {

        let formData = new FormData();
        formData.append("name", data.name);
        formData.append("catalog_id", data.catalog_id);
        formData.append("file", file)

        return instance.post(`categories`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    }
}




export const OrderAPI = {
    addOrder(name, secondName, products, phone, total) {

        return instance.post(`orders`, { name, secondName, products, phone, total }).then(response => { return response })
    },

    getOrders() {
        return instance.get('orders').then(response => { return response })
    },

    updateOrder(value, id) {

        return instance.put('orders', { value: value, id: id }).then(response => {
            return response
        })
    }

}


export const ProductAPI = {

    updateProducts(file, data) {
        let id = data.product_id
        let formData = new FormData();

        formData.append("file", file)
        formData.append("name", data.name)
        formData.append("catalog_id", data.catalog)
        formData.append("color", data.color)
        formData.append("material", data.material)
        formData.append("price", data.price)
        formData.append("size", data.size)
        formData.append("category_id", data.category)


        return instance.put(`products/${id}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(response => { return response })
    },

    addProduct(file, data) {
        let formData = new FormData();

        formData.append("file", file)
        formData.append("name", data.name)
        formData.append("catalog_id", data.catalog)
        formData.append("color", data.color)
        formData.append("material", data.material)
        formData.append("price", data.price)
        formData.append("size", data.size)
        formData.append("category_id", data.category)

        return instance.post(`products`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(response => { return response })
    }

}


// savePhoto(file, data) {


//     var formData = new FormData();
//     formData.append("file", file);
//     formData.append("name", data.name);

//     console.log(formData.getAll("file"))

//     return axios.post('http://localhost:3230/categories', formData, {
//         headers: {
//             'Content-Type': 'multipart/form-data'
//         }
//     })
// }