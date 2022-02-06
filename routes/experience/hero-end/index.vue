<template>
  <main class="p-6">
    <div
      class="w-full flex-col-reverse md:flex-row flex justify-center items-center md:py-7 lg:space-x-24"
    >
      <div class="lg:w-forty flex flex-col justify-center md:p-5 md:my-7">
        <p class="mb-16 text-app-brass uppercase tracking-widest">join the club</p>
        <h1
          class="text-xl lg:text-h1 md:max-w-xs lg:max-w-xl text-app-brass uppercase font-ivy-presto font-thin mb-6"
        >
          a membership like no other
        </h1>
        <button class="w-full md:w-64 btn-experience-primary">
          sign up today
        </button>
      </div>
      <img
        class="h-full object-cover my-5 md:p-5 md:w-5/12 lg:w-4/12"
        src="~/assets/images/experience/join-the-club.png"
        alt=""
      />
    </div>
  </main>
</template>

<script>
export default {
  name: "HeroEnd",
};
</script>

<style scoped>
.imgTest {
  background: url("../../../assets/images/club/club-footer-outer.png");
}
.img2 {
  max-height: 300px;
}
</style>
