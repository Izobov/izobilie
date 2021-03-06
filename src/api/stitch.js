import {
    Stitch,
    RemoteMongoClient,
    AnonymousCredential
} from 'mongodb-stitch-browser-sdk';
import { updateProducts } from '../redux/catalog_reducer';




let client = Stitch.initializeDefaultAppClient("izobilie-ponia");

const db = client
    .getServiceClient(RemoteMongoClient.factory, "mongodb-atlas")
    .db("Izobilie");
let category;
let products;
let orders;


export const DBconnect = async () => {

    await client.auth
        .loginWithCredential(new AnonymousCredential())
        .then(user => {
            category = db.collection("category");
            products = db.collection("products");
            orders = db.collection("orders")
        });
}

export const CategoryAPIStitch = {

    async getCategory() {
        return category
            .find()
            .asArray()
            .then(res => {
                return res;
            });

    },

    async insertCategory(params) {
        await category.insertOne(params).then(res => {
            return res
        })
    },

    async deleteCategory(params) {

        await category.deleteOne(params).then(res => { return res })
    }



};

export const SectionAPIStitch = {
    async addSection(name, id) {

        await category.updateOne({ _id: id }, { $push: { sections: { name: name } } }).then(res => { return res })

    },
    async deleteSection(name, id) {
        debugger
        await category.updateOne({ _id: id }, { $pull: { sections: { name: name } } }).then(res => { debugger; return res })
    }
}

export const ProductAPIStitch = {

    getProducts(params) {

        return products.find(params).asArray().then(res => {

            return res
        })
    },

    async insertProduct(params) {

        await products.insertOne(params).then(res => { return res })
    },

    async deleteProduct(params) {

        await products.deleteOne(params).then(res => { return res })
    },

    async updateProducts(params, id) {

        await products.updateOne({ _id: id }, { $set: params }).then(res => { return res })
    },

    getTopProducts() {

        return products.find({}, {
            sort: { countOfSales: -1 },
            limit: 5
        }).asArray().then(res => { return res })
    }
}


export const OrdersAPI = {

    sendOrder(params) {

        return orders.insertOne(params).then(res => {

            return res
        })
    },

    getOrders() {

        return orders.find({ saleStatus: 1 }).asArray().then(res => {
            return res
        })
    },

    async updateOrders(order, status) {
        console.log(orders)
        let now = new Date()
        if (status === 2) {
            for (let i = 0; i < order.products.length; i++) {

                let product = order.products[i]
                products.findOneAndUpdate({ _id: product._id }, { $inc: { countOfSales: 1 } }).then(res => {

                })
            }
        } else if (status === 3) {
            return await orders.deleteOne({ _id: order._id, date: order.date })
        }
        await orders.updateOne({
            _id: order._id,
            date: order.date
        },
            { $set: { saleStatus: status, saleDate: now } }
        ).then(res => {
            return res

        })

    }
}
