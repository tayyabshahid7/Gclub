<template>
  <main
    class="py-6 px-4 flex align-middle items-center justify-center sm:p-6 md:py-10 md:px-8 bg-app-color h-full md:h-screen"
  >
    <div
      class="grid grid-cols-1 flex align-middle items-center justify-center md:max-w-5xl md:gap-x-10 md:grid-cols-2"
    >
      <div
        class="relative col-start-1 flex flex-col-reverse rounded row-start-2 md:row-start-1 my-auto"
      >
        <button
          class="w-full md:w-64 text-sm leading-none font-medium uppercase mt-8 py-4 px-8 bg-white text-black"
        >
          learn more
        </button>
        <h1 class="mt-1 text-xl lg:text-h2 text-white uppercase break-words">
          Forging the thriving future you want to see.
        </h1>
      </div>
      <div
        class="grid gap-4 col-start-1 col-end-3 row-start-1 mb-6 grid-cols-1 md:gap-6 md:col-start-2 md:row-end-6 md:row-span-6 md:mb-0"
      >
        <div
          class="mx-auto flex items-center justify-center imgTest w-full h-full py-12 lg:w-8/12 lg:py-14"
        >
          <img
            src="https://images.unsplash.com/photo-1507679252487-e3db58b1642e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
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
  name: "HeroSection",
};
</script>

<style scoped>
.imgTest {
  background: url("https://images.unsplash.com/photo-1612306299440-15460d4009e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80");
}
</style>
