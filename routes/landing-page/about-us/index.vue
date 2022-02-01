<template>
  <main
    class="py-6 px-4 flex align-middle items-center justify-center sm:p-6 md:px-0 bg-app-color h-full md:h-screen"
  >
    <div
      class="grid grid-cols-1 flex align-middle items-center justify-center md:max-w-5xl md:gap-x-10 md:grid-cols-2"
    >
      <div
        class="relative col-start-1 flex flex-col-reverse rounded row-start-2 md:col-start-2 md:row-start-1 my-auto"
      >
        <button
          class="w-64 text-sm leading-none font-medium uppercase mt-8 py-4 px-8 bg-white text-black"
        >
          learn more
        </button>

        <h1 class="mt-1 text-lg lg:text-h2 text-white uppercase break-words">
          Connect with the elite Write the future with those who can Change the
          world with those who can
          <strong> invitation to live boldly</strong>
        </h1>
        <p class="mb-7 text-white">About us</p>
      </div>
      <div
        class="grid gap-4 col-start-1 col-end-3 row-start-1 mb-6 grid-cols-1 md:gap-6 md:grid-cols-2 md:col-start-1 md:row-end-6 md:row-span-6 md:mb-0"
      >
        <div
          class="mx-auto flex items-center justify-center imgTest w-full h-full py-12 md:w-8/12 md:py-14"
        >
          <img
            src="~/assets/images/about-us-2.png"
            alt=""
            class="h-80 object-cover rounded"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "AboutUs",
};
</script>

<style scoped>
.imgTest {
  background: url("../../../assets/images/about-us-1.png");
}
</style>
