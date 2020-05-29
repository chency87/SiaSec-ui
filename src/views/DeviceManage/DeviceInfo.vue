<template>
  <div>
    <el-dialog :title="devInfoDialogTitle"
               :visible.sync="devInfoDialogVisible">
      <el-form :model="devInfo">
        <el-form-item label="活动名称"
                      :label-width="formLabelWidth">
          <el-input v-model="devInfo.name"
                    autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="活动区域"
                      :label-width="formLabelWidth">
          <el-select v-model="devInfo.type"
                     placeholder="请选择活动区域">
            <el-option label="区域一"
                       value="shanghai"></el-option>
            <el-option label="区域二"
                       value="beijing"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer"
           class="dialog-footer">
        <el-button @click="devInfoDialogVisible = false">取 消</el-button>
        <el-button type="primary"
                   @click="devInfoDialogVisible = false">确 定</el-button>
      </div>
    </el-dialog>

  </div>
</template>
<script>
export default {
  data() {
    return {
      devInfoDialogVisible: false,
      devInfoDialogTitle: '新增设备',
      formLabelWidth: '120px',
      query: '',
      devInfo: {
        date: '',
        name: '',
        type: '',
        label: '',
        desc: '',
      },

      tableData: [{
        date: '2016-05-02 24:03:35',
        name: '王小虎',
        type: 'PLC',
        label: 'label',
        desc: 'desc',
        address: '上海市普陀区金沙江路 1518 弄',
      }, {
        date: '2016-05-03',
        name: '王小虎',
        type: 'PLC',
        label: 'label',
        desc: 'desc',
        address: '上海市普陀区金沙江路 1516 弄',
      }],
    };
  },
  methods: {

    handleEdit(index, row) {
      window.console.log(index, row);
      this.devInfoDialogTitle = '编辑设备';
      this.devInfoDialogVisible = true;
    },
    handleDelete(index, row) {
      window.console.log(index, row);
    },
    handleHMI(index, row) {
      window.console.log(index);
      window.console.log(row.date);
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
