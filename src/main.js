import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import VueLazyLoad from 'vue3-lazyload'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import './assets/tailwind.css'

//global component

import BaseLoading from './components/UI/BaseLoading.vue';
import BaseButton from '@/components/UI/BaseButton.vue'


library.add(fas, far, fab)

const app = createApp(App);

app.component('fa-icon', FontAwesomeIcon);
app.component('loading', BaseLoading);
app.component('base-button', BaseButton);

app.use(VueLazyLoad, {
  // options...
})
app.use(router);
app.mount('#app')
