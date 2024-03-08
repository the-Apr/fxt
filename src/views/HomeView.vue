<template>
 <div class="home">
    <div class="home-wrap">
      <div class="landing-text">
        <h2>Master Forex with Ease: Your Gateway To Simplicity and Profitability at Forex Terminators</h2>
        <button class="btn" @click="scrollToSection('pricing')">
          Become an FXT Trader
        </button>
       
      </div>

      <div class="bulb">
        <img src="../assets/display/bulb.png" alt="">
      </div>
    </div>

    <p class="b-now">Journey in mastering Forex Begins Now!</p>
    

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
  @apply  pt-6 flex flex-col justify-center items-center;
  background-position: top center;
  
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
          @apply text-[30px];
          letter-spacing: 1.32px;
          line-height: 57px;
        }

        @screen md {
          @apply text-[35px];
          letter-spacing: 2.32px;
          line-height: 67px;
        }

        @screen xl {
          @apply text-[53px]
        }
      }

      

      .btn{
        @apply max-w-full my-6 bg-white text-black border border-[#8C0100] p-4 rounded-2xl transition-colors duration-500 ease-in-out text-lg font-medium;

        @screen md {
          @apply max-w-[250px] text-lg font-semibold;
        }

        &:hover{
          @apply  text-white bg-[#8C0100];
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

  .b-now{
    @apply text-base font-normal text-center border-b pb-4 leading-[22px] break-words tracking-wide w-2/3 flex justify-center items-center;

    @screen sm {
      @apply text-lg leading-8;
    }

    @screen md{
      @apply text-2xl;
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