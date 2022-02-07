<template>
  <div class="hero-bg h-full w-full flex flex-col">
    <div
      class="ml-16 pt-20 text-club-color text-sm md:text-lg lg:text-xl leading-none mt-36 mb-16"
    >
      <h3 class="hero-text">The future is for the taking.</h3>
      <h3 class="hero-text">The future belongs to those who can.</h3>
      <h3 class="hero-text">
        <strong>One vision. One future. One membership.</strong>
      </h3>
    </div>
    <div>
      <img
        alt="Snowy mountain lake"
        class="object-contain w-full h-full p-16 mb-12"
        src="~/assets/images/hero-inner-img.png"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "hero",
};
</script>

<style scoped>
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

.hero-text {
  width: 1500px;
  font-family: IvyPresto Display;
  font-style: normal;
  font-weight: 200;
  font-size: 56px;
  line-height: 72px;
  text-transform: uppercase;
  color: #514829;
}
</style>
