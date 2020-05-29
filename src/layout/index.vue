<template>
  <div id="app">

    <el-container style="height: 100%; border: 1px solid #eee">

      <el-menu class="el-menu-vertical-demo"
               @open="handleOpen"
               @close="handleClose"
               :collapse="isCollapse"
               background-color="#545c64"
               text-color="#fff"
               :default-active="activeIndex"
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
             :key="item.path"
             class="siderbar-menu">
          <sub-menu v-if="item.meta.hiden!=true && item.children && item.children.length > 1 "
                    :item="item"
                    :base-path="item.path"
                    :key="item.path" />
          <menu-item v-else-if="item.meta.hiden!=true"
                     :path="item.path"
                     :title="item.meta.title"
                     :icon="item.meta.icon"
                     :key="item.path" />
        </div>

      </el-menu>

      <el-container>
        <el-header>

          <el-row :gutter="10">
            <el-col :span="1">
              <div class="grid-content bg-purple">
                <div style="padding: 0 3px; width:60px;"
                     class="toggle-icon"
                     @click="toggleClick">
                  <i v-bind:class="[isActive ? 'el-icon-s-fold' : 'el-icon-s-unfold']"></i>
                </div>

              </div>
            </el-col>
            <el-col :span="1"
                    :offset="21">
              <div class="grid-content bg-purple">
                <Navbar />
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
import AppMain from './components/AppMain.vue';
import SubMenu from './components/SubMenu.vue';
import MenuItem from './components/MenuItem.vue';
import Navbar from './components/Navbar.vue';

export default {
  data() {
    return {
      circleUrl: 'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png',
      isCollapse: false,
      isActive: true,
      activeIndex: '/',
    };
  },
  computed: {
    routes() {
      return this.$router.options.routes;
    },
  },
  components: {
    AppMain,
    Navbar,
    SubMenu,
    MenuItem,
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
<style >
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 56px;
  vertical-align: middle;
}
.el-menu > .logo-div {
  height: 60px;
  margin-bottom: 20px;
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
