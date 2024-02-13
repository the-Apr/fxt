<template>
<header :class="{'products-bg': $route.name === 'products' }">
  <nav class="nav-wrap" :class="{'products-bg': $route.name === 'products' }">

    <!-- RS logo -->
    <div class="branding">
      <router-link class="" :to="{name: 'home'}">
        <img src="" alt="">
      </router-link>
    </div>

    <!-- nav links -->
    <div class="nav-links">
      <ul v-show="!mobile">
        <router-link class="link" :class="{ active: isActive('') }" :to="{name: 'products'}">Products</router-link>
        <router-link class="link" :class="{ active: isActive('') }" :to="{}">Media</router-link>
        <router-link class="link" :class="{ active: isActive('about') }" :to="{name: 'about'}">About Us</router-link>
        <router-link class="link" :class="{ active: isActive('') }" :to="{}">Help</router-link>
      </ul>
    </div>
    <div class="nav-button" v-show="!mobile">
      <router-link :to="{name: 'create-account'}">
        <nav-button>Create Account </nav-button>
      </router-link>
    </div>
  </nav>

  <!-- mobile nav -->

  <fa-icon 
    :icon="['fas', 'bars']" 
    class="menu-icon" 
    @click="toggleNav" 
    v-show="mobile"
  />
  <transition name="mobile-nav" >
    <div class="mobile-wrap" v-show="mobileNav" ref="mobileWrap" @click="checkClick">
      <div class="mobile-nav">

        <!-- rockshield logo -->
        <div class="branding">
          <router-link @click="mobileNavClick" class="" :to="{name: 'home'}">
            <img src="" alt="">
          </router-link>
        </div>

        <!-- navigation -->
        <div class="nav-body">
          <ul>
            <router-link @click="mobileNavClick" class="link" :to="{name: 'products'}">Products</router-link>
            <router-link @click="mobileNavClick" class="link" :to="{}">Media</router-link>
            <router-link  @click="mobileNavClick" class="link" :to="{name: 'about'}">About Us</router-link>
            <router-link @click="mobileNavClick" class="link" :to="{}">Help</router-link>
          </ul>

          <!-- social media -->
          <div class="socials">
            <a href="https://www.instagram.com/rockshieldmfb/?igshid=YmMyMTA2M2Y%3D" target="_blank">
              <fa-icon :icon="['fab', 'instagram']" class="icon" />
            </a>
            <a href="https://www.facebook.com/RockshieldMFB" target="_blank">
              <fa-icon :icon="['fab', 'facebook']" class="icon" />
            </a>
            <a href="https://twitter.com/rockshieldmfb" target="_blank">
              <fa-icon :icon="['fab', 'x-twitter']" class="icon" />
            </a>
            <a href="https://www.linkedin.com/in/rockshieldmfb/" target="_blank">
              <fa-icon :icon="['fab', 'linkedin']" class="icon" />
            </a>
          </div>
        </div> 

        
      </div>
    </div>
  </transition>
</header> 
</template>

<script>
import { defineAsyncComponent } from 'vue';

const NavButton = defineAsyncComponent(() => import('@/components/UI/BaseButton.vue'));


export default {
  name: 'navigation',

  components: {
    NavButton,
  },

  data() {
    return {
      mobile: null,
      mobileNav: null,
      windowWidth: null,
    }
  },

  created() {
    window.addEventListener('resize', this.checkScreen);
    this.checkScreen();
  },

  computed : {},

  methods: {
    // check which navigation is active
    isActive(routeName) {
      return this.$route.name === routeName;
    },


    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 980) {
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.mobileNav = false;
      return;
    },

    toggleNav() {
      this.mobileNav = !this.mobileNav;
      if (this.mobileNav) {
        // Prevent scrolling when the mobile nav is active
        document.body.style.overflow = 'hidden';
      } else {
        // Restore scrolling when the mobile nav is closed
        document.body.style.overflow = '';
      }
    },

    checkClick(e) {
      if(e.target === this.$refs.mobileWrap) {
        this.toggleNav();
      }
    },

    mobileNavClick() {
      this.toggleNav();
    }
  }
} 
</script>

<style lang="scss" scoped>
header {
  @apply fixed w-full;
  z-index: 99;
  background: rgba(255, 255, 255, 0.8); 
  backdrop-filter: blur(10px); 
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06) ;

  .nav-wrap {
    @apply flex items-center justify-between px-6 py-3;

    @screen sm{
      @apply py-6 px-12
    }

    @screen md{
      @apply py-6 px-16
    }
  }

  .products-bg {
    // background-color: linear-gradient(90deg, #ff9a9e 0%, #fad0c4 100%) !important
    @apply bg-transparent;
    background-color: #ffcdc2;
    backdrop-filter: blur(10px); 
  }
}

.link{
  @apply font-medium py-0 px-2 no-underline pb-2;
  // transition: .6s color ease-in;
  color: #000;

  &:hover,
  &.active {
    // color: #00ABF1;
    @apply border-b-2 border-b-[#00ABF1] duration-1000 ease-in origin-left transition-transform transform;
  }
}



.branding {
  @apply flex items-center;

  img {
    @apply object-cover;
    height: 35px;

    @screen md {
      height: 40px;
    }
  }
}
.header {
  @apply font-semibold text-lg text-black
}

.nav-links {
  @apply relative flex items-center justify-center flex-1;

  ul {
    .link {
      margin-right: 32px
    }
    .link:last-child {
      margin-right: 0;
    }
  }
}


.menu-icon {
  @apply cursor-pointer absolute top-4 right-12 h-6 w-auto;

  @screen sm {
    @apply top-7 h-7
  }

  @screen md {
    @apply top-7 right-16 
  }
}

.mobile-wrap {
  @apply  fixed top-0 left-0 w-full bg-transparent;
  z-index: 99;
  height: 100vh;
  

  .mobile-nav {
    @apply flex flex-col w-4/6 p-5 gap-y-10;
    background-color: #303030;
    max-width: 230px;
    height: 100%;

    .nav-body{
      @apply flex flex-col justify-between gap-6 h-full ;
      ul{
        @apply  flex flex-col;
      
        .link {
          @apply mb-2 text-white text-left
        }
      } 

      .socials {
        @apply justify-center text-end flex gap-4;

        .icon{
          @apply h-4 w-4;
          color: white;
        }
      }
    }
    
  }

  
  
}

// .mobile-overlay {
//   @apply fixed top-0 left-0 w-full bg-transparent;
//   height: 100%;
//   z-index: 2;
//   // background-color: rgba(0, 0, 0, 0.5);
// }



.mobile-nav-enter-active,
.mobile-nav-leave-active {
  transition: all 1s ease;
}

.mobile-nav-enter-from {
  transform: translateX(-250px);
}
.mobile-nav-enter-to {
  transform: translateX(0);
}
.mobile-nav-leave-to {
  transform: translateX(-250px);
}
</style>
