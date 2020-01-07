/**
* Vue Router
*
* @link http://router.vuejs.org/en/installation.html
*/
import Vue from 'vue';
import VueHead from 'vue-head'
import VueRouter from 'vue-router';

// pages
import Home from '../pages/Home.vue';
import About from '../pages/About.vue';

Vue.use(VueHead);
Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'home',
		component: Home
	},
	{
		path: '/about',
		name: 'about',
		component: About
	},
];

const router = new VueRouter({
	mode: 'history',
	// fallback: true, //router should fallback to hash (#) mode when the browser does not support history.pushState
	routes
});

export default router;
