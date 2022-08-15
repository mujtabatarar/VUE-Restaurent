import { createWebHistory,  createRouter } from "vue-router";
import HomeComponent from "./HomeComponent.vue";
import SignIn from "./SignIn.vue";
import LogIn from "./LogIn.vue";
import PageNotFound from "./PageNotFound";
import AddRestaurent from "./AddRestaurent";
import UpdateRestaurent from "./UpdateRestaurent";
//import HeaderComponent from "./HeaderComponent";

const routes = [
    {
        name:"Home",
        path:"/",
        component:HomeComponent,
    
    },
    {
        name:"SignIn",
        path:"/signin",
        component: SignIn,
    },
    {
        name:"LogIn",
        path:"/login",
        component:LogIn,

    },
    {
        name:"PageNotFound",
        path:"/:pathMac",
        component:PageNotFound,
    },
    {
        name:"AddRestaurent",
        path:"/add",
        component:AddRestaurent,
    },
    {
        name:"UpdateRestaurent",
        path:"/update/:id",
        component:UpdateRestaurent,
    }
];

const router = createRouter({
    history:createWebHistory(),
    routes,
});
export default router;

