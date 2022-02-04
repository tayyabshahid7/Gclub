<template>
  <div class="flex justify-center space-x-16 mb-24">
    <img
      src="~/assets/images/about-us-image.png"
      alt=""
      class="h-full object-cover"
      loading="lazy"
    />
    <div class="flex flex-col justify-center">
      <div>
        <p class="mb-7 title">About us</p>
      </div>
      <div class="w-96">
        <h1 class="header-text">
          Connect with the elite <br />
          Write the future with those who can <br />
          Change the world with those who can <br />
          <strong> invitation to live boldly</strong>
        </h1>
      </div>
      <div class="mt-12">
        <button class="button">
          <p class="button-text">learn more</p>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutUs",
};
</script>

<style scoped>
.title {
  font-family: Acumin Variable Concept;
  font-style: normal;
  font-weight: 382;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #ffffff;
}

.header-text {
  font-family: IvyPresto Display;
  font-style: normal;
  font-weight: 200;
  font-size: 52px;
  line-height: 50px;
  text-transform: uppercase;
  color: #ffffff;
}

.button-text {
  font-family: Acumin Variable Concept;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  align-items: center;
  text-align: center;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.button {
  cursor: pointer;
  background: #fff;
  width: 328px;
  height: 48px;
}
</style>
