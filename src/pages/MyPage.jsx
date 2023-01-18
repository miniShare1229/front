import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import InvitationMessage from '../components/InvitationMessage';
import SharedLists from '../components/SharedLists';

const StyledMyPage = styled.div`
  margin: 0 auto;
  min-width: 1500px;
  min-height: 600px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 30px;

  .info {
    h2 {
      font-size: 20px;
      font-weight: 600;
      margin-bottom: 30px;
    }
    p {
      margin: 15px 0;
    }
  }

  .info-btn {
    button {
      height: 40px;
      color: #fff;
      border-radius: 5px;
      padding: 10px 25px;
      background: transparent;
      cursor: pointer;
      transition: all 0.3s ease;
      display: inline-block;
      box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
        7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
      outline: none;
      margin: 5px 0 10px;
      background: linear-gradient(0deg, rgba(120, 120, 120) 1%, rgba(150, 150, 150, 1) 100%);
      border: none;

      :hover {
        background: linear-gradient(0deg, rgba(100, 100, 100, 1) 0%, rgba(130, 130, 130, 1) 100%);
      }
    }
  }
  .invite {
    min-width: 1420px;
    height: 180px;
    margin: 20px;
    padding: 10px 0 20px;
    overflow: auto;
  }

  .lists {
    display: flex;
    margin: 30px 0;
  }
`;

function MyPage() {
  let { isLogin, nickName, _userid } = useSelector((state) => state.user);
  const navigate = useNavigate();
  console.log(isLogin, nickName, _userid);
  if (!isLogin) {
    alert('로그인을 해주세요!');
    navigate('/sign-in');
  }

  return (
    <StyledMyPage>
      <div className="info">
        <h2>어서오세요! 😀</h2>
        <p>{_userid}</p>
        <p>{nickName}</p>
      </div>
      <div className="info-btn">
        <button>비밀번호 변경</button>
        <button>닉네임 변경</button>
      </div>
      <div className="invite">
        <ul>
          <InvitationMessage />
        </ul>
      </div>
      <SharedLists className="lists" />
    </StyledMyPage>
  );
}

export default MyPage;
