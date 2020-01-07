/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

// Vue.component('example', require('./components/ExampleComponent.vue').default);

window.Vue = require('vue');

// router
import router from './routes/index.js';

// main component
import App from './App.vue';

new Vue({
	el: '#app',
	router,
	components: { App },
	template: '<App/>',
});
