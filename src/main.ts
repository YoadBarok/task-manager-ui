import { createApp } from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify"
import { loadFonts } from "./plugins/webfontloader";


loadFonts();

import "@/assets/global.css";
createApp(App).use(vuetify).mount("#app");
