import React  from 'react';
import {Layout, Menu} from 'antd';
import styled from "styled-components";
import { FcManager } from 'react-icons/fc';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { Link, Switch, Route } from 'react-router-dom';
import Home from './Home';
import UserAdd from './UserAdd';
import UserManage from "./UserManage";

const { Sider } = Layout;


const AppLayout = ({ children }) => {
  return (
    <StyledLayout>
      <Sider>
        <StyledHeader>
          <Link to='/'>
            <FcManager />
            <span>User Admin</span>
          </Link>
        </StyledHeader>
        <Menu theme='dark' >
          <Menu.Item key="login" icon={AiOutlineUserAdd} >
            <Link to='login'>
              사용자 추가
            </Link>
          </Menu.Item>
          <Menu.Item key='user-management'>
            <Link to='/management'>
              사용자 관리
            </Link>
          </Menu.Item>
        </Menu>
      </Sider>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/login' exact component={UserAdd} />
          <Route path='/management' exact component={UserManage} />
        </Switch>
    </StyledLayout>
  );
};

const StyledLayout = styled(Layout)`
  height: 100%;
`;

const StyledHeader = styled.div`
  padding: 2rem;
  span { color: white; font-weight: 600; font-size: 2rem; }
  svg { font-size: 3rem; }
  a { display: flex; align-items: center; }
`;

export default AppLayout;