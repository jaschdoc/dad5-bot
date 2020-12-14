const dbURL = process.env.DBURL;
const dbPort = process.env.DBPORT;
const dbName = process.env.DBNAME;
mongoose.connect("mongodb://" + dbURL + ":" + dbPort + "/" + dbName, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => console.log("Successfully connected to database")).catch((err: any) => console.log(err));

module.exports = {
    find: find,
    findOne: findOne,
    findOneAndUpdate: findOneAndUpdate,
    updateOne: updateOne,
    deleteOne: deleteOne,
    insertOne: insertOne
}

//All queries are called with .exec() to make them return Promises.
//

//Finds documents of type model matching filter.
async function find(model: { find: (arg0: {}, arg1: string) => { (): any; new(): any; exec: { (): Promise<any>; new(): any; }; }; }, filter = {}, fields = "") {
    return await model.find(filter, fields).exec().catch((err: any) => console.log(err))
}


//Finds a single document of type model matching filter.
async function findOne(model: { findOne: (arg0: {}, arg1: string) => { (): any; new(): any; exec: { (): Promise<any>; new(): any; }; }; }, filter = {}, fields = "") {
    return await model.findOne(filter, fields).exec().catch((err: any) => console.log(err))
}

//Updates <replace> of type model matching filter. If not found, it inserts it iff upsert = true.
async function updateOne(model: { updateOne: (arg0: {}, arg1: {}, arg2: { upsert: boolean; }) => { (): any; new(): any; exec: { (): Promise<any>; new(): any; }; }; }, filter = {}, replace = {}, upsert = false) {
    return await model.updateOne(filter, replace, { 'upsert': upsert }).exec().catch((err: any) => console.log(err))
}

//Atomically finds a document and updates it. Returns the updated document.
async function findOneAndUpdate(model: { findOneAndUpdate: (arg0: {}, arg1: {}, arg2: { upsert: boolean; new: boolean; }) => { (): any; new(): any; exec: { (): Promise<any>; new(): any; }; }; }, filter = {}, replace = {}, upsert = false) {
    return await model.findOneAndUpdate(filter, replace, { 'upsert': upsert, 'new': true }).exec().catch((err: any) => console.log(err))
}


//Deletes the given entry of type model
async function deleteOne(model: { deleteOne: (arg0: { _id: any; }) => { (): any; new(): any; exec: { (): Promise<any>; new(): any; }; }; }, entry: { _id: any; }) {
    return await model.deleteOne({ _id: entry._id }).exec().catch((err: any) => console.log(err));
}

//Inserts a single document of type model.
async function insertOne(model: { create: (arg0: any) => Promise<any>; }, doc: any) {
    return model.create(doc).catch((err: any) => console.log(err));
}
