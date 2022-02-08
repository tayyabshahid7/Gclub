<template>
  <div class="hero-bg h-full w-full flex flex-col">
    <div class="mx-4 md:ml-8 mt-20 lg:my-36 lg:mx-16 text-app-brass">
      <h3 class="text-lg font-ivy-presto uppercase md:text-xl lg:text-h2">
        The future is for the taking.
      </h3>
      <h3 class="text-lg font-ivy-presto uppercase md:text-xl lg:text-h2">
        The future belongs to those who can.
      </h3>
      <h3 class="text-lg font-ivy-presto uppercase md:text-xl lg:text-h2">
        <strong>One vision. One future. One membership.</strong>
      </h3>
    </div>
    <div>
      <img
        alt="Snowy"
        class="object-contain w-full h-full p-4 md:p-8 lg:p-11 lg:mb-6"
        src="~/assets/images/hero-inner-img.png"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "hero",
};
</script>

<style scoped>
.hero-bg {
  background: url("../../../assets/images/club-screen-hero.svg");
}
</style>
