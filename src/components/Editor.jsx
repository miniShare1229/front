import React, { useState } from 'react';
import styled from 'styled-components';
import { validateContent, validateTitle } from '../validation';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useAddPostMutation } from '../api';
import { useLocation } from 'react-router-dom';

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

  select {
    align-self: flex-start;
    margin-bottom: 10px;
    border: none;
    background-color: rgba(247, 255, 255, 0.6);
    font-size: 14px;
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
  const icons = [
    { value: '0', text: '정말 안좋아요 🙁' },
    { value: '1', text: '별로에요 🫤' },
    { value: '2', text: '보통이에요 😶' },
    { value: '3', text: '좋아요 🙂' },
    { value: '4', text: '최고에요 😀' },
  ];

  const location = useLocation();
  const path = location.pathname;

  const [inputValue, setInputValue] = useState({ title: '', content: '', icon: '2' });

  const { title, content, icon } = inputValue;

  const navigate = useNavigate();

  let { isLogin, nickName, id, user } = useSelector((state) => state.auth);

  const [addPost, { isLoading }] = useAddPostMutation();

  const onChange = (e) => {
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = () => {
    const data = {
      ...inputValue,
      nickName,
      id,
      user,
    };
    if (isLogin) {
      if (validateTitle(title) && validateContent(content)) {
        addPost({ postState: path.split('/')[2], data })
          .unwrap()
          .then((response) => {
            console.log('글쓰기 성공: ', response);
          })
          .catch((response) => console.error(response));
      }
    } else {
      alert('로그인을 해주세요!');
      navigate('/sign-in');
    }
  };

  return (
    <StyledEditor>
      <input
        className="input"
        type="text"
        placeholder="제목"
        name="title"
        value={title}
        onChange={onChange}
      />
      <select value={icon} onChange={onChange} name="icon">
        {icons.map((option) => (
          <option key={option.value} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>
      <textarea
        className="text-area"
        placeholder="내용"
        name="content"
        value={content}
        onChange={onChange}
      ></textarea>
      <button onClick={onSubmit}>등록</button>
    </StyledEditor>
  );
}

export default Editor;
