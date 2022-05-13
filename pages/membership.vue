<template>
  <div class="bg-app-color">
    <nav-bar />
    <Membership />
    <JoinTheClub />
    <app-footer />
  </div>
</template>

<script>
import Membership from "~~/routes/membership/main";
import NavBar from "~~/layouts/nav-bar.vue";
import JoinTheClub from "~~/routes/membership/join-the-club";
import AppFooter from "~~/layouts/app-footer.vue";
export default {
  components: { AppFooter, Membership, JoinTheClub, NavBar },
  name: "membership",
  methods: {
    async init() {
      const currentLocale = this.$i18n.locale;
      try {
        const result = await this.$axios.get('locales/membership/' + currentLocale + '.json')
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

<style scoped></style>
