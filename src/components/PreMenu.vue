<template>
  <div class="pre-menu">
    <a href="#" class="pre-menu__btn pre-menu__btn--secondary">Learn</a>
    <a href="#" class="pre-menu__btn pre-menu__btn--primary">Donate</a>
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

    &--secondary {
      position: relative;
      color: $main-color;
      border-left: 1px solid $border-color-grey;

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
        background-color: #2f8375;
        content: "";
      }
    }

    &--primary {
      color: #fff;
      background-color: #cf1b46;

      &:hover {
        background-color: $main-background;
      }
    }
  }
}
</style>
