<template>
  <app-head />
  <router-view></router-view>
</template>

<script>
import AppHead from "@/components/AppHead.vue";

export default {
  name: "App",
  components: {
    AppHead,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style></style>
