'use strict'
let contact = require('./contact');
let contactCollection = require('./contactCollection');

function listContacts() {
contactCollection().forEach(contact =>
    createContact(contact.name, contact.phone, contact.address)
)
}

function listContacts() {
    getContacts().forEach(contact =>{
        let contactComponent = createContact(contact.name, contact.phone, contact.address);
        writeContactToDom(contactComponent);
    });
}

function writeContactToDom(contact){
    document.querySelector('#contactList').innerHTML += contact
}

module.exports = listContacts;