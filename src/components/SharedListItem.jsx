import React from 'react';
import styled from 'styled-components';

const StyledSharedLists = styled.li`
  margin: 20px 0;
  padding: 10px;
`;

function SharedListItem({ item }) {
  return <StyledSharedLists>{item}</StyledSharedLists>;
}

export default SharedListItem;
