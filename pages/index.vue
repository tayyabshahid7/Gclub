<template>
  <div>
    <hero />
    <nav-bar />
    <hero-section />
  </div>
</template>

<script>
import Hero from "~~/components/hero.vue";
import NavBar from "~~/layouts/nav-bar.vue";
import HeroSection from "~~/layouts/hero-section.vue";
export default {
  components: { NavBar, Hero, HeroSection },
  name: "IndexPage",
};
NavBar;
</script>
