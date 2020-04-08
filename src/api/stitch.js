import {
    Stitch,
    RemoteMongoClient,
    AnonymousCredential
} from 'mongodb-stitch-browser-sdk';


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
        debugger
        return orders.insertOne(params).then(res => {
            debugger
            return res
        })
    }
}
