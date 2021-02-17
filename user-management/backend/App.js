import express from 'express';
import * as API from './api';
import logger from 'morgan';
import {addUser, getUsers, deleteUsers} from './api';
import cors from 'cors';
import * as path from "path";

const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './build')));


app.get('/user', getUsers);
app.post('/user', addUser);
app.delete('/user', deleteUsers);

app.use((err, req, res, next) => {
  return res.status(500).send('서버가 응답할 수 없습니다.');
});

app.listen(8001, () => {
  console.log('server is running on 8001');
});