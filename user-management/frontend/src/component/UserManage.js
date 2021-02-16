import React from 'react';
import StyledContentWrapper from "../common/StyledContentWrapper";
import UserTable from './Table';
import { Button } from 'antd';
import styled from "styled-components";

const UserManage = () => {


  return (
    <StyledContentWrapper>
      <h1 style={{ fontSize: '3rem' }}>사용자 관리 테이블</h1>
      <StyledLayout>
        <div className='button__wrapper'>
          <Button type='primary'>수정</Button>
          <Button type='primary'>삭제</Button>
        </div>
        <UserTable />
      </StyledLayout>
    </StyledContentWrapper>
  );
};

const StyledLayout = styled.div`
  margin-bottom: 2rem;
  div button:first-child { margin-right: 2rem; }
  .button__wrapper { float: right; margin-bottom: 2rem; }
`;

export default UserManage;