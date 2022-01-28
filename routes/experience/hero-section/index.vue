<template>
  <div class="h-screen">
    <div class="grid grid-rows-1 grid-cols-2 h-full">
      <div class="m-auto block items-center justify-center uppercase w-2/3">
        <h1
          class="text-left text-xl text-white overflow-hidden text-club-color leading-none"
        >
          An experience like no other
        </h1>
        <p class="mt-5 mb-7 text-club-color">
          As part of the G family of brands you’ll be able to access and
          experience a world that few others can. G|Club members have VIP access
          to exclusive luxury brands, art, culture and events.
        </p>
        <button
          class="w-1/2 text-sm mt-8 py-1 px-8 bg-app-rose border border-inherit text-white"
        >
          LEARN MORE
        </button>
      </div>
      <div class="flex items-center justify-center">
        <div
          class="flex items-center justify-center w-7/12 py-14 imgTest mt-10"
        >
          <img
            class="m-auto max-w-xs max-h-96 h-full w-full object-cover"
            src="../../../assets/images/experience/hero-section-inner.png"
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
  background: url("../../../assets/images/experience/hero-section-outer.png");
}
.img2 {
  max-height: 300px;
}
</style>
