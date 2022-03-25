<template>
  <div>
    <nav-bar-club />
    <HeroSection />
<!--    <ExperiencePanelSection />-->
<!--    <events />-->
    <HeroEnd />
    <app-footer />
  </div>
</template>

<script>
import NavBarClub from "~~/layouts/nav-bar-club.vue";
import HeroSection from "~~/routes/experience/hero-section";
import ExperiencePanelSection from "~~/routes/experience/panel-section";
import Events from "~~/routes/experience/events";
import HeroEnd from "~~/routes/experience/hero-end";
import AppFooter from "~~/layouts/app-footer.vue";
export default {
  name: "experience",
  components: {
    HeroSection,
    NavBarClub,
    ExperiencePanelSection,
    Events,
    HeroEnd,
    AppFooter,
  },
};
</script>

<style scoped></style>
