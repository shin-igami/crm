const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// CREATE a new Product
router.post('/', async (req, res) => {
    try {
        const { product_name, product_code, product_price } = req.body;

        // Validate required fields
        if (!product_name || !product_code || !product_price) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        const newProduct = new Product({
            product_name,
            product_code,
            product_price,
        });

        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(500).json({ error: 'Error creating product', details: error.message });
    }
});

//bulk post for creating multiple products
router.post('/bulk', async (req, res) => {
    try {
        const products = req.body;

        // Validate required fields
        if (!Array.isArray(products) || products.some((product) =>!product.product_name)) {
            return res.status(400).json({ error: 'Missing required fields in products array' });
        }

        const newProducts = await Product.insertMany(products);
        res.status(201).json(newProducts);
    } catch (error) {
        res.status(500).json({ error: 'Error creating products', details: error.message });
    }
});

// GET all Products
router.get('/', async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching products', details: error.message });
    }
});

// GET a Product by ID
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);

        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }

        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching product', details: error.message });
    }
});

// UPDATE a Product by ID
router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { product_name, product_code, product_price } = req.body;

        const updatedProduct = await Product.findByIdAndUpdate(
            id,
            { product_name, product_code, product_price },
            { new: true }
        );

        if (!updatedProduct) {
            return res.status(404).json({ error: 'Product not found' });
        }

        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(500).json({ error: 'Error updating product', details: error.message });
    }
});

// DELETE a Product by ID
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const deletedProduct = await Product.findByIdAndDelete(id);

        if (!deletedProduct) {
            return res.status(404).json({ error: 'Product not found' });
        }

        res.status(200).json({ message: 'Product deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error deleting product', details: error.message });
    }
});

module.exports = router;
