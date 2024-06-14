<template>
  <div class="home">
    <div class="home-wrap">
      <div class="landing-text" v-motion-slide-visible-top>
        <h2>Master Forex with Ease: Your Gateway To Simplicity and Profitability at Forex Terminators</h2>
        <button class="btn1 gradient-underline" @click="scrollToSection('pricing')">
          <p><span class="text-[#8C0100]">FXT</span> Free Resources</p>
        </button>

      </div>

      <div class="trend" v-motion-slide-visible-right>
        <img src="../assets/display/trend.png" alt="">
      </div>
    </div>

    <div class="">
      <p class="b-now">Journey in Mastering Forex Begins Now!</p>
      <div class="gradient1"></div>
    </div>

    <!-- who we are -->
    <div class="about-us">
      <div class="cards">
        <service-card> </service-card>
      </div>

    </div>

    <img src="../assets/icon/plan-gradient.png" alt="" class="gradient">
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';

const ServiceCard = defineAsyncComponent(() => import('@/components/ServiceCard.vue'));


export default {
  name: 'HomeView',
  components: {
    ServiceCard,
  },

  methods: {
    scrollToSection(sectionId) {
      this.$root.scrollToSection(sectionId);
    },
  }


}
</script>

<style lang="scss" scoped>
.home {
  @apply flex  flex-col justify-center items-center w-full bg-black relative;
  background-position: top center;

  @screen xll {
      @apply h-screen gap-7
    }

  .home-wrap {
    @apply mt-1 pt-6 z-40 relative;

    @screen md {
      @apply mt-2 mx-6;
    }

    @screen lg {
      @apply mx-8 px-10 flex flex-row items-center;
    }

    @screen xl {
      @apply mx-20;
    }

    @screen xll {
      @apply mx-32
    }

    .landing-text {
      @apply flex flex-col justify-center text-left gap-y-4 w-full;

      @screen md {
        @apply gap-y-6 px-10;
      }

      @screen lg {
        @apply gap-y-8 px-4 w-3/5;

      }

      h2,
      p {
        color: white;

      }

      h3 {
        // color: #8C0100!important;
        color: white;
      }

      h2 {
        @apply text-[19px] text-center font-bold transition-transform duration-500;
        word-wrap: break-word;


        @screen sm {
          @apply text-[25px] text-center;
          letter-spacing: 1.32px;
          line-height: 57px;
        }

        @screen md {
          @apply text-[35px];
          letter-spacing: 2.32px;
        }

        @screen xl {
          @apply text-[53px];
          letter-spacing: 0.5px;
        }
      }

      .about-us {
      @apply flex flex-col gap-4 bg-black text-white;

      @screen md {
        @apply flex-row gap-2 justify-center w-full pb-8;
      }

      @screen lg {
        @apply gap-12;
      }




      .cards {
        @apply px-1 py-4;
        z-index: 50;
      }

    }

      .btn1 {
        @apply w-[395px] my-6 bg-black text-white border p-4 rounded-[15px] transition-colors duration-500 ease-in-out text-lg font-medium;

        display: flex;
        justify-content: center;
        position: relative;
        box-sizing: border-box;
        border: 1px;
        background-clip: padding-box;

        /* !importanté */
        &:before {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          z-index: -1;
          margin: -1px;
          border-radius: inherit;
          /* !importanté */
          background: linear-gradient(to right, #FFFFFF, #8C0100);
        }

        @screen md {
          @apply max-w-[250px] text-lg font-semibold;
        }
      }

      .gradient-underline::after {
        content: '';
        position: absolute;
        left: 18%;
        bottom: 20px;
        width: 63%;
        margin: auto;
        height: 1px;
        background: linear-gradient(to right, #8C0100, #FFFFFF);
        transform: scaleX(0);
        transform-origin: bottom right;
        transition: transform 0.3s ease;
      }

      .gradient-underline:hover::after {
        transform: scaleX(1);
        transform-origin: bottom left;
      }
    }

    .trend {
      @apply hidden;

      @screen lg {
        @apply block w-[35%];
      }

      img {
        @apply object-cover transition;

        
      }
    }
  }

  .gradient1 {
    width: 300px;
    height: 1px;
    background: linear-gradient(to right, transparent 10%, gray 20%, gray 20%, gray 70%, transparent 90%);
    @screen lg {
      width: 700px;
    }
  }

  .b-now {
    @apply text-base font-normal text-white text-center py-8 leading-[22px] break-words tracking-wide w-full flex justify-center items-center overflow-hidden whitespace-nowrap;
    animation:
      typing 9s,
      cursor .4s step-end infinite alternate;

    // cursor blinking
    @keyframes cursor {
      50% {
        border-color: transparent
      }
    }

    // typing effect
    @keyframes typing {
      0% {
        width: 0;
      }

      100% {
        width: 100%;
      }
    }

    @screen sm {
      @apply text-lg leading-8;
    }

    @screen md {
      @apply text-2xl;
    }

  }

  .dollar {
    @apply absolute hidden left-72 top-52 z-10;

    @screen lg {
      @apply block;
    }

    img {
      @apply object-cover h-[300px];
    }
  }

  .gradient {
    display: none;
    @screen lg {
      @apply block absolute bottom-[-118px] right-0
    }
  }
}
</style>