<template>
  <div class="h-screen">
    <div class="w-full flex flex-wrap">
      <!-- Image Section -->
      <div class="w-1/2 h-full shadow-2xl relative">
        <img
          class="object-cover w-full h-screen hidden md:block"
          src="../assets/images/register-screen.webp"
        />
        <div
          class="lg:w-full absolute top-0 right-0 bottom-0 left-0 text-center flex justify-center items-center"
        >
          <h1
            class="centered px-5 xl:text-xl lg:text-xl md:text-lg text-white uppercase"
          >
            The future awaits. A place where the future happens now.
          </h1>
        </div>
      </div>
      <!-- Login Section -->
      <div class="bg-app-color w-full md:w-1/2 flex flex-col">
        <div class="flex justify-center pt-3">
          <NuxtLink class="font-bold text-xl" to="/"
            ><img src="../assets/images/app-logo.png"
          /></NuxtLink>
        </div>

        <div class="flex flex-col justify-center my-auto px-8 xl:px-32">
          <form class="flex flex-col" @submit.prevent="submitForm">
            <div class="flex flex-col">
              <label for="name" class="lg:text-base md:text-md text-white"
                >Name</label
              >
              <input
                type="text"
                id="name"
                v-model="name"
                class="bg-app-color border-white border w-full py-2 px-3 text-white mt-1 focus:outline-none focus:shadow-outline"
              />
            </div>

            <div class="flex flex-col pt-2">
              <label for="email" class="lg:text-base md:text-md text-white"
                >Email</label
              >
              <input
                type="email"
                id="email"
                v-model="email"
                class="bg-app-color border-white border w-full py-2 px-3 text-white mt-1 focus:outline-none focus:shadow-outline"
              />
            </div>

            <div class="flex flex-col pt-2">
              <label for="password" class="lg:text-base md:text-md text-white"
                >Password</label
              >
              <input
                type="password"
                id="password"
                v-model="password"
                class="bg-app-color border-white border w-full py-2 px-3 text-white mt-1 focus:outline-none focus:shadow-outline"
              />
            </div>

            <div class="flex flex-col pt-2">
              <label for="city" class="lg:text-base md:text-md text-white"
                >City</label
              >
              <input
                type="text"
                id="city"
                v-model="city"
                class="bg-app-color border-white border w-full py-2 px-3 text-white mt-1 focus:outline-none focus:shadow-outline"
              />
            </div>

            <div class="flex flex-col pt-2">
              <label for="country" class="lg:text-base md:text-md text-white"
                >Country</label
              >
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
              class="bg-white text-black font-bold lg:text-base md:text-md p-2 mt-6 text-app-color"
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
