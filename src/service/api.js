import axios from 'axios';

const instance = axios.create({
  baseURL:'https://636925ef15219b849610b252.mockapi.io/contacts/contacts'
})

export const getContact = async ()=> {
  const { data } = await instance.get('/');
  return data;
}

export const addContactObj = async (contact)=> {
  const { data: result } = await instance.post('/', contact);
  return result;
}

export const removeContact = async id => {
  const { data } = await instance.delete(`/${id}`);
  return data
};


