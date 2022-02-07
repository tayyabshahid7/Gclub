<template>
  <div class="w-full h-screen relative text-center">
    <img
      src="~/assets/images/club-screen-hero.svg"
      class="object-cover w-full h-full bg-cover bg-center"
      alt="Image alt text"
    />
    <p class="centered text-white">G <span class="pipe mr-10"></span> CLUBS</p>
    <div class="w-full container" />
  </div>
</template>

<script>
export default {
  name: "hero",
};
</script>

<style scoped>
.container {
  position: absolute;
  top: 25px;
  bottom: 25px;
  right: 25px;
  left: 35px;
  border: solid 1px white;
  overflow: auto;
}
.centered {
  position: absolute;
  width: 100%;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 10rem;
}
.pipe {
  border-left: 6px solid white;
}
</style>
