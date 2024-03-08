<template>
  <div class="blog">
    <!-- <base-modal content="sucessfully submitted" :show= "isSuccessful" @close="close"></base-modal> -->
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
      <div class="news-letter">
        <h3>Stay up to date With us on what is happening in the market and get premium discount code mailed to you by subscribing to our newsletter</h3>

        <div class="mail-box">
          <input v-model="email" type="email" name="" id="newEmail" placeholder="yourmail@abc.com">
          <button class="btn" @click="subscribe">Subscribe</button>
        </div>
      </div>

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
const BaseModal= defineAsyncComponent(() => import('@/components/UI/BaseModal.vue'));

export default {
  name: "blog",

  components: {
    BlogVideo,
    ReviewCard,
    BaseModal
  },


  data() {
    return {
      email: "",
      isSuccessful: "",

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
  },

  methods: {

    close() {
      this.isSuccessful = null;
    },

    subscribe() {

      if(this.email === '') {
        window.alert("Error! Enter a valid email");
      }

      else{
        var subject = 'FXT News Letter Subscription';
        var body = `Kindly subscribe me to your newsletter. My email is: ${this.email}`;
        window.location.href = 'mailto:support@forexterminators.com?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
        window.alert('Sent successfully');
      }
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
    .fxt-review,
    .news-letter {
      @apply flex flex-col gap-8 my-8 justify-center items-center;
    }

    .news-letter{
      h3{
        @apply text-xl font-normal leading-[normal] text-center italic;

        @screen md {
          @apply text-2xl tracking-wide;
        }

        @screen lg {
          @apply  text-[35px];
        }
      }

      .mail-box{
        @apply flex flex-row;

        input{
          @apply py-4 px-6 bg-[#e8e8e8] text-lg text-start border-none outline-none w-[400px];

          &:focus{
            @apply ring-2 ring-inset transition ease-in-out duration-500 ring-[#8C0100];
          }
        }  

        input::placeholder {
          font-size: 20px;
          text-align: left; 
          font-weight: 600;
        }

       .btn{
          @apply max-w-full  text-white bg-[#8C0100] py-4  px-8 transition-colors duration-500 ease-in-out text-lg font-medium tracking-wide;

          @screen md {
            @apply max-w-[250px] text-2xl font-semibold;
          }

          &:hover{
            @apply bg-white text-black border border-[#8C0100];
            }
        }
      }
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