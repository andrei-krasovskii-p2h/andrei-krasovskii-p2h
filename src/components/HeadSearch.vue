<template>
  <div class="search">
    <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
    <span class="search__text">Search</span>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.search {
  display: flex;
  align-items: center;
  padding: 0 25px;
  height: 45px;
  border-left: 1px solid $border-color-grey;
  border-right: 1px solid $border-color-grey;
  cursor: pointer;

  &:hover {
    color: #fff;
    background-color: $main-background;
  }

  &__text {
    display: block;
    font-size: 16px;
    font-weight: 700;
    margin-left: 10px;
  }
}
</style>
