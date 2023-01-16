import React from 'react';
import ListItem from './ListItem';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

const StyledLists = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 50px 20px;
`;

const listId = [0, 1, 2, 3, 4, 5, 6, 7];

function Lists() {
  return (
    <StyledLists className="container">
      {listId.map((item) => (
        <ListItem key={item} listId={item}></ListItem>
      ))}
    </StyledLists>
  );
}

export default Lists;
