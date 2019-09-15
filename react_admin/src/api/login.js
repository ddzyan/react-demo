import axiosInstance from './axios-init';

const instance = axiosInstance();

export const login = async (username, password) => {
  const result = await instance.post('/login', {
    username,
    password
  });

  return result.data;
}
