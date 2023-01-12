import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { validateId, validatePw, validateNickName, isPwSame, removeSpace } from '../validation';

const StyledSignUp = styled.div`
  background-color: #39557e;
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

  .sub-title {
    color: #ffffff;
    text-align: center;
  }

  .input-box {
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    .input {
      background-color: #dedede;
      border-radius: 10px;
      box-sizing: border-box;
      border: none;
      color: #404040;
      font-size: 16px;
      height: 35px;
      width: 100%;
      padding: 0 0 0 10px;
    }
  }

  button {
    background-color: #358e82;
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
    background-color: #02796f;
  }
`;

export default function SignUp() {
  const [inputValue, setInputValue] = useState({
    userId: '',
    userNickName: '',
    userPw: '',
    userPwChk: '',
  });

  const { userId, userNickName, userPw, userPwChk } = inputValue;

  const navigate = useNavigate();

  const onChange = (e) => {
    setInputValue({
      ...inputValue,
      [e.target.name]: removeSpace(e.target.value),
    });
  };

  const onSubmit = (e) => {
    console.log('회원가입', inputValue);

    if (!userId || !userPw || !userNickName || !userPwChk) {
      alert('모두 입력해주세요');
    } else {
      if (
        isPwSame(userPw, userPwChk) &&
        validateId(userId) &&
        validatePw(userPw) &&
        validateNickName(userNickName)
      ) {
        // api 응답 성공시 sign-in으로 페이지 이동 예정
        alert('회원가입 완료!');
        navigate('/sign-in');
      }
    }
  };

  return (
    <StyledSignUp>
      <h2 className="title"> 환영합니다! 🎉 </h2>
      <p className="sub-title">친구와 재미를 공유하세요!</p>
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
            type="text"
            placeholder="닉네임"
            onChange={onChange}
            value={userNickName}
            name="userNickName"
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
        <label>
          <input
            className="input"
            type="password"
            placeholder="비밀번호 확인"
            onChange={onChange}
            value={userPwChk}
            name="userPwChk"
          />
        </label>
      </div>
      <Link to="/sign-in">이미 계정이 있으신가요?</Link>
      <button onClick={onSubmit}>회원가입</button>
    </StyledSignUp>
  );
}
