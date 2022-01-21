<template>
  <div class="bg-app-color">
    <div class="grid grid-rows-1 grid-cols-2">
      <div class="m-auto flex items-center justify-center">
        <h1 class="text-left text-4xl text-white w-4/12 uppercase">
          An exclusive membership to a new tomorrow.
          <button
            class="uppercase text-sm mt-8 pt-1 pb-1 pl-6 pr-6 bg-white text-black"
          >
            learn more
          </button>
        </h1>
      </div>
      <div class="imgTest">
        <img
          class="img2"
          src="https://images.unsplash.com/photo-1507679252487-e3db58b1642e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeroSection",
};
</script>

<style scoped>
.imgTest {
  background: url("https://images.unsplash.com/photo-1612306299440-15460d4009e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80");
  width: 490px;
  height: 580px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10%;
  margin-bottom: 10%;
}
.img2 {
  height: 100%;
  width: 100%;
  object-fit: cover;
  max-width: 300px;
  max-height: 300px;
}
</style>
