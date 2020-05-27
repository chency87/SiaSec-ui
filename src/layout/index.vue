<template>
  <div id="app">

    <el-container style="height: 100%; border: 1px solid #eee">

      <el-menu class="el-menu-vertical-demo"
               @open="handleOpen"
               @close="handleClose"
               :collapse="isCollapse"
               background-color="#545c64"
               text-color="#fff"
               active-text-color="#ffd04b"
               :collapse-transition=true>

        <el-menu-item index="0"
                      class="logo-div"
                      style="padding-left:5px;">
          <el-avatar :src="circleUrl"
                     shape="square"
                     class="logo"></el-avatar>
          <span slot="title"
                class="logo-slot"><b>SIASECGATEWAY</b></span>
        </el-menu-item>

        <div v-for="item in routes"
             :key="item.path">
          <sub-menu v-if="item.children && item.children.length > 1 "
                    :item="item"
                    :base-path="item.path"
                    :key="item.path" />
          <menu-item v-else
                     :path="item.path"
                     :title="item.meta.title"
                     :key="item.path" />
        </div>

        <!-- <router-link to="/home">
          <el-menu-item index="1">
            <i class="el-icon-menu"></i>
            <span slot="title">Dashboard</span>
          </el-menu-item>
        </router-link>
        <router-link to="/foo/about">
          <el-menu-item index="2">
            <i class="el-icon-document"></i>
            <span slot="title">用户管理</span>
          </el-menu-item>
        </router-link>
        <el-menu-item index="3">
          <i class="el-icon-setting"></i>
          <span slot="title">设备管理</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-menu"></i>
          <span slot="title">网络管理</span>
        </el-menu-item>

        <el-submenu index="5">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>插件管理</span>
          </template>
          <el-menu-item-group>
            <template slot="title">分组一</template>
            <el-menu-item index="1-1">协议解析插件</el-menu-item>
            <el-menu-item index="1-2">转发协议插件</el-menu-item>
          </el-menu-item-group>
        </el-submenu> -->
      </el-menu>

      <el-container>
        <el-header>
          <div style="padding: 0 3px;"
               class="toggle-icon"
               @click="toggleClick">
            <i v-bind:class="[isActive ? 'el-icon-s-fold' : 'el-icon-s-unfold']"></i>
          </div>

        </el-header>
        <el-main>
          <app-main></app-main>
          <!-- <router-view></router-view> -->
        </el-main>
      </el-container>
    </el-container>

  </div>
</template>

<script>
import path from 'path';
// import SidebarItem from './components/SiderbarItem.vue';
import AppMain from './components/AppMain.vue';
import SubMenu from './components/SubMenu.vue';
import MenuItem from './components/MenuItem.vue';

export default {
  data() {
    return {
      circleUrl: 'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png',
      isCollapse: false,
      isActive: true,
    };
  },
  computed: {
    routes() {
      return this.$router.options.routes;
    },
  },
  components: {
    AppMain,
    SubMenu,
    MenuItem,
  },

  methods: {
    toggleClick() {
      this.isCollapse = !this.isCollapse;
      this.isActive = !this.isActive;
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    resolvePath(routePath) {
      return path.resolve(this.basePath, routePath);
    },
  },
};
</script>
<style scoped>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 56px;
}
.el-menu > .logo-div {
  height: 60px;
  margin-bottom: 10px;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
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
</style>
