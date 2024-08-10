<!--
課題：コンテストを変更したときに先るがすべて外れてしまう
-->
<template>
  <!-- <v-select
    v-model="contestId"
    :items="contestList"
    :item-props="contestItemProps"
    item-value="id"
    item-text="name"
    label="コンテスト"
    variant="solo"
    hide-details
    class="margin-8px"
  >
  </v-select> -->

  <!-- <v-select
    v-model="contestId"
    :items="selectList"
    :item-props="contestItemProps"
    item-value="id"
    item-text="name"
    label="コンテスト"
    variant="solo"
    hide-details
    class="margin-8px"
  ></v-select> -->
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
      <v-img
        :src="`images/icons/icon_${item.raw.plan ?? 'free'}.png`"
        max-width="24"
        max-height="24"
      ></v-img>
      <span>{{ item.raw.selectedTitle }}</span>
    </template>
    <template v-slot:item="{ item, props }">
      <v-divider v-if="item.raw.type === 'divider'" />
      <!-- <div
        style="
          width: calc(100% - 20px);
          height: 6px;
          margin: auto;
          background-color: gray;
          overflow: hidden;
          border-radius: 6px;
          display: flex;
        "
        v-else-if="item.raw.type === 'line'"
      >
        <div
          :style="`width: ${item.raw.vocal}%; height: 100%; background-color: #FF3366;`"
        ></div>
        <div
          :style="`width: ${item.raw.dance}%; height: 100%; background-color: #0066FF;`"
        ></div>
        <div
          :style="`width: ${item.raw.visual}%; height: 100%; background-color: #FFCC00;`"
        ></div>
      </div> -->
      <CriteriaLine
        v-else-if="item.raw.type === 'line'"
        :vocal="item.raw.vocal"
        :dance="item.raw.dance"
        :visual="item.raw.visual"
      />
      <v-list-subheader v-else-if="item.raw.type === 'subheader'">{{
        item.title
      }}</v-list-subheader>
      <v-list-item v-else v-bind="props" :disabled="item.raw.disabled">
        <template v-slot:prepend>
          <v-img
            :src="`images/icons/icon_${item.raw.plan ?? 'free'}.png`"
            max-width="30"
            max-height="30"
          ></v-img>
        </template>
      </v-list-item>
    </template>
  </v-select>
  <CriteriaLine
    :vocal="criteria.vocal"
    :dance="criteria.dance"
    :visual="criteria.visual"
  />
  <!-- <div class="rate-graph margin-8px">
    <v-progress-linear bg-color="#fff" color="#fff" :value="100" height="20">
      <template v-slot="">
        <div
          class="rate-bar"
          :style="{
            width: rate.vocal + '%',
            backgroundColor: '#FF3366',
          }"
        ></div>
        <div
          class="rate-bar"
          :style="{
            width: rate.dance + '%',
            backgroundColor: '#0066FF',
          }"
        ></div>
        <div
          class="rate-bar"
          :style="{ width: rate.visual + '%', backgroundColor: '#FFCC00' }"
        ></div>
      </template>
    </v-progress-linear>
  </div> -->

  <!-- <v-select
    v-model="stageId"
    :items="stageList"
    :item-props="stageItemProps"
    item-value="index"
    label="ステージ"
    variant="solo"
    hide-details
    class="margin-8px"
  >
    <template v-slot:append>
      <v-img
        :src="`images/icons/icon_${contestPlan ?? 'free'}.png`"
        max-width="32"
        max-height="32"
      ></v-img>
    </template>
  </v-select> -->
</template>

<script setup>
import { onMounted, ref, watch, defineModel } from "vue";
import { ContestData } from "@/simulator/data/contestData";
import CriteriaLine from "../common/CriteriaLine.vue";

const contestPlan = defineModel("contestPlan");
const contestPItemIds = defineModel("contestPItemIds");

const contestList = ContestData.getAll().slice().reverse();
const contestMap = contestList.reduce((map, item) => {
  map.set(item.id, item);
  return map;
}, new Map());

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
    if (!contestMap.has(contestId)) {
      [contestId, stageId] = initContestStage();
    }
    const contest = contestMap.get(contestId);
    if (stageId in contest) {
      [contestId, stageId] = initContestStage();
    }
    criteria.value = contest.criteria;
    contestPlan.value = contest.stages[stageId].plan;
    contestPItemIds.value = contest.stages[stageId].stagePItemIds;
  }
});

const selectList = contestList.reduce((acc, contest) => {
  if (acc.length != 0) {
    acc.push({
      type: "divider",
    });
  }
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
    });
  });
  return acc;
}, []);

// contestPItemIds.value = computed(() => {
//   if (
//     contestId.value &&
//     stageId.value != null &&
//     contestMap.has(contestId.value)
//   ) {
//     const contest = contestMap.get(contestId.value);
//     const _stage = stageId.value in contest.stages ? stageId.value : 0;
//     return contest.stages[_stage].stagePItemIds;
//   }
//   return [];
// });

// const rate = ref({ vocal: 0, dance: 0, visual: 0 });

// const translatorPlan = {
//   free: "フリー",
//   sense: "センス",
//   logic: "ロジック",
// };

// const contestItemProps = (item) => {
//   return {
//     title: item.name,
//     subtitle: item.period,
//   };
// };

// const stageItemProps = (item) => {
//   return {
//     title: item.name,
//     subtitle: `${translatorPlan[item.plan]}/${item.turn}ターン`,
//   };
// };

// const updateRate = (criteria) => {
//   if (criteria) {
//     rate.value = criteria;
//   }
// };

// watch(contestId, () => {
//   if (contestId.value && contestMap.has(contestId.value)) {
//     const contest = contestMap.get(contestId.value);
//     updateRate(contest.criteria);
//     stageList.value = contest.stages.map((v, i) => {
//       v["index"] = i;
//       return v;
//     });
//     if (stageId.value != null && stageId.value in contest.stages) {
//       contestPlan.value = contest.stages[stageId.value].plan;
//     } else {
//       stageId.value = 0;
//     }
//   }
// });

// watch(stageId, () => {
//   if (contestId.value && contestMap.has(contestId.value)) {
//     const contest = contestMap.get(contestId.value);
//     contestPlan.value = contest.stages[stageId.value].plan;
//   }
// });

onMounted(() => {
  const urlParams = new URLSearchParams(window.location.search);
  const _contestStage = urlParams.get("contest_stage");
  if (_contestStage) {
    // const [_contestId, _stageId] = _contestStage.split(":").map(Number);
    contestStage.value = _contestStage;
    // contestId.value = _contestId;
    // stageId.value = _stageId;
  } else {
    initContestStage();
  }
  // watchEffect(() => {
  //   const urlParams = new URLSearchParams(window.location.search);
  //   urlParams.set("contest_stage", `${contestId.value}:${stageId.value}`);
  //   window.history.replaceState(null, null, "?" + urlParams.toString());
  // });
});
</script>

<style scoped></style>
