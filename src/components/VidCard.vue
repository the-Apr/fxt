<template>
  <div class="card">
    <div class="card-image-container">

      <iframe class="frame" width="560" height="315" :src="video.frame" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>

    <p class="card-title">{{video.title}}</p>

    <!-- play button -->
    <a :href="video.link" target="_blank">
      <div class="card-btn">
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 384 512" stroke-width="0" fill="currentColor" stroke="currentColor">
          <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"></path>
        </svg>
    
        <a class="card-btn-text">
          <span >Watch Video</span>
        </a>
        
      </div>
    </a>
  </div>
</template>

<script>
export default {
  props: ['video']
}
</script>

<style lang="scss" scoped>
.frame {
  @apply min-w-[500px];
}
.card {
  
  display: flex;
  gap: 10px;
  flex-direction: column;
  max-width: 420px;
  height: 330px;
  max-height: 330px;
  background-color: var(--white);
  border-radius: 10px;
  box-shadow: 0px 10px 12px rgba(0, 0, 0, 0.08),
          -4px -4px 12px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  transition: all 0.3s;
  cursor: pointer;
  box-sizing: border-box;
  padding: 12px;

  @screen md {
    @apply  h-[400px] max-h-[600px] flex-1;
  }
}

.card:hover {
  transform: translateY(-10px);
  box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.1),
          -4px -4px 12px rgba(0, 0, 0, 0.08);
}

.card-image-container {
  width: 100%;
  height: 64%;
  border-radius: 10px;
  margin-bottom: 12px;
  overflow: hidden;
  background-color: rgb(165, 165, 165);
  display: flex;
  align-items: center;
  justify-content: center;
}

.video-icon {
  font-size: 40px;
}

.card-title {
 
  margin: 0;
  cursor: default;
  -webkit-box-orient: vertical;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  line-clamp: 1;

  @apply text-left text-base uppercase font-semibold leading-[22px] mb-2 ;

  @screen md {
    @apply leading-[30px] tracking-wider;
  }
  &:hover {
    white-space: normal; 
    overflow: visible; 
    text-overflow: unset; 
  }
}


.card-btn {
  font-size: 15px;
  // font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
  //         "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  color: #fff;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color:  #8C0100;
  width: 25px;
  height: 25px;
  max-height: 25px;
  border-radius: 10px;
  overflow: hidden;
  transition: all ease-in-out 0.5s;
  gap: 1px;
  box-sizing: border-box;
  padding-left: 5px;
  margin-top: 8px;
}

.card-btn:hover {
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.06);
  width: 100%;
  border-radius: 8px;
  height: 30px;
  gap: 10px;
  padding: 0;
}

.card-btn-text {
  opacity: 0;
  font-size: 1px;
  font-weight: 500;
  transition: all ease-in-out 0.5s;
}

.card-btn:hover > .card-btn-text {
  opacity: 1;
  font-size: 15px;
}
</style>