import axios from 'axios'

const client = axios.create({
  baseURL: 'http://localhost:8001'
});

export const addUserToJSON = (user) => {
  return client.post('/user', user);
};

export const getUserFromJSON = () => {
  return client.get('/user');
};

export const deleteUsersFromJSON = (keyLists) => {
  return client.delete('/user', keyLists);
}