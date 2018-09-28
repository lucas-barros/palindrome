import Vue from 'vue';
import VueResource from 'vue-resource'
import Navbar from './components/navbar.vue';
import Tester from './components/tester.vue';
import Footr from './components/footr.vue';
import feather from 'feather-icons';

Vue.use(VueResource);

new Vue({
  el: '#app',
  components: {
    Navbar,
    Tester,
    Footr,
  },
});

feather.replace();
