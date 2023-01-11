import { createApp } from 'vue';
import Element3 from 'element3';
import 'element3/lib/theme-chalk/index.css';
import './style.css'
import App from './App.vue'
import store  from './store';
import router from './router';

const app = createApp(App);
app
.use(store)
.use(router)
.use(Element3)
.mount('#app')
