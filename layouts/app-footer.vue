<template>
  <footer class="w-full h-full bg-app-color">
    <div class="flex justify-center">
      <img src="../assets/images/app-logo.png" />
    </div>
    <div class="flex align-middle items-center justify-center mt-36">
      <NuxtLink
        v-for="item in data"
        :key="item.id"
        :to="item.to"
        class="mt-4 inline-block lg:mt-0 text-teal-200 uppercase text-white mr-4"
      >
        {{ item.name }}
      </NuxtLink>
      <dropdown />
    </div>
    <div class="border-t border-app-gray m-8 mx-24"></div>
    <div class="grid grid-cols-2 gap-4">
      <div class="col-span-1 mb-7">
        <div class="text-white mx-24">
          <h3>{{ new Date().getFullYear() }} G Clubs. All Rights Reserved.</h3>
          <div class="flex text-app-gray">
            <NuxtLink class="mr-3 underline" to="/">Terms of Service</NuxtLink>
            <NuxtLink class="underline" to="/">Privacy Policy</NuxtLink>
          </div>
        </div>
      </div>
      <div class="col-span-1 float-right mx-24">
        <div class="flex justify-end">
          <img class="mr-7" src="../assets/images/svg/facebook.svg" />
          <img class="mr-7" src="../assets/images/svg/instagram.svg" />
          <img src="../assets/images/svg/twitter.svg" />
        </div>
      </div>
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

<style scoped></style>
