<template>
  <div>
    <NavbarClub />
     <HeroSection />
    <PanelSection/>
  </div>
</template>

<script>
import HeroSection from "~~/routes/club-page/hero";
import NavbarClub from "~~/layouts/nav-bar-club";
import PanelSection from "~~/routes/club/panel-section";
export default {
  components: { HeroSection, NavbarClub, PanelSection },
  name: "club",
};
</script>

<style lang="scss" scoped></style>
