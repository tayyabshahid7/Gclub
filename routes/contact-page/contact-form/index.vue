<template>
  <div class="py-12 bg-app-secondary-gray flex justify-center items-center">
    <!-- Login Section -->
    <div class="w-full flex flex-col md:px-20 lg:max-w-3xl">
      <div class="text-center lg:pt-20 px-5 text-app-marine">
        <h1 class="text-xl lg:text-h1 font-ivy-presto uppercase">
          {{ $t('heading') }}
        </h1>

        <p class="mt-4 md:mt-8 font-acumin">
          {{ $t('description') }}
        </p>
      </div>
      <div class="flex flex-col justify-center my-auto px-8 pt-8">
        <form class="flex flex-col" @submit.prevent="">
          <div class="flex flex-col">
            <label for="name" class="lg:text-base md:text-md text-app-marine"
              >{{ $t('name') }}</label
            >
            <input
              v-model="name"
              type="text"
              id="name"
              class="bg-app-secondary-gray border-app-marine shadow appearance-none border w-full py-3 px-3 text-black"
            />
          </div>

          <div class="flex flex-col pt-6">
            <label for="email" class="lg:text-base md:text-md text-app-marine"
              >{{ $t('email') }}</label
            >
            <input
              v-model="email"
              type="email"
              id="email"
              class="bg-app-secondary-gray border-app-marine shadow appearance-none border w-full py-3 px-3 text-black"
            />
          </div>

<!--          <div class="flex flex-col pt-6">-->
<!--            <label for="phone" class="lg:text-base md:text-md text-app-marine"-->
<!--              >{{ $t('phone') }}</label-->
<!--            >-->
<!--            <input-->
<!--              type="text"-->
<!--              id="phone"-->
<!--              class="bg-app-secondary-gray border-app-marine shadow appearance-none border w-full py-3 px-3 text-black"-->
<!--            />-->
<!--          </div>-->

          <div class="flex flex-col pt-6">
            <label for="message" class="lg:text-base md:text-md text-app-marine"
              >{{ $t('message') }}</label
            >
            <textarea
              v-model="message"
              rows="7"
              id="message"
              class="resize-none bg-app-secondary-gray border-app-marine shadow appearance-none border w-full py-3 px-3 text-black"
            />
          </div>

          <input
            @click.prevent="send"
            type="submit"
            v-bind:value="$t('continue')"
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
  data: () => ({
    name: '',
    email: '',
    message: '',
    phone: '',
  }),
  created() {
    this.init();
  },
  methods: {
    async init(){
      const currentLocale = this.$i18n.locale;
      try {
        const result = await this.$axios.get('locales/contact/' + currentLocale + '.json')
        if (result.status === 200) {
          this.$i18n.mergeLocaleMessage(currentLocale, result.data)
        }
      }
      catch (error) {
        console.error(error)
      }
    },
    send() {
      this.$mail.send({
        from: this.email,
        subject: 'Contact form message',
        text: this.name + "\n\n" + this.phone + "\n\n" + this.message
      })
    }
  }
};

</script>

<style scoped>
.title {
  font-size: 72px;
}
</style>
