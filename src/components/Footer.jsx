import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  align-items: center;
  background-color: #f4f8ff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  height: 100px;
  border-top: 1px solid #56565679;
  p {
    font-size: 14px;
    margin: 5px;
    color: #565656;
  }
`;

function Footer() {
  return (
    <StyledFooter>
      <p>이 미니 프로젝트는 원하는 친구와 관련 게시물을 공유하는 컨텐츠입니다</p>
      <p>기획, 프론트: WYunH 백엔드: Polarvear</p>
    </StyledFooter>
  );
}

export default Footer;
