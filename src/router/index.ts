import {createRouter, createWebHashHistory, RouteRecordRaw} from "vue-router";

import Tag from "@/views/Tag.vue";
import Money from "@/views/Money.vue";
import Statistic from "@/views/Statistic.vue";
import NotFound from "@/components/NotFound.vue";

const routes: Array<RouteRecordRaw> = [
    {path: "/", redirect: "/money"},
    {path: "/money", component: Money},
    {path: "/tag", component: Tag},
    {path: "/statistic", component: Statistic},
    {path: "/:pathMatch(.*)", name: "bad-not-found", component: NotFound}
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;
