import React, { useState, useCallback, useMemo } from 'react';
import {Form, Input, FloatButtonRef, Button} from 'antd';
import Link from 'next/link';
import styled from 'styled-components';

const ButtonWrapper = styled.div`
  margin-top : 10px;
`;

const LoginForm = ({setIsLoggedIn}) => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const onChangeId = useCallback((e) => {
    setId(e.target.value);
  },[]);
  const onChangePassword = useCallback((e) => {
    setPassword(e.target.value);
  },[]);

  const onSubmitForm = useCallback(() => {
    console.log();    
    setIsLoggedIn(true);
  },[id,password]);

  return(
    <Form onFinish={onSubmitForm}>
      <div>
        <label htmlFor="user-id">아이디</label>
        <br />
        <Input name="user-id" value={id} onChange={onChangeId} required />
      </div>
      <div>
        <label htmlFor="user-password">비밀번호</label>
        <br />
        <Input name="user-password" type="password" value={password} onChange={onChangePassword} required />
      </div>
      <ButtonWrapper>
        <Button type="primary" htmlType="submit" loading={false}>로그인</Button>
        <Link href="/signup"><a><Button>회원가입</Button></a></Link>
      </ButtonWrapper>
    </Form>
  );
}

export default LoginForm;