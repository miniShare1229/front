import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// import { useSelector, useDispatch } from 'react-redux';
// import { signIn } from '../UserSlice';

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

export default function SignIn() {
  const [userId, setUserId] = useState('');
  const [userPw, setUserPw] = useState('');

  // const dispatch = useDispatch();

  const onSubmit = () => {
    console.log('로그인', 'id: ', userId, 'pw: ', userPw);

    // 로그인 성공시 redux 적용예정
    // dispatch(signIn());
  };

  return (
    <StyledSignIn>
      <h2 className="title"> 어서오세요👻 </h2>
      <div className="input-box">
        <label>
          <input
            className="input"
            type="text"
            placeholder="아이디"
            onChange={(e) => setUserId(e.target.value)}
            value={userId}
          />
        </label>
        <label>
          <input
            className="input"
            type="password"
            placeholder="비밀번호"
            onChange={(e) => {
              setUserPw(e.target.value);
            }}
            value={userPw}
          />
        </label>
      </div>
      <Link to="/sign-up">계정이 없으신가요?</Link>
      <button onClick={onSubmit}>로그인</button>
    </StyledSignIn>
  );
}
