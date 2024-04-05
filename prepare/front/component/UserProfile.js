import React, { useCallback } from "react";
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
const { Meta } = Card;

const UserProfile = ({setIsLoggedIn}) => {
  const onLogOut = useCallback(() => {
    setIsLoggedIn(false);
  },[]);
  return(
    <Card
      actions={[
        <div key="twit">짹짹<br />0</div>,
        <div key="followings">팔로잉<br />0</div>,
        <div key="followings">팔로워<br />0</div>,
      ]}
    >
      <Card.Meta
        avatar={<Avatar>ZC</Avatar>}
        title="Zereocho"
      />
      <Button onClick={onLogOut}>로그아웃</Button>
    </Card>
  );
}

export default UserProfile;