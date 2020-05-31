<template>

  <el-menu class=""
           default-active="2"
           mode="horizontal"
           @select="handleSelect"
           background-color="#ededed">

    <el-submenu index="1">
      <template slot="title">
        <el-avatar shape="square"
                   style="margin-right:13px;">{{userName}}</el-avatar>
        <!-- :size="small" -->
      </template>
      <router-link to="/attr">
        <el-menu-item index="2-1">属性</el-menu-item>
      </router-link>
      <el-menu-item index="2-2">注销</el-menu-item>
    </el-submenu>

  </el-menu>

</template>

<script>
// import { mapGetters } from 'vuex';
// import Breadcrumb from '@/components/Breadcrumb';

export default {
  name: 'Navbar',
  components: {
  },
  data() {
    return {
      squareUrl: 'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png',
      // userName: 'SIA',
      // loginUser: {},
      // entityId: '',
    };
  },
  props: {
    userName: {
      type: String,
      default: 'hello world',
    },
  },
  computed: {

  },

  methods: {

    handleSelect(key, keyPath) {
      window.console.log(key, keyPath);
    },

    async logout() {
      // await this.$store.dispatch('user/logout');
      // this.$router.push(`/?redirect=${this.$route.fullPath}`);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~@/styles/variables.scss';
.el-menu {
  &.hover-effect {
    cursor: pointer;
    transition: background 0.1s;
  }
}
/* /deep/ .el-menu--horizontal .el-submenu:focus,
/deep/ .el-menu--horizontal .el-submenu:hover,
/deep/ .el-menu--horizontal .el-submenu__title:focus,
/deep/ .el-menu--horizontal .el-submenu__title:hover,
/deep/ .el-menu--horizontal .el-submenu__title.is-opened,
/deep/ .el-menu--horizontal .el-menu-item.is-opened,
/deep/ .el-menu--horizontal .el-menu.is-opened {
  color: #ffd04b;
  cursor: pointer;
  transition: background 0.1s;
  background-color: #b3c0d1 !important;
} */

/* .isss {
  color: #ffd04b;
  &:hover {
    cursor: pointer;
    transition: background 0.1s;
    background-color: #b3c0d1;
  }
} */

/* .el-menu-item.is-active {
  background-color: rgb(231, 235, 240) !important;
} */

/* /deep/ .el-menu--horizontal {
  color: #ffd04b;
  &:hover {
    cursor: pointer;
    transition: background 0.1s;
    background-color: #b3c0d1;
  }
} */
.el-avatar {
  background-color: #{$navBarBg};
  width: auto;
  margin-right: 30px;
}
</style>
