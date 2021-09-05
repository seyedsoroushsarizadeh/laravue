require('./bootstrap');

import Vue from "vue";

Vue.component('example' , require('./components/Example').default);

Vue = new Vue({
    el:"#app",
    data:{
        message: "Hello Vue"
    }
});
