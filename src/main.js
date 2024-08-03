import {
  getContacts,
  getIdContact,
  createContact,
  putContact,
  deletContact,
} from './js/api';

getContacts().then(data => console.log(data));
getIdContact(26).then(data => console.log(data));
// createContact({ name: 'Roman', phone: '1234567890' }).then(data =>
//   console.log(data)
// );
// putContact(26, { name: 'Oscar' });
deletContact(26);
