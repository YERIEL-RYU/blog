import client from './client';

//로그인
export const login = ({ userId, password }) => {
  client.post('./api/auth/login', { userId, password });
};
//회원가입
export const register = ({ userId, password }) => {
  client.post('./api/auth/register', { userId, password });
};
//로그인 상태 체크
export const check = () => client.get('./api/auth/check');
