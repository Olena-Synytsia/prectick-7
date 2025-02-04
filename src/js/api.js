import axios from 'axios';

const BASE_URL = 'https://64859281a795d24810b7146a.mockapi.io/work';

export async function getContacts() {
  try {
    const { data } = await axios.get(`${BASE_URL}/contacts`);
    return data;
  } catch {
    console.log(error);
  }
}

export async function getIdContact(Id) {
  try {
    const { data } = await axios.get(`${BASE_URL}/contacts/${Id}`);
    return data;
  } catch {
    console.log(error);
  }
}

export async function createContact(body) {
  try {
    const { data } = await axios.post(`${BASE_URL}/contacts`, body);
    return data;
  } catch {
    console.log(error);
  }
}

export async function putContact(id, body) {
  try {
    const { data } = await axios.put(`${BASE_URL}/contacts/${id}`, body);
    return data;
  } catch {
    console.log(error);
  }
}

export async function deletContact(id) {
  try {
    const { data } = await axios.delete(`${BASE_URL}/contacts/${id}`);
    return data;
  } catch {
    console.log(error);
  }
}
