<template>
  <div>
    <loading v-if="!showContent"/>
    <div class="app">
      
      <navigation />

      <transition name="scale-fade" mode="out-in" >
        <div v-if="showContent">
          <div id="home" class="section" ref="home">
            <home-view/>
          </div>
          <div id="about" class="section" ref="about">
            <about/>
          </div>
          <div id="pricing" class="section" ref="pricing">
            <pricing/>
          </div>
          <div id="fxt-store" class="section" ref="fxt-store">
            <fxt-store/>
          </div>
          <div id="blog" class="section" ref="blog">
            <blog/>
          </div>
          <div id="faq" class="section" ref="faq">
            <faq/>
          </div>
        </div>
      </transition>
  
      <foot-note/>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';

import Navigation from '@/components/Navigation.vue';
import FootNote from '@/components/FooterNote.vue';

const About = defineAsyncComponent(() => import('@/views/About.vue'));
const HomeView = defineAsyncComponent(() => import('@/views/HomeView.vue'));
const Blog = defineAsyncComponent(() => import('@/views/Blog.vue'));
const Faq = defineAsyncComponent(() => import('@/views/Faq.vue'));
const FxtStore = defineAsyncComponent(() => import('@/views/FxtStore.vue'));
const Pricing = defineAsyncComponent(() => import('@/views/Pricing.vue'));


export default {
  name: 'app',

  components: {
    Navigation,
    About,
    HomeView,
    Blog,
    Faq,
    FxtStore,
    Pricing,
    FootNote
  },

  data() {
    return {
      showContent: false,
    }
  },

  mounted() {
    setTimeout(() => {
      this.showContent = true;
    }, 1000);
  },



  methods: {
    scrollToSection(sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    },

    // ...mapActions(['scrollToSection']),
  },
}
</script>

<style lang= "scss">
@import url('https://fonts.googleapis.com/css2?family=Goudy+Bookletter+1911&display=swap');
/* @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&family=Montserrat:wght@400;500&display=swap'); */

$green: #5AEEB9;

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: "Goudy Bookletter 1911", serif;
  /* color: black; */
}

.app {
  min-height: 100vh;
  background-color: inherit;
  overflow-x: hidden;
}

.active {
  border-bottom: 1px solid #8C0100;
}

section:target {
  /* Add your styles here */
  border-bottom: 1px solid #8C0100;
}

/* .section {
  border-bottom: 1px solid #191919;
} */

.scale-fade-enter-active,
.scale-fade-leave-active {
  transition: transform 1s ease, opacity 1s ease;
}

.scale-fade-enter-from {
  /* transform: scale(0.8); */
  transform: translateY(20px);
  opacity: 0;
}
</style>
