<template>
  <div class="bg-color h-screen">
    <div class="grid grid-rows-1 grid-cols-2 h-full">
      <div class="m-auto block items-center justify-center uppercase w-2/3">
        <p class="mb-7 text-club-color">join the club</p>
        <h1
          class="text-left text-xl text-white overflow-hidden text-club-color leading-none"
        >
          a membership like no other
        </h1>
        <button
          class="w-full text-sm mt-8 py-1 px-8 bg-transparent border border-inherit text-club-color"
        >
          SIGN UP TODAY
        </button>
      </div>
      <div class="flex items-center justify-center">
        <div class="flex items-center justify-center w-7/12 py-14 imgTest">
          <img
            class="m-auto max-w-xs max-h-96 h-full w-full object-cover"
            src="../../../assets/images/club/club-footer.png"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "JoinClub",
};
</script>

<style scoped>
.imgTest {
  background: url("../../../assets/images/club/club-footer-outer.png");
}
.img2 {
  max-height: 300px;
}
.bg-color {
  background-color: #e0deda;
}
</style>
