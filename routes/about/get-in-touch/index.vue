<template>
  <main class="p-6 bg-app-secondary-gray">
    <div
      class="w-full flex-col-reverse md:flex-row flex justify-center items-center md:py-7 lg:space-x-24"
    >
      <img
        class="h-full object-cover my-5 md:p-5 md:w-5/12 lg:w-4/12"
        src="~/assets/images/experience/join-the-club.webp"
        alt=""
      />
      <div class="lg:w-forty flex flex-col justify-center md:p-5 md:my-7">
        <p class="mb-16 text-app-brass uppercase tracking-widest">
          get in touch
        </p>
        <h1
          class="text-xl lg:text-h1 md:max-w-xs lg:max-w-xl text-app-brass uppercase font-ivy-presto font-thin mb-6"
        >
          Discover the spirit of the future
        </h1>
        <div>
          <button class="btn-join-club-primary">contact us</button>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "GetInTouch",
};
</script>

<style scoped></style>
