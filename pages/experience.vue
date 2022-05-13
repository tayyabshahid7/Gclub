<template>
  <div>
    <nav-bar-club />
    <HeroSection />
    <ExperiencePanelSection />
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
  methods: {
    async init() {
      const currentLocale = this.$i18n.locale;
      try {
        const result = await this.$axios.get('locales/experience/' + currentLocale + '.json')
        if (result.status === 200) {
          this.$i18n.mergeLocaleMessage(currentLocale, result.data)
        }
      } catch (error) {
        console.error(error)
      }
    },
  },
  created() {
    this.init();
  },
};
</script>

<style scoped></style>
