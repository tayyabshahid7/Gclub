<template>
  <main class="p-6 h-full">
    <div
      class="w-full flex-col-reverse md:flex-row flex justify-center items-center lg:py-7 lg:space-x-24 mt-36"
    >
      <div
        class="lg:w-forty text-app-rose flex flex-col justify-center md:my-7"
      >
        <h1
          class="text-xl md:max-w-sm lg:max-w-sm lg:text-h2 uppercase font-thin font-ivy-presto mb-6"
        >
         {{ $t('heading') }}
        </h1>
        <p class="mt-5 mb-7 max-w-md tracking-wider leading-9 font-acumin px-3" style="padding-left: 0;">
          {{ $t('description') }}
        </p>
        <button @click="goToGClub()" class="w-full md:w-64 btn-experience-primary font-acumin">
          {{ $t('learnMore') }}
        </button>
      </div>
      <img
        class="h-full object-cover my-5 md:p-5 md:w-5/12 lg:w-4/12"
        src="~/assets/images/experience/hero-img.webp"
        alt=""
      />
    </div>
  </main>
</template>

<script>
export default {
  name: "HeroSection",
  methods: {
    goToGClub() {
      window.open("https://www.gclubs.com/en/", '_blank');
    },
  },
};
</script>

<style scoped></style>
