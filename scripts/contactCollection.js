let contacts = [
    {
        name: 'Michael Mc.',
        phone: '6159265555',
        address: 'Nashville, TN'
    },

    {
        name: 'Mike McClenton',
        phone: '91955555555',
        address: 'Chapel Hill, NC'
    }
]

localStorage.setItem('contacts', JSON.stringify(contacts));

function getContacts () {
    return JSON.parse(localStorage.getItem('contacts'));

}
module.exports = getContacts;