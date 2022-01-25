<template>
  <div>
    <hero />
    <nav-bar />
    <hero-section />
    <about-us />
    <app-footer />
    <hero-end />
  </div>
</template>

<script>
import AboutUs from "~~/routes/landing-page/about-us";
import Hero from "~~/routes/landing-page/hero";
import NavBar from "~~/layouts/nav-bar.vue";
import HeroSection from "~~/routes/landing-page/hero-section";
import HeroEnd from "~~/routes/landing-page/hero-end";
import AppFooter from "~~/layouts/app-footer.vue";
export default {
  components: { AppFooter, AboutUs, NavBar, Hero, HeroSection, HeroEnd },
  name: "IndexPage",
};
NavBar;
</script>
