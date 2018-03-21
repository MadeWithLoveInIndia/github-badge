import Vue from "vue";
import VueRouter from "vue-router";
import smartquotes from "smartquotes";

import Submit from "../components/pages/Submit.vue";
import Error404 from "../components/pages/Error404.vue";

const routes = [
	{
		path: "/submit",
		component: Submit,
		meta: {
			title: "Submit Startup"
		}
	},
	{
		path: "*",
		component: Error404,
		meta: {
			title: "404 Error"
		}
	}
];

Vue.use(VueRouter);
const router = new VueRouter({
	routes,
	mode: "history",
	scrollBehavior(to, from, savedPosition) {
		const position = savedPosition || {
			x: 0,
			y: 0
		};
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve({ x: 0, y: 0 });
			}, 200);
		});
	}
});

router.beforeEach((to, from, next) => {
	const nearestWithTitle = to.matched
		.slice()
		.reverse()
		.find(r => r.meta && r.meta.title);
	if (nearestWithTitle)
		document.title =
			nearestWithTitle.meta.title +
			((nearestWithTitle.meta.title.indexOf("DrillMaps") === -1 && " · DrillMaps") || "");
	const nearestWithMeta = to.matched
		.slice()
		.reverse()
		.find(r => r.meta && r.meta.metaTags);
	const previousNearestWithMeta = from.matched
		.slice()
		.reverse()
		.find(r => r.meta && r.meta.metaTags);
	Array.from(document.querySelectorAll("[data-routerMetas]")).map(el =>
		el.parentNode.removeChild(el)
	);
	if (!nearestWithMeta) return next();
	nearestWithMeta.meta.metaTags
		.map(tagDef => {
			const tag = document.createElement("meta");
			Object.keys(tagDef).forEach(key => {
				tag.setAttribute(key, tagDef[key]);
			});
			tag.setAttribute("data-routerMetas", "");
			return tag;
		})
		.forEach(tag => document.head.appendChild(tag));
	next();
});

router.afterEach((to, from) => {
	setTimeout(() => {
		smartquotes();
	}, 301);
});

export default router;
