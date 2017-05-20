// ────────────────────────────────────────────────────────────────────────────────
// MODULES

import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import { mapActions, mapGetters } from 'vuex';

const electron = require('electron');

// ────────────────────────────────────────────────────────────────────────────────

@Component({
  name: 'home-page',
  computed: mapGetters({
    message: 'homeMessage'
  }),
  methods: mapActions([
    'sayHello'
  ])
})
export default class HomePage extends Vue {
  public message: String;

  public created() {
    this.$store.dispatch('sayHello');
  }
}
