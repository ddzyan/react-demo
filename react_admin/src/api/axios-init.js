import axios from 'axios'

let instance = null;

export default function axiosInstance () {
  if (!instance) {
    instance = axios.create({
      baseURL: 'http://127.0.0.1:3001',
      timeout: 1000,
    });
  }

  return instance;
}