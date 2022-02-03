<template>
  <div class="hero-bg h-screen w-full flex flex-col">
    <div
      class="ml-8 pt-20 text-club-color text-sm md:text-lg lg:text-xl leading-none"
    >
      <h3>The future is for the taking.</h3>
      <h3>The future belongs to those who can.</h3>
      <h3><strong>One vision. One future. One membership.</strong></h3>
    </div>
    <div class="relative h-full m-8 overflow-hidden rounded-lg">
      <div class="absolute top-0 right-0 block">
        <img
          alt="Snowy mountain lake"
          class="object-cover h-full"
          src="~/assets/images/hero-inner-img.png"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "hero",
};
</script>

<style scoped>
.inner-img {
  position: absolute;
  top: 30%;
  left: 7.25%;
  width: 84%;
}
.hero-bg {
  background: url("../../../assets/images/club-screen-hero.svg");
}
.image-text-size {
  font-size: 60px !important;
  text-transform: uppercase;
  text-align: left;
  font-weight: 200;
}
.centered {
  position: absolute;
  width: 40%;
  top: 20%;
  left: 27%;
  transform: translate(-50%, -50%);
  font-size: 10rem;
}
.pipe {
  border-left: 6px solid white;
}
</style>
