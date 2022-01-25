<template>
  <div>
    <hero />
    <nav-bar />
    <hero-section />
    <panel-section />
    <about-us />
    <app-footer />
  </div>
</template>

<script>
import AboutUs from "~~/routes/landing-page/about-us";
import Hero from "~~/routes/landing-page/hero";
import NavBar from "~~/layouts/nav-bar.vue";
import HeroSection from "~~/routes/landing-page/hero-section";
import PanelSection from "~~/routes/landing-page/panel-section";
import AppFooter from "~~/layouts/app-footer.vue";
export default {
  components: { AboutUs, NavBar, PanelSection, HeroSection, Hero, AppFooter },
  name: "IndexPage",
};
NavBar;
</script>
