<template>
    <el-container>
      <!-- 侧边栏 -->
      <el-aside width="200px">
         <app-aside></app-aside>
      </el-aside>
      <el-container>
        <!-- 头部 -->
        <el-header>
          <app-header></app-header>
        </el-header>
        <!-- 内容 -->
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container> 
</template>

<script>
  import AsideComponent from "./frame/Aside.vue";
  import HeaderComponent from "./frame/Header.vue";
  export default {
    components:{
      appAside:AsideComponent,
      appHeader:HeaderComponent 
    }
  }
</script>

<style scoped lang="less">
.el-container{
  height: 100%;
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
  }
  
  .el-aside {
    background-color: #267cb7;
    color: #fff;
    text-align: center;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
  }
}

</style>