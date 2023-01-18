import React from 'react';
import styled from 'styled-components';
import SharedListItem from './SharedListItem';

const StyledSharedLists = styled.div`
  width: 700px;
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5), 7px 7px 20px 0px rgba(0, 0, 0, 0.1),
    4px 4px 5px 0px rgba(0, 0, 0, 0.1);
  outline: none;
  padding: 10px;
  background-color: rgba(202, 202, 202, 0.6);
  margin: 0 50px 20px 0px;
`;

function SharedLists() {
  return (
    <StyledSharedLists>
      <SharedListItem className="share" />
      <SharedListItem className="shared" />
    </StyledSharedLists>
  );
}

export default SharedLists;
