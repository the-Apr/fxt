<template>
  <div class="blog-video">
    <div v-for="(video, index) in videos" :key="index" class="video-card">
     <vid-card :video= "video"></vid-card>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';

const VidCard = defineAsyncComponent(() => import('@/components/VidCard.vue'));

export default {
  name: 'blog-video',

  components: {
    VidCard
  },

  data() {
    return {
      videos: [
        {
          link: "https://youtu.be/mn3-pv5hXYY?si=QFfHIxcROY7J_P3u",
          title: "How I made over $100",
          frame: "https://www.youtube.com/embed/mn3-pv5hXYY?si=fvAdaTjmFEtas4fU"
        },

        {
          link: "https://youtu.be/mn3-pv5hXYY?si=QFfHIxcROY7J_P3u",
          title: "I made over 71,000 in 7hrs",
          frame: "https://www.youtube.com/embed/b7YUw9GbdCU?si=y5DCb_9axPnofDYg"
        },
        {
          link: "https://www.youtube.com/watch?v=_ouMTv9-XsI",
          title: "How I made $300 in a day",
          frame: "https://www.youtube.com/embed/_ouMTv9-XsI?si=rODOayGjHOzqwCEQ"
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.blog-video {
  @apply grid grid-cols-1 gap-8 mx-1 grid-flow-dense;

  @screen md {
    @apply grid-cols-2 mx-14 gap-12;
  }
  @screen lg {
    @apply grid-cols-2 mx-6;
  }

  .vdeo-card{
    @apply w-full;
  }
  
  .video-card:first-child {
    @screen md {
      @apply col-span-1;
    }
  }
  
}
</style>