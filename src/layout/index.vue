<template>
  <div id="app">

    <el-container style="height: 100%; border: 1px solid #eee">

      <el-menu class="el-menu-vertical-demo"
               :collapse="isCollapse"
               :background-color="variables.menuBg"
               :text-color="variables.menuText"
               :default-active="activeIndex"
               :active-text-color="variables.menuActiveText"
               :collapse-transition=true
               unique-opened
               router>

        <el-menu-item index="/home-logo"
                      class="logo-div"
                      style="padding-left:5px;">
          <el-avatar :src="circleUrl"
                     shape="square"
                     class="logo"></el-avatar>
          <span slot="title"
                class="logo-slot"><b>SIASECGATEWAY</b></span>
        </el-menu-item>

        <template v-for="item in routes">
          <SiderbarSubMenu v-if="item.meta.hiden!=true
              && item.children && item.children.length > 1 "
                           :item="item"
                           :base-path="item.path"
                           :key="item.path" />
          <SiderbarMenuItem v-else-if="item.meta.hiden!=true"
                            :path="item.path"
                            :title="item.meta.title"
                            :icon="item.meta.icon"
                            :key="item.path" />
        </template>

      </el-menu>

      <el-container>
        <el-header style="border-bottom: 1px solid #D9DEE4;">
          <el-row :gutter="10">
            <el-col :span="1">
              <div class="">
                <div style="padding: 0 3px; width:60px;"
                     class="toggle-icon"
                     @click="toggleClick">
                  <i v-bind:class="[isActive ? 'el-icon-s-fold' : 'el-icon-s-unfold']"></i>
                </div>

              </div>
            </el-col>
            <el-col :span="2"
                    :offset="20">
              <div class="right-menu">
                <Navbar userName="loginUser.email" />
              </div>
            </el-col>
          </el-row>

        </el-header>
        <el-main class="app-container">
          <app-main></app-main>
          <!-- <router-view></router-view> -->
        </el-main>
      </el-container>
    </el-container>

  </div>
</template>

<script>
import path from 'path';
import variables from '@/styles/variables.scss';
import AppMain from './components/AppMain.vue';
import SiderbarSubMenu from './components/SiderbarSubMenu.vue';
import SiderbarMenuItem from './components/SiderbarMenuItem.vue';
import Navbar from './components/Navbar.vue';

export default {
  data() {
    return {
      circleUrl: 'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png',
      isCollapse: false,
      isActive: true,
      activeIndex: '/',
      loginUser: {},
    };
  },
  computed: {
    routes() {
      return this.$router.options.routes;
    },
    variables() {
      return variables;
    },
  },
  components: {
    AppMain,
    Navbar,
    SiderbarSubMenu,
    SiderbarMenuItem,
  },
  created() {
    this.$api.auth.getLoginUser().then((res) => {
      this.loginUser = res.data;
    });
  },

  methods: {
    toggleClick() {
      this.isCollapse = !this.isCollapse;
      this.isActive = !this.isActive;
    },
    handleOpen(key, keyPath) {
      window.console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      window.console.log(key, keyPath);
    },
    resolvePath(routePath) {
      return path.resolve(this.basePath, routePath);
    },
  },
};
</script>
<style lang="scss" scoped>
@import '~@/styles/variables.scss';

.el-header {
  background-color: #{$navBarBg};
  color: #73879c;
  line-height: 56px;
  vertical-align: middle;
}
.el-menu > .logo-div {
  height: 60px;
  margin-bottom: 20px;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 210px;
  min-height: 400px;
}
.logo-slot {
  margin-left: 10px;
  font-size: 15px;
}
.el-menu--collapse > .el-menu-item .logo {
  height: 40px;
  width: 40px;
  visibility: visible;
  margin-left: -8px;
}
.toggle-icon {
  font-size: 33px;
  vertical-align: middle;
  margin-top: 3px;
  margin-left: 0px;
  padding-left: 0px;
}
.toggle-icon > i:hover {
  cursor: pointer;
}
/* .right-menu {
  background-color: #{$navBarBg};
} */
.app-container {
  background-color: #f7f7f7;
}
</style>
