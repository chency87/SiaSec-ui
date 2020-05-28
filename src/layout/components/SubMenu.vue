<template>
  <!-- <el-submenu index="1-4">
    <span slot="title">选项4</span>
    <el-menu-item index="1-4-1">选项1</el-menu-item>
  </el-submenu> -->

  <el-submenu :index="resolvePath(item.path)">
    <template slot="title">
      <i :class="'el-icon-'+item.meta.icon"></i>
      <span slot="title">{{item.meta.title}}</span>
    </template>

    <template v-for="itemX in item.children">
      <sub-menu v-if="itemX.children && itemX.children.length > 1 "
                :item="itemX"
                :base-path="item.path"
                :key="itemX.path" />
      <menu-item v-else
                 :path="item.path +'/'+ itemX.path"
                 :title="itemX.meta.title"
                 :icon="itemX.meta.icon"
                 :key="itemX.path" />
    </template>
  </el-submenu>
</template>

<script>
import path from 'path';
import MenuItem from './MenuItem.vue';

export default {
  components: { MenuItem },
  name: 'sub-menu', // 一定要写 name，不然递归调用自己会报错
  props: {
    item: { // route object
      type: Object,
      required: true,
    },
    basePath: { // 上级 path
      type: String,
      default: '',
    },
  },
  data() {
    return {};
  },
  methods: {
    // 将 routePath 和 basePath 拼接起来
    resolvePath(routePath) {
      return path.resolve(this.basePath, routePath);
    },
  },
};
</script>

<style >
</style>
