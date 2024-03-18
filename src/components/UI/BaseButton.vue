<template>
  <a :href="link" target="_blank">
    <button class="button">
      {{title}}
    </button>
  </a>
</template>

<script>
export default {
  name: 'BaseButton',

  props: ['title', 'link']
}
</script>

<style scoped>
.button {
  position: relative;
  transition: all 0.3s ease-in-out;
  padding-block: 0.5rem;
  padding-inline: 1.25rem;
  background-color: white;
  width: 100%;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  font-weight: 500;
  outline: none;
  overflow: hidden;
  font-size: 22px;
}


.button:hover {
  transform: scale(1.05);
  border-color: #4c4c4c;
}

.button:hover::before {
  animation: shine 1.5s ease-out infinite;
}

.button::before {
  content: "";
  position: absolute;
  width: 100px;
  height: 100%;
  background-image: linear-gradient(
    120deg,
    rgba(255, 255, 255, 0) 30%,
    rgba(255, 255, 255, 0.8),
    rgba(255, 255, 255, 0) 70%
  );
  top: 0;
  left: -100px;
  opacity: 0.6;
}

@keyframes shine {
  0% {
    left: -100px;
  }

  60% {
    left: 100%;
  }

  to {
    left: 100%;
  }
}

</style>