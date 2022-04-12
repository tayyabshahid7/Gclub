<template>
  <nav
    class="w-full fixed flex items-center justify-between sticky transition-all duration-500 flex-wrap bg-app-color p-4"
  >
    <div class="w-full flex items-center justify-between">
      <!-- Header logo -->
      <div class="w-full flex justify-between lg:hidden">
        <NuxtLink to="/">
          <img
            class="w-auto md:block h-10"
            src="~/assets/images/logo/Symbol.svg"
            width="36"
          />
        </NuxtLink>
        <img
          @click="drawer"
          class="lg:hidden"
          src="~/assets/images/svg/menu-button.svg"
          width="36"
        />
      </div>

      <!-- Navbar -->
      <div class="hidden ld:block flex-grow lg:flex lg:items-center lg:w-auto">
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
            <img src="~/assets/images/logo/Symbol.svg" width="36" />
          </NuxtLink>
        </div>
        <a
          :href="url"
          class="flex items-center flex-shrink-0 text-white mr-6"
        >
          SIGN IN
        </a>
        <div>
          <a
            target="_blank"
            :href="url"
            class="inline-block text-sm px-10 py-2 leading-none border text-white border-white mt-4 lg:mt-0"
            >JOIN THE CLUB</a
          >
        </div>
      </div>

      <!-- Drawer Menu -->
      <aside
        class="p-3 transform top-0 left-0 w-64 bg-app-color text-white fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30"
        :class="isOpen ? 'translate-x-0' : '-translate-x-full'"
      >
        <div class="close">
          <img
            class="absolute top-0 right-0 mt-4 mr-4"
            @click="isOpen = false"
            src="~/assets/images/svg/close-button.svg"
          />
        </div>

        <span
          @click="isOpen = false"
          class="flex w-full items-center p-4 border-b"
        >
          <NuxtLink to="/">
            <img
              class="w-auto md:block h-10"
              src="~/assets/images/logo/Symbol.svg"
              width="36"
            />
          </NuxtLink>
        </span>

        <ul class="divide-y font-sans uppercase">
          <li>
            <NuxtLink to="/" @click="isOpen = false" class="my-4 inline-block"
              >club</NuxtLink
            >
          </li>
          <li>
            <NuxtLink to="/" @click="isOpen = false" class="my-4 inline-block"
              >experience</NuxtLink
            >
          </li>
          <li>
            <NuxtLink to="/" @click="isOpen = false" class="my-4 inline-block"
              >membership</NuxtLink
            >
          </li>
          <li>
            <a
              target="_blank"
              :href="url"
              class="my-8 w-full text-center font-semibold cta inline-block border px-3 py-2 rounded uppercase"
              >join the club</a
            >
          </li>
        </ul>
      </aside>
    </div>
  </nav>
</template>

<script>
import data from "~/layouts/data";
export default {
  data() {
    return {
      data,
      isOpen: true,
    };
  },
  computed: {
    url () {
      return process.env.NODE_ENV !== 'production'
        ? "https://www-dev.gclubdev.net/en/login"
        : "https://www.gclubs.com/en/login"
    }
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
};
</script>

<style lang="scss" scoped></style>
