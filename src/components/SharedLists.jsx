import React from 'react';
import styled from 'styled-components';
import SharedListItem from './SharedListItem';

const StyledSharedLists = styled.div`
  width: 1400px;
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5), 7px 7px 20px 0px rgba(0, 0, 0, 0.1),
    4px 4px 5px 0px rgba(0, 0, 0, 0.1);
  outline: none;
  padding: 10px;
  background-color: rgba(202, 202, 202, 0.6);
  margin: 0 50px 20px 0px;
  display: flex;
  justify-content: space-between;
  div {
    background-color: rgba(208, 160, 160, 0.6);
    width: 680px;
    h3 {
      font-size: 20px;
      font-weight: 600;
      margin-bottom: 30px;
    }
  }
`;

function SharedLists({ lists }) {
  const { share, shared } = lists;
  console.log(share);

  return (
    <StyledSharedLists>
      <div>
        <h3>내가 공유한 장르</h3>
        <ul>
          {share.map((item, index) => (
            <SharedListItem className="share" key={index} item={item} />
          ))}
        </ul>
      </div>
      <div>
        <h3>내가 공유받은 장르</h3>
        <ul>
          {shared.map((item, index) => (
            <SharedListItem className="shared" key={index} item={item} />
          ))}
        </ul>
      </div>
    </StyledSharedLists>
  );
}

export default SharedLists;
