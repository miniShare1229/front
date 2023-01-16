import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signOut } from '../userSlice';

const StyledHeader = styled.header`
  height: 60px;
  width: 100%;
  position: fixed;
  z-index: 99;
  background-color: #a9c6ea;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid #90bbef;

  nav {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 1600px;
    .logo {
      font-size: 20px;
      width: 150px;
      text-align: center;
      font-weight: 900;
      :hover {
        color: #cde4ff;
      }
    }

    ul {
      width: 1000px;
      display: flex;
      height: 100%;
      align-items: center;
      justify-content: space-around;
      margin: auto;
      font-family: sans-serif;
      font-weight: 900;
    }

    a {
      text-decoration: none;
      :hover {
        color: #e0f4ff;
      }
    }
  }
`;

function Header() {
  const isLogin = useSelector((state) => state.user.isLogin);
  const dispatch = useDispatch();

  return (
    <StyledHeader>
      <nav>
        <Link className="logo" to="/">
          MiniShare
        </Link>
        {isLogin ? (
          <ul>
            <li>
              <Link to="/my-page">마이페이지</Link>
            </li>
            <li>
              <button onClick={() => dispatch(signOut())}>로그아웃</button>
            </li>
          </ul>
        ) : (
          <ul>
            <li>
              <Link to="/sign-up">회원가입</Link>
            </li>
            <li>
              <Link to="/sign-in">로그인</Link>
            </li>
          </ul>
        )}
      </nav>
    </StyledHeader>
  );
}

export default Header;
