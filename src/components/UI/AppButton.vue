<template>
  <button class="btn" :class="type" @click="clickHandler">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    type: String,
    routePath: String,
  },
  methods: {
    clickHandler() {
      if (this.routePath) {
        this.$router.push(this.routePath);
      }
    },
  },
};
</script>

<style scoped lang="scss">
.btn {
  font-size: 16px;
  padding: 10px 25px;
  border-radius: 50px;
  cursor: pointer;
  font-weight: 700;
  border: 0;
}

.inverse {
  background-color: $inverse-background;
  color: $primary-color;

  &:hover {
    background-color: $main-background;
    color: $inverse-color;
  }
}

.primary {
  background-color: $primary-background;
  color: $inverse-color;

  &:hover {
    background-color: $main-background;
  }
}

.border {
  border: 2px solid $black;
}
</style>
