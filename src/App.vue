<template>
  <div>
    <loading v-if="!showContent"/>
    <div class="app">

      <transition name="scale-fade" mode="out-in" >
        <div v-if="showContent">
          <div id="nav" class="section" ref="nav">
            <navigation />
          </div>
          
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
          <div id="partnership" class="section" ref="partnership">
            <partnership/>
          </div>
          <div id="faq" class="section" ref="faq">
            <faq/>
          </div>

          <foot-note/>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';

import Navigation from '@/components/Navigation.vue';
import FootNote from '@/components/FootNote.vue';

const About = defineAsyncComponent(() => import('@/views/About.vue'));
const HomeView = defineAsyncComponent(() => import('@/views/HomeView.vue'));
const Blog = defineAsyncComponent(() => import('@/views/Blog.vue'));
const Partnership = defineAsyncComponent(() => import('@/views/Partnership.vue'));
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
    Partnership
  },

  data() {
    return {
      showContent: false,
      observer: null
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
  },
}
</script>

<style lang= "scss">
@import url('https://fonts.googleapis.com/css2?family=Goudy+Bookletter+1911&display=swap');
@import url('https://fonts.cdnfonts.com/css/goudy-old-style');
@import url('https://fonts.cdnfonts.com/css/rockwell-nova');

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

.show {
  @apply hidden;
}

.btn{
  @apply  text-white bg-[#8C0100] py-3  px-4 transition-colors duration-500 ease-in-out text-base font-normal tracking-wide rounded-3xl;

  @screen sm {
    @apply px-6;
  }

  @screen md {
    @apply max-w-[250px] text-xl font-semibold;
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
