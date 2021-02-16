import React, { useState, useCallback } from 'react';
import {Button, Table} from 'antd';
import {useDispatch, useSelector} from "react-redux";
import styled from "styled-components";
import {deleteUsers} from "../redux/user";


// 테이블 데이터 (row) 수정 기능이 미구현 되었습니다.
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
    if (!selectedRowKeys)
      return alert('항목을 선택하세요.');
    dispatch(deleteUsers(selectedRowKeys));
  }, [selectedRowKeys]);

  const rowSelection = {
    onChange (selectedRowKeys) {
      setSelectedRowKeys(selectedRowKeys);
    },
    // 구현 하지 못함 ( 체크박스 선택 Props )
    getCheckboxProps: record => {
      return {
        name: record.name,
      };
    }
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
    sorter: (a, b) => a.key - b.key,
  },
  {
    title: '이름',
    dataIndex: 'name',
  },
  {
    title: '직업',
    dataIndex: 'role',
    filters: [
      {
        text: '개발자',
        value: '개발자',
      },
      {
        text: '디자이너',
        value: '디자이너',
      },
      {
        text: '기획자',
        value: '기획자',
      },
    ],
    filterMultiple: false,
    onFilter: (value, record) => record.role.indexOf(value) === 0,
  },
];

const StyledTable = styled(Table)`
  width: 50rem;
`;

export default UserTable;