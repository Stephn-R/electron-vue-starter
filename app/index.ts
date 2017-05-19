// ────────────────────────────────────────────────────────────────────────────────
// MODULES

import Vue from 'vue';
import Router from 'vue-router';
import Vuex from 'vuex';

import App from './App.vue';
import routes from './routes';

// ────────────────────────────────────────────────────────────────────────────────
// Middleware

Vue.use(Router);

// ────────────────────────────────────────────────────────────────────────────────
// MOUNTING

const router = new Router({ routes });

new Vue({
  router,
  ...(<any>App),
}).$mount('#app');
