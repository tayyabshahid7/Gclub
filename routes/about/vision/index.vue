<template>
  <div
    class="w-full flex-col flex justify-center md:items-center items-start px-6 lg:space-x-24 bg-app-marine md:mt-4 md:pt-0 pt-4 vision-section">
    <p class="my-7 text-sm text-white uppercase font-acumin max-w-sm md:py-12">
      {{ $t('valuesHeading') }}
    </p>
    <div class="flex md:flex-row flex-col mb-4 mx-0" style="margin: 0;">
      <div class="w-full md:w-1/2 h-1/2 md:mx-24">
        <img
          src="~/assets/images/about/vision1.png"
          alt=""
          class="h-full object-cover py-5 md:p-5 w-full"
          loading="lazy"
        />
        <div class="flex flex-col justify-center p-5 md:my-7 md:px-7 px-0">
          <h1
            class="text-xl lg:text-h2 md:max-w-xs lg:max-w-xl text-white uppercase font-ivy-presto font-thin tracking-widest"
          >
            {{ $t('missionHeading') }}
          </h1>
          <p class="my-7 text-sm text-white font-acumin max-w-sm">
            {{ $t('missionDescription') }}
          </p>
        </div>
      </div>


      <div class="w-full md:w-1/2 h-1/2 md:mx-24">
        <img
          src="~/assets/images/about/vision2.png"
          alt=""
          class="h-full object-cover py-5 md:p-5"
          loading="lazy"
        />
        <div class="flex flex-col justify-center p-5 md:my-7 md:px-7 px-0">
          <h1
            class="text-xl lg:text-h2 md:max-w-xs lg:max-w-xl text-white uppercase font-ivy-presto font-thin tracking-widest"
          >
            {{ $t('visionHeading') }}
          </h1>
          <p class="my-7 text-sm text-white font-acumin max-w-sm">
            {{ $t('visionDescription') }}
          </p>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
export default {
  name: "Vision",
};
</script>

<style scoped>

.vision-section{
 padding-bottom: 8%;
}

</style>
