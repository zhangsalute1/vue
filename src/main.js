import { createApp } from 'vue'
import App from './App.vue'

import { createPinia } from 'pinia'
import Antd from 'ant-design-vue';
const pinia = createPinia()

createApp(App).use(Antd).use(pinia).mount('#app')
