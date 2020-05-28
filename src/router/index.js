/* Layout */
import Layout from '@/layout/index.vue';
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

// const Foo = { template: '<div>foo</div>' };
// const Bar = { template: '<div>bar</div>' };


const routes = [
  {
    path: '/',
    component: Layout,
    meta: { title: '网关状态', icon: 'menu' },
    children: [{
      path: '',
      // component: () => import('@/views/About.vue'),
      component: () => import(/* webpackChunkName: "about" */ '@/views/GatewayStatus.vue'),
      meta: { title: '', icon: 'menu' },
    }],
  },
  {
    path: '/device',
    component: Layout,
    meta: { title: '设备管理', icon: 'mobile-phone' },
    children: [{
      path: '',
      // component: () => import('@/views/About.vue'),
      component: () => import(/* webpackChunkName: "about" */ '@/views/DeviceManage.vue'),
      meta: { title: '', icon: 'menu' },
    }],
  },
  {
    path: '/user',
    component: Layout,
    meta: { title: '用户管理', icon: 's-custom' },
    children: [{
      path: '',
      // component: () => import('@/views/About.vue'),
      component: () => import(/* webpackChunkName: "about" */ '@/views/UserManage.vue'),
      meta: { title: '', icon: 'menu' },
    }],
  },
  {
    path: '/network',
    component: Layout,
    meta: { title: '网络管理', icon: 'discover' },
    children: [{
      path: '',
      // component: () => import('@/views/About.vue'),
      component: () => import(/* webpackChunkName: "about" */ '@/views/NetworkManage.vue'),
      meta: { title: '', icon: 'menu' },
    }],
  },
  {
    path: '/plugin',
    component: Layout,
    meta: { title: '协议插件管理', icon: 's-management' },
    children: [
      {
        path: 'acquire',
        component: () => import('@/views/ProtocolAdapter.vue'),
        meta: { title: '解析插件', icon: 'connection' },
      },
      {
        path: 'transport',
        component: () => import('@/views/ProtocolTransfer.vue'),
        meta: { title: '转发插件', icon: 'guide' },
      },
    ],

  },
  {
    path: '/audit',
    component: Layout,
    meta: { title: '审计日志', icon: 's-data' },
    children: [{
      path: '',
      // component: () => import('@/views/About.vue'),
      component: () => import(/* webpackChunkName: "about" */ '@/views/AuditLog.vue'),
      meta: { title: '', icon: 'menu' },
    }],
  },
  {
    path: '/setting',
    component: Layout,
    meta: { title: '设置', icon: 'setting' },
    children: [{
      path: '',
      // component: () => import('@/views/About.vue'),
      component: () => import(/* webpackChunkName: "about" */ '@/views/Settings.vue'),
      meta: { title: '', icon: 'menu' },
    }],
  },

];

const router = new VueRouter({
  routes,
});

export default router;
