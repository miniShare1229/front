import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { validateId, validatePw, validateNickName, isPwSame, removeSpace } from '../validation';
import { useSignUpMutation } from '../api';

const StyledSignUp = styled.div`
  background-color: #425e96;
  border-radius: 20px;
  box-sizing: border-box;
  height: 550px;
  padding: 20px;
  width: 360px;
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
      font-size: 14px;
      height: 35px;
      width: 100%;
      padding: 0 0 0 10px;
    }
  }

  a {
    text-align: center;
    text-decoration: none;
    color: #d4d4d4;
    font-size: 14px;
    :hover {
      color: #80c2fc;
      text-decoration: underline;
    }
  }

  button {
    background-color: #26a190;
    border-radius: 12px;
    border: none;
    box-sizing: border-box;
    color: #eee;
    cursor: pointer;
    font-size: 18px;
    height: 50px;
    text-align: center;
    width: 100%;
    font-weight: 900;
    box-shadow: inset 1px 1px 1px 0px rgba(255, 255, 255, 0.3);
    :hover {
      background-color: #56b0ff;
      color: #ffffff;
    }
    :active {
      background-color: #008489;
    }
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

  const [signUp, response] = useSignUpMutation();

  const navigate = useNavigate();

  const onChange = (e) => {
    setInputValue({
      ...inputValue,
      [e.target.name]: removeSpace(e.target.value),
    });
  };

  const onSubmit = (e) => {
    console.log('????????????', inputValue);

    if (!userId || !userPw || !userNickName || !userPwChk) {
      alert('?????? ??????????????????');
    } else {
      if (
        isPwSame(userPw, userPwChk) &&
        validateId(userId) &&
        validatePw(userPw) &&
        validateNickName(userNickName)
      ) {
        e.preventDefault();

        // ???????????? post ??????
        signUp({ id: userId, pwd: userPw, nickname: userNickName })
          .unwrap()
          .then((response) => {
            console.log(response);

            // api ?????? ????????? sign-in?????? ????????? ?????? ??????
            alert('???????????? ??????!');
            navigate('/sign-in');
          })
          .catch((response) => console.error(response));
      }
    }
  };

  return (
    <StyledSignUp>
      <h2 className="title">???? ???????????????! ????</h2>
      <p className="sub-title">????????? ????????? ???????????????!</p>
      <div className="input-box">
        <label>
          <input
            className="input"
            type="text"
            placeholder="?????????(??????, ?????? 3-10??????)"
            onChange={onChange}
            value={userId}
            name="userId"
          />
        </label>
        <label>
          <input
            className="input"
            type="text"
            placeholder="?????????(??????, ??????, ???????????? 2-6??????)"
            onChange={onChange}
            value={userNickName}
            name="userNickName"
          />
        </label>
        <label>
          <input
            className="input"
            type="password"
            placeholder="????????????(??????, ??????, ???????????? 6-12??????)"
            onChange={onChange}
            value={userPw}
            name="userPw"
          />
        </label>
        <label>
          <input
            className="input"
            type="password"
            placeholder="???????????? ??????(??????, ??????, ???????????? 6-12??????)"
            onChange={onChange}
            value={userPwChk}
            name="userPwChk"
          />
        </label>
      </div>
      <Link to="/sign-in">?????? ????????? ????????????????</Link>
      <button onClick={onSubmit}>????????????</button>
    </StyledSignUp>
  );
}
