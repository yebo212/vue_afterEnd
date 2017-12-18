import HomeComponent from "../component/home/Home.vue";
import LoginComponent from "../component/login/Login.vue";
import AdminComponent from "../component/admin/Admin.vue";
import GoodsContentAddComponent from "../component/admin/goods/GoodsContentAdd.vue";
import GoodsContentEditComponent from "../component/admin/goods/GoodsContentEdit.vue";
import GoodsContentListComponent from "../component/admin/goods/GoodsContentList.vue";

let adminChildren = [
    { name: "gca", path: "goods/content/add", component: GoodsContentAddComponent },
    { name: "gce", path: "goods/content/edit", component: GoodsContentEditComponent },
    { name: "gcl", path: "goods/content/list", component: GoodsContentListComponent },
];

export default {
    routes: [
        { name: "l", path: "/login", component: LoginComponent }, //登录页面
        { name: "a", path: "/", component: AdminComponent, children: adminChildren }, //后台管理页面
    ]
}