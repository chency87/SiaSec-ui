import axios from 'axios';
// import store from '@/store/index';
// import QS from 'qs';
// import { Message, Loading } from 'element-ui';

// 创建axios实例
const instance = axios.create({ timeout: 1000 * 12 });
// 设置post请求头
// instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

instance.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
instance.defaults.headers.put['Content-Type'] = 'application/json;charset=UTF-8';
instance.defaults.headers.get['Content-Type'] = 'application/json;charset=UTF-8';


// axios.defaults.timeout = 5000;
// axios.defaults.baseURL = 'http://localhot:8081'; // 填写域名

// 设置 post、put 默认 Content-Type
// axios.defaults.headers.post['Content-Type'] = 'application/json';
// axios.defaults.headers.put['Content-Type'] = 'application/json';

// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

// request拦截器
instance.interceptors.request.use((config) => {
  const conf = config;
  const bearer = 'Bearer ';
  const token = `${bearer}${localStorage.getItem('token')}`;
  if (conf.method === 'post' || config.method === 'put') {
    conf.data = JSON.stringify(config.data);
  }
  if (token) { // 判断是否存在token，如果存在的话，则每个http header都加上token
    // conf.headers.authorization = token;
    conf.headers['X-Authorization'] = token;
  }
  return conf;
}, (error) => {
  Promise.reject(error);
});

// Add a response interceptor
instance.interceptors.response.use((response) => response, (err) => {
  if (err && err.response) {
    switch (err.response.status) {
      case 400:
        window.console.log('错误请求');
        break;
      case 401:
        window.console.log('未授权，请重新登录');
        break;
      case 403:
        window.console.log('拒绝访问');
        break;
      case 404:
        window.console.log('请求错误,未找到该资源');
        break;
      case 405:
        window.console.log('请求方法未允许');
        break;
      case 408:
        window.console.log('请求超时');
        break;
      case 500:
        window.console.log('服务器端出错');
        break;
      case 501:
        window.console.log('网络未实现');
        break;
      case 502:
        window.console.log('网络错误');
        break;
      case 503:
        window.console.log('服务不可用');
        break;
      case 504:
        window.console.log('网络超时');
        break;
      case 505:
        window.console.log('http版本不支持该请求');
        break;
      default:
        window.console.log(`连接错误${err.response.status}`);
    }
  } else {
    window.console.log('连接到服务器失败');
  }
  return Promise.resolve(err.response);
});

export default instance;

// /**
//  * 封装get方法
//  * @param url
//  * @param data
//  * @returns {Promise}
//  */

// export function fetch(url, params = {}) {
//   return new Promise((resolve, reject) => {
//     axios.get(url, {
//       params,
//     })
//       .then((response) => {
//         resolve(response.data);
//       })
//       .catch((err) => {
//         reject(err);
//       });
//   });
// }

// /**
//  * 封装post请求
//  * @param url
//  * @param data
//  * @returns {Promise}
//  */
// export function post(url, data = {}) {
//   return new Promise((resolve, reject) => {
//     axios.post(url, data)
//       .then((response) => {
//         resolve(response.data);
//       }, (err) => {
//         reject(err);
//       });
//   });
// }


// /**
//  * 封装patch请求
//  * @param url
//  * @param data
//  * @returns {Promise}
//  */
// export function patch(url, data = {}) {
//   return new Promise((resolve, reject) => {
//     axios.patch(url, data)
//       .then((response) => {
//         resolve(response.data);
//       }, (err) => {
//         reject(err);
//       });
//   });
// }
// /**
//  * 封装put请求
//  * @param url
//  * @param data
//  * @returns {Promise}
//  */

// export function put(url, data = {}) {
//   return new Promise((resolve, reject) => {
//     axios.put(url, data)
//       .then((response) => {
//         resolve(response.data);
//       }, (err) => {
//         reject(err);
//       });
//   });
// }
