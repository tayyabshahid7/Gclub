<template>
  <section
    class="h-full w-full relative flex flex-col content-center text-center"
  >
    <div v-for="(item, index) in data" :key="item.id" class="bg-white my-10">
      <div
        v-show="index % 2 === 0"
        class="w-full bg-white flex justify-center items-center space-x-52"
      >
        <div class="flex flex-col justify-center text-left space-y-3">
          <div>
            <p class="panel-index">- 0{{ index + 1 }}</p>
          </div>
          <div>
            <h1 class="md:text-xl panel-title">
              {{ item.name }}
            </h1>
          </div>
          <div>
            <p class="panel-body">
              {{ item.description }}
            </p>
          </div>
        </div>
        <div>
          <img class="w-full h-full object-contain" :src="item.image" />
        </div>
      </div>
      <div
        v-show="index % 2 !== 0"
        class="w-full bg-white flex justify-center items-center space-x-52"
      >
        <div>
          <img class="w-full h-full object-contain" :src="item.image" />
        </div>
        <div class="flex flex-col justify-center text-left space-y-3">
          <div>
            <p class="panel-index">- 0{{ index + 1 }}</p>
          </div>
          <div>
            <h1 class="md:text-xl panel-title">
              {{ item.name }}
            </h1>
          </div>
          <div>
            <p class="panel-body">
              {{ item.description }}
            </p>
          </div>
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
}

.panel-index {
  font-family: Acumin Variable Concept;
  font-style: normal;
  font-weight: 100;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #514829;
}

.panel-title {
  font-family: IvyPresto Display;
  font-style: normal;
  font-weight: 100;
  font-size: 56px;
  line-height: 56px;
  text-transform: uppercase;
  color: #514829;
}

.panel-body {
  margin-top: 10px;
  max-width: 400px;
  font-family: Acumin Variable Concept;
  font-style: normal;
  font-weight: 100;
  font-size: 16px;
  line-height: 28px;
  color: #514829;
}
</style>
