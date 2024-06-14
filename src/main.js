import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { MotionPlugin } from '@vueuse/motion'

import store from './store'

import VueLazyLoad from 'vue3-lazyload'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope, faPhone, faBarsStaggered, faArrowRight, faCaretUp, faSortDesc, faChartLine, faGlobe, faPeopleGroup, faHeadset, faCircleQuestion, faNewspaper,faHouse } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { faXTwitter, faFacebook, faInstagram, faYoutube, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import './assets/tailwind.css'
import AnimatedCounter from "vue-animated-counter"
//global component

import BaseLoading from './components/UI/BaseLoading.vue';
import BaseButton from '@/components/UI/BaseButton.vue';


library.add(faEnvelope, faPhone, faBarsStaggered, faArrowRight, faCaretUp, faSortDesc, faChartLine, faGlobe, faPeopleGroup, faHeadset, faCircleQuestion, faNewspaper,faHouse ,
   far,  
   faXTwitter, faFacebook, faInstagram, faYoutube, faWhatsapp )

const vueApp = createApp(App);

vueApp.component('fa-icon', FontAwesomeIcon);
vueApp.component('loading', BaseLoading);
vueApp.component('base-button', BaseButton);
vueApp.component("AnimatedCounter", AnimatedCounter);

vueApp.use(VueLazyLoad, {
  loading: '',
  error: '',
})

vueApp.use(MotionPlugin)
vueApp.use(store);
vueApp.use(router);
vueApp.mount('#app');
