import { createApp } from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";

loadFonts();

import "@/assets/global.css";
import { store } from "./store";
const app = createApp(App);
app.use(vuetify);
app.use(store);
app.mount("#app");
