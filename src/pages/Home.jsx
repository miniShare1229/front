import React, { useEffect } from 'react';
import Editor from '../components/Editor';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  margin-top: 60px;
`;

function Home() {
  return (
    <StyledHome>
      <Editor></Editor>
      <Outlet />
    </StyledHome>
  );
}

export default Home;
