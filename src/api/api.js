import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:3230/',
})

export const CatalogAPI = {
    getCatalog() {

        return instance.get('catalog').then(response => { return response.data })
    },

    getCategories(id) {
        return instance.get(`categories/${id}`).then(response => {

            return response.data
        })
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