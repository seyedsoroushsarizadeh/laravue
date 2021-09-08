window._ = require('lodash');

import Vue from "vue/dist/vue";
window.Vue = Vue;

import Axios from "axios/dist/axios";
window.axios = Axios;

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
