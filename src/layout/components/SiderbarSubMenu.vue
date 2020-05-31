<template>
  <el-submenu :index="resolvePath(item.path)">
    <template slot="title">
      <i :class="'el-icon-'+item.meta.icon"></i>
      <span slot="title">{{item.meta.title}}</span>
    </template>

    <div v-for="itemX in item.children"
         :key="itemX.path">
      <SiderbarSubMenu v-if="itemX.children && itemX.children.length > 1 "
                       :item="itemX"
                       :base-path="resolvePath(itemX.path)"
                       :key="itemX.path" />
      <SiderbarMenuItem v-else
                        :path="resolvePath(itemX.path)"
                        :title="itemX.meta.title"
                        :icon="itemX.meta.icon"
                        :key="itemX.path" />
    </div>
  </el-submenu>
</template>

<script>
import path from 'path';
import SiderbarMenuItem from './SiderbarMenuItem.vue';

export default {
  components: { SiderbarMenuItem },
  name: 'SiderbarSubMenu', // 一定要写 name，不然递归调用自己会报错
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
