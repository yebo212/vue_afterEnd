import Home from "../component/home/Home.vue";
import Login from "../component/login/Login.vue";

export default {
    routes: [
        { path: "/", redirect: "/home" },
        { name: "h", path: "/home", component: Home },
        { name: "l", path: "/login", component: Login }
    ]
}