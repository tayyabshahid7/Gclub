<template>
  <div class="h-screen">
    <div class="w-full flex flex-wrap">
      <!-- Image Section -->
      <div class="w-1/2 h-full shadow-2xl relative">
        <img
          class="object-cover w-full h-screen hidden md:block"
          src="../assets/images/login-screen.webp"
        />
        <div
          class="lg:w-full absolute lg:top-1/3 lg:mt-12 md:top-1/3 md:mt-12 text-center flex justify-center items-center"
        >
          <h1
            class="xl:text-xl lg:text-xl md:text-lg text-white xl:w-9/12 lg:w-11/12 md:w-9/12 sm:w-9/12"
          >
            ENTER THE CLUB, BE AMAZED.
          </h1>
        </div>
      </div>
      <!-- Login Section -->
      <div class="bg-app-color w-full md:w-1/2 flex flex-col sm:w-full">
        <div class="flex justify-center pt-4">
          <NuxtLink to="/"
            ><img src="../assets/images/app-logo.png"
          /></NuxtLink>
        </div>

        <div class="flex flex-col justify-center my-auto px-8 xl:px-32">
          <form class="flex flex-col" @submit.prevent="submitForm">
            <div class="flex flex-col">
              <label for="email" class="lg:text-base md:text-md text-white"
                >Email</label
              >
              <input
                type="email"
                id="email"
                v-model="email"
                class="bg-app-color border-white shadow appearance-none border w-full py-2 px-3 text-white mt-1 focus:outline-none focus:shadow-outline"
              />
            </div>

            <div class="flex flex-col pt-4">
              <label for="password" class="lg:text-base md:text-md text-white"
                >Password</label
              >
              <input
                type="password"
                id="password"
                v-model="password"
                class="bg-app-color border-white shadow appearance-none border w-full py-2 px-3 text-white mt-1 focus:outline-none focus:shadow-outline"
              />
            </div>

            <input
              type="submit"
              value="SUBMIT"
              class="bg-white font-bold lg:text-base md:text-md p-2 mt-12 text-app-color"
            />
          </form>
          <div class="text-center text-white pt-12">
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
