const ID_REG = /^[a-z0-9]{3,10}$/;
const PW_REG = /^[a-zA-Z0-9W\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]{6,12}$/;
const GENRE_REG = /^[a-zA-Z0-9W\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]{1,10}$/;
const NICKNAME_REG = /^[a-zA-Z0-9W]{2,6}$/;
const TITLE_REG = /^[a-zA-Z0-9W\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]{1,30}$/;
const CONTENT_REG = /^[a-zA-Z0-9W\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]{1,500}$/;

function validateData(data) {
  return ID_REG.test(String(data));
}

function removeSpace(text) {
  return text.replace(/ /gi, '');
}

export { validateData, removeSpace };
