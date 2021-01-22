import {createRouter, createWebHashHistory, RouteRecordRaw} from "vue-router";

import Tags from "@/views/Tags.vue";
import Money from "@/views/Money.vue";
import Statistic from "@/views/Statistic.vue";
import Tag from "@/views/Tag.vue";
import NotFound from "@/views/NotFound.vue";

const routes: Array<RouteRecordRaw> = [
    {path: "/", redirect: "/money"},
    {path: "/money", component: Money},
    {path: "/tags", component: Tags},
    {path: "/tag/:id", component: Tag},
    {path: "/statistic", component: Statistic},
    {path: "/:pathMatch(.*)", name: "bad-not-found", component: NotFound}
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;
