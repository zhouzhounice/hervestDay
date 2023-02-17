import { createApp } from 'vue'
import './style.css'
import App from './App.vue';
import ElContainer from './components/container/index.js'
import ElButton from './components/button'

createApp(App)
.use(ElContainer)
.use(ElButton)
.mount('#app')
