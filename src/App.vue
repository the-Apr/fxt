<template>
  <div>
    <loading v-if="!showContent"/>
    <div class="app">

      <transition name="scale-fade" mode="out-in" >
        <div v-if="showContent">
          <navigation />

          
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

          <foot-note/>
        </div>
      </transition>
  
      <cookie></cookie>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';

import Navigation from '@/components/Navigation.vue';
import FootNote from '@/components/FootNote.vue';
import Cookie from './components/Cookie.vue';

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
    FootNote,
    Cookie
  },

  data() {
    return {
      showContent: false,
      currentSection: null,
      observer: null
    }
  },

  mounted() {
    setTimeout(() => {
      this.showContent = true;
    }, 1000);

    // Initialize IntersectionObserver
    this.observer = new IntersectionObserver(this.handleIntersection, { threshold: 0.5 });
    
    // Observe each section
    Object.values(this.$refs).forEach(ref => {
      this.observer.observe(ref);
    });
  },



  methods: {
    scrollToSection(sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    },

    handleIntersection(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Set the current section based on the intersection
          this.currentSection = entry.target.id;
          console.log(entry.target.id)
        }
      });
    },

  },
}
</script>

<style lang= "scss">
@import url('https://fonts.googleapis.com/css2?family=Goudy+Bookletter+1911&display=swap');

$green: #5AEEB9;

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: "Goudy Bookletter 1911", serif;
  
}

.app {
  min-height: 100vh;
  background-color: inherit;
  overflow-x: hidden;
}

.btn{
  @apply max-w-full my-2 text-white bg-[#8C0100] py-2  px-6 rounded-2xl transition-colors duration-500 ease-in-out text-lg font-normal tracking-wide;

  @screen md {
    @apply max-w-[250px] text-2xl font-medium py-4  px-8;
  }

  &:hover{
    @apply bg-white text-black border border-[#8C0100];
  }
}

.scale-fade-enter-active,
.scale-fade-leave-active {
  transition: transform 1s ease, opacity 1s ease;
} 

.scale-fade-enter-from {
  transform: scale(0.8);
  transform: translateY(20px);
  opacity: 0;
}

</style>
