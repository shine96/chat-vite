import { createApp } from 'vue'
import './style.css'
import './tailwind.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router/index'

const pinia = createPinia()

createApp(App)
.use(pinia)
.use(router)
.mount('#app')
