import React, { useCallback } from 'react';
import StyledContentWrapper from "../common/StyledContentWrapper";
import styled from "styled-components";
import { Input, Select, Button, Form } from 'antd';
import {BiUser} from 'react-icons/bi';
import {AiOutlineUserAdd} from 'react-icons/ai';
import {useDispatch, useSelector} from "react-redux";
import {addUser, inputRole, inputUsername} from "../redux/user";

const UserAdd = () => {
  const { username, role, addUserLoading } = useSelector(
    state => state.users
  );
  const dispatch = useDispatch();

  const onSubmit = useCallback(e => {
    e.preventDefault();
    if (username.trim().length === 0)
      return alert('내용을 입력하세요.');
    dispatch(addUser({ name: username, role }));
    // TODO!: 상태값을 비워도 뷰에 반영이 안 됨.
    // dispatch(inputUsername(''));
  }, [username, role]);

  const onChangeInput = useCallback(e => {
    dispatch(inputUsername(e.target.value));
  }, [username]);

  const onChangeRole = useCallback(e => {
    dispatch(inputRole(e));
  }, [role]);

  return (
    <StyledContentWrapper>
      <StyledAddUserBox>
        <h1>사용자 추가</h1>
        <Form onFinish={onSubmit}>

          <Form.Item
            name='username'
            rules={[{ message: '반드시 입력해주세요.' }]}
          >
            <Input
              size='large'
              id='input-name'
              value={username}
              prefix={<BiUser />}
              placeholder='사용자 이름을 입력하세요.'
              style={{ width: '30rem' }}
              maxLength={10}
              onChange={onChangeInput}
            />
          </Form.Item>

          <Form.Item>
            <span>역할</span>
            <StyledSelect
              defaultValue='개발자'
              onChange={onChangeRole}
            >
              <Select.Option value='개발자'>개발자</Select.Option>
              <Select.Option value='디자이너'>디자이너</Select.Option>
              <Select.Option value='기획자'>기획자</Select.Option>
            </StyledSelect>
          </Form.Item>

          <Form.Item>
            <StyledButton
              icon={<AiOutlineUserAdd style={{ marginRight: '.5rem' }}/>}
              type='primary'
              htmlType='submit'
              size='large'
              onClick={onSubmit}
              loading={addUserLoading}
            >
              추가
            </StyledButton>
          </Form.Item>

        </Form>
      </StyledAddUserBox>
    </StyledContentWrapper>
  );
};

const StyledAddUserBox = styled.div`
  width: 40rem;
  height: 60rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledSelect = styled(Select)`
  margin-top: 1.5rem;
`;

const StyledButton = styled(Button)`
  margin-top: 1rem;
  float: right;
`;


export default UserAdd;