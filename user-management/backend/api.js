import fs from "fs";
import {dbPath} from "./config/path";

/**
 * @POST 사용자 추가
 */
export const addUser = async (req, res, next) => {
  try {
    const newUser = await addUserJSON(req.body);
    // 로딩효과를 주기위한 delay
    setTimeout(() => {
      return res.status(201).json(newUser);
    }, 1000);
  } catch (e) {
    console.log(e);
    return next(e);
  }
};

/**
 * @GET 사용자 전체 목록 불러오기
 */
export const getUsers = async (req, res, next) => {
  try {
    const lists = await getUsersJSON();
    return res.status(200).json(lists);
  } catch (e) {
    console.log(e);
    return next(e);
  }
};

/***
 * @DELETE 사용자 or 사용자 목록 삭제하기
 */
export const deleteUsers = async (req, res, next) => {
  try {
    await deleteUsersJSON(req.body);
    // 로딩효과를 주기위한 delay
    setTimeout(() => {
      return res.status(200).send('OK');
    }, 1200);
  } catch (e) {
    console.log(e);
    return next(e);
  }
};


// ----------- 상단 API 에 사용 될 Promise 함수 ------------
const getUsersJSON = () =>
  new Promise((resolve, reject) => {
    fs.readFile(dbPath, 'utf8', (err, data) => {
      if (err) return reject(err);
      console.log(dbPath);
      return resolve(data);
    });
  });

const addUserJSON = (user) =>
  new Promise((resolve, reject) => {
    fs.readFile(dbPath, 'utf8', (err, data) => {
      if (err) reject('파일 읽기 실패');
      const userList = JSON.parse(data);
      const recentID = userList[userList.length - 1]?.key;

      // 유저가 한 명도 없을 때..
      if (!recentID) {
        const newUser = {
          key: 1,
          ...user,
        };
        const resultData = JSON.stringify(userList.concat(newUser));
        console.log(`${newUser.name} 유저가 id ${newUser.key} 번을 부여받고 ${newUser.role} 직군으로 추가되었습니다.`);
        fs.writeFile(dbPath, resultData, err => {
          if (err) reject('유저 데이터 작성 실패');
        });
        resolve(newUser);
      }
      // 유저가 한 명 이상일 때..
      else {
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
      }
    });
  });

const deleteUsersJSON = (list) =>
  new Promise((resolve, reject) => {
    fs.readFile(dbPath, 'utf8', (err, data) => {
      if (err) reject('파일 읽기 실패');
      let userList = JSON.parse(data);
      for (const idx of list) {
        const findIdx = userList.findIndex(
          item => {
            return item.key === idx
          }
        );
        const findUser = userList[findIdx];
        console.log(
          `${findUser.key} 번호 ${findUser.name} 회원이 제거 되었습니다.
          `);
        userList.splice(findIdx, 1);
      }
      fs.writeFile(dbPath, JSON.stringify(userList), err => {
        if (err) reject('유저 데이터 작성 실패');
        resolve();
      });
    });
  });