<template>
  <v-select
    v-model="contestStage"
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
      <v-list-item v-if="item.raw.type === 'item'" v-bind="props" :disabled="item.raw.disabled">
        <template v-slot:prepend>
          <v-img :src="item.raw.src" width="30" height="30" />
        </template>
      </v-list-item>
      <v-divider v-else-if="item.raw.type === 'divider'" v-bind="props" />
      <CriteriaLine
        v-else-if="item.raw.type === 'line'"
        v-bind="props" 
        :vocal="item.raw.vocal"
        :dance="item.raw.dance"
        :visual="item.raw.visual"
      />
      <v-list-subheader v-else-if="item.raw.type === 'subheader'" v-bind="props" >{{
        item.title
      }}</v-list-subheader>
    </template>
  </v-select>
  <CriteriaLine
    :vocal="criteria.vocal"
    :dance="criteria.dance"
    :visual="criteria.visual"
  />
</template>

<script setup>
import { onMounted, ref, watch, defineModel } from "vue";
import { ContestData } from "/scripts/simulator/data/contestData";
import CriteriaLine from "../common/CriteriaLine.vue";

const contestPlan = defineModel("contestPlan");
const contestPItemIds = defineModel("contestPItemIds");

const contestList = ContestData.getAll().slice().reverse();

const contestStage = ref(null);
const criteria = ref({ vocal: 0, dance: 0, visual: 0 });

const initContestStage = () => {
  const contestId = contestList[0].id;
  const stageId = 0;
  contestStage.value = `${contestId}:${stageId}`;
  return [contestId, stageId];
};

watch(contestStage, () => {
  if (contestStage.value) {
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("contest_stage", contestStage.value);
    window.history.replaceState(null, null, "?" + urlParams.toString());

    let [contestId, stageId] = contestStage.value.split(":").map(Number);
    if (!ContestData.has(contestId)) {
      [contestId, stageId] = initContestStage();
    }
    const contest = ContestData.getById(contestId);
    if (stageId in contest) {
      [contestId, stageId] = initContestStage();
    }
    criteria.value = contest.criteria;
    contestPlan.value = contest.stages[stageId].plan;
    contestPItemIds.value = contest.stages[stageId].stagePItemIds;
  }
});

const selectList = contestList.reduce((acc, contest) => {
  acc.push({
    type: "subheader",
    title: `${contest.name}（${contest.period}）`,
  });
  acc.push({
    type: "line",
    vocal: contest.criteria.vocal,
    dance: contest.criteria.dance,
    visual: contest.criteria.visual,
  });
  contest.stages.forEach((stage, index) => {
    acc.push({
      id: `${contest.id}:${index}`,
      type: "item",
      title: `${stage.name}（${stage.turn}T）`,
      selectedTitle: `${contest.name.replace("コンテスト", "")}  ${
        stage.name
      }（${stage.turn}T）`,
      plan: stage.plan,
      src: `${__BASE_IMAGE_URL__}/icons/icon_${stage.plan ?? 'free'}.png`
    });
  });
  return acc;
}, []);

onMounted(() => {
  const urlParams = new URLSearchParams(window.location.search);
  const _contestStage = urlParams.get("contest_stage");
  if (_contestStage) {
    contestStage.value = _contestStage;
  } else {
    initContestStage();
  }
});
</script>

<style scoped></style>
