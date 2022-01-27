<template>
  <section class="h-full w-full relative text-center">
    <div class="hero-bg">
      <img
        src="../../../assets/images/hero-inner-img.png"
        class="inner-img object-cover bg-cover bg-center"
        alt="Image alt text"
      />
      <p class="centered text-white text-club-color image-text-size">
        At G|Clubs, we write the future
      </p>
    </div>
  </section>
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
  z-index: -1;
  position: relative;
  background: url("../../../assets/images/club-screen-hero.svg");
  width: 100%;
  height: 1500px;
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
