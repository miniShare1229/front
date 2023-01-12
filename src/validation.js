const ID_REG = /^[a-z0-9]{3,10}$/;
const PW_REG = /^[a-zA-Z0-9W\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]{6,12}$/;
const GENRE_REG = /^[a-zA-Z0-9W\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]{1,10}$/;
const NICKNAME_REG = /^[a-zA-Z0-9W]{2,6}$/;
const TITLE_REG = /^[a-zA-Z0-9W\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]{1,30}$/;
const CONTENT_REG = /^[a-zA-Z0-9W\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]{1,500}$/;
const ERROR_MSG = {
  _idError: '아이디는 영문이나 숫자로 최소3글자, 최대 10글자여야 합니다',
  _pwError: '비밀번호는 영문, 숫자, 특수문자로 최소6글자, 최대 12글자여야 합니다',
};
function validateId(userId) {
  return ID_REG.test(String(userId)) || showErrorMsg(ERROR_MSG._idError);
}

function validatePw(userPw) {
  return PW_REG.test(String(userPw)) || showErrorMsg(ERROR_MSG._pwError);
}

function removeSpace(text) {
  return text.replace(/ /gi, '');
}

function showErrorMsg(msg) {
  alert(msg);
  return false;
}

export { validateId, validatePw, removeSpace, showErrorMsg };
