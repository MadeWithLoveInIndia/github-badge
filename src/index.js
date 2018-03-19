console.log("Hello, world!");

// Progressive Web App support
if (process.env.NODE_ENV === "production") {
	require("./pwa");
}