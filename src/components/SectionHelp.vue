<template>
  <div class="help container">
    <h3 class="help__head">How can we help you?</h3>
    <p class="help__text">
      Let us know who you are and what you're looking for, and we'll help get
      you to the right place.
    </p>
    <div class="help__form">
      <span class="help__form-text"
        >I am an Individual and I want to learn</span
      >
      <app-button type="primary" route-path="/learn">Start now</app-button>
    </div>
  </div>
</template>

<script>
import AppButton from "@/components/UI/AppButton";
export default {
  components: {
    AppButton,
  },
};
</script>

<style scoped lang="scss">
.help {
  padding-top: 55px;
  padding-bottom: 55px;
  background-color: $third-background;

  &__head {
    font-size: 35px;
    font-weight: 700;
  }

  &__text {
    margin-top: 15px;
    font-size: 25px;
  }

  &__form {
    margin-top: 35px;
    padding: 35px;
    text-align: center;
    font-size: 25px;
    background-color: $inverse-background;

    &-text {
      display: inline-block;
      margin-right: 10px;
    }
  }
}
</style>
