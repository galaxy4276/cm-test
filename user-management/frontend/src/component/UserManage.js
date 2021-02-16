import React from 'react';
import StyledContentWrapper from "../common/StyledContentWrapper";
import UserTable from './Table';
import styled from "styled-components";

const UserManage = () => {

  return (
    <StyledContentWrapper>
      <h1 style={{ fontSize: '3rem' }}>사용자 관리 테이블</h1>
      <StyledLayout>
        <UserTable />
      </StyledLayout>
    </StyledContentWrapper>
  );
};

const StyledLayout = styled.div`
  margin-bottom: 2rem;
  button:first-child { margin-right: 2rem; }
  .button__wrapper { float: right; margin-bottom: 2rem; }
`;

export default UserManage;