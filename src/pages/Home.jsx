import React from 'react';
import Lists from '../components/Lists';
import Editor from '../components/Editor';

import styled from 'styled-components';
import { Route, Routes } from 'react-router-dom';

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
      <Routes>
        <Route path=":userId" element={<Lists />}></Route>
      </Routes>
    </StyledHome>
  );
}

export default Home;
