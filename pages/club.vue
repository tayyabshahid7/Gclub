<template>
  <div>
    <NavbarClub />
     <HeroSection />
    <PanelSection/>
  </div>
</template>

<script>
import HeroSection from "~~/routes/club/hero-section";
import NavbarClub from "~~/routes/club/nav-bar";
import PanelSection from "~~/routes/club/panel-section";
export default {
  components: { HeroSection, NavbarClub, PanelSection },
  name: "club",
};
</script>

<style lang="scss" scoped></style>
