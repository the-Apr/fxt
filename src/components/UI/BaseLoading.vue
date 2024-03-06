<template>
  <div class="loading">
    <div class="outer-circle">
      <span class="load">
        <img class="" src="../../assets/logo/X.png" alt="" srcset="">
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Loading",
};
</script>

<style lang="scss">
.loading {
  top: 0;
  z-index: 101;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  // na 0.5 dey there before o

  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
}

.outer-circle {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  @keyframes spin {
    to {
      transform: rotateZ(360deg);
    }
  }
  span {
    // margin-left: 10px; /* Adjust the spacing between text and outer circle */
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    @apply absolute;

    img{
      @apply h-20 w-20 object-cover;

      @screen md {
        @apply h-32 w-32;
      }
    }
  }
}

.outer-circle::before {
  content: "";
  width: 100px;
  height: 100px;
  border: 3px solid transparent;
  border-top-color: #fff;
  border-bottom-color: #fff;
  border-radius: 50%;
  animation: spin ease 1000ms infinite;

  @screen md {
    @apply w-[150px] h-[150px];
  }
}


</style>
