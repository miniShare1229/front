import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { validateId, validatePw, removeSpace } from '../validation';
import { useDispatch } from 'react-redux';
import { signIn } from '../UserSlice';

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
  //input 데이터 모아서 사용
  const [inputValue, setInputValue] = useState({ userId: '', userPw: '' });

  const { userId, userPw } = inputValue;

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const onChange = (e) => {
    setInputValue({
      ...inputValue,
      [e.target.name]: removeSpace(e.target.value),
    });
  };

  const onSubmit = (e) => {
    if (!userId || !userPw) {
      alert('아이디나 비밀번호를 입력해주세요');
    } else {
      if (validateId(userId) && validatePw(userPw)) {
        // api 응답 성공시 nickName 받을 예정
        console.log('로그인');
        dispatch(signIn({ _userId: userId, nickName: 'nickName', isLogin: true }));
        navigate('/');
      }
    }
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
            onChange={onChange}
            value={userId}
            name="userId"
          />
        </label>
        <label>
          <input
            className="input"
            type="password"
            placeholder="비밀번호"
            onChange={onChange}
            value={userPw}
            name="userPw"
          />
        </label>
      </div>
      <Link to="/sign-up">계정이 없으신가요?</Link>
      <button onClick={onSubmit}>로그인</button>
    </StyledSignIn>
  );
}
