<template>
  <div
    class="w-full flex-col md:flex-row flex justify-center items-center px-6 md:py-7 lg:space-x-24"
  >
    <img
      src="~/assets/images/home/about-us-image.webp"
      alt=""
      class="p-6 h-full object-cover my-5 md:p-5 md:w-5/12 lg:w-4/12"
      loading="lazy"
    />
    <div class="flex flex-col justify-center p-5 md:my-7 md:px-7">
      <p class="mb-7 text-xs text-white uppercase font-acumin">About us</p>
      <!-- <div class="lg:w-forty"> -->
      <h1
        class="text-xl lg:text-h2 md:max-w-xs lg:max-w-xl text-white uppercase font-ivy-presto font-thin tracking-widest"
      >
        Connect with the elite Write the future with those who can Change the
        world with those who can<br />
        <strong> an invitation to live boldly</strong>
      </h1>
      <!-- </div> -->
      <button
        class="w-full cursor-pointer bg-white py-3 text-sm font-acumin mt-12 md:w-11/12 font-bold tracking-widest"
      >
        LEARN MORE
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutUs",
};
</script>

<style scoped></style>
