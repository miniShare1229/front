import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import styled from 'styled-components';

const StyledApp = styled.div`
  background-color: #fff9dd;
  height: 100%;
  width: 100%;
  margin: auto;
  font-family: sans-serif;
`;

const StyledBody = styled.div`
  align-items: center;
  background-color: #fff2b6;
  display: flex;
  justify-content: center;
  height: 100vh;
  margin: auto;
  font-family: sans-serif;
  border: solid 1px green;
`;

const StyledHeader = styled.header`
  ul {
    display: flex;
    justify-content: space-around;
    margin: auto;
    font-family: sans-serif;
  }
`;

const StyledFooter = styled.footer`
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
`;

export default function PageLayout() {
  return (
    <StyledApp>
      <StyledHeader>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/sign-up">SignUp</Link>
            </li>
            <li>
              <Link to="/sign-in">SignIn</Link>
            </li>
            <li>
              <Link to="/not-found">404 NotFound</Link>
            </li>
          </ul>
        </nav>
      </StyledHeader>
      <StyledBody>
        <Outlet />
      </StyledBody>
      <StyledFooter>
        <p>이 미니 프로젝트는 원하는 친구와 관련 게시물을 공유하는 컨텐츠입니다</p>
        <p>기획, 프론트: WYunH 백엔드: Polarvear</p>
      </StyledFooter>
    </StyledApp>
  );
}
