<template>
  <div class="relative inline-block text-left text-gray-800">
    <div>
      <span class="shadow-sm">
        <button
          @click="isMenuOpen = !isMenuOpen"
          type="button"
          class="bg-app-color text-black inline-flex items-center justify-between w-full border border-white h-4 px-3 py-3 bg-white text-sm leading-5 font-medium text-white hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-800 transition ease-in-out duration-150 btn-focus"
          id="options-menu"
          aria-haspopup="true"
          aria-expanded="true"
        >
          <span>ENG</span>
          <img
            src="https://s.svgbox.net/hero-solid.svg?ic=chevron-down&fill=white"
            class="-mr-1 ml-2 h-5 w-7"
          />
        </button>
      </span>
    </div>
    <transition
      enter-active-class="transition ease-out duration-100"
      enter-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <div
        v-if="isMenuOpen"
        class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg text-sm overflow-hidden border z-20"
      >
        <div
          class="rounded-md bg-white shadow-xs"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div class="border-t border-gray-100"></div>
          <nuxt-link to="/" class="p-4 flex items-center space-x-2">
            <span>French</span>
          </nuxt-link>
          <div class="border-t border-gray-100"></div>
          <nuxt-link to="/" class="p-4 flex items-center space-x-2">
            <span>Arabic</span>
          </nuxt-link>
          <!-- <div class="border-t border-gray-100"></div>
          <div class="py-1">
            <nuxt-link
              to="/"
              @click.native="isMenuOpen = false"
              class="p-4 flex items-center space-x-2"
            >
              <span> Logout </span>
            </nuxt-link>
          </div> -->
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
    };
  },
  name: "dropdown",
};
</script>
