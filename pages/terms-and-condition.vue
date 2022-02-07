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
import HeroSection from "~~/routes/terms-and-condition/HeroSection";
import QuestionAnswer from "~~/routes/terms-and-condition/QuestionAnswer";
export default {
  components: {
    NavbarWhite,
    HeroSection,
    QuestionAnswer,
    AppFooter,
  },
  name: "TermsAndConditions",
};
</script>


<style lang="scss" scoped></style>
