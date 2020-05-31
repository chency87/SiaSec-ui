<template>
  <div>
    <div>
      <el-form :model="devInfo">
        <el-form-item label="设备名称"
                      :label-width="formLabelWidth">
          <el-input v-model="devInfo.name"
                    autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="设备类型"
                      :label-width="formLabelWidth">
          <el-select v-model="devInfo.type"
                     clearable
                     filterable
                     allow-create
                     @focus="getRemoteDevTypes()"
                     placeholder="请输入设备类型">
            <!-- remote
                     :remote-method="getRemoteDevTypes"
                     :loading="loading" -->
            <el-option v-for="item in types"
                       :key="item.type"
                       :value="item.type">
            </el-option>
          </el-select>

        </el-form-item>
        <el-form-item label="设备标签"
                      :label-width="formLabelWidth">
          <el-input v-model="devInfo.label"
                    autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="设备描述"
                      :label-width="formLabelWidth">
          <el-input v-model="devInfo.additionalInfo.description"
                    type="textarea"
                    autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
    </div>

  </div>
</template>
<script>
export default {
  name: 'AddAndEditDev',
  data() {
    return {
      types: [

      ],
      formLabelWidth: '80px',
    };
  },

  props: {
    devInfo: {
      type: Object,
    },
    devToken: {
      type: String,
      default: '',
    },
  },
  methods: {
    getRemoteDevTypes() {
      this.$api.device.types().then((res) => {
        this.types = res.data;
        // window.console.log(this.types);
      });
    },
  },
};
</script>
<style scoped>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix {
  display: table;
  content: '';
  line-height: 5px;
}

.box-card {
  width: 100%;
}
</style>
