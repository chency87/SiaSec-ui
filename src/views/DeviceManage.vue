<template>
  <div>
    <el-card class="box-card">
      <div slot="header"
           class="clearfix">
        <span>卡片名称</span>
      </div>
      <el-row>
        <el-col :span="4"
                :offset="2">
          <div class="grid-content bg-purple">
            <el-button>ssss</el-button>
          </div>
        </el-col>

        <el-col :span="6"
                :offset="12">
          <el-input placeholder="请输入内容"
                    v-model="query"
                    class="input-with-select">

            <el-button slot="append"
                       icon="el-icon-search"></el-button>
          </el-input>
        </el-col>
      </el-row>
    </el-card>
    <br />
    <el-card class="box-card">
      <el-table :data="tableData"
                style="width: 100%">
        <el-table-column label="日期"
                         width="180">
          <template slot-scope="scope">
            <i class="el-icon-time"></i>
            <span style="margin-left: 10px">{{ scope.row.date }}</span>
          </template>
        </el-table-column>
        <el-table-column label="姓名"
                         width="180">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p>姓名: {{ scope.row.name }}</p>
              <p>住址: {{ scope.row.address }}</p>
              <div slot="reference"
                   class="name-wrapper">
                <el-tag size="medium">{{ scope.row.name }}</el-tag>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini"
                       @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button size="mini"
                       type="danger"
                       @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      query: '',
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄',
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄',
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄',
      }],
    };
  },
  methods: {
    handleEdit(index, row) {
      window.console.log(index, row);
    },
    handleDelete(index, row) {
      window.console.log(index, row);
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
