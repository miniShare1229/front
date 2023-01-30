import React from 'react';
import ListItem from './ListItem';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

const StyledLists = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 50px 20px;
`;

function Lists() {
  const location = useLocation();
  const path = location.pathname;

  // 임시 적용
  let listId = [];

  if (path === 'lists/private') {
    listId = [1, 2, 3, 4, 5];
  } else {
    listId = [6, 7];
  }
  return (
    <StyledLists className="container">
      {listId.map((item) => (
        <ListItem key={item} listId={item}></ListItem>
      ))}
    </StyledLists>
  );
}

export default Lists;
