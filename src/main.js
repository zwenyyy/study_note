import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import '@/utils/dialog'

import './assets/styles/common.css'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

createApp(App).use(store).use(router).use(ElementPlus).mount('#app')
