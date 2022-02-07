<template>
  <section class="w-full h-screen relative text-center">
    <img
      src="~/assets/images/hero-end.png"
      class="object-cover w-full h-full bg-cover bg-center"
      alt="hero-bg"
    />
    <div class="flex justify-center items-center inset-7 absolute image-border">
      <img class="shrink w-3/5" src="~/assets/images/logo/Wordmark.svg" />
    </div>
  </section>
</template>

<script>
export default {
  name: "HeroEnd",
};
</script>

<style scoped>
.image-border {
  border: 1px solid rgba(250, 250, 250, 0.6);
  box-sizing: border-box;
}
</style>
