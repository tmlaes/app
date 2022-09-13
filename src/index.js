import 'view-ui-plus/dist/styles/viewuiplus.css'
import "./static/css/style.css";
import {createApp,ref} from 'vue';
import router from './static/js/router';
import ViewUIPlus from 'view-ui-plus';
import mymenu from './static/html/menu.vue';

const axios = require('axios');

const app= createApp({
	setup() {
		const menuname = ref('4');
		const changemenu = (val) => {
		      menuname.value = val
		    }
		return {changemenu,menuname}
	},
	data() {
		return {
			selectedKey:"3",
			openKey:"2",
			message: 'Hello Vue!'
		}
	},
	methods: {
		test() {
			alert(this.menuname);
			// axios.get("/api/test/test").then(res => {
			// 	this.message = res.data;
			// });
		},
	}
});
app.config.globalProperties.axios=axios;
app.component('my-menu',  mymenu);
app.use(router);
app.use(ViewUIPlus).mount("#app");
