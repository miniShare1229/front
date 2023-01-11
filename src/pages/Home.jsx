import React from 'react';

// 리덕스 연결 확인
import { useSelector, useDispatch } from 'react-redux';
import { plus, minus } from '../reducer';

function Home() {
  const testData = useSelector((state) => state.test.value);
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user);

  return (
    <div>
      <h2>Home</h2>
      <p>비공개 목록</p>
      <p>공유한 장르 목록</p>
      <hr />
      <div>
        rtk 연결 확인용 코드
        <div>
          <button onClick={() => dispatch(plus())}>+</button>
          <span>{testData}</span>
          <button onClick={() => dispatch(minus())}>-</button>
        </div>
      </div>
      <p>userID : {userState._userId}</p>
      <p>userNickName : {userState.nickName}</p>
    </div>
  );
}

export default Home;
