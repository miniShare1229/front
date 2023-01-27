import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { validateId, validatePw, removeSpace } from '../validation';
import { useDispatch } from 'react-redux';
import { signIn } from '../UserSlice';
import { useSignInPostMutation } from '../api';
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
  const [signInPost, response] = useSignInPostMutation();

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

        // 로그인 post 요청
        signInPost({ id: userId, pwd: userPw })
          .unwrap()
          .then((response) => {
            console.log(response);

            // alert('로그인 성공!');
            dispatch(signIn({ _userId: userId || 'userId', nickName: 'nickName', isLogin: true }));
            navigate('/');
          })
          .catch((response) => console.error(response));
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
