import React from 'react';
import styled from 'styled-components';

const StyledSharedLists = styled.div`
  h3 {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 30px;
  }
  li {
    margin: 20px 0;
    padding: 10px;
  }
`;

function SharedListItem() {
  return (
    <StyledSharedLists>
      <h3>내가 공유한 장르</h3>
      <ul>
        <li>리스트</li>
        <li>리스트</li>
        <li>리스트</li>
      </ul>
    </StyledSharedLists>
  );
}

export default SharedListItem;
