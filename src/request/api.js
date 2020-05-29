
import base from './base'; // 导入接口域名列表
// import axios from '@/utils/http'; // 导入http中创建的axios实例
import axios from './http';

const auth = {
  login(params) {
    return axios.post(`${base.sq}/api/auth/login`, params);
  },
};
const device = {
  types() {
    return axios.get(`${base.sq}/api/device/types`);
  },
};

export default {
  auth,
  device,
};
