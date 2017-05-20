// ────────────────────────────────────────────────────────────────────────────────
// MODULES

import Vue from 'vue';
import Router from 'vue-router';
import Vuetify from 'vuetify';
import Vuex from 'vuex';
import { sync } from 'vuex-router-sync';

import App from './App.vue';
import routes from './routes';
import store from './vuex';

// ────────────────────────────────────────────────────────────────────────────────
// Middleware

Vue.use(Router);
Vue.use(Vuetify);

// ────────────────────────────────────────────────────────────────────────────────
// MOUNTING

const router = new Router({ routes });

sync(store, router);

new Vue({
  store,
  router,
  ...(<any>App),
}).$mount('#app');
