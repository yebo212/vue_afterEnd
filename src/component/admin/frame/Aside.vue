<template>
  <div class="aside">
    <img src="../../../img/logo.png" alt="">
    <el-aside width="100%">
      <el-collapse accordion background-color="#267cb7">
        <el-collapse-item  v-for="item in menuList" :index="item.title" :key="item.title">
          <template slot="title">
            <i class="el-icon-message"></i>
            {{item.title}}
          </template>
          <div :index="items.title" v-for="items in item.children" :key="items.title" class="aside_content">
            <a href=""><i class="el-icon-document"></i>{{items.title}}</a>
          </div>
        </el-collapse-item>
      </el-collapse>
    </el-aside>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        menuList:[
          {title:"学生问题",children:
            [
              {title:"内容管理",path:"/"},
              {title:"类别管理",path:"/"},
              {title:"评论管理",path:"/"},
            ]
          },
          {title:"前端技术",children:
            [
              {title:"内容管理",path:"/"},
              {title:"类别管理",path:"/"},
              {title:"评论管理",path:"/"},
            ]
          },
          {title:"难点分析",children:
            [
              {title:"内容管理",path:"/"},
              {title:"类别管理",path:"/"},
              {title:"评论管理",path:"/"},
            ]
          },
          {title:"资源管理",children:
            [
              {title:"内容管理",path:"/"},
              {title:"类别管理",path:"/"},
              {title:"评论管理",path:"/"},
            ]
          },
          {title:"订单管理",children:
            [
              {title:"订单列表",path:"/"},
            ]
          },
        ]
      }
    },
    methods: {
    }
  }
</script>

<style scoped lang="less">
  .el-aside {
    overflow: hidden;
    .el-menu {
      width: 200px;
    }
  }
</style>
<style lang="less">
.el-collapse, .el-collapse-item__header, .el-collapse-item__wrap{
  border: none;
}
.aside_content{
  height: 50px;
  line-height: 50px;
}
.el-carousel__mask, .el-cascader-menu, .el-cascader-menu__item.is-disabled:hover, .el-collapse-item__header, .el-collapse-item__wrap{
  color:inherit;
  background-color:inherit;
}
.el-collapse-item__content{
    color:inherit;
    padding-bottom: 0;
}
</style>
