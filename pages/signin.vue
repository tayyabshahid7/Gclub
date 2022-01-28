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
          class="lg:w-full absolute top-0 right-0 bottom-0 left-0 text-center flex justify-center items-center"
        >
          <h1
            class="centered xl:text-xl lg:text-xl md:text-lg text-white px-5 uppercase"
          >
            A place to connect with the elite. Take the pulse of the world. From
            here to Exclusivity.
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
.centered {
  position: absolute;
  border: 1px solid #fff;
  left: 40px;
  top: 40px;
  bottom: 40px;
  right: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
