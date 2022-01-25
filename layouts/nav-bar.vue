<template>
  <nav
    class="flex items-center justify-between sticky transition-all duration-500 flex-wrap bg-app-color p-6"
  >
    <div class="block lg:hidden">
      <button
        class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
      >
        <svg
          class="fill-current h-3 w-3"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
    </div>
    <div class="block flex-grow lg:flex lg:items-center lg:w-auto">
      <div class="text-sm lg:flex-grow">
        <NuxtLink
          v-for="item in data"
          :key="item.id"
          :to="item.to"
          class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 uppercase text-white mr-4"
        >
          {{ item.name }}
        </NuxtLink>
      </div>
      <div class="text-sm lg:flex-grow">
        <NuxtLink
          to="/"
          class="lg:inline-block mr-auto ml-auto align-middle text-white"
        >
          <img src="~/assets/images/app-logo.png" class="h-8" />
        </NuxtLink>
      </div>
      <NuxtLink
        to="/signin"
        class="flex items-center flex-shrink-0 text-white mr-6"
      >
        SIGN IN
      </NuxtLink>

      <div>
        <NuxtLink
          to="/signup"
          class="inline-block text-sm px-10 py-2 leading-none border text-white border-white mt-4 lg:mt-0"
          >JOIN THE CLUB</NuxtLink
        >
      </div>
    </div>
  </nav>
</template>

<script>
import data from "./data";
export default {
  data: function () {
    return {
      data,
    };
  },
  name: "Navbar",
};
</script>

<style scoped>
.main {
  text-align: center;
}
</style>
