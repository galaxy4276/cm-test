import React, { useEffect } from 'react';
import 'antd/dist/antd.css';
import Layout from "./Layout";
import {useDispatch} from "react-redux";
import {getUsers} from "../redux/user";


const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    return dispatch(getUsers());
  }, []);

  return (
    <Layout>
      <p>test</p>
    </Layout>
  );
};

export default App;