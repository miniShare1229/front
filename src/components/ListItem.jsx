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
  background-color: #efe5e4;

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
    display: block;
    width: 20%;
    height: 50px;
    border-radius: 3px;
    text-align: center;
    background-color: #fcf0ff;
    color: #ff8833;
    text-decoration: none;
    font-size: 18px;
    font-weight: 500;
    line-height: 50px;
    margin: auto;
  }

  .item-body .item-button {
    transition: 0.4s ease;
    border: none;
  }

  .item:hover {
    transform: translateY(-10px);
    box-shadow: 8px 8px 40px rgba(0, 0, 0, 0.5);
  }

  .item-body .item-button:hover {
    background-color: #a53636;
    color: #e6ecff;
  }
`;

const ListItem = ({ listId }) => {
  const { data, error, isLoading } = useGetDummyQuery(listId);

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
            <button className="item-button">더보기</button>
          </div>
        </StyledListItem>
      ) : null}
    </>
  );
};

export default ListItem;
