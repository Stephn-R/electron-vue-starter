<template>
  <v-app id="app">
    <v-toolbar>
      <v-toolbar-title>Electron App + Vue.js</v-toolbar-title>
    </v-toolbar>
    <main>
      <v-content>
        <v-container fluid>
          <router-view></router-view>
        </v-container>
      </v-content>
    </main>
  </v-app>
</template>

<script lang="ts">

export default {
  components: {}
};

</script>

<style lang="stylus" src="./main.styl"></style>
