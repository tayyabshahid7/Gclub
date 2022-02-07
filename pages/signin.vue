<template>
  <div class="h-screen">
    <app-loader :loadNow="loading" />
    <div class="w-full flex flex-wrap">
      <!-- Image Section -->
      <div class="w-full md:w-1/2 md:h-full shadow-2xl relative">
        <img
          class="object-cover w-full md:h-screen"
          src="../assets/images/login-screen.webp"
        />
        <div
          class="lg:w-full absolute top-0 right-0 bottom-0 left-0 text-center flex justify-center items-center"
        >
          <h1 class="box-line text-lg lg:text-h1 text-white px-3">
            A place to connect with the elite. Take the pulse of the world. From
            here to Exclusivity.
          </h1>
        </div>
      </div>
      <!-- Login Section -->
      <div class="bg-app-color w-full py-4 md:w-1/2 flex flex-col">
        <div class="flex m-4 justify-between md:justify-center">
          <NuxtLink to="/">
            <img src="../assets/images/logo/Symbol.svg" width="36" />
          </NuxtLink>
          <NuxtLink to="/" class="md:hidden">
            <img src="../assets/images/svg/close-button.svg" width="36" />
          </NuxtLink>
        </div>

        <div class="flex flex-col justify-center md:my-auto px-4 mt-2 xl:px-32">
          <form class="flex flex-col" @submit.prevent="submitForm">
            <div class="flex flex-col">
              <label
                for="email"
                class="lg:text-base md:text-md text-white uppercase"
                >Email Address</label
              >
              <input
                type="email"
                id="email"
                v-model="email"
                class="bg-app-color border-white shadow appearance-none border w-full py-2 px-3 text-white mt-1 focus:outline-none focus:shadow-outline"
              />
            </div>

            <div class="flex flex-col pt-4">
              <label
                for="password"
                class="lg:text-base md:text-md text-white uppercase"
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
              value="CONTINUE"
              class="bg-white font-bold lg:text-base md:text-md p-4 mt-12 text-app-color"
            />
          </form>
          <div class="text-center text-white mt-4 md:pt-12">
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
      loading: false,
    };
  },
  methods: {
    async submitForm() {
      // const { data } = await this.$axios.post("/api/users", {
      //   email: this.email,
      //   password: this.password,
      // });
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        this.$router.push("/");
      }, 2500);
    },
  },
  name: "signin",
};
</script>

<style scoped></style>
