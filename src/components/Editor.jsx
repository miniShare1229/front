import React from 'react';
import styled from 'styled-components';

const StyledEditor = styled.div`
  margin: 0 auto;
  background-color: #d7e8ff;
  border-radius: 5px;
  margin-bottom: 20px;
  width: 960px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5), 7px 7px 20px 0px rgba(0, 0, 0, 0.1),
    4px 4px 5px 0px rgba(0, 0, 0, 0.1);

  .input {
    width: 100%;
    height: 40px;
    margin: 10px;
    border: none;
    border-radius: 5px;
    background-color: rgba(247, 255, 255, 0.6);
  }

  .text-area {
    width: 100%;
    min-height: 200px;
    border: none;
    border-radius: 5px;
    background-color: rgba(247, 255, 255, 0.6);
  }

  button {
    width: 130px;
    height: 40px;
    color: #fff;
    border-radius: 5px;
    padding: 10px 25px;
    background: transparent;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    display: inline-block;
    box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5), 7px 7px 20px 0px rgba(0, 0, 0, 0.1),
      4px 4px 5px 0px rgba(0, 0, 0, 0.1);
    outline: none;
    margin: 20px 0 10px;

    background: linear-gradient(0deg, rgba(6, 14, 131, 1) 0%, rgba(12, 25, 180, 1) 100%);
    border: none;

    :hover {
      background: linear-gradient(0deg, rgba(0, 3, 255, 1) 0%, rgba(2, 126, 251, 1) 100%);
    }
  }
`;

function Editor() {
  return (
    <StyledEditor>
      <input className="input" type="text" placeholder="제목" />
      <textarea className="text-area" placeholder="내용"></textarea>
      <button>등록</button>
    </StyledEditor>
  );
}

export default Editor;
