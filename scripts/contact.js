function createContact(name, phone, address){
    return `<h1>${name}</h1>
            <p>${phone}
            <p>${address}`;
}

module.exports = createContact;