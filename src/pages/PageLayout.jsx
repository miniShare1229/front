import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import GlobalSideBar from '../components/GlobalSideBar';
import Header from '../components/Header';
import Footer from '../components/Footer';

const StyledApp = styled.div`
  height: 100%;
  width: 100%;
  margin: auto;
  font-family: sans-serif;
`;

const StyledBody = styled.div`
  align-items: center;
  background-color: #eaeaea;
  display: flex;
  justify-content: center;
  margin: auto;
  padding: 50px;
  font-family: sans-serif;
  min-height: 800px;
`;

export default function PageLayout() {
  return (
    <StyledApp>
      <Header />
      <StyledBody>
        <GlobalSideBar></GlobalSideBar>
        <Outlet />
      </StyledBody>
      <Footer />
    </StyledApp>
  );
}
