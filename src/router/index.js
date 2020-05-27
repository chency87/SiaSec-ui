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
    name: 'Home',
    component: Layout,
    meta: { title: 'Home', icon: 'menu' },
    children: [{
      path: '',
      name: 'Home',
      // component: () => import('@/views/About.vue'),
      component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue'),
      meta: { title: 'Home', icon: 'menu' },
    }],
  },
  {
    path: '/about',
    component: Layout,
    meta: { title: 'Abu', icon: 'el-icon-setting' },
    children: [
      {
        path: 'ab',
        name: 'About',
        component: () => import('@/views/About.vue'),
        meta: { title: 'Form', icon: 'setting' },
      },
      {
        path: 'home',
        name: 'de',
        component: () => import('@/views/About.vue'),
        meta: { title: 'de', icon: 'document' },
      },
    ],
  },
  // {
  //   path: '/home',
  //   name: 'Home',
  //   component: Layout,
  //   children: [
  //     {
  //       path: '/index',
  //       // name: 'Form',
  //       component: Home,
  //       // meta: { title: 'Form', icon: 'form' },
  //     },
  //   ],
  // },
  // {
  //   path: '/foo',
  //   name: 'Home',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'about',
  //       // name: 'Form',
  //       component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  //       // meta: { title: 'Form', icon: 'form' },
  //     },
  //   ],

  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  // },
];

const router = new VueRouter({
  routes,
});

export default router;
