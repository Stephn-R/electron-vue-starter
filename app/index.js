// ────────────────────────────────────────────────────────────────────────────────
// MODULES

import Vue from 'vue';
import Component from 'vue-class-component';

import App from './App.vue';

// ────────────────────────────────────────────────────────────────────────────────

// mount
new Vue({
  el: '#app',
  render: (h) => h(App, {}),
});
