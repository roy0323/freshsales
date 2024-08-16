const express = require('express');
const { createContact, getContact, updateContact, deleteContact } = require('./freshsales');
const { createDBContact, getDBContact, updateDBContact, deleteDBContact } = require('./database');

const router = express.Router();

router.post('/createContact', async (req, res) => {
    const { first_name, last_name, email, mobile_number, data_store } = req.body;
    try {
        let response;
        if (data_store === 'CRM') {
            response = await createContact({ first_name, last_name, email, mobile_number });
        } else {
            response = await createDBContact({ first_name, last_name, email, mobile_number });
        }
        res.status(201).json(response);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.post('/getContact', async (req, res) => {
    const { contact_id, data_store } = req.body;
    try {
        let response;
        if (data_store === 'CRM') {
            response = await getContact(contact_id);
        } else {
            response = await getDBContact(contact_id);
        }
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.post('/updateContact', async (req, res) => {
    const { contact_id, new_email, new_mobile_number, data_store } = req.body;
    try {
        let response;
        if (data_store === 'CRM') {
            response = await updateContact(contact_id, new_email, new_mobile_number);
        } else {
            response = await updateDBContact(contact_id, new_email, new_mobile_number);
        }
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.post('/deleteContact', async (req, res) => {
    const { contact_id, data_store } = req.body;
    try {
        let response;
        if (data_store === 'CRM') {
            response = await deleteContact(contact_id);
        } else {
            response = await deleteDBContact(contact_id);
        }
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
