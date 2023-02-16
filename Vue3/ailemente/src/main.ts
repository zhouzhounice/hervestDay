import { createApp } from 'vue'
import './style.css'
import App from './App.vue';
import ElContainer from './components/container/index.js'

createApp(App)
.use(ElContainer)
.mount('#app')
