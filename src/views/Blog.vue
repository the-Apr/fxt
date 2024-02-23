<template>
  <div class="blog">
    <div class="blog-wrap">

      <!-- our blog -->
      <div class="our-blog">
        <div class="heading">
          <h2>Our blog</h2>
          <p>Explore the Forex Frontier: Insights, Tips, and Strategies</p>
        </div>

        <blog-video></blog-video>
      </div>
      
      <!-- news-letter -->
      <div class="news-letter"></div>

      <!-- fxt review -->
      <div class="fxt-review">
        <div class="heading">
          <h2>FXT Review</h2>
          <p>See what people have to say about us</p>
        </div>
      </div>
    </div>  
  </div>
</template>

<script>

import { defineAsyncComponent } from 'vue';

const BlogVideo = defineAsyncComponent(() => import('@/components/BlogVideo.vue'));

export default {
  name: "blog",

  components: {
    BlogVideo
  }

}
</script>

<style lang="scss" scoped>
.blog {
  @apply  flex flex-col mx-2 px-2 mt-10;

  @screen md {
    @apply  px-6 mt-20;
  }
  @screen lg {
    @apply mx-20;
  }

  .blog-wrap {
    @apply flex flex-col gap-y-8 items-center justify-center;

    @screen md {
      @apply gap-y-14;
    }

    .heading {
      @apply flex flex-col gap-4 items-center;
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
    }

    .our-blog {
      @apply flex flex-col gap-8;
    }
  }
}

</style>