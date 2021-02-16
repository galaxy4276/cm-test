import React, { useState, useCallback } from 'react';
import {Button, Table} from 'antd';
import {useDispatch, useSelector} from "react-redux";
import styled from "styled-components";
import {deleteUsers} from "../redux/user";

const UserTable = ({ data }) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState(null);
  const [selectionType, setSelectionType] = useState('checkbox');

  const dispatch = useDispatch();

  const userList = useSelector(
    state => state.users.users
  );
  const { deleteUserLoading } = useSelector(
    state => state.users
  );

  const onRemove = useCallback(() => {
    dispatch(deleteUsers(selectedRowKeys));
  }, [selectedRowKeys]);

  const rowSelection = {
    onChange (selectedRowKeys, selectedRow) {
      console.log(`selectedRowKeys: ${selectedRowKeys}, ${typeof selectedRowKeys}`);
      setSelectedRowKeys(selectedRowKeys);
    },
    getCheckboxProps: record => ({
      disabled: record.name === 'Disabled User',
      name: record.name,
    }),
  };

  return (
    <>
      <div className='button__wrapper'>
        <Button type='primary'>수정</Button>
        <Button
          type='primary'
          onClick={onRemove}
          loading={deleteUserLoading}
        >
          삭제
        </Button>
      </div>
      <StyledTable
        rowSelection={{
          type: selectionType,
          ...rowSelection,
        }}
        columns={columns}
        dataSource={userList}
      />
    </>
  );
};

const columns = [
  {
    title: '번호',
    dataIndex: 'key',
  },
  {
    title: '이름',
    dataIndex: 'name'
  },
  {
    title: '직업',
    dataIndex: 'role'
  },
];

const StyledTable = styled(Table)`
  width: 50rem;
`;

export default UserTable;