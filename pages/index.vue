<template>
  <div class="bg-app-color">
    <vue-scroll-snap :fullscreen="true">
      <div class="item bg-app-color">
        <hero />
      </div>
      <div class="item bg-app-color">
        <nav-bar />
        <hero-section />
      </div>
      <div class="item bg-app-color item-2">
        <panel-section />
      </div>
<!--      <div class="item bg-app-color">-->
<!--        <from-the-club />-->
<!--      </div>-->
      <div class="item bg-app-color">
        <about-us />
      </div>

      <div class="item bg-app-color">
        <app-footer />
      </div>

      <div class="item bg-app-color">
        <hero-end />
      </div>
    </vue-scroll-snap>

  </div>
</template>

<script>
import AboutUs from "~~/routes/landing-page/about-us";
import Hero from "~~/routes/landing-page/hero";
import NavBar from "~~/layouts/nav-bar.vue";
import HeroSection from "~~/routes/landing-page/hero-section";
import HeroEnd from "~~/routes/landing-page/hero-end";
import PanelSection from "~~/routes/landing-page/panel-section";
import FromTheClub from "~~/routes/landing-page/from-the-club";
import AppFooter from "~~/layouts/app-footer.vue";
import TopBar from "~~/components/top-bar.vue";
import VueScrollSnap from "~~/components/vue-scroll-snap.vue";

export default {
  components: {
    AboutUs,
    NavBar,
    PanelSection,
    HeroSection,
    Hero,
    HeroEnd,
    AppFooter,
    TopBar,
    FromTheClub,
    VueScrollSnap
  },
  name: "IndexPage",
  methods: {
    async init() {
      const currentLocale = this.$i18n.locale;
      try {
        console.log(process.env.apiEndPoint)
        const result = await this.$axios.get('locales/home/' + currentLocale + '.json')
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

<style>
@import url("https://use.typekit.net/muu4fqf.css");
.item-2{
  overflow: scroll;
}
</style>
