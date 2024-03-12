import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Menu, Input } from 'antd';
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
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  return(
    <div>
      <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
      {children}
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