import React, { useState } from 'react';
import styled from 'styled-components';

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
  const [userId, setUserId] = useState('');
  const [userNickName, setUserNickName] = useState('');
  const [userPw, setUserPw] = useState('');
  const [userPwChk, setUserPwChk] = useState('');

  const onSubmit = () => {
    console.log(
      '회원가입',
      'id: ',
      userId,
      'nick: ',
      userNickName,
      'pw: ',
      userPw,
      'pwChk: ',
      userPwChk,
    );
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
            onChange={(e) => setUserId(e.target.value)}
            value={userId}
          />
        </label>
        <label>
          <input
            className="input"
            type="text"
            placeholder="닉네임"
            onChange={(e) => setUserNickName(e.target.value)}
            value={userNickName}
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
        <label>
          <input
            className="input"
            type="password"
            placeholder="비밀번호 확인"
            onChange={(e) => {
              setUserPwChk(e.target.value);
            }}
            value={userPwChk}
          />
        </label>
      </div>
      <button onClick={onSubmit}>회원가입</button>
    </StyledSignUp>
  );
}
