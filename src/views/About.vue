<template>
  <div class="about">
    <div class="about-wrap">

      <!-- who we are -->
      <div class="about-us">
        <div class="left">
          <img src="../assets/display/live_trade.webp" alt="live forex trade">
        </div>
        <div class="right">
          <h3>About us</h3>
          <h2>Who we are</h2>
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
            <h3>Education for all</h3>
            <p>We aim to make quality trading education accessible to everyone. Whether you're a beginner or an experienced trader, our diverse range of courses ensures that there's something for every level of expertise </p>
          </div>
          <div class="three card">
            <h3>community growth</h3>
            <p>Foster a community where traders support and uplift each other. We strive to create an environment where shared knowledge and experiences contribute to the collective growth of our community members</p>
          </div>
        </div>
      </div>

      <!-- our-founder-->
      <div class="our-founder">
        <div class="founder-img">
          <img v-lazy="{ src: ourFounder.srcPath, loading: ourFounder.loadingPath, error: ourFounder.errorPath }">
        </div>
        <div class="founder-bio">
          <h2>meet our founder</h2>

          <div class="bio">
            <p>{{ourFounder.paraOne}}</p>

            <p>{{ourFounder.paraTwo}}</p>
            <p>{{ourFounder.paraThree}}</p>
          </div>
        </div>
      </div>

      <!-- fxt quotes -->
     
      <div class="fxt-quotes">
        <div class="quote-wrap">
          <h2>Fxt quotes</h2>
          <fxt-quotes/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';

const ServiceCard = defineAsyncComponent(() => import('@/components/ServiceCard.vue'));

const FxtQuotes = defineAsyncComponent(() => import('@/components/FxtQuotes.vue'));


export default {
  name: 'about',

  components: {
    ServiceCard,
    FxtQuotes
  },

  data () {
    return {
      welcomeNote:{
        paraOne: 'Welcome to Forex Terminators, where education meets empowerment in the dynamic realm of forex trading.',
        paraTwo: 'At Forex Terminators, we believe that anyone can master the art of trading with the right guidance and resources. Our academy is not just about teaching; it\'s about transforming aspiring traders into confident, informed, and successful market participants.'
      },

      ourFounder: {
        paraOne: 'Meet Ken Jay, a 6 figure funded trader who is the founder of Forex terminators. Forex Terminators is a community which is focused on creating  brave and fearless traders who are capable of terminating the financial market',

        paraTwo: `His passion for forex trading began in the year 2020, where he was inspired by all hundreds of dollars made through copytrading`,

        paraThree: `He took a bold step of learning how to trade all by himself rather than copying peoples trade and paying for trading signals. He has achieved a whole lot of things during this passed years of his trading career. Such as developing a proven trading strategy with an 80% win rate which works well on all financial market `,

        srcPath: require('../assets/display/our-founder.webp'),
        loadingPath: require('../assets/display/loading.jpg'),
        errorPath: require('../assets/display/loading.jpg'),
      }
    }
  }
}
</script>

<style lang="scss" scoped>
$green: #0F9464;
$fxt-red-1: #a33333;
$fxt-red-2: #8C0100;


.about {
  @apply  h-full my-6;

  @screen md {
    @apply mt-20;
  }

  .about-wrap {
    @apply flex flex-col gap-y-8 items-center justify-center;

    @screen md {
      @apply gap-y-14
    }


    .about-us {
      @apply flex flex-col gap-4 mx-2 px-2 ;

      @screen md {
        @apply flex-row gap-2 px-6;;
      }
      @screen lg {
        @apply gap-12 mx-16;
      }

      @screen xl {
        @apply mx-44
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
          color: $fxt-red-1;

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
      @apply flex flex-col gap-8 px-2 py-12 bg-[#f2f2f2] justify-center items-center w-full;
      // bg-[#F5FCF9] 
      // bg-[#f3e5e5]
      // bg-[#f6ecec]  

      @screen md {
        @apply  gap-14 px-16 py-20;
      }

      @screen lg {
        @apply px-16 py-14;
      }

      @screen xl {
        @apply px-44
      }
     

      h2{
        @apply text-xl text-black font-semibold leading-[normal] uppercase;

        @screen md {
          @apply text-2xl;
        }

        @screen lg{
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
          @apply text-left text-[#333333] text-sm font-normal leading-[25px] mb-2 ;

          @screen md {
            @apply leading-[30px] tracking-normal;
          }

          @screen lg {
            @apply  text-base font-normal
          }
        }

        .one {
          @apply bg-white;
          // bg-[#DEFCF1]

          @screen lg {
            @apply mb-16;

          }
          &:hover {
            transform: rotateZ(-1deg) scale(1.02);
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
          }

          h3{
            @apply text-[#0F9464];
          }
        }

        .two {
          @apply  bg-[#e5e5e5];
          // @apply  bg-[#F8E7EE];

          @screen lg {
            @apply my-8;
          }

          &:hover {
            transform: rotateZ(1deg) scale(1.02);
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
          }

          h3{
            @apply text-[#a33333];
            // @apply text-[#FF3008];
          }

        }

        .three {
          @apply  bg-[#191919];

          @screen md {
            @apply col-span-2
          }

          @screen lg {
            @apply mt-16 col-span-1;
          }

          &:hover {
            transform: rotateZ(-1deg) scale(1.02);
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
          }

          h3{
            @apply text-white;
          }
          p{
            @apply text-[#f2f2f2]
          }

        }
      }
    }

    .fxt-quotes {
      @apply px-12 py-8  w-full;
      //  border-y-[1px] border-[#a33333]

      @screen md {
        @apply py-10;
      }
      @screen lg {
        @apply px-32;
      }
      @screen xl {
        @apply px-52
      }

      .quote-wrap{
        @apply flex flex-col gap-2 justify-center items-center px-1  border-y-[1px] border-black py-8 h-[280px];

        @screen md {
         @apply px-8 py-12 gap-8 h-[350px];
        }

        h2{
          @apply text-xl font-semibold leading-[normal] uppercase ;

          @screen md {
            @apply text-2xl;
          }

          @screen lg {
            @apply  text-[35px];
          }
        }
      }

    }

    .pricing-plan {
      
    }

    .our-founder {
      @apply flex flex-col mx-2 px-2;

      @screen md {
        @apply flex-row px-6;;
      }
      @screen lg {
        @apply mx-16;
      }
      @screen xl {
        @apply mx-44;
      }

      .founder-img {
        @apply w-full;

        @screen md {
          @apply w-2/5
        }

         img{
          @apply object-cover h-full w-full  rounded-t-3xl;

          @screen md {
            @apply rounded-l-3xl rounded-tr-none
          }
        }
      }

      .founder-bio {
        @apply w-full px-8 py-10 bg-[#ecd6d6] flex flex-col gap-4 rounded-b-3xl;
        // bg-[#DEFCF1]
       

        @screen md {
          @apply px-14 py-20 w-3/5 rounded-r-3xl rounded-bl-none gap-8;
        }

        h2{
          @apply text-xl font-semibold leading-[normal] uppercase;

          @screen md {
            @apply text-xl;
          }

          @screen lg {
            @apply  text-[32px];
          }
        }

        .bio {
          @apply space-y-4;
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
      }
    }
  }
}
</style>
