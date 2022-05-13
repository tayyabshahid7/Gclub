<template>
  <div class="hero-bg h-full w-full flex flex-col">
    <div class="mx-4 md:ml-8 mt-36 lg:mx-16 text-app-brass">
      <h3
        class="text-lg font-ivy-presto uppercase md:text-xl lg:text-h1 font-thin"
      >
        {{ $t('oneVision') }}
      </h3>
      <h3
        class="text-lg font-ivy-presto uppercase md:text-xl lg:text-h1 font-thin"
      >
        {{ $t('oneFuture') }}
      </h3>
      <h3
        class="text-lg font-ivy-presto uppercase md:text-xl lg:text-h1 font-thin"
      >
        <strong>
          {{ $t('oneMembership') }}
        </strong>
      </h3>
    </div>

    <div>
      <img
        alt="Snowy"
        class="object-contain w-full h-full p-4 md:p-8 lg:p-11 lg:mb-6"
        src="~/assets/images/club/club-hero.webp"
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
