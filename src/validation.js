const ID_REG = /^[a-z0-9]{3,10}$/;
const PW_REG = /^[a-zA-Z0-9W\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]{6,12}$/;
const GENRE_REG = /^[a-zA-Z0-9W\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]{1,10}$/;
const NICKNAME_REG = /^[a-zA-Z0-9ㄱ-ㅎ가-힣W]{2,6}$/;
const TITLE_REG = /^[a-zA-Z0-9ㄱ-ㅎ가-힣W\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"\s]{1,30}$/;
const CONTENT_REG =
  /^[a-zA-Z0-9ㄱ-ㅎ가-힣W\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"\s]{1,500}$/;

const ERROR_MSG = {
  _idError: '아이디는 영문이나 숫자로 최소3글자, 최대 10글자여야 합니다',
  _pwError: '비밀번호는 영문, 숫자, 특수문자로 최소6글자, 최대 12글자여야 합니다',
  _pwChkError: '비밀번호와 비밀번호 확인이 다릅니다',
  _nickNameError: '닉네임은 영문, 숫자, 특수문자로 최소 2글자, 최대 6글자여야 합니다',
  _titleError: '제목은 최소 1글자, 최대 30글자까지 입력 가능합니다',
  _contentError: '내용은 최소 1글자, 최대 500글자까지 입력 가능합니다',
};

function validateId(userId) {
  return ID_REG.test(String(userId)) || showErrorMsg(ERROR_MSG._idError);
}

function validatePw(userPw) {
  return PW_REG.test(String(userPw)) || showErrorMsg(ERROR_MSG._pwError);
}

function validateNickName(nickName) {
  return NICKNAME_REG.test(String(nickName)) || showErrorMsg(ERROR_MSG._nickNameError);
}

function validateTitle(title) {
  return TITLE_REG.test(String(title)) || showErrorMsg(ERROR_MSG._titleError);
}

function validateContent(content) {
  return CONTENT_REG.test(String(content)) || showErrorMsg(ERROR_MSG._contentError);
}

function removeSpace(text) {
  return text.replace(/ /gi, '');
}

function isPwSame(userPw, userPwChk) {
  return userPw === userPwChk || showErrorMsg(ERROR_MSG._pwChkError);
}

function showErrorMsg(msg) {
  alert(msg);
  return false;
}

export {
  validateId,
  validatePw,
  validateNickName,
  validateTitle,
  validateContent,
  removeSpace,
  isPwSame,
  showErrorMsg,
};
