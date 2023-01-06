import * as React from 'react';
import styled from 'styled-components';
import { Reset } from 'styled-reset';

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

const StyledSignIn = styled.div`
  background-color: #ffb862;
  border-radius: 20px;
  box-sizing: border-box;
  height: 500px;
  padding: 20px;
  width: 320px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  .title {
    color: #ffffff;
    font-size: 26px;
    font-weight: 600;
    text-align: center;
  }

  .input-box {
    height: 80px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .input {
      background-color: #303245;
      border-radius: 10px;
      box-sizing: border-box;
      border: none;
      color: #eee;
      font-size: 16px;
      height: 35px;
      width: 100%;
      padding: 0 0 0 10px;
    }
  }

  button {
    background-color: #8e53d5;
    border-radius: 12px;
    border: none;
    box-sizing: border-box;
    color: #eee;
    cursor: pointer;
    font-size: 18px;
    height: 50px;
    text-align: center;
    width: 100%;
  }

  button:active {
    background-color: #5e00c2;
  }
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

      {/* sign in */}

      <StyledSignIn>
        <h2 className="title"> 어서오세요👻 </h2>
        <div className="input-box">
          <label>
            <input className="input" type="text" placeholder="아이디" />
          </label>
          <label>
            <input className="input" type="password" placeholder="비밀번호" />
          </label>
        </div>
        <button>로그인</button>
      </StyledSignIn>
    </StyledBody>
  );
}

export default App;
