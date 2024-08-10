import { createApp } from 'vue'
import {  library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome' 

library.add(fas)


import App from './App.vue'

createApp(App).component('fa',FontAwesomeIcon )
.mount('#app')
