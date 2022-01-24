import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

import config from "./config";
console.log(config);

import person from "./Person";
console.log(person);

new Vue({
    render: (h) => h(App),
}).$mount("#app");
