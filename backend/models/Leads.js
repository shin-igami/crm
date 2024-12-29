const mongoose = require('mongoose');

// Define the schema
const LeadSchema = new mongoose.Schema({
    leadOwner: {
        type: String,
         // Assuming there's a User model for lead owners
        
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
        required: true,
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
        of: String, // Flexible value type; can change to mixed type (mongoose.Schema.Types.Mixed) if needed
        default: {},
    },
}, {
    timestamps: true, // Adds createdAt and updatedAt fields
});

// Export the model
module.exports = mongoose.model('Lead', LeadSchema);
