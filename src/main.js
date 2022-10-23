import { createApp } from "vue";
import App from "./App.vue";
import "normalize.css";
import "./assets/styles.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faMagnifyingGlass);
createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
