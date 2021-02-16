import express from 'express';
import * as API from './api';
import logger from 'morgan';
import {addUser, getUsers, deleteUsers} from './api';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/user', getUsers);
app.post('/user', addUser);
app.delete('/user', deleteUsers);


app.listen(8001, () => {
  console.log('server is running on 8001');
});