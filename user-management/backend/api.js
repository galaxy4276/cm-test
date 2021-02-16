import fs from "fs";
import {dbPath} from "./config/path";

export const addUserToJSON = async (req, res, next) => {
  try {
    const newUser = await addUserJSONPromise(req.body);

    // 로딩효과를 주기위한 delay
    setTimeout(() => {
      return res.status(201).json(newUser);
    }, 1000);
  } catch (e) {
    console.log(e);
    next(e);
    return res.status(500).send('서버가 응답하지 않습니다.');
  }
};

export const getUsers = async (req, res, next) => {
  try {
    const lists = await getJSONPromise();
    return res.status(200).json(lists);
  } catch (e) {
    console.log(e);
    return res.status(500).send('서버가 응답하지 않습니다.');
  }
};


// ----------- 상단 API에 사용 될 Promise 함수 ------------
const getJSONPromise = () =>
  new Promise((resolve, reject) => {
    fs.readFile(dbPath, 'utf8', (err, data) => {
      if (err) return reject(err);
      console.log(dbPath);
      return resolve(data);
    });
  });

const addUserJSONPromise = (user) =>
  new Promise((resolve, reject) => {
    fs.readFile(dbPath, 'utf8', (err, data) => {
      if (err) reject('파일 읽기 실패');
      const userList = JSON.parse(data);
      const recentID = userList[userList.length - 1].key;
      const newUser = {
        key: recentID + 1,
        ...user,
      };
      const resultData = JSON.stringify(userList.concat(newUser));
      console.log(`${newUser.name} 유저가 id ${newUser.key} 번을 부여받고 ${newUser.role} 직군으로 추가되었습니다.`);

      fs.writeFile(dbPath, resultData, err => {
        if (err) reject('유저 데이터 작성 실패');
      });

      resolve(newUser);
    });
  });