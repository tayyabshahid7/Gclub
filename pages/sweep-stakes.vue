<template>
  <div>
    <NavbarWhite />
    <HeroSection/>
    <QuestionAnswer/>
    <AppFooter />
  </div>
</template>

<script>
import NavbarWhite from "~~/layouts/white-navbar";
import AppFooter from "~~/layouts/app-footer.vue";
import HeroSection from "~~/routes/sweep-stakes/HeroSection";
import QuestionAnswer from "~~/routes/sweep-stakes/PrivacyData";
export default {
  components: {
    NavbarWhite,
    HeroSection,
    QuestionAnswer,
    AppFooter,
  },
  name: "SweepStakes",
};
</script>


<style lang="scss" scoped></style>
