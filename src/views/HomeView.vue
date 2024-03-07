<template>
 <div class="home">
    <div class="home-wrap">
      <div class="landing-text">
        <h2>Master Forex with Ease: Your Gateway To Simplicity and Profitability at Forex Terminators</h2>
        <p>Anyone can master the art of trading with the right guidance and resources. Our academy is here to transform aspiring traders into confident, informed, and successful market participants</p>
        <button class="btn" @click="scrollToSection('pricing')">
          Become an FXT Trader
        </button>
      </div>

      <div class="bulb">
        <img src="../assets/display/bulb.png" alt="">
      </div>
    </div>

    <div class="dollar">
      <img src="../assets/display/dollar.png" alt="">
    </div>
 </div>
</template>

<script>


export default {
  name: 'HomeView',
  components: {
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
  @apply object-cover  pt-6;
  // background: url('../assets/display/Frame 227.png') lightgray 50% / cover no-repeat;
  // background: #f6ecec;
  background-position: top center;
  // clip-path: polygon(0 0, 100% 0, 100% 40%, 0 40%);

  .home-wrap{
    @apply  mt-8 mx-2  h-full pt-6 z-40 relative;

    @screen md {
      @apply mt-14 mx-6;
    }

    @screen lg {
      @apply  mx-8 px-10 flex flex-row;
    }
    @screen xl {
      @apply mx-32
    }

    .landing-text {
      @apply  flex flex-col justify-center text-left px-4 gap-y-4 w-full;

      @screen md {
        @apply gap-y-6 px-10;
      }

      @screen lg {
        @apply gap-y-8 px-4 w-3/5;
        
      }
      
      h2,p {
        color: black !important;
        
      }

      h3{
        // color: #8C0100!important;
        color: black !important;
      }

      h2{
        @apply text-[22px] font-bold;
        word-wrap: break-word;
        letter-spacing: 0.5px;

        @screen sm {
          @apply text-[40px];
          letter-spacing: 1.32px;
          line-height: 57px;
        }

        @screen md {
          
          letter-spacing: 2.32px;
          line-height: 67px;
        }

        @screen xl {
          @apply text-[60px]
        }
      }

      h3 {
        @apply text-base uppercase font-medium;
        // color: #D9D9D9;

        @screen md {
          letter-spacing: 1.24px;
        }
      }

      p{
        @apply text-base font-normal leading-[22px] break-words tracking-wide;

        @screen sm {
          @apply text-lg leading-8;
        }

        @screen md{
          @apply text-2xl;
        }
    
      }

      .btn{
        @apply max-w-full my-6 text-white bg-[#8C0100] p-4 rounded-2xl transition-colors duration-500 ease-in-out text-lg font-medium;

        @screen md {
          @apply max-w-[250px] text-lg font-semibold;
        }

        &:hover{
          @apply bg-white text-black border border-[#8C0100];
        }
      }
    }

    .bulb{
      @apply hidden ;

      @screen lg{
        @apply block w-2/5;
      }

      img{
        @apply object-cover
      }
    }
  }

  .dollar{
    @apply absolute hidden left-72 top-52 z-10;

    @screen lg {
      @apply block;
    }

    img{
      @apply object-cover h-[300px];
    }
  }

}
</style>