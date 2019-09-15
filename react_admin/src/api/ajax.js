/*
 * @Author: dingdongzhao
 * @Date: 2019-09-15 23:50:37
 * @Last Modified by: dingdongzhao
 * @Last Modified time: 2019-09-16 00:14:35
 */
import axios from 'axios';
import { message } from 'antd';

/**
 * 使用单例模式封装 axios,在创建 axios 实例的时候，避免重复传入一样的参数
 * 参数接收 url ,data , method
 * 根据 method 决定发送的类型
 */

let instance = null;
let auth = null;
export default function(url, data = {}, method = 'GET') {
  return new Promise((resolve, reject) => {
    let promise = null;
    if (!instance) {
      instance = axios.create({
        //baseURL: 'http://127.0.0.1:5000',
        timeout: 1000,
        auth
      });
    }
    if (method === 'GET') {
      promise = instance.get(url, {
        params: data
      });
    } else {
      promise = instance.post(url, data);
    }

    promise
      .then(response => {
        if (response.data.success) {
          resolve(response.data);
        } else {
          message.error(response.data.message);
        }
      })
      .catch(err => {
        message.error(err.message);
      });
  });
}
