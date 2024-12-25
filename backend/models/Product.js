const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
    {
        product_name: {
            type: String,
            required: true,
            trim: true,
        },
        product_code: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        product_price: {
            type: Number,
            required: true,
            min: 0,
        },
    },
    {
        timestamps: true, // Automatically adds `createdAt` and `updatedAt` fields
    }
);

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
