<template>
  <div>
    <NavbarClub />
    <HeroSection />
    <PanelSection />
    <Values />
<!--    <ValuesSection />-->
    <JoinClub />
    <AppFooter />
  </div>
</template>

<script>
import NavbarClub from "~~/layouts/nav-bar-club";
import HeroSection from "~~/routes/club-page/hero";
import PanelSection from "~~/routes/club-page/panel-section";
import Values from "~~/routes/club-page/values";
import ValuesSection from "~~/routes/club-page/values-section";
import JoinClub from "~~/routes/club-page/join-club";
import AppFooter from "~~/layouts/app-footer.vue";
export default {
  components: {
    HeroSection,
    NavbarClub,
    PanelSection,
    JoinClub,
    Values,
    ValuesSection,
    AppFooter,
  },
  name: "club",
  methods: {
    async init() {
      const currentLocale = this.$i18n.locale;
      try {
        const result = await this.$axios.get('locales/club/' + currentLocale + '.json')
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

<style lang="scss" scoped></style>
