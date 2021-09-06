require('./bootstrap');

import Vue from "vue";

// import PostComponent from './components/Post';
// Vue.component('post-component' , PostComponent);

import CreatePostComponent from './components/CreatePost';
Vue.component('create-post' , CreatePostComponent);

Vue = new Vue({
    el:"#app",
    data:{
        title: "Create New Post"
    }
});
