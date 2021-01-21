import {createRouter, createWebHashHistory, RouteRecordRaw} from "vue-router";

import Tag from "@/views/Tag.vue";
import Money from "@/views/Money.vue";
import Statistic from "@/views/Statistic.vue";

const routes: Array<RouteRecordRaw> = [
    {path: "/", redirect: "/money"},
    {path: "/money", component: Money},
    {path: "/tag", component: Tag},
    {path: "/statistic", component: Statistic}
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;
