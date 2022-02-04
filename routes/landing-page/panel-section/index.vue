<template>
  <div class="px-5">
    <div
      class="md:px-10 w-full border-t border-app-gray cursor-pointer"
      v-for="(character, index) in panelList"
      :key="character.panelName"
    >
      <div class="w-full h-24 table" @click="characterItemClick(index)">
        <div class="table-cell align-middle uppercase py-20">
          <p class="heading">{{ character.panelId }}</p>
          <p class="sub-heading">
            {{ character.panelName }}
          </p>
        </div>
        <div class="table-cell align-middle">
          <img
            class="flex float-right"
            src="~~/assets/images/panel-arrow.png"
          />
        </div>
      </div>
      <div
        :data-character-id="index"
        class="bg-app-color text-white md:p-6 hidden flex"
      >
        <div class="md:flex">
          <div class="flex flex-col items-start justify-center lg:mx-12">
            <p>{{ character.panelDetails }}</p>
            <button
              class="bg-white text-black w-full p-2 my-7 md:w-1/2 md:mt-10"
            >
              learn more
            </button>
          </div>
          <img
            src="~/assets/images/panel/panel-section-1.png"
            class="w-full md:w-3/6 md:mb-7 md:ml-4 lg:mx-14"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PanelSection",
  data() {
    return {
      panel1: true,
      panel2: true,
      panel3: true,
      panelList: [
        {
          panelId: "- 01",
          panelName: "club",
          panelDetails:
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
        {
          panelId: "- 02",
          panelName: "experience",
          panelDetails:
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
        {
          panelId: "- 03",
          panelName: "membership",
          panelDetails:
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
      ],
    };
  },
  methods: {
    characterItemClick(characterIndex) {
      const characterInfoElement = document.querySelectorAll(
        '[data-character-id="' + characterIndex + '"]'
      )[0];
      if (characterInfoElement.classList.contains("block")) {
        characterInfoElement.classList.remove("block");
        characterInfoElement.classList.add("hidden");
      } else {
        characterInfoElement.classList.remove("hidden");
        characterInfoElement.classList.add("block");
      }
    },
    showPanel1() {
      this.panel1 = !this.panel1;
    },
    showPanel2() {
      this.panel2 = !this.panel2;
    },
    showPanel3() {
      this.panel3 = !this.panel3;
    },
  },
};
</script>

<style scoped>
.heading {
  font-family: Acumin Variable Concept;
  font-style: normal;
  font-weight: 382;
  font-size: 14px;
  line-height: 16px;
  display: flex;
  align-items: center;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #ffffff;
}
.sub-heading {
  font-family: IvyPresto Display;
  font-style: normal;
  font-weight: 200;
  font-size: 56px;
  line-height: 56px;
  text-transform: uppercase;
  color: #ffffff;
}
</style>
