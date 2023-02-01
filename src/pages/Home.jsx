import React, { useEffect } from 'react';
import Editor from '../components/Editor';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  margin-top: 60px;
`;

function Home() {
  let { isLogin, nickName, user, id } = useSelector((state) => state.auth);

  return (
    <StyledHome>
      {isLogin ? (
        <>
          <Editor />
          <Outlet />
        </>
      ) : (
        <p>miniShare에 오신 것을 환영합니다. 서비스를 이용하시려면 로그인을 해주세요</p>
      )}
    </StyledHome>
  );
}

export default Home;
