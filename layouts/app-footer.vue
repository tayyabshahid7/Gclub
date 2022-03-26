<template>
  <footer class="w-full h-full bg-app-color">
    <NuxtLink to="/" class="flex justify-center pt-12">
      <img src="../assets/images/gc-monogram-new.svg" width="100" />
    </NuxtLink>
    <div
      class="align-middle items-center justify-center mt-36 hidden lg:flex space-x-12"
    >
      <NuxtLink
        v-for="item in data"
        :key="item.id"
        :to="item.to"
        class="mt-4 footer-text inline-block lg:mt-0 mr-4"
      >
        {{ item.name }}
      </NuxtLink>
      <dropdown />
    </div>
    <ul
      class="p-4 my-8 grid grid-cols-1 grid-cols-2 lg:hidden lg:grid-cols-1 xl:grid-cols-2 gap-4 text-sm text-white leading-none uppercase"
    >
      <li>
        <NuxtLink
          to="/club"
          class="group w-full flex flex-col items-center justify-center leading-none py-3"
        >
          <p class="footer-text">club</p>
        </NuxtLink>
        <NuxtLink
          to="/experience"
          class="group w-full flex flex-col items-center justify-center leading-none py-3"
        >
          experience
        </NuxtLink>
        <NuxtLink
          to="/membership"
          class="group w-full flex flex-col items-center justify-center leading-none py-3"
        >
          membership
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          to="/about"
          class="group w-full flex flex-col items-center justify-center leading-none py-3"
        >
          about
        </NuxtLink>
        <NuxtLink
          to="/contact"
          class="group w-full flex flex-col items-center justify-center leading-none py-3"
        >
          contact
        </NuxtLink>
        <NuxtLink
          to="/faq"
          class="group w-full flex flex-col items-center justify-center leading-none py-3"
        >
          faq
        </NuxtLink>
      </li>
    </ul>
    <div
      class="border-t border-app-gray mx-12 md:mt-16 md:mb-12 md:mx-24"
    ></div>

    <div class="lg:hidden py-4">
<!--      <div class="flex justify-center items-center">-->
<!--        <img class="mr-7" src="../assets/images/svg/facebook.svg" />-->
<!--        <img class="mr-7" src="../assets/images/svg/instagram.svg" />-->
<!--        <img src="../assets/images/svg/twitter.svg" />-->
<!--      </div>-->
      <div
        class="text-white mt-4 mx-16 md:mx-24 flex justify-center items-center"
      >
        <h3>{{ new Date().getFullYear() }} G Clubs. All Rights Reserved.</h3>
      </div>
      <div class="flex justify-center items-center text-app-gray">
        <NuxtLink class="mr-3 underline" to="/terms-and-condition"
          >Terms of Service</NuxtLink
        >
        <NuxtLink class="underline" to="/privacy-policy"
          >Privacy Policy</NuxtLink
        >
      </div>
    </div>
    <div class="grid-cols-2 gap-4 mt-4 hidden lg:grid">
      <div class="col-span-1 mb-7">
        <div class="text-white mx-12 md:mx-24">
          <h3>{{ new Date().getFullYear() }} G Clubs. All Rights Reserved.</h3>
          <div class="flex text-app-gray">
            <NuxtLink class="mr-3 underline" to="/terms-and-condition"
              >Terms of Service</NuxtLink
            >
            <NuxtLink class="underline" to="/privacy-policy"
              >Privacy Policy</NuxtLink
            >
          </div>
        </div>
      </div>
<!--      <div class="col-span-1 float-right mx-24">-->
<!--        <div class="flex justify-end space-x-12">-->
<!--          <img src="../assets/images/svg/twitter.svg" />-->
<!--          <img src="../assets/images/svg/facebook.svg" />-->
<!--          <img src="../assets/images/svg/instagram.svg" />-->
<!--        </div>-->
<!--      </div>-->
    </div>
  </footer>
</template>

<script>
import { appFooter } from "./data";
import dropdown from "~~/components/dropdown.vue";
export default {
  components: { dropdown },
  data: function () {
    return {
      data: appFooter,
    };
  },
  name: "AppFooter",
};
</script>

<style scoped>
.footer-text {
  font-family: Acumin Variable Concept;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #ffffff;
}
</style>
