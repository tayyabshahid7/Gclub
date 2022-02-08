<template>
  <nav
    class="navbar-club w-full fixed flex items-center justify-between sticky transition-all duration-500 flex-wrap"
  >
    <div class="w-full flex items-center justify-between py-3 px-7">
      <!-- Header logo -->
      <div class="w-full flex justify-between lg:hidden">
        <NuxtLink to="/">
          <img
            class="w-auto md:block h-10"
            src="~/assets/images/logo/Symbol_club.svg"
            width="36"
          />
        </NuxtLink>
        <img
          @click="drawer"
          class="lg:hidden"
          src="~/assets/images/svg/menu-app-button.svg"
          width="32"
        />
      </div>

      <!-- Navbar -->
      <div
        class="hidden ld:block flex-grow lg:flex lg:items-center lg:w-auto mt-3"
      >
        <div class="text-sm lg:flex-grow">
          <NuxtLink
            v-for="item in data"
            :key="item.id"
            :to="item.to"
            class="block mt-4 lg:inline-block tracking-wide lg:mt-0 mr-6 uppercase text-acumin text-xs font-bold text-app-color"
          >
            {{ item.name }}
          </NuxtLink>
        </div>
        <div class="text-sm lg:flex-grow">
          <NuxtLink
            to="/"
            class="lg:inline-block mr-auto ml-auto align-middle text-app-color"
          >
            <img src="~/assets/images/logo/Symbol_club.svg" width="50" />
          </NuxtLink>
        </div>
        <NuxtLink
          to="/signin"
          class="flex items-center flex-shrink-0 text-app-color mr-6 text-acumin font-bold text-xs"
        >
          SIGN IN
        </NuxtLink>
        <div>
          <NuxtLink
            to="/signup"
            class="inline-block text-sm px-10 py-4 leading-none border-2 border-app-color text-app-color font-bold mt-4 lg:mt-0 text-acumin"
            >JOIN THE CLUB</NuxtLink
          >
        </div>
      </div>

      <!-- Drawer Menu -->
      <aside
        class="p-3 transform top-0 left-0 w-64 bg-white text-app-color fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30"
        :class="isOpen ? 'translate-x-0' : '-translate-x-full'"
      >
        <div class="close">
          <img
            class="absolute top-0 right-0 mt-4 mr-4"
            @click="isOpen = false"
            src="~/assets/images/svg/close-button-black.svg"
          />
        </div>

        <span
          @click="isOpen = false"
          class="flex w-full items-center p-4 border-b"
        >
          <NuxtLink to="/">
            <img
              class="w-auto md:block h-10"
              src="~/assets/images/logo/Symbol_club.svg"
              width="36"
            />
          </NuxtLink>
        </span>

        <ul class="divide-y uppercase">
          <li>
            <NuxtLink
              to="/club"
              @click="isOpen = false"
              class="my-4 inline-block"
              >club</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              to="/experience"
              @click="isOpen = false"
              class="my-4 inline-block"
              >experience</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              to="/membership"
              @click="isOpen = false"
              class="my-4 inline-block"
              >membership</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              to="/signup"
              @click="isOpen = false"
              class="my-10 px-3 w-full text-center font-semibold cta inline-block border border-app-color uppercase"
              >join the club</NuxtLink
            >
          </li>
        </ul>
      </aside>
    </div>
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
  name: "Navbar",
};
</script>

<style scoped>
.main {
  text-align: center;
}
.navbar-club {
  z-index: 1;
  position: absolute;
  width: 100%;
}

.navbar-text {
  font-family: Acumin Variable Concept;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #233328;
}
</style>
