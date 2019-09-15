import ajax from './ajax';

export const login = async (username, password) => ajax('/loginUser', { username, password }, 'POST');
