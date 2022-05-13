<template>
  <section
    class="h-full w-full relative flex flex-col content-center text-center"
  >
    <div v-for="(item, index) in data" :key="item.id" class="bg-white lg:my-20">
      <div
        v-show="index % 2 === 0"
        class="w-full p-5 md:p-10 bg-white flex flex-col md:flex-row justify-center items-center md:space-x-4 lg:space-x-48"
      >
        <div
          class="flex flex-col justify-center text-left space-y-3 text-app-brass mb-5"
        >
          <div>
            <p class="text-xs font-acumin">- 0{{ index + 1 }}</p>
          </div>
          <div>
            <h1 class="text-xl md:text-xl lg:text-h2 uppercase font-ivy-presto">
              {{ item.name }}
            </h1>
          </div>
          <div>
            <p class="text-sm font-acumin max-w-md">
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
        class="w-full p-5 md:p-10 bg-white flex flex-col-reverse md:flex-row justify-center items-center md:space-x-4 lg:space-x-48"
      >
        <div>
          <img class="w-full h-full object-contain" :src="item.image" />
        </div>
        <div
          class="flex flex-col justify-center text-left space-y-3 text-app-brass mb-5"
        >
          <div>
            <p class="text-xs font-acumin">- 0{{ index + 1 }}</p>
          </div>
          <div>
            <h1 class="text-xl md:text-xl lg:text-h2 uppercase font-ivy-presto title">
              {{ item.name }}
            </h1>
          </div>
          <div>
            <p class="text-sm font-acumin max-w-sm">
              {{ item.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import data, {PanelSectionChinese} from "./data";
export default {
  data() {
    return {
      data: this.$i18n.locale === 'en' ? data: PanelSectionChinese,
    };
  },
  name: "PanelSection",
};
</script>

<style scoped>
  .title{
    max-width: 537px;
  }
</style>
