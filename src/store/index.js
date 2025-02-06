import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from "vuex-persistedstate"

Vue.use(Vuex);
export default new Vuex.Store({
	state: {
    baseDataUrl: '',
    pageType: ''
	},
	mutations: {
		setPageType(state, type) {
			state.pageType = type;
		},
		setBaseDataUrl(state, url) {
			state.baseDataUrl = url;
		},
	},
	actions: {
		
	},
  plugins: [createPersistedState({
    storage: window.localStorage
  })]
});
