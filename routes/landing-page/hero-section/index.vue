<template>
  <main class="sm:p-6 md:bg-app-color" >
    <div class="flex justify-center items-center mt-24 space-x-24 mb-20">
      <div class="hero-text-div">
        <h1 class="mt-1 hero-text">
          Forging the thriving future you want to see.
        </h1>
        <button class="w-64 mt-12 py-4 px-8 bg-white button-text">
          learn more
        </button>
      </div>
      <div>
        <img class="w-max" src="~/assets/images/home-hero-image.png" alt="" />
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "HeroSection",
};
</script>

<style scoped>
.imgTest {
  background: url("https://images.unsplash.com/photo-1612306299440-15460d4009e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80");
}

.hero-text-div {
  width: 40rem;
}

.hero-text {
  font-family: ivypresto-display, serif;
  font-style: normal;
  font-weight: 100;
  font-size: 72px;
  line-height: 72px;
  text-transform: uppercase;
  color: #ffffff;
}

.button-text {
  font-family: Acumin Variable Concept;
  font-style: bold;
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  color: #233328;
}
</style>
