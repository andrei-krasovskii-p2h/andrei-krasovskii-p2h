<template>
  <ul class="nav-bar">
    <li
      v-for="item in $store.state.navigation.items"
      :key="item.path"
      class="nav-bar__li"
    >
      <button
        class="nav-bar__btn"
        :class="{ active: $route.path === item.path }"
        @click="$router.push(item.path)"
      >
        {{ item.name }}
      </button>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped lang="scss">
.nav-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;

  &__li {
    padding: 0 10px;
  }

  &__btn {
    position: relative;
    padding: 10px 0;
    white-space: nowrap;
    background-color: transparent;
    border: 0;
    font-weight: 700;
    cursor: pointer;

    &.active:after {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 4px;
      content: "";
      background-color: $underline;
    }
  }
}
</style>
