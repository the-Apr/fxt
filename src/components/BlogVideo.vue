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
          title: "Make 2M in a week",
          caption: ""
        },

        {
          link: "https://youtu.be/mn3-pv5hXYY?si=QFfHIxcROY7J_P3u",
          title: "Make 2M in a week",
          caption: ""
        },
        {
          link: "https://youtu.be/mn3-pv5hXYY?si=QFfHIxcROY7J_P3u",
          title: "Make 2M in a week",
          caption: ""
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
    @apply grid-cols-3 mx-14;
  }

  // .video-card {
  //   @screen md {
  //     &:nth-child(2) {
  //       @apply col-span-2;
  //     }
  //   }
  // }
  
}
</style>