<template>
  <main class="p-6 bg-app-secondary-gray">
    <div
      class="w-full flex-col-reverse md:flex-row flex justify-between items-center md:py-7 relative px-10"
    >
      <div class="lg:w-forty flex flex-col justify-center md:p-5 md:my-7">
        <p class="join-club-text mb-16 text-app-marine uppercase tracking-widest mt-10">
          {{ $t('joinTheClub') }}
        </p>
        <h1
          class="text-xl lg:text-h1 md:max-w-xs lg:max-w-xl text-app-marine uppercase font-ivy-presto font-thin mb-6"
        >
          {{ $t('whyGclubs') }}
        </h1>
        <p class="mt-5 mb-7 tracking-wider leading-9 font-acumin">
          {{ $t('descriptionWhyGclubs') }}
        </p>
        <div>
          <button v-on:click="joinClubHandler()" class="w-full md:w-auto btn-join-member-primary apply-btn font-bold">
            {{ $t('joinTheClub') }}
          </button>
        </div>
      </div>
      <img
        class="h-full object-cover my-5 md:p-5 md:w-5/12 lg:w-4/12"
        src="~/assets/images/membership/join-the-club.webp"
        alt=""
      />
    </div>
  </main>
</template>


<script>
export default {
  name: "slider",
  methods: {
    joinClubHandler() {
      window.open("https://www.gclubs.com/en/join", '_blank');
    },
  },
};
</script>

<style scoped>
.join-club-text{
  position: absolute;
  top: 15px;
}

.apply-btn{
  padding: 2% 16%;
}

</style>
