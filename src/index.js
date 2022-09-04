import "./static/css/style.css";
import {createApp} from 'vue';
import Layui from '@layui/layui-vue'
import '@layui/layui-vue/lib/index.css'

const app = createApp({
    data() {
      return {
        message: 'Hello Vue!'
      }
    }
  });
  app.use(Layui).mount("#app");
