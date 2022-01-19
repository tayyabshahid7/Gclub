<template>
  <!-- <signin /> -->
  <signup />
</template>

<script>
import signin from "./signin.vue";
import Signup from "./signup.vue";

export default {
  components: { signin, Signup },
  name: "IndexPage",
};
</script>
