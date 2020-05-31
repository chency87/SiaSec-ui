/* Layout */
import Layout from '@/layout/index.vue';
import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '@/views/auth/login.vue';

Vue.use(VueRouter);

// const Foo = { template: '<div>foo</div>' };
// const Bar = { template: '<div>bar</div>' };


const routes = [{
  path: '/',
  name: 'login',
  component: Login,
  meta: {
    title: 'Login',
    icon: 'menu',
    hiden: true,
  },
}, {
  path: '/home',
  name: 'gatewaystatus',
  component: Layout,
  meta: {
    title: '网关状态',
    icon: 'menu',
    hiden: false,
  },
  children: [
    {
      path: '',
      // component: () => import('@/views/About.vue'),
      component: () => import(/* webpackChunkName: "about" */
        '@/views/GatewayStatus.vue'
      ),
      meta: {
        title: '',
        icon: 'menu',
      },
    },
  ],
},
{
  path: '/device',
  name: 'DeviceManage',
  component: Layout,
  meta: {
    title: '设备管理',
    icon: 'mobile-phone',
    hiden: false,
  },
  children: [
    {
      path: '',
      // component: () => import('@/views/About.vue'),
      component: () => import(/* webpackChunkName: "about" */
        '@/views/DeviceManage.vue'
      ),
      meta: {
        title: '',
        icon: 'menu',
      },
    },
  ],
},
{
  path: '/user',
  name: 'UserManage',
  component: Layout,
  meta: {
    title: '用户管理',
    icon: 's-custom',
    hiden: false,
  },
  children: [
    {
      path: '',
      // component: () => import('@/views/About.vue'),
      component: () => import(/* webpackChunkName: "about" */
        '@/views/UserManage.vue'
      ),
      meta: {
        title: '',
        icon: 'menu',
      },
    },
  ],
},
{
  path: '/network',
  name: 'NetworkManage',
  component: Layout,
  meta: {
    title: '网络管理',
    icon: 'discover',
    hiden: false,
  },
  children: [
    {
      path: '',
      // component: () => import('@/views/About.vue'),
      component: () => import(/* webpackChunkName: "about" */
        '@/views/NetworkManage.vue'
      ),
      meta: {
        title: '',
        icon: 'menu',
      },
    },
  ],
}, {
  name: 'plugin1Manage',
  path: '/plugin1',
  component: Layout,
  meta: {
    title: '协议插件管理',
    icon: 's-management',
    hiden: false,
  },
  children: [
    {
      path: 'acquire',
      component: () => import('@/views/ProtocolAdapter.vue'),
      meta: {
        title: '解析插件',
        icon: 'connection',
      },
    }, {
      path: 'transport',
      component: () => import('@/views/ProtocolTransfer.vue'),
      meta: {
        title: '转发插件',
        icon: 'guide',
      },
    },
  ],

}, {
  path: '/audit',
  name: 'auditmanage',
  component: Layout,
  meta: {
    title: '审计日志',
    icon: 's-data',
    hiden: false,
  },
  children: [
    {
      path: '',
      // component: () => import('@/views/About.vue'),
      component: () => import(/* webpackChunkName: "about" */
        '@/views/AuditLog.vue'
      ),
      meta: {
        title: '',
        icon: 'menu',
      },
    },
  ],
}, {
  path: '/setting',
  name: 'settingsss',
  component: Layout,
  meta: {
    title: '设置',
    icon: 'setting',
    hiden: false,
  },
  children: [
    {
      path: '',
      // component: () => import('@/views/About.vue'),
      component: () => import(/* webpackChunkName: "about" */
        '@/views/Settings.vue'
      ),
      meta: {
        title: '',
        icon: 'menu',
      },
    },
  ],
},
{
  path: '/attr',
  name: 'userattr',
  component: Layout,
  meta: {
    title: '用户信息',
    icon: 'menu',
    hiden: true,
  },
  children: [
    {
      path: '',
      // component: () => import('@/views/About.vue'),
      component: () => import(/* webpackChunkName: "about" */
        '@/views/UserInfo.vue'
      ),
      meta: {
        title: '',
        icon: 'menu',
      },
    },
  ],
},
{
  path: '/404',
  component: () => import('@/views/404.vue'),
  meta: {
    hiden: true,
  },

},

];

const router = new VueRouter({ routes });

// 路由守卫
router.beforeEach((to, from, next) => {
  // 判断要进入的路由是否需要认证
  if (to.path === '/') {
    next();
  } else {
    const token = localStorage.getItem('token');
    if (token) {
      next(); // 如果登录则放行，进入路由
    } else {
      // 跳转，并携带重定向地址
      next({
        path: '/',
        query: {
          redirect: to.path,
        },
      });
    }
  }
});

export default router;
