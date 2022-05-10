<template>
  <main class="p-6">
    <div
      class="w-full flex-col-reverse md:flex-row flex justify-center items-center md:py-7 lg:space-x-24"
    >
      <div class="lg:w-forty flex flex-col justify-center md:p-5 md:my-7">
        <p class="mb-16 text-app-brass uppercase tracking-widest">
          join the club
        </p>
        <h1
          class="text-xl lg:text-h1 md:max-w-xs lg:max-w-2xl text-app-brass uppercase font-ivy-presto font-thin mb-6"
        >
          An invitation to live boldly.
        </h1>
        <div class="mt-7">
          <button v-on:click="memberShipHandler()" class="btn-join-club-primary get-in-touch-btn font-bold font-xs">
            See Memberships
          </button>
        </div>
      </div>
      <img
        class="h-full object-cover my-5 md:p-5 md:w-5/12 lg:w-4/12"
        src="~/assets/images/experience/join-the-club.webp"
        alt=""
      />
    </div>
  </main>
</template>

<script>
export default {
  name: "JoinClub",
  methods: {
    memberShipHandler() {
      window.open("https://www-dev.gclubdev.net/en/memberships", '_blank');
    },
  },
};
</script>

<style scoped>
.get-in-touch-btn{
  padding: 1.5% 16%;
}
</style>
