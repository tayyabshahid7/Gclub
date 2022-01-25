<template>
  <div class="bg-app-color h-screen">
    <div class="grid grid-rows-1 grid-cols-2 h-full">
      <div class="m-auto flex items-center justify-center">
        <h1 class="text-left text-xl text-white w-7/12 uppercase">
          An exclusive membership to a new tomorrow.
          <button
            class="uppercase text-sm mt-8 pt-1 pb-1 pl-8 pr-8 bg-white text-black"
          >
            learn more
          </button>
        </h1>
      </div>
      <div class="flex items-center justify-center">
        <div class="flex items-center justify-center w-7/12 h-3/4 imgTest">
          <img
            class="m-auto max-w-xs max-h-96 h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1507679252487-e3db58b1642e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeroSection",
};
</script>

<style scoped>
.imgTest {
  background: url("https://images.unsplash.com/photo-1612306299440-15460d4009e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80");
  /* width: 430px; */
}
.img2 {
  max-height: 300px;
}
</style>
