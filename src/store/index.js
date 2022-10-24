import { createStore } from "vuex";
import { navModule } from "@/store/navModule";

export default createStore({
  modules: {
    navigation: navModule,
  },
});
