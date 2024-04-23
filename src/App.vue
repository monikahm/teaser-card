<script setup lang="ts">
import TeaserCard from './components/TeaserCard.vue'
</script>

<template>
  <TeaserCard
    class="first"
    title="Equinor har tapt over 200 milliarder kroner"
    :tags="['dokumentar']"
    size="xl"
    ingress="Equinor har nå gitt opp sine eierandeler i fire russiske selskaper til Rosneft etter tre
    måneders arbeid og mer enn til milliarder kroner i nedskrivninger"
  ></TeaserCard>
  <div class="second">
    <TeaserCard
      title="Finanstilsynet:"
      :tags="['finans', 'sparing']"
      size="large"
      ingress="Mindre forskjeller i kjedens innkjøpspriser"
    ></TeaserCard>
  </div>

  <div class="third">
    <TeaserCard
      title="Finanstilsynet:"
      :tags="['finans', 'sparing']"
      size="medium"
      ingress="Lorem ipsum dolor sit amet"
    ></TeaserCard>
    <TeaserCard
      title="Finanstilsynet:"
      :tags="['finans', 'sparing']"
      size="medium"
      ingress="Nedgang på Oslo Børs før kveldens rentebeskjed fra USA"
    ></TeaserCard>
  </div>
  <div class="fourth">
    <TeaserCard
      :tags="['finans', 'sparing']"
      size="small"
      :initialLetter="true"
      ingress="4 Porteføljeforvalterens tips til hvordan du unngår 'fomo' i akjsemarkedet"
    ></TeaserCard>
    <TeaserCard
      :tags="['finans', 'sparing']"
      size="small"
      :initialLetter="true"
      ingress="4 Porteføljeforvalterens tips"
    ></TeaserCard>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}
</style>
