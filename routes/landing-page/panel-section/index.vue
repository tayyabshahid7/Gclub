<template>
  <div class="px-5">
    <div
      class="md:px-10 w-full cursor-pointer mb-28"
      v-for="(character, index) in panelList"
      :key="character.panelName"
    >
      <div class="divider px-10 w-full"></div>
      <div class="w-full h-24 table" @click="characterItemClick(index)">
        <div class="table-cell align-middle uppercase py-20">
          <p class="heading">{{ character.panelId }}</p>
          <p class="sub-heading">
            {{ character.panelName }}
          </p>
        </div>
        <div class="table-cell align-middle w-20">
          <img
            v-show="open"
            class="flex float-right"
            src="~/assets/images/close.png"
          />
          <img
            v-show="!open"
            class="flex float-right"
            src="~/assets/images/panel-arrow.png"
          />
        </div>
      </div>
      <div
        :data-character-id="index"
        class="bg-app-color text-white md:p-6 hidden flex mt-12"
      >
        <div class="md:flex justify-center space-x-12">
          <div class="flex flex-col items-start justify-center lg:mx-12">
            <div class="panel-div">
              <p class="panel-text">{{ character.panelDetails }}</p>
            </div>
            <button class="panel-button mt-20">
              <p class="panel-button-text">learn more</p>
            </button>
          </div>
          <div class="relative left-0 top-0">
            <img
              class="panel-image-mask object-contain w-full"
              src="~/assets/images/panel-mask-image.png"
              alt=""
            />
            <img
              src="~/assets/images/panel-image-1.png"
              class="panel-image object-contain w-50"
              alt="panel image"
            />
          </div>
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
      open: false,
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
        open = false;
      } else {
        characterInfoElement.classList.remove("hidden");
        characterInfoElement.classList.add("block");
        open = true;
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
.divider {
  height: 1px;
  background: #ffffff;
  opacity: 0.6;
}
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

.panel-text {
  font-family: Acumin Variable Concept;
  font-style: normal;
  font-weight: 382;
  font-size: 16px;
  line-height: 28px;
  color: #ffffff;
}

.panel-button {
  background: #fff;
  width: 337px;
  height: 64px;
}
.panel-button-text {
  font-family: Acumin Variable Concept;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #233328;
}

.panel-div {
  width: 500px;
}

.panel-image-mask {
  position: relative;
}

.panel-image {
  position: absolute;
  left: 50px;
  top: -50px;
}
</style>
