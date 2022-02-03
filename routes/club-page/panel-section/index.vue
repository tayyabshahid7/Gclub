<template>
  <section class="h-full w-full relative text-center px-24">
    <div v-for="(item, index) in data" :key="item.id" class="bg-white my-10">
      <div
        class="w-full h-24 bg-white table panel-alternate"
        v-bind:class="index % 2 != 0 ? 'flex-row-reverse' : ''"
      >
        <div class="table-cell align-middle text-left m-4">
          <p class="text-green ml-auto mr-auto">- 0{{ index + 1 }}</p>
          <h1 class="md:text-xl uppercase text-green ml-auto mr-auto">
            {{ item.name }}
          </h1>
          <p class="panel-description-text m-0 text-base text-green">
            {{ item.description }}
          </p>
        </div>
        <div class="md:table-cell md:align-middle">
          <img class="md:flex md:float-right" :src="item.image" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import data from "./data";
export default {
  data: function () {
    return {
      data,
    };
  },
  name: "PanelSection",
};
</script>

<style scoped>
.panel-heading-text {
  font-size: 56px;
}
.panel-description-text {
  max-width: 400px;
  font-weight: normal !important;
}

.panel-alternate {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
}
</style>
