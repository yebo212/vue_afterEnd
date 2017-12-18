<template>
  <div>
    <el-header style="text-align: right;">
      <el-dropdown @command="handleCommand">
        <span>你好，{{user.uname}}</span>
         <i class="el-icon-arrow-down el-icon--right"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>修改密码</el-dropdown-item>
          <el-dropdown-item command="logout">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      
    </el-header>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        user:JSON.parse(localStorage.getItem("user"))||{}
      }
    },
    methods:{
      logout(){
        this.$http.get(this.$api.logout)
        .then(rsp=>{
          localStorage.removeItem("user");
          this.$router.push("/login");
        });
      },
      handleCommand(command){
        switch (command) {
          case "logout":
            this.logout();
            break;
        }
      }
    }
  }
</script>

<style scoped>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
</style>