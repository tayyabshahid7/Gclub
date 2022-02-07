<template>
  <div class="w-full h-screen relative text-center">
    <img
      src="~/assets/images/home/bg-hero.png"
      class="object-cover w-full h-full bg-cover bg-center"
      alt="hero-bg"
    />
    <div
      class="flex flex-col justify-center items-center inset-7 absolute image-border"
    >
      <div class="shrink w-3/5 mt-64">
        <img
          class="w-full object-contain"
          src="~/assets/images/logo/Wordmark.svg"
        />
      </div>
      <div class="hero-text flex flex-col items-center justify-center">
        <p>Scroll Down</p>
        <img class="mt-10" width="70" src="~/assets/images/arrow-down.png" alt="down arrow" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "hero",
};
</script>

<style scoped>
.image-border {
  border: 1px solid rgba(250, 250, 250, 0.6);
  box-sizing: border-box;
}

.hero-text {
  margin-top: 350px;
  font-family: Acumin Variable Concept;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 16px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #ffffff;
}
</style>
