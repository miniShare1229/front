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
  const listId = location.state.listId;

  return (
    <StyledLists className="container">
      {listId.map((item) => (
        <ListItem key={item} listId={item}></ListItem>
      ))}
    </StyledLists>
  );
}

export default Lists;
