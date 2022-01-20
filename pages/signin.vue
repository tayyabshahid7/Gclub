<template>
  <div class="h-screen">
    <div class="w-full flex flex-wrap">
      <!-- Image Section -->
      <div class="w-1/2 h-full shadow-2xl relative">
        <img
          class="object-cover w-full h-screen hidden md:block"
          src="../assets/images/login-screen.webp"
        />
        <div class="w-full absolute image-text text-white text-center">
          <h1 class="image-text-size">ENTER THE CLUB,</h1>
          <h1 class="image-text-size margin-top">BE AMAZED.</h1>
        </div>
      </div>
      <!-- Login Section -->
      <div class="bg-appcolor w-full md:w-1/2 flex flex-col">
        <div class="flex justify-center pt-4">
          <NuxtLink class="font-bold text-xl" to="/"
            ><img src="../assets/images/app-logo.png"
          /></NuxtLink>
        </div>

        <div
          class="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32"
        >
          <form class="flex flex-col" @submit.prevent="submitForm">
            <div class="flex flex-col">
              <label for="email" class="text-lg text-white">Email</label>
              <input
                type="email"
                id="email"
                v-model="email"
                class="bg-appcolor border-white shadow appearance-none border w-full py-2 px-3 text-white mt-1 focus:outline-none focus:shadow-outline"
              />
            </div>

            <div class="flex flex-col pt-4">
              <label for="password" class="text-lg text-white">Password</label>
              <input
                type="password"
                id="password"
                v-model="password"
                class="bg-appcolor border-white shadow appearance-none border w-full py-2 px-3 text-white mt-1 focus:outline-none focus:shadow-outline"
              />
            </div>

            <input
              type="submit"
              value="SUBMIT"
              class="bg-black font-bold text-lg p-2 mt-12 text-appcolor"
            />
          </form>
          <div class="text-center text-white pt-12 pb-12">
            <p>
              Don't have an account?
              <NuxtLink class="underline" to="/signup">Register here.</NuxtLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async submitForm() {
      // const { data } = await this.$axios.post("/api/users", {
      //   email: this.email,
      //   password: this.password,
      // });
      this.$nuxt.$loading.start();
      setTimeout(() => {
        this.$nuxt.$loading.finish();
        this.$router.push("/");
      }, 2500);
    },
  },
  name: "signin",
};
</script>

<style scoped>
.image-text {
  top: 35%;
}
.image-text-size {
  font-size: 70px !important;
}
.margin-top {
  margin-top: -20px;
}
</style>
