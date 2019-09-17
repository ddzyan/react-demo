import jsonp from "jsonp";
import { message } from "antd";

import ajax from "./ajax";

export const login = async (username, password) =>
  ajax("/login", { username, password }, "POST");

//使用 jsonp 发送获取天气连接，jsonp 可以解决浏览器端 GET 请求跨域问题
export const getWeather = city => {
  return new Promise((resolve, reject) => {
    const url = `http://api.map.baidu.com/telematics/v3/weather?location=${city}&output=json&ak=3p49MVra6urFRGOT9s8UBWr2`;
    jsonp(url, {}, (err, data) => {
      if (!err && data.error === 0) {
        const { dayPictureUrl, weather } = data.results[0].weather_data[0];
        resolve({ dayPictureUrl, weather });
      } else {
        message.error("获取天气信息失败");
      }
    });
  });
};
