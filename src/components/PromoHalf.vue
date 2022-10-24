<template>
  <div class="promo-half">
    <div class="promo-half__image"></div>
    <div class="promo-half__content">
      <div class="promo-half__content-head">
        We are social change charity helping people to improve their lives
        through digital.
      </div>
      <div class="promo-half__content-text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
        consequuntur eos ex iusto officia sed, veritatis. Deserunt ex inventore
        quaerat?
      </div>
      <app-button type="inverse" route-path="/donate"
        >Get involved now</app-button
      >
      <img
        src="@/assets/images/watermark.svg"
        class="promo-half__content-watermark"
        alt="Good Thinks Watermark"
      />
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
.promo-half {
  display: flex;

  &__image {
    flex: 0 0 50%;
    background-image: url("@/assets/images/getonlineweek-hero-half.jpg");
    background-size: cover;
    background-position: 50%;
  }

  &__content {
    position: relative;
    padding: 35px;
    color: $inverse-color;
    background-color: $second-background;

    &-head {
      font-size: 35px;
      font-weight: 700;
    }

    &-text {
      margin-top: 15px;
      margin-bottom: 15px;
      font-size: 25px;
    }

    &-watermark {
      position: absolute;
      bottom: 0;
      right: 0;
      width: 50%;
      height: auto;
    }
  }
}
</style>
