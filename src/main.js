import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import '@/components/base/svgIcon/index.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
import Components from 'haier-ui'
import 'haier-ui/lib/haier-ui.css'
Vue.use(Components)

Vue.config.productionTip = false;
Vue.prototype.$store = store;
// qiankun
let instance = null;
function render(props = {}) {
  let { container } = props
	instance = new Vue({
		router,
		store,
		render: h => h(App)
	}).$mount(container ? container.querySelector('#child-app') : '#child-app');
}

if(window.__POWERED_BY_QIANKUN__) { // 动态添加publicPath
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__
}
// 独立运行
if (!window.__POWERED_BY_QIANKUN__) {
  Vue.prototype.$mainStore = {
    currentWorkspace: {}
  };
	render();
}
/**
 * bootstrap 
 */
export async function bootstrap() {
  // console.log("bootstrap", props)
}
/**
 * 应用每次进入都会调用 mount 方法，通常我们在这里触发应用的渲染方法
 */
export async function mount(props) {
  Vue.prototype.$mainStore = props.mainStore || {};
  render(props)
}
/**
 * 应用每次 切出/卸载 会调用的方法，通常在这里我们会卸载微应用的应用实例
 */
export async function unmount() {
  instance.$destroy()
}