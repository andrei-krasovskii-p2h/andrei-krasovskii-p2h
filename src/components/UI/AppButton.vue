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
</style>
