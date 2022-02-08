<template>
  <div class="bg-app-color">
    <nav-bar />
    <Membership />
    <JoinTheClub />
    <app-footer />
  </div>
</template>

<script>
import Membership from "../routes/membership/main";
import NavBar from "~~/layouts/nav-bar.vue";
import JoinTheClub from "~~/routes/membership/join-the-club";
import AppFooter from "~~/layouts/app-footer.vue";
export default {
  components: { AppFooter, Membership, JoinTheClub, NavBar },
  name: "membership",
};
</script>

<style scoped></style>
