<template>
  <div>
    <nav-bar/>
    <hero />
  </div>
</template>

<script>
import Hero from "~~/routes/club-page/hero";
import NavBar from "~~/layouts/nav-bar-club.vue";
export default {
  components: { Hero, NavBar },
  name: "club",
};
NavBar;
</script>
