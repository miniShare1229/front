import React from 'react';
import ListItem from './ListItem';
import styled from 'styled-components';

const listId = [0, 1, 2, 3, 4, 5, 6, 7];
const StyledLists = styled.div`
  max-width: 1000px;
  height: 80vh;
  margin: 0 auto;
  padding: 50px 20px;
`;
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
