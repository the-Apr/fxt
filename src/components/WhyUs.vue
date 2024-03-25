<template>
  <div class="drives-card">
    <div class="card" v-for="(card,index) in cardDetails" :key="index" v-motion-pop-visible>
      <div class="left md:block hidden">
        <img :src= "card.pic" alt="">
      </div>
      <div class="right">
        <h2>{{card.title}}</h2>
        <p>{{card.body}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DrivesCard',

  props: ['cardDetails']
}
</script>

<style lang="scss" scoped>
.drives-card {
  @apply grid grid-cols-1 gap-4;

  @screen lg {
    @apply grid-cols-2
  }

  .card {
    @apply p-4 flex flex-col gap-8 items-center shadow-[0px_16px_24px_0px_rgba(18,156,234,0.07)] rounded-3xl;
    border: 1px solid #a33333;

    @screen sm {
      @apply px-8 py-6
    }

  
    @screen lg{
      @apply px-10 py-8 gap-10;
    }

    .left {
      @apply  p-1;
      border-radius: 50%;
      border: 1px solid #a33333;

      img{
        @apply w-16 p-2 bg-[#8C0100];
        border-radius: 50%;
       
      }
    }

    .right {
      @apply flex flex-col gap-2 text-start justify-center items-center;

      @screen md {
        @apply gap-4;
      }

      h2{
        @apply text-lg font-semibold leading-8;

        @screen sm {
          @apply text-xl 
        }

        @screen md {
          @apply text-2xl
        }
      }
    
      p{
      @apply   text-base font-normal leading-[22px] text-justify mb-2 tracking-[0.035px] ;

      @screen md {
        @apply leading-[24px] tracking-wide text-lg;
      }

      @screen lg {
        @apply  text-xl font-normal
      }
    }

    }
  }
}
</style>