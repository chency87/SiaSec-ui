<template>
  <router-link :to="path">
    <el-menu-item>
      <i class="el-icon-menu"></i>
      <span slot="title">{{ title }}</span>
      <span>---------------</span>
      <span>{{path}}</span>
    </el-menu-item>

  </router-link>

</template>

<script>
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
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
</style>
