import React from 'react';
import { useGetDummyQuery } from '../api';
import styled from 'styled-components';

const StyledListItem = styled.div`
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3);
  transition: 0.4s ease;
  margin: 35px auto;
  margin-top: 0;
  background-color: #fcfcfc;

  .item-body {
    padding: 30px;
  }

  .item-body .item-title {
    font-size: 24px;
    margin-bottom: 15px;
    font-weight: 600;
  }

  .item-body p {
    font-size: 16px;
    margin-bottom: 20px;
  }

  .item-body .item-button {
    display: inline-block;
    width: 60px;
    height: 40px;
    border-radius: 5px;
    background-color: #efefef;
    color: #0f1f9c;
    text-decoration: none;
  }

  .item-body .item-button {
    transition: 0.4s ease;
    border: 2px solid rgba(17, 42, 165, 0.4);
  }

  .item:hover {
    transform: translateY(-10px);
    box-shadow: 8px 8px 40px rgba(0, 0, 0, 0.5);
  }

  .item-body .item-button:hover {
    background-color: #0f1f9c;
    color: #e6ecff;
  }
`;

const ListItem = ({ listId }) => {
  const { data, error, isLoading } = useGetDummyQuery(listId);

  const onClick = (e) => {
    const buttonName = e.target.name;
    // 실데이터 받으면 수정/삭제 적용예정
    console.log(buttonName);
  };

  if (error) {
    return <div>에러 😭 </div>;
  }
  if (isLoading) {
    return <div>로딩 중 . . . 👻</div>;
  }

  return (
    <>
      {data ? (
        <StyledListItem className="item">
          <div className="item-body">
            <h3 className="item-title">{data[listId].title}</h3>
            <h3>글 id : {data[listId].id}</h3>
            <p>시간: {new Date().getTime()}</p>
            <p>{data[listId].body}</p>
            <button className="item-button" name="edit" onClick={onClick}>
              수정
            </button>
            <button className="item-button" name="delete" onClick={onClick}>
              삭제
            </button>
          </div>
        </StyledListItem>
      ) : null}
    </>
  );
};

export default ListItem;
