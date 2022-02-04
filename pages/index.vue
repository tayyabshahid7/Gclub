<template>
  <div class="bg-app-color">
    <hero />
    <nav-bar />
    <hero-section />
    <panel-section />
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
import PanelSection from "~~/routes/landing-page/panel-section";
import AppFooter from "~~/layouts/app-footer.vue";
import TopBar from "~~/components/top-bar.vue";
export default {
  components: {
    AboutUs,
    NavBar,
    PanelSection,
    HeroSection,
    Hero,
    HeroEnd,
    AppFooter,
    TopBar,
  },
  name: "IndexPage",
};
</script>

<style>
@import url("https://use.typekit.net/muu4fqf.css");
</style>
