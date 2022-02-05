<template>
  <div class="bg-app-color">
    <nav-bar />
    <Membership />
  </div>
</template>

<script>
import Membership from "../routes/membership/main";
import NavBar from "~~/layouts/nav-bar.vue";
export default {
  components: { Membership, NavBar },
  name: "membership",
};
</script>

<style scoped></style>
