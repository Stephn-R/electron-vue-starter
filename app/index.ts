import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  name: 'app',
  template: require('./app.html'),
})
export default class App extends Vue {
  public message: string = 'Hello';
}

const app = new Vue({
  components: { App },
});
