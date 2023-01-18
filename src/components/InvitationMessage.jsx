import React from 'react';
import styled from 'styled-components';

const StyledInvitationMessage = styled.li`
  margin: 10px 0px 25px;
  padding: 10px 20px;
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5), 7px 7px 20px 0px rgba(0, 0, 0, 0.1),
    4px 4px 5px 0px rgba(0, 0, 0, 0.1);
  background-color: #ffffffab;
  button {
    color: #fff;
    border-radius: 3px;
    padding: 8px 15px;

    background: transparent;
    cursor: pointer;
    transition: all 0.3s ease;
    display: inline-block;
    box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5), 7px 7px 20px 0px rgba(0, 0, 0, 0.1),
      4px 4px 5px 0px rgba(0, 0, 0, 0.1);
    outline: none;
    margin: 10px 0px 10px;
    background: linear-gradient(0deg, rgba(120, 120, 120) 1%, rgba(150, 150, 150, 1) 100%);
    border: none;
    :hover {
      background: linear-gradient(0deg, rgba(100, 100, 100, 1) 0%, rgba(130, 130, 130, 1) 100%);
    }
  }
`;

function InvitationMessage() {
  return (
    <StyledInvitationMessage className="invite-msg">
      <h2>??? 님이 유저님과 영화를 공유하고 싶어합니다!</h2>
      <button>수락</button>
      <button>거절</button>
    </StyledInvitationMessage>
  );
}

export default InvitationMessage;
