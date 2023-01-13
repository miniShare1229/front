import React from 'react';
import Lists from '../components/Lists';
import Editor from '../components/Editor';

import styled from 'styled-components';

const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

function Home() {
  return (
    <StyledHome>
      <Editor></Editor>
      <Lists></Lists>
    </StyledHome>
  );
}

export default Home;
