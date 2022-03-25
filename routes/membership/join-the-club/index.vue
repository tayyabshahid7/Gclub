<template>
  <main class="p-6 bg-app-secondary-gray">
    <div
      class="w-full flex-col-reverse md:flex-row flex justify-center items-center md:py-7 lg:space-x-24 relative"
    >
      <div class="lg:w-forty flex flex-col justify-center md:p-5 md:my-7">
        <p class="join-club-text mb-16 text-app-marine uppercase tracking-widest">
          join the club
        </p>
        <h1
          class="text-xl lg:text-h1 md:max-w-xs lg:max-w-xl text-app-marine uppercase font-ivy-presto font-thin mb-6"
        >
          Why G|Clubs
        </h1>
        <p class="mt-5 mb-7 tracking-wider leading-9 font-acumin">
          G|CLUBS is an exclusive concierge and membership program designed to uphold the bespoke tastes and lifestyle of its members. With utmost luxury in its DNA, G|CLUBS’ membership includes distinguished individuals from all over the world.
          Through five membership tiers, members curate unique experiences, each crafted to promote a first-class tomorrow.
        </p>
        <div>
          <button class="w-full md:w-auto btn-join-member-primary">
            apply now
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
};
</script>

<style scoped>
.join-club-text{
  position: absolute;
  top: 15px;
}

</style>
