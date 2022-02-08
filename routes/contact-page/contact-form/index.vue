<template>
  <div class="py-12 bg-app-secondary-gray flex justify-center items-center">
    <!-- Login Section -->
    <div class="w-full flex flex-col md:px-20 lg:max-w-3xl">
      <div class="text-center lg:pt-20 px-5 text-app-marine">
        <h1 class="text-xl lg:text-h1 font-ivy-presto uppercase">
          get in touch
        </h1>
        <p class="mt-4 md:mt-8 font-acumin">
          Amet facilisis magna etiam tempor. Nibh tortor id aliquet lectus proin
          nibh. Egestas tellus rutrum tellus pellentesque eu tincidunt tortor.
        </p>
      </div>
      <div class="flex flex-col justify-center my-auto px-8 pt-8">
        <form class="flex flex-col" @submit.prevent="">
          <div class="flex flex-col">
            <label for="name" class="lg:text-base md:text-md text-app-marine"
              >Name</label
            >
            <input
              type="text"
              id="name"
              class="bg-app-secondary-gray border-app-marine shadow appearance-none border w-full py-3 px-3 text-white"
            />
          </div>

          <div class="flex flex-col pt-6">
            <label for="email" class="lg:text-base md:text-md text-app-marine"
              >Email</label
            >
            <input
              type="email"
              id="email"
              class="bg-app-secondary-gray border-app-marine shadow appearance-none border w-full py-3 px-3 text-white"
            />
          </div>

          <div class="flex flex-col pt-6">
            <label for="email2" class="lg:text-base md:text-md text-app-marine"
              >Email</label
            >
            <input
              type="email"
              id="email2"
              class="bg-app-secondary-gray border-app-marine shadow appearance-none border w-full py-3 px-3 text-white"
            />
          </div>

          <div class="flex flex-col pt-6">
            <label for="message" class="lg:text-base md:text-md text-app-marine"
              >Message</label
            >
            <textarea
              rows="7"
              id="message"
              class="resize-none bg-app-secondary-gray border-app-marine shadow appearance-none border w-full py-3 px-3 text-white"
            />
          </div>

          <input
            type="submit"
            value="Continue"
            class="bg-app-marine mb-10 md:w-1/2 w-full font-bold lg:text-base md:text-md py-3 mx-auto mt-12 text-white"
          />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactForm",
};
</script>

<style scoped>
.title {
  font-size: 72px;
}
</style>
