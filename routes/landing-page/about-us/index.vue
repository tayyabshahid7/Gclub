<template>
  <div class="bg-app-color h-screen">
    <div class="grid grid-rows-1 grid-cols-2 h-full">
      <div class="flex items-center justify-center">
        <div class="flex items-center justify-center w-7/12 py-14 imgTest">
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
            class="text-left text-lg text-white w-9/12 uppercase leading-none"
          >
            Connect with the elite Write the future with those who can Change
            the world with those who can
            <strong> invitation to live boldly</strong>
          </h1>
          <button class="uppercase text-xs mt-8 py-1 px-8 bg-white text-black">
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
