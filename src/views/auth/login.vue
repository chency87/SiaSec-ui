<template>
  <div id="login">

    <el-card class="box-card">
      <div slot="header"
           class="clearfix">
        <span>
          <b>网关登录</b>
        </span>
      </div>
      <el-form :model="loginForm"
               :label-position="labelPosition"
               label-width="75px">
        <el-form-item label="Email： ">
          <el-input v-model="loginForm.username"
                    placeholder="请输入Email"
                    auto-complete="on"></el-input>
        </el-form-item>

        <el-form-item label="Password：">
          <el-input v-model="loginForm.password"
                    type="password"
                    placeholder="请输入密码"
                    auto-complete="on"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="success"
                     round
                     size="medium"
                     icon="el-icon-edit"
                     class="login-btn"
                     @click="handleLogin(loginForm)">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>

  </div>
</template>

<script>
// import { Message } from 'element-ui';
// import { auth } from '@/request/api';
// import { auth } from '../../request/api';

export default {
  name: 'login',
  data() {
    return {
      labelPosition: 'right',
      loginForm: {
        username: 'tenant@thingsboard.com',
        password: 'tenant',
      },
    };
  },
  methods: {
    handleLogin(loginForm) {
      // 提交函数中, dispatch 是调用 actios 中的方法，在通过 commit 发送 mutations 方法修改数据
      // 注意：this.model 就是传递的数据

      this.$api.auth.login(loginForm).then((res) => {
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('refreshToken', res.data.refreshToken);
        const path = this.$route.query.redirect || '/home';
        this.$router.push(path);
      });

      // this.$store.dispatch('login', loginForm)
      //   .then((code) => {
      //     if (code) {
      //       // 登录成功后，重定向，如果没有则重定向到首页
      //       const path = this.$route.query.redirect || '/home';
      //       this.$router.push(path);
      //     }
      //   }).catch((error) => {
      //     this.$message.error(error.message || error.response.data.message);
      //   });
    },

  },
};
</script>
<style scoped>
.login {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
}

.text {
  font-size: 16px;
}

/* .item {
  margin-bottom: 18px;
} */
.clearfix {
  /* line-height: 30px; */
  height: 0px;
  margin-bottom: 15px;
  font-size: 18px;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: '';
}
.clearfix:after {
  clear: both;
}
.box-card {
  width: 400px;
  text-align: center;
  margin-top: 15%;
  margin-left: 70%;
}
.el-input {
  width: 250px;
}
.login-btn {
  width: 280px;
  margin-right: 35px;
}
</style>
