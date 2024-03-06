<template>
 <div class="home">
    <div class="home-wrap">
      <div class="landing-text">
        <h3>master forex with ease</h3>
        <h2>Your Gateway To Simplicity and Profitability at Forex Terminators</h2>
        <p>Anyone can master the art of trading with the right guidance and resources. Our academy is here to transform aspiring traders into confident, informed, and successful market participants</p>
        <base-button :title= " 'Enrol Now' " class="btn" @click="scrollToSection('pricing')"/>
      </div>
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
  @apply min-h-[468px] object-cover  pt-6;
  // background: url('../assets/display/Frame 227.png') lightgray 50% / cover no-repeat;
  background: #f6ecec;
  background-position: top center;
  // clip-path: polygon(0 0, 100% 0, 100% 40%, 0 40%);

  @screen sm {
    @apply min-h-[520px]
  }

  @screen md {
    @apply  min-h-[668px];
  }

  .home-wrap{
    @apply flex flex-col mt-8 mx-2  h-full pt-6;

    @screen md {
      @apply mt-14 mx-6;
    }

    @screen lg {
      @apply  mx-8 px-10
    }
    @screen xl {
      @apply mx-52
    }

    .landing-text {
      @apply max-w-[900px] flex flex-col justify-center text-left px-4 gap-y-4;

      @screen md {
        @apply gap-y-6 px-10
      }

      @screen lg {
        @apply gap-y-8 max-w-[1050px];
      }
      
      h2,p {
        color: black !important;
        
      }

      h3{
        // color: #8C0100!important;
        color: #a33333 !important;
      }

      h2{
        @apply text-[22px] font-extrabold;
        word-wrap: break-word;
        letter-spacing: 0.5px;

        @screen sm {
          @apply text-[45px];
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
        @apply text-lg uppercase font-medium;
        // color: #D9D9D9;

        @screen md {
          letter-spacing: 1.24px;
        }
      }

      p{
        @apply text-sm font-normal leading-[22px] break-words tracking-wide;

        @screen sm {
          @apply text-base leading-8;
        }
    
      }

      .btn{
        @apply max-w-full my-6;

        @screen md {
          @apply max-w-[150px]
        }
      }
    }
  }
  
}
</style>