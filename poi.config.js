const OfflinePlugin = require("offline-plugin");

module.exports = options => ({
	entry: "./src/index.js",
	extendWebpack(config) {
		if (options.mode === "production") {
			config.plugin("offline").use(OfflinePlugin)
		}
	},
	html: {
		template: "./src/template.ejs"
	}
})
