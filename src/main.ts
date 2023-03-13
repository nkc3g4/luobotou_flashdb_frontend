import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import 'virtual:windi.css'
import urql from '@urql/vue';

const app= createApp(App)
.use(ElementPlus)
.use(urql, {
    url: 'http://alley.luobotou.org:8585/graphql',
  })
.mount('#app')

