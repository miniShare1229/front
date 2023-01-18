import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

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

    .invite-msg li {
      margin: 10px 0px 25px;
      padding: 10px 20px;
      box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
        7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
      background-color: #ffffffab;
      button {
        color: #fff;
        border-radius: 3px;
        padding: 8px 15px;

        background: transparent;
        cursor: pointer;
        transition: all 0.3s ease;
        display: inline-block;
        box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
          7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
        outline: none;
        margin: 10px 0px 10px;
        background: linear-gradient(0deg, rgba(120, 120, 120) 1%, rgba(150, 150, 150, 1) 100%);
        border: none;
        :hover {
          background: linear-gradient(0deg, rgba(100, 100, 100, 1) 0%, rgba(130, 130, 130, 1) 100%);
        }
      }
    }
  }

  .lists {
    display: flex;
    margin: 30px 0;

    div {
      width: 700px;
      box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
        7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
      outline: none;
      padding: 10px;
      background-color: rgba(202, 202, 202, 0.6);
      margin: 0 50px 20px 0px;
    }
    h3 {
      font-size: 20px;
      font-weight: 600;
      margin-bottom: 30px;
    }
    li {
      margin: 20px 0;
      padding: 10px;
    }
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
        <ul className="invite-msg">
          <li>
            <h2>??? 님이 유저님과 영화를 공유하고 싶어합니다!</h2>
            <button>수락</button>
            <button>거절</button>
          </li>
          <li>
            <h2>??? 님이 유저님과 영화를 공유하고 싶어합니다!</h2>
            <button>수락</button>
            <button>거절</button>
          </li>
          <li>
            <h2>??? 님이 유저님과 영화를 공유하고 싶어합니다!</h2>
            <button>수락</button>
            <button>거절</button>
          </li>
          <li>
            <h2>??? 님이 유저님과 영화를 공유하고 싶어합니다!</h2>
            <button>수락</button>
            <button>거절</button>
          </li>
        </ul>
      </div>
      <div className="lists">
        <div className="lists-share">
          <h3>내가 공유한 장르</h3>
          <ul>
            <li>리스트</li>
            <li>리스트</li>
            <li>리스트</li>
          </ul>
        </div>
        <div className="lists-shared">
          <h3>친구에게 공유받은 장르</h3>
          <ul>
            <li>리스트</li>
            <li>리스트</li>
            <li>리스트</li>
          </ul>
        </div>
      </div>
    </StyledMyPage>
  );
}

export default MyPage;
