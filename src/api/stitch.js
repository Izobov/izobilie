import {
    Stitch,
    RemoteMongoClient,
    AnonymousCredential
} from 'mongodb-stitch-browser-sdk';
import { getOrders, updateOrders } from '../redux/orders_reducer';


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

    getCategory() {
        return category
            .find()
            .asArray()
            .then(res => {
                return res;
            });

    },

    addCategory(name) {
        return category.insert({
            name: name
        }).then(res => {
            return res
        })
    }

};

export const ProductAPIStitch = {

    getProducts(params) {

        return products.find(params).asArray().then(res => {

            return res
        })
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

    updateOrders(order, status) {

        let now = new Date()
        if (status === 2) {
            for (let i = 0; i < order.products.length; i++) {

                let product = order.products[i]
                products.findOneAndUpdate({ _id: product._id }, { $inc: { countOfSales: 1 } }).then(res => {

                })
            }
        }
        orders.updateOne({
            _id: order._id,
            date: order.date
        },
            { $set: { saleStatus: status, saleDate: now } }
        ).then(res => {
            return res

        })

    }
}
