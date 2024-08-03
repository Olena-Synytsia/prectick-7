import axios from 'axios';

const BASE_URL = 'https://64859281a795d24810b7146a.mockapi.io/work';

export async function getContacts() {
  try {
    const data = await axios.get(`${BASE_URL}/contacts`);
    return data.data;
  } catch {
    console.log(error);
  }
}
