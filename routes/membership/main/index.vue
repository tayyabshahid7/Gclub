<template>
  <div class="h-full md:pb-11">
    <div
      class="flex flex-col items-center text-center content-center justify-center pt-8 my-8 text-white"
    >
      <h1
        class="text-2xl md:text-h1 lg:max-w-3xl font-ivy-presto font-thin uppercase"
      >
        Become a member of G|clubs
      </h1>
      <p class="mt-7 text-lg font-acumin max-w-sm lg:max-w-3xl">
        Through 5 membership tiers, G|CLUBS allows members to curate their own
        unique experience—each designed to ensure a first-class tomorrow.
      </p>
    </div>
    <div class="md:m-10 pb-2">
      <vuescroll :ops="ops" ref="vs">
        <div class="flex flex-col md:flex-row my-10">
          <template>
            <img class="m-7" src="~/assets/images/membership/tier-1.webp" />
            <img class="m-7" src="~/assets/images/membership/tier-2.webp" />
            <img class="m-7" src="~/assets/images/membership/tier-3.webp" />
            <img class="m-7" src="~/assets/images/membership/tier-4.webp" />
          </template>
        </div>
      </vuescroll>
    </div>
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
.child-wrap {
  display: flex;
  flex-direction: row;
  margin-top: 15px;
  margin-bottom: 15px;
}
.child-wrap img {
  margin: 15px;
}
</style>
