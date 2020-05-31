
import base from './base'; // 导入接口域名列表
// import axios from '@/utils/http'; // 导入http中创建的axios实例
import axios from './http';

const auth = {
  login(params) {
    return axios.post(`${base.dev}/api/auth/login`, params);
  },
  getLoginUser() {
    return axios.get(`${base.dev}/api/auth/user`);
  },
};
const device = {
  types() {
    return axios.get(`${base.dev}/api/device/types`);
  },
  // GET /api/tenant/devices{?type,textSearch,idOffset,textOffset,limit}

  getTenantDevices(params) {
    return axios.get(`${base.dev}/api/tenant/devices`, { params });
  },


};

export default {
  auth,
  device,
};
