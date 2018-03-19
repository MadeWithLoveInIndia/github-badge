import Vue from "vue";
import Toasted from "vue-toasted";
import BootstrapVue from "bootstrap-vue";
import * as VueGoogleMaps from "vue2-google-maps";
import css from "./styles.scss";
import constants from "./modules/constants";

import "whatwg-fetch";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(VueGoogleMaps, {
	load: {
		key: constants.api_keys.googlemaps,
		libraries: "places"
	}
});
Vue.use(Toasted);
Vue.use(BootstrapVue);

console.log("Hello, world!");

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
				{/* <Navbar user={this.user} cart={this.cart} />
				<transition name="fade" mode="out-in">
					<router-view />
				</transition>
				<Footer /> */}
			</div>
		);
	}
});
