<template>
 <div class="home">
    <div class="home-wrap">
      <div class="landing-text">
        <h3>learn forex with ease</h3>
        <h2>Simplicity and Profitability at Forex Terminators</h2>
        <p>Anyone can master the art of trading with the right guidance and resources. Our academy is here to transform aspiring traders into confident, informed, and successful market participants</p>
        <base-button :title= " 'Start Now' " class="btn" />
      </div>
    </div>
 </div>
</template>

<script>


export default {
  name: 'HomeView',
  components: {
    
  },


}
</script>

<style lang="scss" scoped>
.home {
  @apply max-h-[568px] object-cover  pt-6;
  background: url('../assets/display/Frame 227.png') lightgray 50% / cover no-repeat;
  background-position: top center;
  // clip-path: polygon(0 0, 100% 0, 100% 40%, 0 40%);

  @screen md {
    @apply  h-[1268px];
  }

  .home-wrap{
    @apply flex flex-col my-8 mx-2  h-full py-6;

    @screen md {
      @apply my-14 mx-6
    }

    .landing-text {
      @apply max-w-[900px] flex flex-col justify-center text-left px-4 gap-y-4;

      @screen md {
        @apply gap-y-6 px-12
      }

      @screen lg {
        @apply gap-y-8;
      }
      
      h2,p {
        color: white !important;
        
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