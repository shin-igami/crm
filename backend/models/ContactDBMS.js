const mongoose = require('mongoose');

// Define the ContactDBMS schema
const ContactSchema = new mongoose.Schema({
    leadOwner: {
        type: String,
    },
    company: {
        type: String,
    },
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    phone: {
        type: String,

    },
    emailAddress: {
        type: String,

        match: [/.+@.+\..+/, 'Please enter a valid email address'],
    },
    leadSource: {
        type: String,
      
    },
    leadStatus: {
        type: String,
    
    },
    secondaryPhone: {
        type: String,
        default: null,
    },
    secondaryEmailAddress: {
        type: String,
        default: null,
        match: [/.+@.+\..+/, 'Please enter a valid email address'],
    },
    customFields: {
        type: Map,
        of: String, // Flexible value type
        default: {},
    },
    PAN: {
        type: String,
        required: false,
        match: [/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/, 'Please enter a valid PAN number'], // PAN format validation
    },
    AadhaarNumber: {
        type: String,
        required: false,
        match: [/^[0-9]{12}$/, 'Please enter a valid Aadhaar number'], // Aadhaar format validation
    },
    Products: [
        {
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Product',
                required: true,
            },
            date: {
                type: Date,
                required: true,
            },
        },
    ],
}, {
    timestamps: true, // Adds createdAt and updatedAt fields
});

// Export the model
module.exports = mongoose.model('Contact', ContactSchema);
