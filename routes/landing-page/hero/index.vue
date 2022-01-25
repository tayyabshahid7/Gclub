<template>
  <section class="w-full h-screen relative text-center">
    <img
      src="../../../assets/images/bg-hero.jpg"
      class="object-cover w-full h-full bg-cover bg-center"
      alt="Image alt text"
    />
    <p class="centered text-white">G <span class="pipe mx-5"></span> CLUBS</p>
  </section>
</template>

<script>
export default {
  name: "hero",
};
</script>

<style scoped>
.centered {
  position: absolute;
  font-size: 10rem;
  border: 1px solid #fff;
  left: 48px;
  top: 40px;
  bottom: 40px;
  right: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.pipe {
  border-left: 6px solid white;
  height: 30%;
}
</style>
