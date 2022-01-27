<template>
  <section class="h-full w-full relative text-center club-panel-section">
  <div v-for="(item, index) in data" class="bg-white mb-20">
    <div class="px-10 w-full h-24 bg-white table panel-alternate" v-bind:class = "(index % 2 !=0) ?'flex-row-reverse':''">
      <div class="table-cell align-middle text-left">
        <p class="text-green ml-auto mr-auto">- 0{{index + 1}}</p>
        <h1 class="panel-heading-text uppercase text-green ml-auto mr-auto">{{ item.name }}</h1>
        <p class="panel-description-text m-0 text-base text-green">{{ item.description }}</p>
      </div>
      <div class="table-cell align-middle">
        <img class="flex float-right" :src="item.image" />
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
.panel-heading-text{
  font-size: 56px;
}
.panel-description-text{
  max-width: 400px;
  font-weight: normal !important;
}

.club-panel-section{
  padding: 5.5rem 13rem;
}

.panel-alternate{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
}

</style>
