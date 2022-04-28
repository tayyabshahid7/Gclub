<template>
  <div>
    <NavbarClub />
    <hero />
    <Vision />
    <OurTeam />
    <GetInTouch />
    <app-footer />
  </div>
</template>

<script>
import Hero from "~/routes/about/hero";
import NavbarClub from "~~/layouts/nav-bar-club";
import Vision from "~~/routes/about/vision";
import OurTeam from "~~/routes/about/team";
import GetInTouch from "~~/routes/about/get-in-touch";
import AppFooter from "~~/layouts/app-footer.vue";
export default {
  components: { AppFooter, Hero, NavbarClub, GetInTouch, OurTeam, Vision },
  name: "about",
};
</script>


<style scoped></style>
