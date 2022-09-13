import {createRouter,createWebHistory} from 'vue-router';

//home
import home from '../html/home.vue';

const files = require.context('../html', true, /.vue$/);
let reg = /\//g;
let routerAry = []
files.keys().forEach(fileName => {
	if (fileName.match(reg).length > 1) {
		let name = files(fileName);
		let path = "/" + fileName.substring(2, fileName.length - 4)
		routerAry.push({
			path,
			component: name.default
		})
	}
})

const routerList = [{
		path: "/",
		redirect: "/home"
	},
	{
		path: "/home",
		component: home
	}
]
const routers = routerList.concat(routerAry);
const router = createRouter({
	history: createWebHistory(),
	routes: routers,
})

export default router
