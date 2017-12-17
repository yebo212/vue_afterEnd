<template>
  <div class="login">
    <div class="login_content">
        <img src="../../img/logo.png" alt="" class="logo">
        <el-form :model="user"  :label-position="labelPosition" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="用户名" prop="name">
            <el-input v-model="user.name"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="pass">
            <el-input v-model="user.pass"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        labelPosition: 'top',
        user: {
          name: '',
          pass: '',
        },
        rules: {
          name: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
          ],
          pass: [
            { required: true, message: '请输入密码', trigger: 'blur' },
          ],
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style scoped lang="less">
.login{
  height: 100%;
  background-color: #267cb7;
  position: relative;
  .login_content{
    width: 350px;
    height: 250px;
    padding: 10px;
    border: 1px solid #5196c5;
    position: absolute;
    left: 50%;
    transform: translate(-50%,0);
    margin-top: 100px;
    box-sizing: border-box;
    border-radius: 10px;
      .logo{
        position: absolute;
        left: 50%;
        bottom: 100%+1px;
        transform: translate(-50%,0);
      }
  }
}
</style>
<style>
.el-form--label-top .el-form-item__label{
    padding: 0;
    color:#fff;
}
.el-form-item {
    margin-bottom: 10px;
}
</style>
