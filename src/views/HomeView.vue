<template>
  <promo-full />
  <promo-half />
  <section-help />
  <section-article-list />
</template>

<script>
import PromoFull from "@/components/PromoFull";
import PromoHalf from "@/components/PromoHalf";
import SectionHelp from "@/components/SectionHelp";
import SectionArticleList from "@/components/SectionArticleList";

export default {
  name: "App",
  components: {
    PromoFull,
    PromoHalf,
    SectionHelp,
    SectionArticleList,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style></style>
