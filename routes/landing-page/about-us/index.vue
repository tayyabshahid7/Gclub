<template>
  <div class="bg-app-color h-screen">
    <div class="grid grid-rows-1 grid-cols-2 h-full">
      <div class="flex items-center justify-center">
        <div class="flex items-center justify-center w-7/12 h-3/5 imgTest">
          <img
            class="m-auto max-w-xs max-h-96 h-full w-full object-cover"
            src="../../../assets/images/about-us-2.png"
            alt=""
          />
        </div>
      </div>
      <div class="m-auto flex items-center justify-center">
        <div class="block">
          <p class="mb-7 text-white">About us</p>
          <h1
            class="text-left text-xl text-white w-7/12 uppercase leading-none"
          >
            We are a lorem ipsum dolor
          </h1>
          <button
            class="uppercase text-xs mt-8 pt-1 pb-1 pl-8 pr-8 bg-white text-black"
          >
            learn more
          </button>
        </div>
      </div>
    </div>
  </div>
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
.img2 {
  max-height: 300px;
}
</style>
