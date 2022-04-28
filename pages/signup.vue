<template>
  <div class="h-screen">
    <app-loader :loadNow="loading" />
    <div class="w-full flex flex-wrap">
      <!-- Image Section -->
      <div class="w-full md:w-1/2 md:h-full shadow-2xl relative">
        <img
          class="object-cover w-full md:h-screen"
          src="../assets/images/register-screen.webp"
        />
        <div
          class="absolute inset-7 text-center flex justify-center items-center image-border"
        >
          <h1
            class="box-line text-lg lg:text-h1 text-white px-3 font-ivy-presto uppercase"
          >
            The future awaits. A place where the future happens now.
          </h1>
        </div>
      </div>
      <!-- Login Section -->
      <div class="bg-app-color w-full py-4 md:w-1/2 flex flex-col sm:w-full">
        <div class="flex m-4 justify-between md:justify-center">
          <NuxtLink to="/">
            <img src="../assets/images/logo/Symbol.svg" width="36" />
          </NuxtLink>
          <NuxtLink to="/" class="md:hidden">
            <img src="../assets/images/svg/close-button.svg" width="36" />
          </NuxtLink>
        </div>

        <div class="flex flex-col justify-center md:my-auto px-8 mt-4 xl:px-16">
          <form class="flex flex-col uppercase" @submit.prevent="submitForm">
            <div class="flex flex-col">
              <label
                for="name"
                class="lg:text-base md:text-md text-white font-acumin"
                >Name</label
              >
              <input
                type="text"
                id="name"
                v-model="name"
                class="bg-app-color border-white border w-full py-2 px-3 text-white font-acumin mt-1 focus:outline-none focus:shadow-outline"
              />
            </div>

            <div class="flex flex-col pt-2">
              <label
                for="email"
                class="lg:text-base md:text-md text-white font-acumin"
                >Email</label
              >
              <input
                type="email"
                id="email"
                v-model="email"
                class="bg-app-color border-white border w-full py-2 px-3 text-white font-acumin mt-1 focus:outline-none focus:shadow-outline"
              />
            </div>

            <div class="flex flex-col pt-2">
              <label
                for="password"
                class="lg:text-base md:text-md text-white font-acumin"
                >Password</label
              >
              <input
                type="password"
                id="password"
                v-model="password"
                class="bg-app-color border-white border w-full py-2 px-3 text-white font-acumin mt-1 focus:outline-none focus:shadow-outline"
              />
            </div>

            <div class="flex flex-col pt-2">
              <label
                for="city"
                class="lg:text-base md:text-md text-white font-acumin"
                >City</label
              >
              <input
                type="text"
                id="city"
                v-model="city"
                class="bg-app-color border-white border w-full py-2 px-3 text-white font-acumin mt-1 focus:outline-none focus:shadow-outline"
              />
            </div>

            <div class="flex flex-col pt-2">
              <label
                for="country"
                class="lg:text-base md:text-md text-white font-acumin"
                >Country</label
              >
              <input
                type="text"
                id="country"
                v-model="country"
                class="bg-app-color border-white border w-full py-2 px-3 text-white font-acumin mt-1 focus:outline-none focus:shadow-outline"
              />
            </div>

            <input
              type="submit"
              value="CONTINUE"
              class="bg-white text-black font-bold lg:text-base md:text-md p-4 mt-6 text-app-color"
            />
          </form>
          <div class="text-center text-white mt-4 md:pt-12">
            <p class="font-acumin">
              Already have an account?
              <NuxtLink class="underline font-semibold font-acumin" to="/signin"
                >Login here.</NuxtLink
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppLoader from "~~/components/app-loader.vue";
export default {
  components: { AppLoader },
  data() {
    return {
      name: "",
      email: "",
      password: "",
      city: "",
      country: "",
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
        this.$router.push("/signin");
      }, 2000);
    },
  },
  name: "signup",
};
</script>

<style scoped>
.image-border {
  border: 1px solid rgba(250, 250, 250, 0.6);
  box-sizing: border-box;
}
</style>
