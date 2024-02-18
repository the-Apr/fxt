<template>
  <div class="about">
    <div class="about-wrap">

      <!-- About- welcome note -->
      <!-- <div class="welcome-note">
        <p>{{ welcomeNote.paraOne }}</p>

        <p>{{ welcomeNote.paraTwo }}</p>
      </div> -->

      <!-- our founder -->
      <!-- <div class="our-founder">
        <div class="founder-details">
          <h2>Our Founder</h2>
          <p>{{ourFounder.paraOne}}</p>
          <p>{{ourFounder.paraTwo}}</p>
        </div>

        <div class="founder-img">
          <img v-lazy="{ src: ourFounder.srcPath, loading: ourFounder.loadingPath, error: ourFounder.errorPath }">

          <p>Ken Jay,
            <span>CEO Forex Terminators</span>
          </p>
        </div>
      </div> -->

      <!-- who we are -->
      <div class="about-us">
        <div class="left">
          <img src="../assets/display/live_trade.png" alt="live forex trade">
        </div>
        <div class="right">
          <h3>About us</h3>
          <h2>Who are we?</h2>
          <p>{{welcomeNote.paraOne}} <br> {{welcomeNote.paraTwo}}</p>
          <div class="cards">
            <service-card> </service-card>
          </div>
        </div>
      </div>

      <!-- our goals -->
      <div class="our-goals">
        <h2>Our Goals</h2>
        <div class="goals-card">
          <div class="one card">
            <h3>empowerment</h3>
            <p>Our primary goal is to empower individuals to take control of their financial future through informed and strategic trading decisions. We believe that financial empowerment leads to greater personal freedom.</p>
          </div>
          <div class="two card">
            <h3>empowerment</h3>
            <p>Our primary goal is to empower individuals to take control of their financial future through informed and strategic trading decisions. We believe that financial empowerment leads to greater personal freedom.</p>
          </div>
          <div class="three card">
            <h3>empowerment</h3>
            <p>Our primary goal is to empower individuals to take control of their financial future through informed and strategic trading decisions. We believe that financial empowerment leads to greater personal freedom.</p>
          </div>
        </div>
      </div>

      <!-- pricing-plan -->
      <div class="pricing-plan">
        <pricing-plan/>
      </div>

      <!-- your journey -->
      <div class="your-journey"></div>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';

const ServiceCard = defineAsyncComponent(() => import('@/components/ServiceCard.vue'));

const PricingPlan = defineAsyncComponent(() => import('@/components/PricingPlan.vue'));


export default {
  name: 'about',

  components: {
    ServiceCard,
    PricingPlan,
  },

  data () {
    return {
      welcomeNote:{
        paraOne: 'Welcome to Forex Terminators, where education meets empowerment in the dynamic realm of forex trading.',
        paraTwo: 'At Forex Terminators, we believe that anyone can master the art of trading with the right guidance and resources. Our academy is not just about teaching; it\'s about transforming aspiring traders into confident, informed, and successful market participants.'
      },

      ourFounder: {
        paraOne: 'Kenenna Onyechi, who is popularly known as Ken Jay is a financial trader who was born and brought up in Lagos state, Nigeria. Ken Jay is a from Anambra state and is a graduate of Crawford University. His passion for forex trading began in the year 2020, where  he was inspired from all hundreds of dollars made through copytrading.',

        paraTwo: `He took a bold step of learning how to trade all by himself Rather than copying peoples trade and paying for signal groups. Ken Jay is a self taught trader who believes.
        He is the CEO of forex terminators, forex terminators is a community which is focused on creating fearless and brave traders who is capable of terminating the forex market they believe the own the market and they are the Forex terminators`,

        srcPath: require('@/assets/display/candle.jpg'),
        loadingPath: require('@/assets/display/loading.jpg'),
        errorPath: require('@/assets/display/loading.jpg'),
      }
    }
  }
}
</script>

<style lang="scss" scoped>
$green: #0F9464;

.about {
  @apply  h-full my-6;

  @screen md {
    @apply mt-20;
  }

  .about-wrap {
    @apply flex flex-col gap-y-8 items-center justify-center ;


    .about-us {
      @apply flex flex-col gap-4 mx-2 px-2 ;

      @screen md {
        @apply flex-row gap-2 px-6;;
      }
      @screen lg {
        @apply gap-12 mx-20;
      }

      .left {
        @apply rounded-2xl ;

        @screen md {
          @apply  border border-[#bfbfbf] p-2 w-1/2; 
        }

        img{
          @apply object-cover h-full w-full  rounded-2xl;
        }
      }

      .right {
        @apply space-y-2 p-4 text-left;

        @screen md {
          @apply space-y-4 p-6 w-1/2;
        }

        h3{
          @apply text-base font-semibold uppercase leading-normal;
          color: $green;

          @screen md {
            @apply text-[20px];
          }

          // @screen lg {
          //   @apply  text-[35px];
          // }

        }

        h2{
          @apply text-xl font-semibold leading-[normal] uppercase;

          @screen md {
            @apply text-2xl;
          }

          @screen lg {
            @apply  text-[35px];
          }
        }

        p{
          @apply text-left text-sm font-normal leading-[22px] mb-2 ;

          @screen md {
            @apply leading-[30px] tracking-wider;
          }

          @screen lg {
            @apply  text-base font-normal
          }
        }

        .cards {
          @apply px-1 py-4
        }
      }
    }

    .our-goals {
      @apply flex flex-col gap-8 px-2 py-12 bg-[#F5FCF9] justify-center items-center;

      @screen md {
        @apply  gap-14 px-16 py-20;
      }

      @screen lg {
        @apply px-20 py-14;
      }

      h2{
        @apply text-xl font-semibold leading-[normal] uppercase;

        @screen md {
          @apply text-2xl;
        }

        @screen lg {
          @apply  text-[35px];
        }
      }

      .goals-card {
        @apply grid grid-flow-row-dense grid-cols-1 gap-4 justify-items-center mx-1;

        @screen md {
          @apply grid-cols-2;
        }
        @screen lg {
          @apply grid-cols-3;
        }

        .card{
          @apply px-6 py-10 space-y-3 rounded-xl
        }

        h3{
          @apply text-base font-semibold uppercase leading-normal;

          @screen md {
            @apply text-[20px];
          }
        }

        p{
          @apply text-left text-sm font-normal leading-[25px] mb-2 ;

          @screen md {
            @apply leading-[30px] tracking-normal;
          }

          @screen lg {
            @apply  text-base font-normal
          }
        }

        .one {
          @apply bg-[#DEFCF1];

          @screen lg {
            @apply mb-16;
          }

          h3{
            @apply text-[#0F9464];
          }
        }

        .two {
          @apply  bg-[#F8E7EE];

          @screen lg {
            @apply my-8;
          }

          h3{
            @apply text-[#FF3008];
          }

        }

        .three {
          @apply  bg-[#DDEAF0];

          @screen md {
            @apply col-span-2
          }

          @screen lg {
            @apply mt-16;
          }

          h3{
            @apply text-[#2B8481];
          }
        }
      }
    }
  }
}
</style>
