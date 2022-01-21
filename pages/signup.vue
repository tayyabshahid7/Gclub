<template>
  <div class="h-screen">
    <div class="w-full flex flex-wrap">
      <!-- Image Section -->
      <div class="w-1/2 h-full shadow-2xl relative">
        <img
          class="object-fit h-full w-full h-screen hidden md:block"
          src="../assets/images/register-screen.webp"
        />
        <div class="w-full absolute image-text text-white text-center">
          <h1 class="image-text-size">THE FUTURE IS</h1>
          <h1 class="image-text-size margin-top">FOR THE THOSE</h1>
          <h1 class="image-text-size margin-top">IN THE CLUB.</h1>
        </div>
      </div>
      <!-- Login Section -->
      <div class="bg-app-color w-full md:w-1/2 flex flex-col">
        <div class="flex justify-center pt-3">
          <NuxtLink class="font-bold text-xl" to="/"
            ><img src="../assets/images/app-logo.png"
          /></NuxtLink>
        </div>

        <div
          class="flex flex-col justify-center md:justify-start my-auto md:pt-0 px-8 md:px-12 lg:px-32"
        >
          <form class="flex flex-col" @submit.prevent="submitForm">
            <div class="flex flex-col">
              <label for="name" class="text-lg text-white">Name</label>
              <input
                type="text"
                id="name"
                v-model="name"
                class="bg-app-color border-white border w-full py-2 px-3 text-white mt-1 focus:outline-none focus:shadow-outline"
              />
            </div>

            <div class="flex flex-col pt-2">
              <label for="email" class="text-lg text-white">Email</label>
              <input
                type="email"
                id="email"
                v-model="email"
                class="bg-app-color border-white border w-full py-2 px-3 text-white mt-1 focus:outline-none focus:shadow-outline"
              />
            </div>

            <div class="flex flex-col pt-2">
              <label for="password" class="text-lg text-white">Password</label>
              <input
                type="password"
                id="password"
                v-model="password"
                class="bg-app-color border-white border w-full py-2 px-3 text-white mt-1 focus:outline-none focus:shadow-outline"
              />
            </div>

            <div class="flex flex-col pt-2">
              <label for="city" class="text-lg text-white">City</label>
              <input
                type="text"
                id="city"
                v-model="city"
                class="bg-app-color border-white border w-full py-2 px-3 text-white mt-1 focus:outline-none focus:shadow-outline"
              />
            </div>

            <div class="flex flex-col pt-2">
              <label for="country" class="text-lg text-white">Country</label>
              <input
                type="text"
                id="country"
                v-model="country"
                class="bg-app-color border-white border w-full py-2 px-3 text-white mt-1 focus:outline-none focus:shadow-outline"
              />
            </div>

            <input
              type="submit"
              value="CONTINUE"
              class="bg-white text-black font-bold text-lg p-2 mt-6 text-app-color"
            />
          </form>
          <div class="text-center text-white pt-6 pb-12">
            <p>
              Already have an account?
              <NuxtLink class="underline font-semibold" to="/signin"
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
export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      city: "",
      country: "",
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
        this.$router.push("/signin");
      }, 2000);
    },
  },
  name: "signup",
};
</script>

<style scoped>
.image-text {
  top: 35%;
}
.image-text-size {
  font-size: 65px !important;
}
.margin-top {
  margin-top: -20px;
}
</style>
