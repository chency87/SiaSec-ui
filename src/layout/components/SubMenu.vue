<template>
  <div>

    <el-submenu :index="resolvePath(item.path)"
                popper-append-to-body>
      <template slot="title">
        <i class="el-icon-setting"></i>
        <span>{{item.meta.title}}</span>
        <span>---------------</span>
        <span>{{resolvePath(item.path)}}</span>
      </template>

      <el-menu-item-group>

        <template v-for="itemX in item.children">
          <sub-menu v-if="itemX.children && itemX.children.length > 1 "
                    :item="itemX"
                    :base-path="item.path"
                    :key="itemX.path" />
          <menu-item v-else
                     :path="itemX.path"
                     :title="itemX.meta.title"
                     :key="itemX.path" />
        </template>
      </el-menu-item-group>

    </el-submenu>
  </div>
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

<style scoped>
.title {
  padding: 20px;
  color: rgb(153, 153, 153);
}
.title:hover {
  background: rgb(244, 244, 244);
}
.children {
  padding-left: 20px;
  background: rgb(244, 244, 244);
}
.icon {
  float: right;
  color: #999999;
}
</style>
