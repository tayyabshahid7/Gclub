<template>
  <main class="p-6 bg-app-secondary-white">
    <div
      class="w-full flex-col-reverse md:flex-row-reverse flex justify-center items-center md:py-7 lg:space-x-24"
    >
      <img
        class="h-full object-cover my-5 md:p-5 md:w-5/12 lg:w-4/12"
        src="~/assets/images/experience/join-the-club.webp"
        alt=""
      />
      <div class="lg:w-forty flex flex-col justify-center md:p-5 md:my-7">
        <p class="mb-16 text-app-brass uppercase tracking-widest">
          {{ $t('joinTheClub') }}
        </p>
        <h1
          class="text-xl lg:text-h1 text-app-brass uppercase font-ivy-presto font-thin mb-6"
        >
          {{ $t('anInvitation') }}
        </h1>
        <div>
          <button v-on:click="memberShipHandler()" class="btn-join-club-primary get-in-touch-btn"> {{ $t('seeMemberships') }}</button>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "GetInTouch",
  methods: {
    memberShipHandler() {
      window.open("https://www-dev.gclubdev.net/en/memberships", '_blank');
    },
  },
};
</script>

<style scoped>

.get-in-touch-btn{
  padding-left: 11%;
  padding-right: 11%;
}

</style>
