<template>
  <div class="article-list container">
    <h3 class="article-list__head">What do we do</h3>
    <p class="article-list__text">
      You might not have heard of us, but we're the people behind the following
      impactful programmers.
    </p>
    <ul class="article-list__box">
      <li
        v-for="item in $store.state.articles.items"
        :key="item.path"
        class="article-list__item"
      >
        <p class="article-list__item-head">{{ item.name }}</p>
        <p class="article-list__item-text">{{ item.description }}</p>
        <app-button type="inverse border" :route-path="item.path"
          >Read more</app-button
        >
      </li>
    </ul>
    <div class="article-list__btn-box">
      <app-button type="inverse" route-path="/what-we-do"
        >More about what we do</app-button
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
.article-list {
  padding-top: 55px;
  padding-bottom: 55px;
  background-color: $main-background;

  &__head {
    font-size: 35px;
    font-weight: 700;
    color: $inverse-color;
  }

  &__text {
    margin-top: 15px;
    font-size: 16px;
    color: $inverse-color;
  }

  &__box {
    display: flex;
    justify-content: space-between;
    margin-top: 25px;
  }

  &__item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right: 20px;
    padding: 35px;
    background-color: $inverse-color;

    &-head {
      font-size: 25px;
      font-weight: 700;
    }

    &-text {
      margin: 15px 0;
    }
  }

  &__btn-box {
    margin-top: 35px;
    display: flex;
    justify-content: center;
  }
}
</style>
