<template>
  <div>
    <pre-head />
    <div class="container">
      <app-logo />
      <app-menu />
    </div>
  </div>
</template>

<script>
import PreHead from "@/components/PreHead";
import AppLogo from "@/components/AppLogo";
import AppMenu from "@/components/AppMenu";

export default {
  components: {
    PreHead,
    AppLogo,
    AppMenu,
  },
};
</script>

<style scoped lang="scss">
.container {
  display: flex;
  justify-content: space-between;
}
</style>
