import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { validateId, validatePw, removeSpace } from '../validation';
import { useDispatch, useSelector } from 'react-redux';
import { asyncSignIn } from '../api';

const StyledSignIn = styled.div`
  background-color: #5c99e9;
  border-radius: 20px;
  box-sizing: border-box;
  height: 500px;
  padding: 40px;
  width: 350px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5), 7px 7px 20px 0px rgba(0, 0, 0, 0.1),
    4px 4px 5px 0px rgba(0, 0, 0, 0.3);

  .title {
    color: #ffffff;
    font-size: 26px;
    font-weight: 600;
    text-align: center;
    margin-bottom: 20px;
  }

  .input-box {
    height: 90px;
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .input {
      background-color: #dedede;
      border-radius: 10px;
      box-sizing: border-box;
      border: none;
      color: #404040;
      font-size: 14px;
      height: 35px;
      width: 100%;
      padding: 0 0 0 10px;
    }
  }
  a {
    text-align: center;
    margin-top: 90px;
    text-decoration: none;
    color: #e7e7e7;
    font-size: 14px;
    :hover {
      color: #0e3558;
      text-decoration: underline;
    }
  }
  button {
    background-color: #1257ab;
    border-radius: 12px;
    border: none;
    box-sizing: border-box;
    color: #eee;
    cursor: pointer;
    font-size: 18px;
    height: 50px;
    text-align: center;
    width: 100%;
    box-shadow: inset 1px 1px 1px 0px rgba(255, 255, 255, 0.3);
    :hover {
      background-color: #1228a5;
      color: #ffffff;
    }
    :active {
      background-color: #2d3c6b;
    }
  }
`;

export default function SignIn() {
  const dispatch = useDispatch();
  //input 데이터 모아서 사용
  const [inputValue, setInputValue] = useState({ userId: '', userPw: '' });
  const navigate = useNavigate();
  const { userId, userPw } = inputValue;

  const onChange = (e) => {
    setInputValue({
      ...inputValue,
      [e.target.name]: removeSpace(e.target.value),
    });
  };

  const signIn = async ({ id: userId, pwd: userPw }) => {
    const res = await dispatch(asyncSignIn({ id: userId, pwd: userPw })).unwrap();
    if (res.code === 200) {
      console.log('로그인 성공', res);
      navigate('/');
    } else {
      console.log('로그인 실패');
    }
  };

  const onSubmit = (e) => {
    if (!userId || !userPw) {
      alert('아이디나 비밀번호를 입력해주세요');
    } else {
      if (validateId(userId) && validatePw(userPw)) {
        signIn({ id: userId, pwd: userPw });
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
