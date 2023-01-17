import React, { useEffect } from 'react';
import Lists from '../components/Lists';
import Editor from '../components/Editor';
import NotFound from '../pages/NotFound';
import styled from 'styled-components';
import { Outlet, Route, Routes } from 'react-router-dom';

const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  margin-top: 60px;
`;

function Home() {
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(`/test`);

      console.log(JSON.stringify(data));
    };

    fetchData().catch(console.error);
  }, []);

  return (
    <StyledHome>
      <Editor></Editor>
      <Outlet />
    </StyledHome>
  );
}

export default Home;
