const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();

const apiKey = process.env.FRESHSALES_API_KEY;
const baseUrl = process.env.FRESHSALES_BASE_URL;

const headers = {
    'Content-Type': 'application/json',
    Authorization: `Token token=${apiKey}`,
};

const createContact = async ({ first_name, last_name, email, mobile_number }) => {
    const data = {
        contact: {
            first_name,
            last_name,
            email,
            mobile_number,
        },
    };
    const response = await axios.post(`${baseUrl}/api/contacts`, data, { headers });
    return response.data;
};

const getContact = async (contact_id) => {
    const response = await axios.get(`${baseUrl}/api/contacts/${contact_id}`, { headers });
    return response.data;
};

const updateContact = async (contact_id, new_email, new_mobile_number) => {
    const data = {
        contact: {
            email: new_email,
            mobile_number: new_mobile_number,
        },
    };
    const response = await axios.put(`${baseUrl}/api/contacts/${contact_id}`, data, { headers });
    return response.data;
};

const deleteContact = async (contact_id) => {
    const response = await axios.delete(`${baseUrl}/api/contacts/${contact_id}`, { headers });
    return response.data;
};

module.exports = {
    createContact,
    getContact,
    updateContact,
    deleteContact,
};
