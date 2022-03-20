import Vue from "vue";
import Vuex from "vuex";
import app from "./modules/app";
import getters from "./getters";

import VuexPersistence from "vuex-persist";
const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
});

Vue.use(Vuex);

const modules = { app };

export default new Vuex.Store({
  getters,
  modules,
  plugins: [vuexLocal.plugin],
});
