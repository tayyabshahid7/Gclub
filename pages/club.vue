<template>
  <div>
    <NavbarClub />
    <HeroSection />
    <PanelSection />
    <Values />
    <ValuesSection />
    <JoinClub />
    <AppFooter />
  </div>
</template>

<script>
import HeroSection from "~~/routes/club-page/hero";
import NavbarClub from "~~/layouts/nav-bar-club";
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
};
</script>

<style lang="scss" scoped></style>
