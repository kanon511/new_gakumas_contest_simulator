<template>
  <div class="title">{{ card.name }}</div>
  <div v-for="effect in content.preEffects">{{ effect }}</div>
  <div v-if="content.condition">{{ content.condition }}なら使用可能</div>
  <div>・{{ content.cost }}</div>
  <div v-for="effect in content.effects">・{{ effect }}</div>
  <div class="sub-information-box">
    <div>レッスン中{{ `${card.limit < 0 ? '∞' : card.limit}` }}回</div>
    <div>重複{{ `${card.allow_duplicate ? '可能' : '不可'}` }}</div>
    <div>編成コスト：{{ card.card_cost }}</div>
  </div>
  <div class="card-classification">
    <div>{{ content.plan }}</div>
    <div>{{ content.type }}</div>
    <div v-if="String(card.id)[1] == '2'">固有</div>
    <div v-else-if="String(card.id)[1] == '3'">サポート</div>
  </div>
</template>

<script setup>
import EntityTranslator from '#/utils/EntityTranslator.js';
import { computed } from 'vue';

const { card } = defineProps(['card']);

const content = computed(() => {
  return EntityTranslator.translateCard(card);
});
</script>

<style scoped>
.card-classification {
  display: flex;
  flex-wrap: wrap;
  font-size: 0.75em;
  margin: auto;
  justify-content: center;
}
.card-classification div:not(:last-of-type)::after {
  content: '/';
  color: #777;
  margin: 0 0.1em;
}

.title {
  font-weight: bold;
  font-size: 1.1em;
}
.sub-information-box {
  margin-top: 2px;
  color: #0d47a1;
  font-size: 0.85em;
}
</style>
