<template>
  <div class="px-9">
    <div
      class="md:px-2 w-full cursor-pointer"
      v-for="(character, index) in panelList"
      :key="character.panelName"
    >
      <div class="app-experience-divider px-10"></div>
      <div class="w-full h-24 table" @click="characterItemClick(index)">
        <div
          class="table-cell align-middle uppercase pt-11 md:pt-14 lg:pt-20 text-app-rose pb-14"
        >
          <p
            class="text-app-rose uppercase items-center flex text-xs font-thin"
          >
            {{ character.panelId }}
          </p>
          <p class="text-lg md:text-xl lg:text-h2 font-ivy-presto font-thin">
            {{ character.panelName }}
          </p>
        </div>
        <div class="table-cell align-middle w-20">
          <img
            class="flex float-right hidden"
            src="~/assets/images/experience/close.svg"
            :data-close-id="index"
          />
          <img
            class="flex float-right block"
            src="~/assets/images/experience/arrow-right.svg"
            :data-arrow-id="index"
          />
        </div>
      </div>
      <div
        :data-character-id="index"
        class="text-app-rose pb-16 hidden flex"
      >
        <div class="md:flex justify-center md:space-x-6 lg:space-x-12">
          <div class="flex flex-col items-start justify-center">
            <p
              class="text-sm lg:text-lg tracking-wider lg:w-sixty text-app-rose font-acumin"
            >
              {{ character.panelDetails }}
            </p>
<!--            <button class="btn-experience-secondary mt-20">learn more</button>-->
          </div>
<!--          <div-->
<!--            class="relative left-0 top-0 my-16 md:my-0 md:justify-center md:items-center"-->
<!--          >-->
<!--            <img-->
<!--              src="~/assets/images/panel/panel-mask-image.webp"-->
<!--              class="relative object-contain w-10/12 md:w-full"-->
<!--              alt=""-->
<!--            />-->
<!--            <img-->
<!--              src="~/assets/images/panel/panel-image-1.webp"-->
<!--              class="absolute object-contain w-10/12 -top-6 left-6 md:w-full"-->
<!--              alt="panel image"-->
<!--            />-->
<!--          </div>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ExperiencePanelSection",
  data() {
    return {
      open: false,
      panelList: [
        {
          panelId: "- 01",
          panelName: "society",
          panelDetails:
            "Being a G|CLUBS member is a status symbol, but also a mission statement: it tells the world that you want more out of life and only the very best satisfies you. Wear that like a badge of honor.",
        },
        {
          panelId: "- 02",
          panelName: "travel",
          panelDetails:
            "At G|CLUBS we believe that luxury travel combines the best elements of both the journey and the destination. Our experts create bespoke travel experiences designed to give you access to the most beautiful and enchanting destinations in the world, a chance to not just visit the locale, but live it.",
        },
        {
          panelId: "- 03",
          panelName: "fashion",
          panelDetails:
            "Get special access to the latest fashion collections from our state-of-the-art luxury brand where emerging designers show off their boldness and talent through expert craftsmanship.",
        },
        // {
        //   panelId: "- 04",
        //   panelName: "tech",
        //   panelDetails:
        //     "Receive special member pricing on purchases, extended video blogging time, and early access to select music produced by or on behalf of Mr. Miles Guo.",
        // },
      ],
    };
  },
  methods: {
    characterItemClick(characterIndex) {
      const characterInfoElement = document.querySelectorAll(
        '[data-character-id="' + characterIndex + '"]'
      )[0];
      const arrowElement = document.querySelectorAll(
        '[data-arrow-id="' + characterIndex + '"]'
      )[0];
      const closeElement = document.querySelectorAll(
        '[data-close-id="' + characterIndex + '"]'
      )[0];
      if (characterInfoElement.classList.contains("block")) {
        characterInfoElement.classList.remove("block");
        characterInfoElement.classList.add("hidden");
      } else {
        characterInfoElement.classList.remove("hidden");
        characterInfoElement.classList.add("block");
      }
      if (
        arrowElement.classList.contains("block") &&
        closeElement.classList.contains("hidden")
      ) {
        arrowElement.classList.remove("block");
        arrowElement.classList.add("hidden");
        closeElement.classList.remove("hidden");
        closeElement.classList.add("block");
      } else {
        arrowElement.classList.remove("hidden");
        arrowElement.classList.add("block");
        closeElement.classList.remove("block");
        closeElement.classList.add("hidden");
      }
    },
  },
};
</script>

<style scoped>
.bg-color {
  background-color: #e0deda;
}
</style>
