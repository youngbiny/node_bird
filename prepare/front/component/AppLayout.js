import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Menu, Input, Row, Col } from 'antd';
import LoginForm from './LoginForm';
import UserProfile from './UserProfile';
const { Search } = Input;
const onSearch = (value, _e, info) => console.log(info?.source, value);
const items = [
  {
    label: (
      <a href="/" target="_self" rel="noopener noreferrer">
        노드버드
      </a>
    ),
    key: 'home',
  },
  {
    label: (
      <a href="/profile" target="_self" rel="noopener noreferrer">
        프로필
      </a>
    ),
    key: 'app',
  },
  {
    label: (
      <Search placeholder="input search text" onSearch={onSearch} enterButton />
    ),
    key: 'search',
  },
  {
    label: (
      <a href="/signup" target="_self" rel="noopener noreferrer">
        회원가입
      </a>
    ),
    key: 'alipay',
  }
];

const AppLayout = ({children}) => {
  const [current, setCurrent] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  return(
    <div>
      <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
      <Row gutter={8}>
        <Col xs={24} md={6}>
          {isLoggedIn ? <UserProfile setIsLoggedIn={setIsLoggedIn} /> : <LoginForm setIsLoggedIn={setIsLoggedIn} />}
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          <a href="http://www.zerocho.com" target="_blank" rel="noreferrer noopener">Made by zerocho</a>
        </Col>
      </Row>
    </div>
    // <div>
    //   <div>
    //     <Link href="/"><a>노드버드</a></Link>
    //     <Link href="/profile"><a>프로필</a></Link>
    //     <Link href="/signup"><a>회원가입</a></Link>
    //   </div>
    //   {children}
    // </div>
  );
}

AppLayout.PropTypes = {
  children : PropTypes.node.isRequired,
};

export default AppLayout;