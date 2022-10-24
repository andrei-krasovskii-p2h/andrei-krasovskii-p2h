<template>
  <div class="container">
    <head-search />
    <pre-menu />
  </div>
</template>

<script>
import HeadSearch from "@/components/HeadSearch";
import PreMenu from "@/components/PreMenu";

export default {
  components: {
    HeadSearch,
    PreMenu,
  },
};
</script>

<style scoped lang="scss">
.container {
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  height: 45px;
  border-bottom: 1px solid $border-color;
}
</style>
