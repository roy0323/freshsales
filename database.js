let contacts = [];
let id = 1;

const createDBContact = ({ first_name, last_name, email, mobile_number }) => {
    const contact = { id: id++, first_name, last_name, email, mobile_number };
    contacts.push(contact);
    return contact;
};

const getDBContact = (contact_id) => {
    return contacts.find(contact => contact.id == contact_id);
};

const updateDBContact = (contact_id, new_email, new_mobile_number) => {
    let contact = contacts.find(contact => contact.id == contact_id);
    if (contact) {
        contact.email = new_email;
        contact.mobile_number = new_mobile_number;
    }
    return contact;
};

const deleteDBContact = (contact_id) => {
    contacts = contacts.filter(contact => contact.id != contact_id);
    return { message: 'Contact deleted successfully' };
};

module.exports = {
    createDBContact,
    getDBContact,
    updateDBContact,
    deleteDBContact,
};
