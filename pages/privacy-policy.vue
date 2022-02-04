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
import HeroSection from "~~/routes/privacy-policy/HeroSection";
import QuestionAnswer from "~~/routes/privacy-policy/PrivacyData";
export default {
  components: {
    NavbarWhite,
    HeroSection,
    QuestionAnswer,
    AppFooter,
  },
  name: "PrivacyPolicy",
};
</script>


<style lang="scss" scoped></style>
