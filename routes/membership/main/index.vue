<template>
  <div class="h-full" style="padding-bottom: 6%;">
    <div
      class="flex flex-col items-center text-center content-center justify-center pt-8 my-8 text-white"
    >
      <h1
        class="text-2xl md:text-h1 lg:max-w-3xl font-ivy-presto font-thin uppercase"
      >
        {{ $t('heading') }}
      </h1>
      <p class="mt-7 text-sm text-app-wash font-acumin max-w-sm lg:max-w-3xl hero-title">
        {{ $t('description') }}
      </p>
    </div>
    <div class="md:m-10 pb-2">
      <vuescroll :ops="ops" ref="vs">
        <div class="w-10/12 m-auto flex flex-col md:flex-row my-10 justify-around items-center ">
          <template>
            <div class="tier-circle mb-14 font-thin">
              {{ $t('tier1') }}
            </div>
            <div class="tier-circle mb-14 font-thin">
              {{ $t('tier2') }}
            </div>
            <div class="tier-circle mb-14 font-thin">
              {{ $t('tier3') }}
            </div>
            <div class="tier-circle mb-14 font-thin">
              {{ $t('tier4') }}
            </div>
            <div class="tier-circle mb-14 font-thin">
              {{ $t('tier5') }}
            </div>
          </template>
        </div>
      </vuescroll>
    </div>

    <div
      class="flex flex-col items-center text-center content-center justify-center pt-8 mb-8 text-white"
    >
      <p class="text-sm text-app-wash font-acumin max-w-sm lg:max-w-3xl hero-end">
        G|CLUBS members enjoy unprecedented access to the world-class products and services we provide, as well as services provided by third-party strategic partners, clubs, and institutions. Each experience stems from our worldwide network of resources.

      </p>
      <p class="mt-7 text-sm text-app-wash font-acumin max-w-sm lg:max-w-3xl mb-8">
        Become a member today!
      </p>
    </div>

    <div class="gray-line"></div>

  </div>
</template>

<script>
import vuescroll from "vuescroll";
export default {
  components: {
    vuescroll,
  },
  name: "MainMembership",
  data() {
    return {
      ops: {
        rail: {
          opacity: "0.8",
          background: "#E0DEDA",
          border: "1px solid #5c5c5c",
          size: "7px",
        },
        bar: {
          background: "#ffffff",
          keepShow: true,
          size: "5px",
        },
        scrollButton: {
          enable: false,
          background: "#cecece",
        },
        scrollPanel: {
          easing: "easeInQuad",
          speed: 800,
        },
        vuescroll: {
          mode: "native",
          wheelScrollDuration: 0,
          wheelDirectionReverse: false,
          sizeStrategy: "percent",
          detectResize: true,
          locking: true,
          checkShifKey: true,
        },
      },
    };
  },
};
</script>

<style scoped>

.gray-line{
  width: 95%;
  height: 3px;
  background: #4f5c53;
  margin: auto;
  margin-bottom: 2px;
}

.hero-title{
  padding: 0 5%;
}

.hero-end{
  padding: 0 3%;
}

.child-wrap {
  display: flex;
  flex-direction: row;
  margin-top: 15px;
  margin-bottom: 15px;
}
.child-wrap img {
  margin: 15px;
}
.tier-circle{
  font-family: 'IvyPresto Display';
  width: 178px;
  height: 178px;
  left: 113px;
  top: 544px;
  background: #E0DEDA;
  border-radius: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 46px;
  line-height: 56px;
  text-transform: uppercase;
  color: #182637;
}
</style>
