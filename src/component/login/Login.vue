<template>
  <div class="login">
    <div class="login_content">
        <img src="../../img/logo.png" alt="" class="logo">
        <el-form :model="user"  :label-position="labelPosition" :rules="rules" ref="user" label-width="100px" class="demo-ruleForm">
          <el-form-item label="用户名" prop="uname">
            <el-input v-model="user.uname"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="upwd">
            <el-input type="password" v-model="user.upwd"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('user')">登录</el-button>
            <el-button @click="resetForm('user')">重置</el-button>
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
          uname: '',
          upwd: '',
        },
        rules: {
          uname: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 5, max: 12, message: '长度在 5 到 12 个字符', trigger: 'blur' }
          ],
          upwd: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur' }
          ],
        }
      };
    },
    methods: {
      login(){
        this.$http.post(this.$api.login,this.user)
        .then(rsp=>{
          let{status,message}=rsp.data;
          if(status==0){
            alert("欢迎回来,"+message.realname)
            localStorage.setItem("user",JSON.stringify(message));
            this.$router.push("/");
          }else{
            alert("请输入正确的用户名和密码")
          }
        })
      },
      submitForm(formName) {
        this.$refs[formName].validate((result) => {
          if(result){
            this.login();
          }else {
              alert('请符合规范填写用户名或者密码')
          }
        })
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
    padding: 0 10px;
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
    margin-bottom: 20px;
}
</style>