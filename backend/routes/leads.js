const express = require('express');
const Lead = require('../models/Leads'); // Adjust path as necessary
const Contact = require('../models/ContactDBMS'); // Adjust path as necessary
const router = express.Router();

// Get all leads
router.get('/', async (req, res) => {
    try {
        const leads = await Lead.find();
        res.status(200).json(leads);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch leads', details: error.message });
    }
});

// Get a single lead by ID
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const lead = await Lead.findById(id);
        if (!lead) {
            return res.status(404).json({ error: 'Lead not found' });
        }
        res.status(200).json(lead);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch lead', details: error.message });
    }
});

// Add a new lead
router.post('/', async (req, res) => {
    try {
        const leadData = req.body;
        const newLead = new Lead(leadData);
        const savedLead = await newLead.save();
        res.status(201).json(savedLead);
    } catch (error) {
        res.status(400).json({ error: 'Failed to add lead', details: error.message });
    }
});

// Update an existing lead by ID
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const updates = req.body;

    try {
        const updatedLead = await Lead.findByIdAndUpdate(id, updates, { new: true, runValidators: true });
        if (!updatedLead) {
            return res.status(404).json({ error: 'Lead not found' });
        }
        res.status(200).json(updatedLead);
    } catch (error) {
        res.status(400).json({ error: 'Failed to update lead', details: error.message });
    }
});

// Delete a lead by ID
router.delete('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const deletedLead = await Lead.findByIdAndDelete(id);
        if (!deletedLead) {
            return res.status(404).json({ error: 'Lead not found' });
        }
        res.status(200).json({ message: 'Lead deleted successfully', lead: deletedLead });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete lead', details: error.message });
    }
});

router.post('/convert/:id', async (req, res) => {
    try {
        // Find the lead by ID
        const lead = await Lead.findById(req.params.id);
        if (!lead) {
            return res.status(404).json({ error: 'Lead not found' });
        }

        // Create a new contact from the lead's data
        const contactData = {
            leadOwner: lead.leadOwner,
            company: lead.company,
            firstName: lead.firstName,
            lastName: lead.lastName,
            phone: lead.phone,
            emailAddress: lead.emailAddress,
            leadSource: lead.leadSource,
            leadStatus: lead.leadStatus,
            secondaryPhone: lead.secondaryPhone,
            secondaryEmailAddress: lead.secondaryEmailAddress,
            customFields: lead.customFields,

        };

        const newContact = new Contact(contactData);
        const savedContact = await newContact.save();

        // Optionally, delete the lead after conversion
        //await lead.deleteOne();

        res.status(201).json({
            message: 'Lead successfully converted to contact',
            contact: savedContact,
        });
    } catch (error) {
        res.status(500).json({ error: 'Failed to convert lead', details: error.message });
    }
});

module.exports = router;
