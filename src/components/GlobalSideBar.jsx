import React from 'react';
import styled from 'styled-components';

const StyledGlobalSideBar = styled.div`
  background-color: #aaffff;
  position: fixed;
  width: 100px;
  height: 100%;
  top: 0;
  left: 0;
`;

function GlobalSideBar() {
  return (
    <StyledGlobalSideBar>
      <button>개인 글</button>
      <button>공유 글</button>
    </StyledGlobalSideBar>
  );
}

export default GlobalSideBar;
