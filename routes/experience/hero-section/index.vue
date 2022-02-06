<template>
  <main class="p-6 h-full">
    <div
      class="w-full flex-col-reverse md:flex-row flex justify-center items-center lg:py-7 lg:space-x-24 mt-36"
    >
      <div
        class="lg:w-forty text-app-rose flex flex-col justify-center md:my-7 md:pr-16"
      >
        <h1
          class="text-xl md:max-w-xs lg:max-w-md lg:text-h2 uppercase font-thin font-ivy-presto mb-6"
        >
          Experience a new level of luxury.
        </h1>
        <p class="mt-5 mb-7 max-w-md tracking-wider leading-9 font-acumin">
          At its core, G|Clubs exists to help you thrive. Capture the essence of
          luxury through the G|Clubs experience and get ready for a new future.
        </p>
        <button class="w-full md:w-64 btn-experience-primary font-acumin">
          learn more
        </button>
      </div>
      <img
        class="h-full object-cover my-5 md:p-5 md:w-5/12 lg:w-4/12"
        src="~/assets/images/experience/hero-img.png"
        alt=""
      />
    </div>
  </main>
</template>

<script>
export default {
  name: "HeroSection",
};
</script>

<style scoped></style>
