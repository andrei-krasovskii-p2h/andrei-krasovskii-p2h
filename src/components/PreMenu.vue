<template>
  <div class="pre-menu">
    <a
      @click="$router.push('/learn')"
      class="pre-menu__btn pre-menu__btn--secondary"
      >Learn</a
    >
    <a
      @click="$router.push('/donate')"
      class="pre-menu__btn pre-menu__btn--primary"
      >Donate</a
    >
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.pre-menu {
  display: flex;

  &__btn {
    display: flex;
    align-items: center;
    padding: 0 25px;
    height: 45px;
    font-size: 16px;
    font-weight: 700;
    text-decoration: none;
    cursor: pointer;

    &--secondary {
      position: relative;
      color: $main-color;
      border-left: 1px solid $border-color;

      &:hover {
        color: #fff;
        background-color: $main-background;
      }

      &:after {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 5px;
        background-color: $underline;
        content: "";
      }
    }

    &--primary {
      color: #fff;
      background-color: $primary-background;

      &:hover {
        background-color: $main-background;
      }
    }
  }
}
</style>
