<template>
  <div class="pb-20 bg-contact-color">
    <div class="w-full flex flex-wrap">
      <!-- Login Section -->
      <div class=" w-full flex flex-col xl:px-8 xl:px-80">
        <div class="text-center text-white pt-20 px-5 xl:px-8 xl:px-80">
          <h1 class="md:text-xxl text-ml text-value-color">
            GET IN TOUCH
          </h1>
          <p class="text-value-color">
            Amet facilisis magna etiam tempor. Nibh tortor id aliquet lectus proin nibh.
            Egestas tellus rutrum tellus pellentesque eu tincidunt tortor.
          </p>
        </div>
        <div class="flex flex-col justify-center my-auto px-8 xl:px-96 pt-16">
          <form class="flex flex-col" @submit.prevent="">
            <div class="flex flex-col">
              <label for="name" class="lg:text-base md:text-md text-value-color"
              >Name</label
              >
              <input
                type="text"
                id="name"
                class="bg-contact-color border-value-color shadow appearance-none border w-full py-3 px-3 text-white mt-1 focus:outline-none focus:shadow-outline"
              />
            </div>

            <div class="flex flex-col pt-6">
              <label for="email" class="lg:text-base md:text-md text-value-color"
              >Email</label
              >
              <input
                type="email"
                id="email"
                class="bg-contact-color border-value-color shadow appearance-none border w-full py-3 px-3 text-white mt-1 focus:outline-none focus:shadow-outline"
              />
            </div>

            <div class="flex flex-col pt-6">
              <label for="email2" class="lg:text-base md:text-md text-value-color"
              >Email</label
              >
              <input
                type="email"
                id="email2"
                class="bg-contact-color border-value-color shadow appearance-none border w-full py-3 px-3 text-white mt-1 focus:outline-none focus:shadow-outline"
              />
            </div>

            <div class="flex flex-col pt-6">
              <label for="message" class="lg:text-base md:text-md text-value-color"
              >Message</label
              >
              <textarea
                rows="7"
                id="message"
                class="resize-none bg-contact-color border-value-color shadow appearance-none border w-full py-3 px-3 text-white mt-1 focus:outline-none focus:shadow-outline"
              />
            </div>

            <input
              type="submit"
              value="Continue"
              class="bg-value-color mb-10 md:w-1/2 w-full font-bold lg:text-base md:text-md py-3 mx-auto mt-12 text-white"
            />
          </form>
        </div>
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
