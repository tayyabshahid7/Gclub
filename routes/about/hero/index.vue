<template>
  <div class="hero-bg h-full w-full flex flex-col">
    <div
      class="flex flex-col justify-center items-center text-center mx-4 md:ml-8 mt-20 lg:mt-36 lg:mb-30 lg:mx-16 text-app-marine"
    >
      <h3
        class="text-xl font-ivy-presto uppercase max-w-xs mb-7 md:max-w-2xl md:text-2xl lg:text-h1 lg:max-w-3xl font-thin"
      >
        {{ $t('heading') }}
      </h3>
      <p
        class="text-sm font-acumin text-justify lg:text-center mx-7 md:text-sm lg:max-w-2xl font-thin hero"
      >
        {{ $t('description') }}
      </p>
    </div>
    <div>
      <img
        alt="Snowy"
        class="object-contain w-full h-full p-4 md:p-8 lg:p-11 lg:mb-6"
        src="~/assets/images/about/hero.webp"
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

.hero{
  padding:0 3%;
}

</style>
