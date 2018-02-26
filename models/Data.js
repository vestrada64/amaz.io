const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dataSchema = new Schema({
    name: String,
    sku: String,
    description: String,
    price: Number
});

module.exports = mongoose.model("Data", dataSchema);