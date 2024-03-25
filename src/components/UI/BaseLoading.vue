<template>
  <div class="loading">
    <div class="outer-circle">
      <span class="load">
        <img class="" src="../../assets/logo/x_spin.png" alt="" srcset="">
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
      @apply h-32 w-32 object-cover;

      @screen md {
        @apply h-36 w-36;
      }
    }
  }
}

.outer-circle::before {
  content: "";
  width: 40px;
  height: 40px;
  border: 2px solid transparent;
  border-top-color: #fff;
  border-bottom-color: #fff;
  border-radius: 50%;
  animation: spin ease 1000ms infinite;

  @screen md {
    @apply w-[100px] h-[100px];
  }
}


</style>
