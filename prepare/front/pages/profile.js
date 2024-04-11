import React from 'react';
import Head from 'next/head';

import AppLayout from '../component/AppLayout';

const Profile = () => {
    const fallowerList = [{nickname : '제로초'},{nickname : '바보'},{nickname : '노드버드오피셜'}];
    const fallowingList = [{nickname : '제로초'},{nickname : '바보'},{nickname : '노드버드오피셜'}];
  return(
    <>
      <Head>
        <title>내 프로필 | NodeBird</title>
      </Head>
      <AppLayout>
        <NicknameEditForm />
        <FollowList header="팔로잉 목록" />
        <FollowLost header="팔로워 목록" />
      </AppLayout>
    </>
  );
}

export default Profile;