import * as React from 'react';
import styled from 'styled-components';
import { Reset } from 'styled-reset';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import PageLayout from './pages/PageLayout';

import { Routes, Route } from 'react-router-dom';

// 리덕스 연결 확인
import { useSelector, useDispatch } from 'react-redux';
import { plus, minus } from './reducer';

const StyledBody = styled.div`
  align-items: center;
  background-color: #fff2b6;
  display: flex;
  justify-content: center;
  height: 100vh;
  font-family: sans-serif;
`;

function App() {
  const testData = useSelector((state) => state.test.value);
  const dispatch = useDispatch();

  return (
    <StyledBody>
      <Reset />
      {/* rtk 연결 확인코드 
      <div>
        <button onClick={() => dispatch(plus())}>+</button>
        <span>{testData}</span>
        <button onClick={() => dispatch(minus())}>-</button>
      </div> */}

      <div>
        <Routes>
          <Route path="/" element={<PageLayout />}>
            <Route index element={<Home />} />
            <Route path="sign-up" element={<SignUp />} />
            <Route path="sign-in" element={<SignIn />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </StyledBody>
  );
}

export default App;
