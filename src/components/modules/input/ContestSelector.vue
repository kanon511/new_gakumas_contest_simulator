<template>
  <v-select
    v-model="contestStageId"
    :items="selectList"
    item-value="id"
    label="コンテスト"
    variant="solo"
    hide-details
    single-line
    persistent-hint
    class="mb-2"
  >
    <template v-slot:selection="{ item }">
      <v-img :src="item.raw.src" width="24" height="24" />
      <span>{{ item.raw.selectedTitle }}</span>
    </template>
    <template v-slot:item="{ item, props }">
      <v-list-item
        v-if="item.raw.type === 'item'"
        v-bind="props"
        :disabled="item.raw.disabled"
      >
        <template v-slot:prepend>
          <v-img :src="item.raw.src" width="30" height="30" />
        </template>
      </v-list-item>
      <v-divider v-else-if="item.raw.type === 'divider'" v-bind="props" />
      <CriteriaLine
        v-else-if="item.raw.type === 'line'"
        :vocal="item.raw.vocal"
        :dance="item.raw.dance"
        :visual="item.raw.visual"
      />
      <v-list-subheader
        v-else-if="item.raw.type === 'subheader'"
        >{{ item.title }}</v-list-subheader
      >
    </template>
  </v-select>
  <CriteriaLine
    :vocal="criteria.vocal"
    :dance="criteria.dance"
    :visual="criteria.visual"
  />
</template>

<script setup>
import CriteriaLine from '../common/CriteriaLine.vue';
import {
  contestStageId,
  criteria,
  contestList,
} from '@/components/store/store.js';

const selectList = contestList.reduce((acc, contest) => {
  acc.push({
    type: 'subheader',
    title: `${contest.name}（${contest.period}）`,
  });
  acc.push({
    type: 'line',
    vocal: contest.criteria.vocal,
    dance: contest.criteria.dance,
    visual: contest.criteria.visual,
  });
  contest.stages.forEach((stage, index) => {
    acc.push({
      id: `${contest.id}:${index}`,
      type: 'item',
      title: `${stage.name}（${stage.turn}T）`,
      selectedTitle: `${contest.name.replace('コンテスト', '')}  ${
        stage.name
      }（${stage.turn}T）`,
      plan: stage.plan,
      src: `${__BASE_IMAGE_URL__}/icons/icon_${stage.plan ?? 'free'}.png`,
    });
  });
  return acc;
}, []);
</script>

<style scoped></style>
