import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

http: Vue.use(Vuex);
export default new Vuex.Store({
	state: {
		user: null
	},
	getters: {
		getCart: state => state.cart,
		getUser: state => state.user
	},
	mutations: {
		updateUser(state, userObject) {
			state.user = userObject.user;
		},
		clearAuth(state) {
			state.user = null;
		}
	},
	actions: {
		updateUser({ commit, state }, user) {
			commit("updateUser", user);
		},
		clearAuth(context) {
			context.commit("clearAuth");
		}
	},
	plugins: [createPersistedState()]
});
