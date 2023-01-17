import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
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
    color: #fff;
    border-radius: 5px;
    padding: 10px 25px;
    background: transparent;
    font-size: 14px;
    cursor: pointer;
    text-decoration: none;
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
  const userId = useSelector((state) => state.user._userId);
  const navigate = useNavigate();

  const moveToLists = (e) => {
    e.target.name === 'privite' ? navigate(`lists/privite`) : navigate(`lists/shared`);
  };

  return (
    <>
      {userId ? (
        <StyledGlobalSideBar>
          <button onClick={moveToLists} name="privite">
            개인 글
          </button>
          <button onClick={moveToLists} name="shared">
            공유 글
          </button>
        </StyledGlobalSideBar>
      ) : null}
    </>
  );
}

export default GlobalSideBar;
