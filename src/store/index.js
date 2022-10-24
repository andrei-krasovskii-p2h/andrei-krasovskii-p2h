import { createStore } from "vuex";
import { navModule } from "@/store/navModule";
import { articlesModule } from "@/store/articlesModule";

export default createStore({
  modules: {
    navigation: navModule,
    articles: articlesModule,
  },
});
