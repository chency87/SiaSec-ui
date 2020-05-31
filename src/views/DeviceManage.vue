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
            <span style="margin-left: 10px">{{ scope.row.createdTime }}</span>
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
                         width="380">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.additionalInfo !=null
              ? scope.row.additionalInfo.description :'' }}</span>
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
      <el-pagination background
                     style="float:right;margin-top:25px;margin-bottom:15px;"
                     layout="prev, pager, next"
                     :total="1000">
      </el-pagination>
    </el-card>

    <!--弹出窗体，用于创建和编辑设备信息-->
    <el-dialog :title="devInfoDialogTitle"
               :visible.sync="devInfoDialogVisible"
               style="width:40%;">
      <AddAndEditDev :devInfo="selectedDevItemInfo" />
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

    <el-dialog title="设备详细信息"
               :visible.sync="HMIdialogVisible"
               width="70%">
      <DevInfo devToken="this is token" />
    </el-dialog>

  </div>
</template>
<script>
import moment from 'moment';
import DevInfo from './DeviceManage/DeviceInfo.vue';
import AddAndEditDev from './DeviceManage/AddAndEditDev.vue';

export default {
  data() {
    return {
      HMIdialogVisible: false,
      devInfoDialogVisible: false,
      devInfoDialogTitle: '新增设备',
      formLabelWidth: '80px',
      query: '',
      loading: false,
      types: [

      ],
      typesList: [],
      selectedDevItemInfo: {
        id: { entityType: '', id: '' },
        createTime: '',
        customerId: { entityType: '', id: '' },
        tenantId: { entityType: '', id: '' },
        additionalInfo: { description: '' },
        name: '',
        type: '',
        label: '',
      },

      tableData: [],
    };
  },
  components: {
    DevInfo,
    AddAndEditDev,
  },
  mounted() {
    moment.locale('zh_cn');
  },
  created() {
    const params = {
      limit: '10',
    };
    this.$api.device.getTenantDevices(params).then((res) => {
      // this.types = res.data;
      // window.console.log(res.data);
      this.tableData = res.data.data;
      this.tableData.forEach((element) => {
        // window.console.log(element);
        // eslint-disable-next-line no-param-reassign
        element.createdTime = moment(JSON.parse(element.createdTime)).format('YYYY-MM-DD hh:mm:ss');
      });
    });
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

    // 与后端交互
    handleDelete(index, row) {
      window.console.log(index, row);
    },
    // getTenantDevices() {
    //   const params = {
    //     type: '', textSearch: '', idOffset: '', textOffset: '', limit: 10,
    //   };
    //   this.$api.device.getTenantDevices(params).then((res) => {
    //     // this.types = res.data;
    //     // window.console.log(res.data);
    //   });
    // },
    // 本地方法
    handleAdd() {
      this.devInfoDialogTitle = '新增设备';
      this.devInfoDialogVisible = true;
      this.selectedDevItemInfo.name = '';
      this.selectedDevItemInfo.type = '';
      this.selectedDevItemInfo.additionalInfo.description = '';
      this.selectedDevItemInfo.label = '';
    },
    handleEdit(index, row) {
      window.console.log(index, row);
      this.devInfoDialogTitle = '编辑设备';

      this.selectedDevItemInfo.name = row.name;
      this.selectedDevItemInfo.type = row.type;

      this.selectedDevItemInfo.additionalInfo.description = row.additionalInfo != null ? row.additionalInfo.description : '';
      // this.devInfo.additionalInfo.description = row.additionalInfo.description;
      this.selectedDevItemInfo.label = row.label;
      this.devInfoDialogVisible = true;
      // window.console.log(moment(JSON.parse(row.createTime)).format('YYYY-MM-DD hh:mm:ss'));
    },

    handleHMI(index, row) {
      window.console.log(index);
      window.console.log(row.createdTime);
      // DevInfo.devInfoDialogVisible = true;
      this.HMIdialogVisible = true;
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
