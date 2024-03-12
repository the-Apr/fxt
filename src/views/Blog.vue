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
        <h3>Stay up to date with us on what is happening in the market and get premium discount code mailed to you by subscribing to our newsletter</h3>

        <div class="mail-box">
          <input v-model="email" type="email" name="" id="newEmail" placeholder="yourmail@abc.com">

          <button class="btn" @click="subscribe">
            <span v-if="loading">
              <fa-icon :icon="['fas', 'spinner']" class="animate-spin" />
            </span>
            <span v-else-if="isSuccess">
              <fa-icon :icon="['fas', 'check']" />
            </span>
            <span v-else>
              Subscribe
            </span>
          </button>
        </div>

        <div class="error-msg" v-if="error || isSuccessful" >
          <fa-icon 
            :icon="['fas', 'circle-exclamation']"   
            :class="getMessageColor()"  
            
          />
          <p :class="getMessageClass()">{{ getErrorMessage() }}</p>
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
import emailjs from 'emailjs-com';


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
      isSuccess: "",
      isSuccessful: "",
      loading: null,
      error: null,

      reviews: [
        {
          story: "This is the best forex community I've been in so far. Our tutor's strategies has helped me profit so well in the forex market",
          pic:require('../assets/display/ Olaseni Omoare.jpeg') ,
          name: "Olaseni Omoare",
          status: "FXT Beginner Trader"
        },
        {
          story: "It has been an awesome journey. I have been able to understand different concepts in the forex market",
          pic: require('../assets/display/okafor.jpeg'),
          name: "Okafor Alex",
          status: "FXT Advanced Trader"
        },
        {
          story: "A Lively community geared and driven by a Motivated Leader. He knows what he is doing and I love it",
          pic: require('../assets/display/elisha damilola.jpeg') ,
          name: "Elisha Okegbeni",
          status: "FXT Beginner Trader"
        },
        
        {
          story: "I am currently taking the beginners course which contains about 43 lessons. The tutor broke the complex concepts to manageable bites and now Forex doesn't seem as insurmountable as it formally was to me",
          pic: require('../assets/display/_Favour Attah.webp') ,
          name: "Favor Attah-Ohiemi",
          status: "FXT Beginner Trader"
        },

      ]
    }
  },

  methods: {

    getErrorMessage() {
      if (this.error) {
        return "Kindly enter a valid email.";
      } else if (this.isSuccessful && !this.error ) {
        return "You have subscribed sucessfully!";
      } 
    },

    getMessageClass() {
      if (this.error) {
        return "text-red-700";
      } else if (this.isSuccessful && !this.error ) {
        return "text-green-700";
      } 
    },

    getMessageColor() {
      return this.isSuccessful ? "text-green-700" : "text-red-700"; // Green for success, red for error
    },

    validateEmail(email) {
      // Regular expression for email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    },

    // subsciption function
    async subscribe() {
     

      if(this.email === '' || !this.validateEmail(this.email)) {
        // window.alert("Error! Enter a valid email");
        this.error = true;
      }

      else {
        this.loading = true;
        try{
           
          await emailjs.send(process.env.EMAIL_SERVICE_ID, process.env.EMAIL_TEMPLATE_ID, {
          from_name: "New Subscriber",
          email_id: this.email,
          message: "Kindly subscribe me to FXT newsletter",
          }, process.env.EMAIL_USER_ID)
          
         
          
          this.isSuccessful = true;
          this.isSuccess = true;

          setTimeout(() => {
            this.isSuccessful = false; // Hide success message after 20 seconds
          }, 20000);
          
        }
        catch(error) {
          window.alert('Error sending email');
          
        }
        finally {
          this.loading = false;
          this.error = false;
          this.email = "";
        };

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
        @apply text-lg font-normal leading-[normal] text-center italic mb-4;

        @screen md {
          @apply text-2xl tracking-wide;
        }

        @screen xl {
          @apply  text-[27px];
        }
      }

      .mail-box{
        @apply flex flex-row w-full justify-center;

        input{
          @apply py-3 px-4 bg-[#e8e8e8] text-lg text-start border-none outline-none max-w-[500px] rounded-l-3xl;

           @screen sm {
            @apply py-4 px-8;
          }

          @screen md {
            @apply  min-w-[400px] max-w-[800px]
          }

          &:focus{
            @apply ring-2 ring-inset transition ease-in-out duration-500 ring-[#8C0100];
          }
        }  

        input::placeholder {
          font-size: 18px;
          text-align: left; 
          font-weight: 500;
        }

       .btn{
          @apply  text-white bg-[#8C0100] py-3  px-4 transition-colors duration-500 ease-in-out text-lg font-medium tracking-wide rounded-r-3xl;

          @screen sm {
            @apply py-4 px-6;
          }

          @screen md {
            @apply max-w-[250px] text-2xl font-semibold;
          }

          &:hover{
            @apply bg-white text-black border border-[#8C0100];
            }
        }
      }

      .error-msg {
        @apply flex gap-3 items-center;

        p{
          @apply text-base;

          @screen md{
            @apply text-lg
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
        @apply p-10;
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