import Vue from "vue";
import Vuex from "vuex";
import global from './global/index.js';
//  import favourite from './favourite/index.js';

Vue.use(Vuex);

export default function () {
  const Store = new Vuex.Store({
    modules: {
      global,
//      favourite
    }
  })

  return Store
}
