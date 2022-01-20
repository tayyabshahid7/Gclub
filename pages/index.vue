<template>
  <div>
    <hero />
    <nav-bar />
  </div>
</template>

<script>
import Hero from "~~/components/hero.vue";
import NavBar from "~~/layouts/nav-bar.vue";
export default {
  components: { NavBar, Hero },
  name: "IndexPage",
};
NavBar;
</script>
