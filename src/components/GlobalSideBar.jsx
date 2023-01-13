import React from 'react';
import styled from 'styled-components';

const StyledGlobalSideBar = styled.div`
  background-color: #f9f9f9;
  position: fixed;
  width: 150px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);

  button {
    width: 130px;
    height: 40px;
    color: #fff;
    border-radius: 5px;
    padding: 10px 25px;
    background: transparent;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    display: inline-block;
    box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5), 7px 7px 20px 0px rgba(0, 0, 0, 0.1),
      4px 4px 5px 0px rgba(0, 0, 0, 0.1);
    outline: none;
    margin: 10px;

    background: linear-gradient(0deg, rgba(6, 14, 131, 1) 0%, rgba(12, 25, 180, 1) 100%);
    border: none;

    :hover {
      background: linear-gradient(0deg, rgba(0, 3, 255, 1) 0%, rgba(2, 126, 251, 1) 100%);
    }
  }
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
