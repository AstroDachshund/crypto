import { library } from '@fortawesome/fontawesome-svg-core'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
library.add(far)
library.add(fas)
createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
