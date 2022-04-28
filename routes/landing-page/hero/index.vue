<template>
  <div class="w-full h-screen relative text-center">
    <no-ssr>
      <video-background
        :src="main.bgVideo"
        style=" height: 100vh;"
      >
      </video-background>
    </no-ssr>
<!--    <img-->
<!--      src="~/assets/images/home/bg-hero.png"-->
<!--      class="object-cover w-full h-full bg-cover bg-center"-->
<!--      alt="hero-bg"-->
<!--    />-->
    <div
      class="flex flex-col justify-center items-center inset-7 absolute image-border"
    >
      <div class="shrink w-3/5">
        <img
          class="w-full object-contain"
          src="~/assets/images/logo/Wordmark.svg"
        />
      </div>
    </div>
    <div
      class="w-full absolute bottom-9 flex flex-col items-center justify-center text-white uppercase"
    >
      <p class="mb-3 font-acumin">Scroll Down</p>
      <img
        class="w-8 h-4 lg:w-16 lg:h-8 mb-6"
        src="~/assets/images/arrow-down.png"
        alt="down arrow"
      />
    </div>
  </div>
</template>

<script>
import Vue from "vue";

const VideoBackground = () => import("vue-responsive-video-background-player");
const Plugin = () => import("vue-responsive-video-background-player");

import video from "~~/assets/videos/website_hero_video.mp4"

Vue.component('video-background', VideoBackground);
Vue.use(Plugin);

export default {
  name: "hero",
  data() {
    return {
      main: {
        bgVideo:video
      }
    }
  }
};
</script>

<style scoped>
.image-border {
  border: 1px solid rgba(250, 250, 250, 0.6);
  box-sizing: border-box;
}
</style>
