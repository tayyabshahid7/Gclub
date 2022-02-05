<template>
  <main class="p-6">
    <div
      class="w-full flex-col-reverse md:flex-row flex justify-center items-center md:py-7 lg:space-x-24"
    >
      <div class="lg:w-forty flex flex-col justify-center md:p-5 md:my-7">
        <h1
          class="text-xl lg:text-h1 md:max-w-xs lg:max-w-xl text-white uppercase font-ivy-presto"
        >
          Forging the thriving future you want to see.
        </h1>
        <button class="w-full md:w-64 btn-primary">learn more</button>
      </div>
      <img
        class="h-full object-cover my-5 md:p-5 md:w-5/12 lg:w-4/12"
        src="~/assets/images/home/home-hero-image.png"
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

<style scoped>
.imgTest {
  background: url("https://images.unsplash.com/photo-1612306299440-15460d4009e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80");
}
</style>
