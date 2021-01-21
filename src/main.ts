import {createApp} from "vue";
import App from "@/App.vue";
import "@/registerServiceWorker";
import router from "@/router";
import store from "@/store";

import "@/index.scss";

import Layout from "@/components/Layout.vue";

const app = createApp(App).use(store).use(router);
app.component("Layout", Layout);
app.mount("#app");
