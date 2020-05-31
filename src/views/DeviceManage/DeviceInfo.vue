<template>
  <div class="hmi-tabs">
    <el-tabs v-model="activeName"
             @tab-click="handleClick">
      <el-tab-pane label="设备属性"
                   name="first">设备属性</el-tab-pane>
      <el-tab-pane label="设备状态"
                   name="second">
        <TabDevStatus />
      </el-tab-pane>
      <el-tab-pane label="审计"
                   name="third">审计</el-tab-pane>
      <el-tab-pane label="云边协同"
                   name="fourth">云边协同</el-tab-pane>
    </el-tabs>
    {{devToken}}
  </div>
</template>
<script>
import TabDevStatus from './TabDevStatus.vue';

export default {
  name: 'devInfo',
  data() {
    return {
      activeName: 'second',
    };
  },
  components: {
    TabDevStatus,
  },

  props: {
    devToken: {
      type: String,
      default: '',
    },
  },
  methods: {
    handleClick(tab, event) {
      window.console.log(tab, event);
    },
  },
};
</script>
<style scoped>
.hmi-tabs {
  margin-top: -30px;
}
</style>
