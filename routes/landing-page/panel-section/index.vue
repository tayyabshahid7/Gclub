<template>
  <div class="bg-app-color">
    <div class="border-t border-app-gray mx-10" />
    <div class="px-10 w-full h-24 bg-app-color table" @click="showPanel1">
      <div class="table-cell align-middle">
        <p class="text-white ml-auto mr-auto">- 01</p>
        <h1 class="uppercase text-white ml-auto mr-auto">club</h1>
      </div>
      <div :class="panel1 ? 'block' : 'hidden'" class="table-cell align-middle">
        <img class="flex float-right" src="~~/assets/images/panel-arrow.png" />
      </div>
      <div :class="panel1 ? 'hidden' : 'block'" class="table-cell align-middle">
        <img
          class="flex float-right"
          src="~~/assets/images/svg/close-button.svg"
          width="86"
        />
      </div>
    </div>
    <div class="border-t border-app-gray mx-10" />
    <div class="px-10 w-full h-24 bg-app-color table" @click="showPanel2">
      <div class="table-cell align-middle">
        <p class="text-white ml-auto mr-auto">- 02</p>
        <h1 class="uppercase text-white ml-auto mr-auto">experience</h1>
      </div>
      <div :class="panel2 ? 'block' : 'hidden'" class="table-cell align-middle">
        <img class="flex float-right" src="~~/assets/images/panel-arrow.png" />
      </div>
      <div :class="panel2 ? 'hidden' : 'block'" class="table-cell align-middle">
        <img
          class="flex float-right"
          src="~~/assets/images/svg/close-button.svg"
          width="86"
        />
      </div>
    </div>
    <div class="border-t border-app-gray mx-10" />
    <div class="px-10 w-full h-24 bg-app-color table" @click="showPanel3">
      <div class="table-cell align-middle">
        <p class="text-white ml-auto mr-auto">- 03</p>
        <h1 class="uppercase text-white ml-auto mr-auto">membership</h1>
      </div>
      <div :class="panel3 ? 'block' : 'hidden'" class="table-cell align-middle">
        <img class="flex float-right" src="~~/assets/images/panel-arrow.png" />
      </div>
      <div :class="panel3 ? 'hidden' : 'block'" class="table-cell align-middle">
        <img
          class="flex float-right"
          src="~~/assets/images/svg/close-button.svg"
          width="86"
        />
      </div>
    </div>
    <div
      class="grid grid-flow-col grid-cols-3 bg-app-color text-white uppercase mt-24 pb-24"
    >
      <div class="items-center justify-center m-auto">
        <img src="~~/assets/images/panel-1.png" alt="" />
        <h1 class="text-base break-words leading-none">
          Dia de los Muertos party
        </h1>
        <p class="text-xs text-app-gray">tulum, mexico</p>
      </div>
      <div class="items-center justify-center m-auto mt-0">
        <img src="~~/assets/images/panel-2.png" alt="" />
        <h1 class="text-base break-words leading-none">
          G | Club Fashion Week Penthouse
        </h1>
        <p class="text-xs text-app-gray">new york, ny</p>
      </div>
      <div class="items-center justify-center m-auto">
        <img src="~~/assets/images/panel-3.png" alt="" />
        <h1 class="text-base break-words leading-none">
          Supercar Testing with McLaren
        </h1>
        <p class="text-xs text-app-gray">monaco</p>
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
    };
  },
  methods: {
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

<style scoped></style>
