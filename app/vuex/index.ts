import Vue from 'vue';
import Vuex from 'vuex';

import actions from './actions';
import getters from './getters';
import modules from './modules';

Vue.use(Vuex);

const store = new Vuex.Store({
  actions,
  getters,
  modules,
  strict: process.env.NODE_ENV !== 'production'
});

if (module.hot) {
  module.hot.accept(['./modules'], () => {
    const modules = require('./modules').default;
    store.hotUpdate({ modules });
  });
}

export default store;
