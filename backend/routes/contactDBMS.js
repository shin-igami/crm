const express = require('express');
const router = express.Router();
const Contact = require('../models/ContactDBMS'); // Adjust path to the Contact model

// Create a new contact
router.post('/', async (req, res) => {
    try {
        const contactData = req.body;
        const newContact = new Contact(contactData);
        const savedContact = await newContact.save();
        res.status(201).json(savedContact);
    } catch (error) {
        res.status(400).json({ error: 'Failed to create contact', details: error.message });
    }
});

// Get all contacts
router.get('/', async (req, res) => {
    try {
        const contacts = await Contact.find();
        res.status(200).json(contacts);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch contacts', details: error.message });
    }
});

// Get a specific contact by ID
router.get('/:id', async (req, res) => {
    try {
        const contact = await Contact.findById(req.params.id);
        if (!contact) {
            return res.status(404).json({ error: 'Contact not found' });
        }
        res.status(200).json(contact);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch contact', details: error.message });
    }
});

// Update a contact by ID
router.put('/:id', async (req, res) => {
    try {
        const updatedContact = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!updatedContact) {
            return res.status(404).json({ error: 'Contact not found' });
        }
        res.status(200).json(updatedContact);
    } catch (error) {
        res.status(400).json({ error: 'Failed to update contact', details: error.message });
    }
});

// Delete a contact by ID
router.delete('/:id', async (req, res) => {
    try {
        const deletedContact = await Contact.findByIdAndDelete(req.params.id);
        if (!deletedContact) {
            return res.status(404).json({ error: 'Contact not found' });
        }
        res.status(200).json({ message: 'Contact deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete contact', details: error.message });
    }
});

// Get a contact by phone number
router.get('/by-phone/:phone', async (req, res) => {
    try {
        const { phone } = req.params;

        // Find contact(s) with the specified phone number
        const contacts = await Contact.find({ 
            $or: [
                { phone: phone }, 
                { secondaryPhone: phone }
            ]
        });

        if (!contacts.length) {
            return res.status(404).json({ error: 'No contacts found with the given phone number' });
        }

        res.status(200).json(contacts);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch contacts', details: error.message });
    }
});

router.put('/:contactId/add-product', async (req, res) => {
    try {
        const { contactId } = req.params;
        const { productId } = req.body;  // Expecting a productId in the request body

        // Validate productId
        if (!productId) {
            return res.status(400).json({ error: 'Product ID is required' });
        }

        // Get the product details
        const product = await Product.findById(productId);

        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }

        // Get the current date
        const currentDate = new Date();

        // Find the contact by ID and add the product to the Products array
        const updatedContact = await Contact.findByIdAndUpdate(
            contactId,
            {
                $push: {
                    Products: {
                        product: product._id,  // Storing product ID
                        date: currentDate,      // Storing the current date
                    },
                },
            },
            { new: true } // To return the updated contact
        );

        if (!updatedContact) {
            return res.status(404).json({ error: 'Contact not found' });
        }

        res.status(200).json(updatedContact);
    } catch (error) {
        res.status(500).json({ error: 'Error adding product to contact', details: error.message });
    }
});



module.exports = router;
