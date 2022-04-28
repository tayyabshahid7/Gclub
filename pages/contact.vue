<template>
  <div>
    <NavbarWhite />
    <ContactForm/>
    <AppFooter />
  </div>
</template>

<script>
import NavbarWhite from "~~/layouts/white-navbar";
import AppFooter from "~~/layouts/app-footer.vue";
import ContactForm from "~~/routes/contact-page/contact-form"
export default {
  components: {
    NavbarWhite,
    ContactForm,
    AppFooter,
  },
  name: "contact",

};
</script>


<style lang="scss" scoped></style>
