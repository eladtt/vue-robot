import Vue from 'vue'
import App from './App.vue'

import router from './router'
import store from './store'
// import pinDirective from './shared/pin-directive'
import currencyFilter from './shared/currency-filter'

Vue.config.productionTip = false;
Vue.filter('currency', currencyFilter);
// Making directive global in the app
// Vue.directive('pin', pinDirective);

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
