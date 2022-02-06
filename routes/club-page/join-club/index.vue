<template>
  <div class="bg-app-secondary-gray h-screen">
    <div class="grid grid-rows-1 grid-cols-2 h-full">
      <div class="m-auto block items-center justify-center uppercase w-2/3">
        <p class="mb-7 text-club-color font-acumin tracking-widest mb-24">
          Join Today
        </p>
        <p
          class="text-left text-2xl font-thin tracking-wider text-white overflow-hidden font-ivy-presto text-club-color leading-none mb-20"
        >
          Let's travel <br />
          to the future.
        </p>
        <button class="btn-join-club-primary">See Memberships</button>
      </div>
      <div class="flex items-center justify-center w-3/4">
        <img
          class="h-full w-full object-contain"
          src="~/assets/images/club-footer.png"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "JoinClub",
};
</script>

<style scoped></style>
