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
          An experience like no other
        </h1>
        <p class="mt-5 mb-7 max-w-md tracking-wider leading-9 font-acumin">
          As part of the G family of brands you’ll be able to access and
          experience a world that few others can. G|Club members have VIP access
          to exclusive luxury brands, art, culture and events.
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
