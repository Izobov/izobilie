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
let sections;
let products;

export const DBconnect = async () => {
    await client.auth
        .loginWithCredential(new AnonymousCredential())
        .then(user => {
            category = db.collection("category");
            sections = db.collection("sections");
            products = db.collection("products");
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