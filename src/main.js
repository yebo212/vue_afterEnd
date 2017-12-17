import Vue from "vue";
import VueRouter from "vue-router";
import ElementUI from "element-ui";
import 'element-ui/lib/theme-chalk/index.css';
import "normalize.css";
import "./less/index.less";

Vue.use(VueRouter);
Vue.use(ElementUI);

import AppComponent from "./component/App.vue";

import routerConfig from "./router";

import api from "./js/api_config.js";
import axios from "./js/axios_config.js";

Vue.prototype.$http = axios;
Vue.prototype.$api = api;

new Vue({
    el: "#app",
    render: c => c(AppComponent),
    router: new VueRouter(routerConfig)
})