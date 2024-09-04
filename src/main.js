import { createApp } from 'vue'
import {  library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome' 

library.add(fas)


import App from './App.vue'
import router from '@/Router'

createApp(App).component('fa',FontAwesomeIcon )
.use(router)
.mount('#app')
