<template>
  <router-link :to="path">
    <el-menu-item :index="path">
      <i :class="'el-icon-'+icon"></i>
      <span slot="title">{{ title }}</span>
    </el-menu-item>

  </router-link>

</template>

<script>
// import path from 'path';

export default {
  name: 'menu-item',
  props: {
    path: { // 唯一的routerPath
      type: String,
      required: true,
    },
    title: { // 标题
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
  },
  data() {
    return {};
  },
  methods: {
    // 将 routePath 和 basePath 拼接起来
    // resolvePath(routePath) {
    //   return path.resolve(this.basePath, routePath);
    // },
  },
};
</script>

<style scoped>
</style>
