<template>
  <div>
    <!-- 操作界面，包括新增设备及搜索 -->
    <el-card class="box-card">
      <div slot="header"
           class="clearfix">
        <span>操作</span>
      </div>
      <el-row>
        <el-col :span="4"
                :offset="2">
          <div class="grid-content bg-purple">
            <el-button @click="handleAdd()">新增设备</el-button>
          </div>
        </el-col>

        <el-col :span="6"
                :offset="12">
          <el-input placeholder="请输入搜索内容"
                    v-model="query"
                    class="input-with-select">
            <el-button slot="append"
                       icon="el-icon-search"></el-button>
          </el-input>
        </el-col>
      </el-row>
    </el-card>
    <br />
    <!-- 设备表格，包括所有设备信息 -->
    <el-card class="box-card">
      <el-table :data="tableData"
                style="width: 100%">
        <el-table-column label="创建日期"
                         width="200">
          <template slot-scope="scope">
            <i class="el-icon-time"></i>
            <span style="margin-left: 10px">{{ scope.row.createTime }}</span>
          </template>
        </el-table-column>
        <el-table-column label="设备名称"
                         width="180">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p>设备名称: {{ scope.row.name }}</p>
              <p>ID: {{ scope.row.id.id }}</p>
              <p>额外信息: {{ scope.row.additionalInfo }}</p>
              <div slot="reference"
                   class="name-wrapper">
                <el-tag size="medium">{{ scope.row.name }}</el-tag>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="设备类型"
                         width="180">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.type }}</span>
          </template>
        </el-table-column>
        <el-table-column label="设备标签"
                         width="180">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.label }}</span>
          </template>
        </el-table-column>
        <el-table-column label="设备描述"
                         width="180">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.additionalInfo.description }}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini"
                       @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button size="mini"
                       type="primary"
                       @click="handleHMI(scope.$index, scope.row)">HMI</el-button>
            <el-button size="mini"
                       type="danger"
                       @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>

    <!--弹出窗体，用于创建和编辑设备信息-->
    <el-dialog :title="devInfoDialogTitle"
               :visible.sync="devInfoDialogVisible"
               style="width:40%;">
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
                     placeholder="请输入设备类型">
            <!-- remote
                     :remote-method="getRemoteDevTypes"
                     :loading="loading" -->
            <el-option v-for="item in types"
                       :key="item"
                       :value="item">
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
                    autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer"
           class="dialog-footer">
        <el-button @click="devInfoDialogVisible = false">取 消</el-button>
        <el-button v-if="devInfoDialogTitle === '新增设备'"
                   type="primary"
                   @click="handleInsert()">添 加</el-button>
        <el-button v-else
                   type="primary"
                   @click="handleupdate()">更 新</el-button>
      </div>
    </el-dialog>

  </div>
</template>
<script>
import moment from 'moment';

export default {
  data() {
    return {
      devInfoDialogVisible: false,
      devInfoDialogTitle: '新增设备',
      formLabelWidth: '80px',
      query: '',
      loading: false,
      types: [
        'default', 'PLLLLL',
      ],
      typesList: [],
      devInfo: {
        id: { entityType: '', id: '' },
        createTime: '',
        customerId: { entityType: '', id: '' },
        tenantId: { entityType: '', id: '' },
        additionalInfo: { description: '' },
        name: '',
        type: '',
        label: '',
      },

      tableData: [{
        id: { entityType: 'DEVICE', id: '95f9f7a0-9bbe-11ea-863a-b53e4a73af9b' },
        createTime: '1590714830065',
        customerId: { entityType: 'CUSTOMER', id: '111112312' },
        tenantId: { entityType: 'TENANT', id: '23123' },
        additionalInfo: { description: 'asdasd' },
        name: 'SIA',
        type: 'PLC',
        label: '南塔街',
      }, {
        id: { entityType: 'DEVICE', id: '95f9f7a0-9bbe-11ea-863a-b53e4a73af9b' },
        createTime: '1590714830065',
        customerId: { entityType: 'CUSTOMER', id: '111112312' },
        tenantId: { entityType: 'TENANT', id: '23123' },
        additionalInfo: { description: 'asdasd' },
        name: 'SSW',
        type: 'DTU',
        label: '中科院',
      }],
    };
  },
  mounted() {
    moment.locale('zh_cn');
    this.tableData.forEach((element) => {
      window.console.log(element.createTime);
      // eslint-disable-next-line no-param-reassign
      element.createTime = moment(JSON.parse(element.createTime)).format('YYYY-MM-DD hh:mm:ss');
    });
    window.console.log(this.$api.device.types());
  },
  methods: {
    // 与后端交互
    handleInsert() {
      window.console.log('新增设备');
    },
    // 与后端交互
    handleupdate() {
      window.console.log('更新设备');
    },
    // 与后端交互
    // 用于远程实时获取types
    getRemoteDevTypes(query) {
      if (query !== '') {
        this.loading = true;
      } else {
        this.types = [];
      }
    },
    // 与后段交互
    handleDelete(index, row) {
      window.console.log(index, row);
    },
    // 本地方法
    handleAdd() {
      this.devInfoDialogTitle = '新增设备';
      this.devInfoDialogVisible = true;
      this.devInfo.name = '';
      this.devInfo.type = '';
      this.devInfo.additionalInfo.description = '';
      this.devInfo.label = '';
    },
    handleEdit(index, row) {
      window.console.log(index, row);
      this.devInfoDialogTitle = '编辑设备';
      this.devInfoDialogVisible = true;
      this.devInfo.name = row.name;
      this.devInfo.type = row.type;
      this.devInfo.additionalInfo.description = row.additionalInfo.description;
      this.devInfo.label = row.label;
      // window.console.log(moment(JSON.parse(row.createTime)).format('YYYY-MM-DD hh:mm:ss'));
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
