require('./bootstrap');

import {Field, Form} from 'vee-validate/dist/vee-validate';

Vue.component('show-post', require('./components/ShowPost').default);
Vue.component('create-post', require('./components/CreatePost').default);
Vue.component('edit-post', require('./components/EditPost').default);

new Vue({
    el: "#app",
});
