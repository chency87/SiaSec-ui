<template>
  <el-row :gutter="20">

    <el-col v-for="(item,index) in physicalStatus"
            :span="6"
            :key="index">
      <el-card class="box-card"
               :style="`height:125px;background-color:${item.color}`">
        <div class="div-info-count">
          <div class="count">{{item.count}}<sub>{{item.units}}</sub></div>
        </div>
        <div class="div-info-desc">
          <h3>{{item.desc}}</h3>
          <p>{{item.sub_desc}}</p>
        </div>
        <div class="div-info-progress">
          <el-progress type="dashboard"
                       :percentage="item.percentage"
                       :width="86"
                       :stroke-width="10"
                       :color="colors"></el-progress>
        </div>
      </el-card>
    </el-col>

  </el-row>

</template>

<script>
// import { mapGetters } from 'vuex';
// import Breadcrumb from '@/components/Breadcrumb';

export default {
  name: 'NaPhysicalStatus',
  components: {
  },
  data() {
    return {
      // userName: 'SIA',
      loginUser: {},
      // entityId: '',
      physicalStatus: [
        {
          desc: '内存使用情况', sub_desc: '全部内存空间 1111G', count: '155', percentage: 15, color: 'cadetblue', units: 'MB',
        },
        {
          desc: '存储空间使用情况', sub_desc: '全部存储空间 22323G', count: '155', percentage: 75, color: 'rgb(33, 162, 167)', units: 'MB',
        },
        {
          desc: 'CPU使用情况', sub_desc: '全部内存空间 4H', count: '155', percentage: 65, color: 'cadetblue', units: '',
        },
        {
          desc: '系统负载情况', sub_desc: '系统负载情况 null', count: '155', percentage: 95, color: 'rgb(148, 180, 59)', units: '',
        },
      ],

      percentage: 10,
      colors: [
        { color: '#f56c6c', percentage: 20 },
        { color: '#e6a23c', percentage: 40 },
        { color: '#5cb87a', percentage: 60 },
        { color: '#1989fa', percentage: 80 },
        { color: '#6f7ad3', percentage: 100 },
      ],
    };
  },
  props: {
    // userName: {
    //   type: String,
    //   default: 'hello world',
    // },
  },
  computed: {

  },

  methods: {
    hhhhhh() {
      this.hhh = 'width:105px';
    },

    handleSelect(key, keyPath) {
      window.console.log(key, keyPath);
    },


  },
};
</script>

<style lang="scss" scoped>
.el-row {
  margin-bottom: 20px;
}
.el-col {
  border-radius: 4px;
}

/* .el-progress {
  padding: 45px 25px;
  border-radius: 0px;
  width: auto;
} */
.box-card-storage {
  height: 125px;
  background-color: cadetblue;
}
.box-card-ram {
  height: 125px;
  background-color: rgb(33, 162, 167);
}
.box-card-cpu {
  height: 125px;
  background-color: cadetblue;
}
.box-card-burden {
  height: 125px;
  background-color: rgb(148, 180, 59);
}
.ram-progress {
  margin-top: -19px;
}

.ram-div /deep/ .el-progress-bar__outer {
  /* background-color: rgb(33, 162, 167); */
  width: 100%;
}
.ram-div /deep/ .el-progress-bar__outer,
.ram-div /deep/ .el-progress-bar__inner {
  border-radius: 0px 0px 0px 0px;
  font-size: 29px;
}
/deep/ .el-progress-bar__innerText {
  font-size: 22px;
}
.storage-percentage {
  height: 105px;
  background-color: bisque;
}

.count {
  font-size: 35px;
  font-weight: 650;
  /* line-height: 1.65857; */
  color: #ffffff;
}

/* .div-info-count { */
/* margin-top: -8px; */
/* margin-bottom: -5px; */
/* } */
/* .div-info-desc {
  margin-top: -15px;
} */
.div-info-desc h3 {
  margin-top: 5px;
  margin-bottom: 0px;
  font-size: 20px;
  color: #d4cbcb;
}
.div-info-desc p {
  margin-top: 5px;
  font-size: 12px;
  color: #d9e8f7;
}
.div-info-progress {
  float: right;
  margin: -105px 15px 0 0;

  /* z-index: 1; */
}
.box-card /deep/ .el-progress__text {
  font-size: 16px !important;
  color: #ffffff;
}

/* .ram-div /deep/ .el-progress-bar__outer {
  background: red;
}
.ram-div /deep/ .el-progress-bar__inner {
  background-color: greenyellow;
} */
</style>
