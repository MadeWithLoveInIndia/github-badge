import Vue from "vue";
import Toasted from "vue-toasted";
import BootstrapVue from "bootstrap-vue";
import * as VueGoogleMaps from "vue2-google-maps";

// Modules
import constants from "./modules/constants";
import router from "./modules/router";
import store from "./modules/store";

// Polyfills
import "whatwg-fetch";

// Styling
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import css from "./styles.scss";

// Vue.use(VueGoogleMaps, {
// 	load: {
// 		key: constants.api_keys.googlemaps,
// 		libraries: "places"
// 	}
// });
Vue.use(Toasted);
Vue.use(BootstrapVue);

// Progressive Web App support
if (process.env.NODE_ENV === "production") {
	require("./pwa");
}

const app = new Vue({
	el: "#app",
	data: {
		user: null,
		cart: {
			products: []
		}
	},
	router,
	store,
	methods: {
		toast(text) {
			this.$toasted.show(text, {
				theme: "primary",
				position: "top-center",
				duration: 3000
			});
		}
	},
	render() {
		return (
			<div>
				{/* <Navbar user={this.user} cart={this.cart} /> */}
				<transition name="fade" mode="out-in">
					<router-view />
				</transition>
				{/* <Footer /> */}
			</div>
		);
	}
});
