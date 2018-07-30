let contact = require('./contact');
let contactCollection = require('./contactCollection');

function listContacts() {
contactCollection().forEach(contact =>
    createContact(contact.name, contact.phone, contact.address)
)
}