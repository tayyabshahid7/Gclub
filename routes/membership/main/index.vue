<template>
  <div class="h-full">
    <div class="flex text-center content-center justify-center my-8 text-white">
      <h1 class="text-h1 md:w-6/12 font-ivy-presto font-thin uppercase">
        Become a member of G|clubs
      </h1>
    </div>
    <div class="main-container">
      <div class="parent">
        <vuescroll :ops="ops" ref="vs">
          <div class="child-wrap">
            <template>
              <img src="~/assets/images/membership/tier-1.png" />
              <img src="~/assets/images/membership/tier-2.png" />
              <img src="~/assets/images/membership/tier-3.png" />
              <img src="~/assets/images/membership/tier-4.png" />
            </template>
          </div>
        </vuescroll>
      </div>
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
.main-container {
  padding-bottom: 5px;
  margin: 15px;
}
.child-wrap {
  display: flex;
  align-content: center;
  flex-direction: row;
  margin-top: 15px;
  margin-bottom: 15px;
}
.child-wrap img {
  margin: 15px;
}
</style>
