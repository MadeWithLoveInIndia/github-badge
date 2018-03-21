<template>
	<b-container style="max-width: 500px">
		<div class="mb-3">Submit your startup</div>
		<b-form @submit.prevent="fetchStartupDetails" class="mb-3">
			<b-form-group
				label="Startup Name"
				label-for="startupName">
				<b-form-input id="startupName"
					type="text"
					v-model="form.name"
					required
					v-bind:disabled="loading"
					placeholder="Enter name of startup">
				</b-form-input>
			</b-form-group>
			<b-form-group
				label="Startup URL"
				label-for="startupUrl">
				<b-form-input id="startupUrl"
					type="url"
					v-model="form.url"
					required
					v-bind:disabled="loading"
					placeholder="Enter link to homepage">
				</b-form-input>
			</b-form-group>
			<b-button type="submit" variant="primary">Submit</b-button>
		</b-form>
		<b-card v-if="submitted" :img-src="data.screenshot && data.screenshot.url" img-alt="Website screenshot" img-top>
			<font-awesome-icon v-if="loading" :icon="loader" size="3x" spin />
			<div v-else>
				<b-row align-v="center" class="mb-3">
					<b-col cols="2">
						<div :style="'background: url(\'' + data.logo.url + '\') no-repeat; background-size: cover; width: 50px; height: 50px'"></div>
					</b-col>
					<b-col>
						<div class="h5 m-0">{{form.name}}</div>
					</b-col>
				</b-row>
				<p>{{data.description}}</p>
				<div>
					<span :style="'display: inline-block; background: ' + data.logo.background_color + '; color: ' + data.logo.color + '; padding: 0.5rem 1rem; border-radius: 0.25rem; cursor: pointer'">Visit {{form.name}}</span>
				</div>
			</div>
		</b-card>{{data}}
	</b-container>
</template>

<script>
import FontAwesomeIcon from "@fortawesome/vue-fontawesome";
import loader from "@fortawesome/fontawesome-free-solid/faSync";
export default {
	data: () => {
		return {
			form: {
				name: "Oswald Labs",
				url: "https://oswaldlabs.com"
			},
			data: {},
			submitted: false,
			loading: false,
			loader: loader
		};
	},
	methods: {
		fetchStartupDetails() {
			if (!/^(f|ht)tps?:\/\//i.test(this.form.url)) {
				this.form.url = "http://" + this.form.url;
			}
			this.data = {};
			this.submitted = true;
			if (!this.loading) {
				this.loading = true;
				fetch(
					"https://api.microlink.io/?url=" +
						encodeURIComponent(this.form.url) +
						"&screenshot&palette=true"
				)
					.then(response =>
						response.json().then(json => {
							this.submitted = true;
							this.loading = false;
							this.data = json.data;
						})
					)
					.catch(err => {
						console.log("erro", err);
					});
			}
		}
	},
	components: {
		FontAwesomeIcon
	}
};
</script>
