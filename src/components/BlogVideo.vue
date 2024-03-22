<template>
  <div class="blog-video">
    <div v-for="(video, index) in videos" :key="index" class="video-card" v-motion-pop-visible>
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
          title: "How I Made Over $100+ Trading NFP LIVE Using this Simple Fundamental Strategy",
          frame: "https://www.youtube.com/embed/mn3-pv5hXYY?si=fvAdaTjmFEtas4fU"
        },

        {
          link: "https://youtu.be/mn3-pv5hXYY?si=QFfHIxcROY7J_P3u",
          title: "I made over 71,000 in 7hrs",
          frame: "https://www.youtube.com/embed/b7YUw9GbdCU?si=y5DCb_9axPnofDYg"
        },
        {
          link: "https://www.youtube.com/watch?v=_ouMTv9-XsI",
          title: "$300 trading day using simple strategy on XAUUSD",
          frame: "https://www.youtube.com/embed/_ouMTv9-XsI?si=rODOayGjHOzqwCEQ"
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.blog-video {
  @apply grid grid-cols-1 gap-4 mx-1 grid-flow-dense;

  @screen md {
    @apply grid-cols-2 mx-14 gap-6;
  }
  @screen lg {
    @apply grid-cols-2 mx-6;
  }
  @screen xl{
    @apply grid-cols-3
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