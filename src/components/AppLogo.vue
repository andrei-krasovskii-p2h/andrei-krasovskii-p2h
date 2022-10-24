<template>
  <div @click="$router.push('/')" class="logo">
    <img
      class="logo__img"
      src="@/assets/images/good-things-foundation-logo.png"
      alt="Good Thinks Foundation"
    />
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.logo {
  padding: 15px 0;

  &__img {
    width: 250px;
  }
}
</style>
