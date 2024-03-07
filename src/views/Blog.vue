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

        <div class="reviews-card">
          <div class="card-wrap" v-for="(review, index) in reviews" :key="index" >
            <review-card :review="review"/>
          </div>
        </div>
      </div>
    </div>  
  </div>
</template>

<script>

import { defineAsyncComponent } from 'vue';

const BlogVideo = defineAsyncComponent(() => import('@/components/BlogVideo.vue'));
const ReviewCard = defineAsyncComponent(() => import('@/components/ReviewCard.vue'));

export default {
  name: "blog",

  components: {
    BlogVideo,
    ReviewCard
  },


  data() {
    return {
      reviews: [
        {
          story: "This is the best forex community I've been in so far, I love how the founder is been sincere with all of us in the community and his strategies has so far helped me profit so well in the forex market ",
          pic:require('../assets/display/ Olaseni Omoare.jpeg') ,
          name: "Olaseni Omoare",
          status: "Beginner"
        },
        {
          story: "It has been an awesome journey. I have been able to understand different concepts in the forex market",
          pic: require('../assets/display/okafor.jpeg'),
          name: "Okafor Alex",
          status: "Advanced"
        },
        {
          story: "A Lively community geared and driven by a Motivated Leader. He knows what he is doing and I love it",
          pic: require('../assets/display/elisha damilola.jpeg') ,
          name: "Elisha Okegbeni",
          status: "Beginner"
        },
        
        {
          story: "I am currently taking the beginners course which contains about 43 lessons. The tutor broke the complex concepts to manageable bites and now Forex doesn't seem as insurmountable as it formally was to me",
          pic: require('../assets/display/_Favour Attah.webp') ,
          name: "Favor Attah-Ohiemi",
          status: "Beginner"
        },

      ]
    }
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
    @apply mx-16;
  }
  @screen xl {
    @apply mx-48;
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
        @apply text-center text-base font-medium leading-[22px] mb-2 ;

        @screen md {
          @apply text-xl leading-[30px] tracking-wide text-left
        }

        @screen lg {
          @apply font-normal text-2xl;
        }
      }
    }

    .our-blog,
    .fxt-review {
      @apply flex flex-col gap-8 my-8;
    }

    .reviews-card {
      @apply grid grid-cols-1 gap-3;

      @screen md {
        @apply grid-cols-2 gap-4;
      }

      @screen lg{
        @apply p-10
      }
    }

    .card-wrap:last-child,:first-child {

      @screen md{
        @apply col-span-2;
      }
      
    }
  }
}

</style>