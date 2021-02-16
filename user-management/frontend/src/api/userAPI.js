import axios from 'axios'

const client = axios.create({
  baseURL: 'http://localhost:8001'
});

export const addUserToJSON = (user) => client.post('/user', user);


export const getUserFromJSON = () => client.get('/user');

export const deleteUsersToJSON = (keyLists) =>
  client.delete('/user', {
    data: keyLists
  });


export default client;