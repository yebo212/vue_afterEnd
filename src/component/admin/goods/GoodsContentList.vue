<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">购物商城</el-breadcrumb-item>
      <el-breadcrumb-item>首页</el-breadcrumb-item>
      <el-breadcrumb-item>内容管理</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="nav">
      <div class="pl">
        <el-button plain size="small"><i class="el-icon-circle-plus-outline"></i>新增</el-button>
        <el-button plain size="small"><i class="el-icon-circle-check-outline"></i>全选</el-button>
        <el-button plain size="small"><i class="el-icon-circle-close-outline"></i>删除</el-button>
      </div>
      <div class="pr">
        <el-input @blur="getTableList" placeholder="请输入内容" suffix-icon="el-icon-search" v-model="query.searchvalue" size="small">
        </el-input>
      </div>
    </div>


    <el-table :data="tableList" height="420" border style="width: 100%">
      <el-table-column type="selection"></el-table-column>
      <el-table-column prop="title" label="商品名称" ></el-table-column>
      <el-table-column width="100" prop="categoryname" label="商品类别"></el-table-column>
      <el-table-column width="100" prop="stock_quantity" label="库存"></el-table-column>
      <el-table-column width="100" prop="market_price" label="市场价"></el-table-column>
      <el-table-column width="100" prop="sell_price" label="销售价"></el-table-column>
      <el-table-column width="100" label="状态">
        <template slot-scope="scope">
          <a href="">{{ scope.row.name }}</a>
          <i :class="['el-icon-upload',scope.row.is_top? 'active':'']"></i>
          <i :class="['el-icon-star-on',scope.row.is_hot? 'active':'']"></i>
          <i :class="['el-icon-picture',scope.row.is_slide? 'active':'']"></i>
        </template>
      </el-table-column>
      <el-table-column width="100" label="操作">
        <template slot-scope="scope">
          <a href="">修改</a>
        </template>
      </el-table-column>
    </el-table>
    <!-- 完整的分页组件 -->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="query.pageIndex"
      :page-size="query.pageSize"
      :page-sizes="[10, 20, 30, 40]"
      layout="total, sizes, prev, pager, next, jumper"
      :total="totalcount">
    </el-pagination>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        query:{
          pageIndex:1,
          pageSize:10,
          searchvalue:"",
        },
        totalcount:0,
        tableList:[],
      }
    },
    methods:{
      getTableList(){
        this.$http.get(this.$api.gsList,{params:this.query})
        .then(rsp=>{
          this.tableList=rsp.data.message;
          this.totalcount=rsp.data.totalcount;
        })
      },
      //页面数量变化时触发事件
      handleSizeChange(pageSize){
        this.query.pageSize=pageSize;
        this.getTableList();
      },
      //页面页码变化时触发事件
      handleCurrentChange(pageIndex){
        this.query.pageIndex=pageIndex;
        this.getTableList();
      }
    },
    created(){
      this.getTableList();
    }
  }
</script>

<style scoped lang="less">
.nav{
  margin-top: 10px;
  padding:5px 10px;
  border: 1px solid #ccc;
  height: 36px;
  line-height: 36px;
  border-radius: 10px;
  .pl{
    float: left;
  }
  .pr{
    float: right;
  }
}
[class^=el-icon-]{
  color: rgba(0,0,0,0.3);
  &.active{
    color: black;
  }
}
</style>