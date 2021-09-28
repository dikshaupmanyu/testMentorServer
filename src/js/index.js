import { isEmpty, setCookie, getCookie } from './utils';
import { USER_ID, KEY_ENTER } from './const';

const userIdEl = document.querySelector('#user_id');
const nicknameEl = document.querySelector('#user_nickname');
const buttonEl = document.querySelector('#login-button');

document.addEventListener('DOMContentLoaded', () => {
  const cookieUserId = getCookie(USER_ID);
  if (cookieUserId) {
    userIdEl.value = cookieUserId;
  }
});

nicknameEl.addEventListener('keydown', e => {
  if (e.which === KEY_ENTER) {
    login();
  }
});

buttonEl.addEventListener('click', () => {
  login();
});

const login = () => {
  const userId = userIdEl.value.trim();
  alert(userId);
  const nickname = nicknameEl.value.trim();
  alert(nickname);
  if (isEmpty(nickname)) {
    alert('Please enter user nickname');
    return;
  }
  userIdEl.value = '';
  nicknameEl.value = '';
  setCookie(USER_ID, userId);
  localStorage.setItem('allTokenData', JSON.stringify({
                                userIds: userId,
                                nicknames : nickname,
                            }));

  window.location.href = "/chat";  
  //window.location.href = `chat.html?userid=${encodeURIComponent(userId)}&nickname=${encodeURIComponent(nickname)}`;
};
