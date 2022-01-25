<template>
  <div>
    <NavbarClub />
    <!-- <HeroSection /> -->
  </div>
</template>

<script>
import HeroSection from "~~/routes/club/hero-section";
import NavbarClub from "~~/routes/club/nav-bar";
export default {
  components: { HeroSection, NavbarClub },
  name: "club",
};
</script>

<style lang="scss" scoped></style>
