<template>
  <nav
    class="navbar-white flex items-center justify-between sticky transition-all duration-500 flex-wrap bg-transparent"
  >
    <!-- Mobile toggle -->
    <div class="lg:hidden">
      <button
        @click="drawer"
        class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
      >
        <svg
          class="h-8 w-8 fill-current text-black"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
    </div>

    <div class="flex-grow lg:flex lg:items-center lg:w-auto hidden">
      <div class="text-sm flex-grow">
        <NuxtLink
          v-for="item in data"
          :key="item.id"
          :to="item.to"
          class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 uppercase text-app-color font-bold mr-4"
        >
          {{ item.name }}
        </NuxtLink>
      </div>
      <div class="text-sm lg:flex-grow">
        <NuxtLink
          to="/"
          class="lg:inline-block mr-auto ml-auto align-middle text-app-color"
        >
          <img src="~/assets/images/logo/gc-monogram-new-green.svg" width="80"  />
        </NuxtLink>
      </div>
      <NuxtLink
        to="/signin"
        class="flex items-center flex-shrink-0 text-app-color mr-6"
      >
        SIGN IN
      </NuxtLink>

      <div>
        <NuxtLink
          to="/signup"
          class="inline-block text-sm px-10 py-2 leading-none border text-app-color border-green hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
          >JOIN THE CLUB</NuxtLink
        >
      </div>
    </div>
    <!-- Dark Background Transition -->
    <transition
      enter-class="opacity-0"
      enter-active-class="ease-out transition-medium"
      enter-to-class="opacity-100"
      leave-class="opacity-100"
      leave-active-class="ease-out transition-medium"
      leave-to-class="opacity-0"
    >
      <div
        @keydown.esc="isOpen = false"
        v-show="isOpen"
        class="z-10 fixed inset-0 transition-opacity"
      >
        <div
          @click="isOpen = false"
          class="absolute inset-0 bg-black opacity-50"
          tabindex="0"
        ></div>
      </div>
    </transition>

    <!-- Drawer Menu -->
    <aside
      class="p-5 transform top-0 left-0 w-64 fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30 bg-app-color text-white lg:hidden"
      :class="isOpen ? 'translate-x-0' : '-translate-x-full'"
    >
      <div class="close">
        <button
          class="absolute top-0 right-0 mt-4 mr-4"
          @click="isOpen = false"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>

      <span @click="isOpen = false" class="flex w-full p-4">
        <NuxtLink to="/" class="align-middle text-white">
          <img src="~/assets/images/logo/Symbol.svg" />
        </NuxtLink>
      </span>

      <ul class="divide-y font-sans">
        <li>
          <a href="/club" @click="isOpen = false" class="my-4 inline-block"
            >club</a
          >
        </li>
        <li>
          <a
            href="/experience"
            @click="isOpen = false"
            class="my-4 inline-block"
            >experience</a
          >
        </li>
        <li>
          <a
            href="/membership"
            @click="isOpen = false"
            class="my-4 inline-block"
            >membership</a
          >
        </li>
        <li>
          <NuxtLink
            to="/signup"
            @click="isOpen = false"
            class="inline-block text-sm px-10 py-2 leading-none border text-white border-green mt-4 lg:mt-0"
            >JOIN THE CLUB</NuxtLink
          >
        </li>
      </ul>
    </aside>
  </nav>
</template>

<script>
import data from "./data";
export default {
  data() {
    return {
      isOpen: false,
      data,
    };
  },
  methods: {
    drawer() {
      this.isOpen = !this.isOpen;
    },
  },
  watch: {
    isOpen: {
      immediate: true,
      handler(isOpen) {
        if (process.client) {
          if (isOpen) document.body.style.setProperty("overflow", "hidden");
          else document.body.style.removeProperty("overflow");
        }
      },
    },
  },
  mounted() {
    document.addEventListener("keydown", (e) => {
      if (e.keyCode == 27 && this.isOpen) this.isOpen = false;
    });
  },
  name: "NavbarWhite",
};
</script>

<style scoped>
.main {
  text-align: center;
}
.navbar-white {
  z-index: 1;
  padding: 10px 1rem;
  width: 100%;
}
</style>
