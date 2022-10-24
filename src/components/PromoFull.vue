<template>
  <div class="promo-full">
    <div class="container promo-full__container">
      <h1 class="promo-full__head">Get online week 2021</h1>
      <p class="promo-full__description">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet esse hic
        inventore quasi reprehenderit suscipit. Molestias, sapiente.
      </p>
      <app-button type="inverse" route-path="/get-involve"
        >Get involved now</app-button
      >
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
.promo-full {
  display: flex;
  background-image: url("@/assets/images/getonlineweek-herobanner.png");
  background-size: cover;
  background-position: 50%;

  &__container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding-top: 55px;
    padding-bottom: 55px;
  }

  &__head {
    padding: 25px;
    background-color: $main-background;
    color: $inverse-color;
  }

  &__description {
    margin-top: 15px;
    margin-bottom: 25px;
    padding: 25px;
    max-width: 60%;
    font-size: 25px;
    color: $second-color;
    background-color: $inverse-background;
  }

  &__btn {
    margin-top: 25px;
    background-color: $inverse-background;
    border-radius: 50%;
  }
}
</style>
