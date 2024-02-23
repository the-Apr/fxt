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
  @apply flex flex-row gap-8;

}
</style>