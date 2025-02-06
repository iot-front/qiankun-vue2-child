import Vue from 'vue';
import VueRouter from 'vue-router';

// 路由守卫跳转报错处理
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
	if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
	return originalPush.call(this, location).catch(err => err)
}
const originalReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function push(location, onResolve, onReject) {
	if (onResolve || onReject) return originalReplace.call(this, location, onResolve, onReject)
	return originalReplace.call(this, location).catch(err => err)
}
Vue.use(VueRouter);
const router = new VueRouter({
	mode: 'hash',
	routes: [
		{
			path: '/childOffline/task',
			component: () => import(/* webpackChunkName: "console" */ '@/views/console/home.vue'),
			name: 'consoleHome',
			meta: {
				keepAlive: false,
			}
		},
	]
});

export default router;
