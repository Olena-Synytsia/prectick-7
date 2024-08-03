import { getContacts, getIdContact, createContact } from './js/api';

getContacts().then(data => console.log(data));
getIdContact(26).then(data => console.log(data));
createContact({ name: 'Roman', phone: '1234567890' }).then(data =>
  console.log(data)
);
