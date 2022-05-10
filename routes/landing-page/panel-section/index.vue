<template>
  <div class="px-6 md:px-12">
    <div
      class="md:px-2 w-full cursor-pointer"
      v-for="(character, index) in panelList"
      :key="character.panelName"
    >
      <div class="app-divider"></div>
      <div class="w-full h-24 table" @click="characterItemClick(index)">
        <div
          class="table-cell align-middle uppercase py-11 md:py-14 lg:py-20 text-white"
        >
          <p class="text-white uppercase items-center flex text-xs">
            {{ character.panelId }}
          </p>
          <p class="text-lg md:text-xl lg:text-h2 font-ivy-presto font-thin">
            {{ character.panelName }}
          </p>
        </div>
        <div class="table-cell align-middle w-20">
          <img
            class="flex float-right hidden"
            src="~/assets/images/panel/close.png"
            :data-close-id="index"
          />
          <img
            class="flex float-right block"
            src="~/assets/images/panel/panel-arrow.png"
            :data-arrow-id="index"
          />
        </div>
      </div>
      <div
        :data-character-id="index"
        class="text-white md:p-6 hidden flex mt-6 md:mt-12 mb-20"
      >
        <div class="md:flex justify-center md:space-x-6 lg:space-x-12">
          <div
            class="flex flex-col items-start justify-center lg:mx-12 lg:w-sixty"
          >
            <p class="text-sm lg:text-lg text-white font-acumin tracking-wider">
              {{ character.panelDetails }}
            </p>
            <button
              v-on:click="handler(character.link)"
              class="btn-primary font-acumin w-full py-6 mt-10 md:w-72 md:mt-20"
            >
              learn more
            </button>
          </div>
          <div
            class="relative left-0 top-0 my-16 md:my-0 md:justify-center md:items-center"
          >
            <img
              src="~/assets/images/panel/panel-mask-image.webp"
              class="relative object-contain w-10/12 md:w-full"
              alt=""
            />
            <img
              :src="character.image"
              class="absolute object-contain w-10/12 -top-6 left-6 md:w-full"
              alt="panel image"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import img1 from "~/assets/images/panel/panel-image-1.webp";
import img2 from "~/assets/images/home/boat.png";
import img3 from "~/assets/images/panel/panel-3-updated.png";

export default {
  name: "PanelSection",
  data() {
    return {
      open: false,
      panelList: [
        {
          image: img1,
          panelId: "- 01",
          panelName: "club",
          link:"https://www-dev.gclubdev.net/en/",
          panelDetails:
            "Join an exclusive, like-minded group of individuals that will " +
            "challenge you to make an impact on the world. With utmost luxury " +
            "in its DNA, G|CLUBS upholds the bespoke tastes and lifestyle of its members."
        },
        {
          image: img2,
          panelId: "- 02",
          panelName: "experience",
          link:"https://www-dev.gclubdev.net/en/",
          panelDetails:
            "Enjoy curated luxury experiences around the world provided by an " +
            "international network of strategic partners. 24-hour concierge service, " +
            "access to exclusive talks, events, content, and more are at your disposal.",
        },
        {
          image: img3,
          panelId: "- 03",
          panelName: "membership",
          link:"https://www-dev.gclubdev.net/en/",
          panelDetails:
            "Curate your G|CLUBS experience with five membership tiers, each with its own perks and exclusive benefits.",
        },
      ],
    };
  },
  methods: {
    handler(link) {
      window.open(link, '_blank');
    },
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

<style scoped></style>
