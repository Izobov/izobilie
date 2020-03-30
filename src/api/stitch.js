import {
    Stitch,
    RemoteMongoClient,
    AnonymousCredential,
    StitchAppClient,
    AwsServiceClientImpl
} from 'mongodb-stitch-browser-sdk';


let client = Stitch.initializeDefaultAppClient("izobilie-ponia");

const db = client
    .getServiceClient(RemoteMongoClient.factory, "mongodb-atlas")
    .db("Izobilie");
let category;
let products;

export const DBconnect = async () => {
    await client.auth
        .loginWithCredential(new AnonymousCredential())
        .then(user => {
            category = db.collection("category");
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

export const ProductAPIStitch = {

    getProducts(name) {
        return products.find({ categoryId: name }).asArray().then(res => { return res })
    }
}

export function upload(file) {

    // const aws = StitchClient.getServiceClient(AwsServiceClient.factory, "S3");

    // const aws = StitchAppClient.getServiceClient(AwsServiceClient.factory, "S3")



    let reader = new FileReader()

    console.log(reader)

    reader.readAsBinaryString(file)
    reader.onload = () => {
        //  console.log(reader.result)
        client.callFunction('connectS3', [reader.result]).then(res => console.log(res))
    }




}