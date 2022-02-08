<template>
  <div class="">
    <NavbarWhite/>
    <HeroSection/>
    <FAQPanelSection />
    <app-footer />
  </div>
</template>

<script>
import NavbarWhite from "~~/layouts/white-navbar";
import HeroSection from "~~/routes/faq-page/HeroSection";
import FAQPanelSection from "~~/routes/faq-page/panel-section/index";
import AppFooter from "~~/layouts/app-footer.vue";
export default {
  components: {
    NavbarWhite,
    HeroSection,
    FAQPanelSection,
    AppFooter,
  },
  name: "FAQPage",
};
</script>

<style>
@import url("https://use.typekit.net/muu4fqf.css");
</style>
