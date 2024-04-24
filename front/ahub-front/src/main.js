import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router/router.js'
import "bootstrap-icons/font/bootstrap-icons.css"


const app = createApp(App)
app.use(router);
app.mount('#app');
app.provide('$axios', axios);

// app.config.globalProperties.$axios = axios;
