// ────────────────────────────────────────────────────────────────────────────────
// MODULES

import { RouteConfig } from 'vue-router';

import AppView from './App.vue';
import HomeView from './components/HomeView.vue';

// ────────────────────────────────────────────────────────────────────────────────
// ROUTES

const routes: RouteConfig[] = [
  {
    path: '/',
    component: HomeView,
  },
  {
    path: '*',
    redirect: '/'
  }
];

export default routes;
