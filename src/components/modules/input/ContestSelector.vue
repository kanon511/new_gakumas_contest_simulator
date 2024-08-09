<template>
  <v-select
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
  </v-select>

  <div class="rate-graph margin-8px">
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
  </div>

  <v-select
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
  </v-select>
</template>

<script setup>
import { ref, watch, defineModel } from "vue";
import { ContestData } from "@/simulator/data/contestData";

const contestList = ContestData.getAll().slice().reverse();
const stageList = ref([]);

const contestId = defineModel("contestId");
const stageId = defineModel("stageId");
const contestPlan = defineModel("contestPlan");

const rate = ref({ vocal: 0, dance: 0, visual: 0 });

const translatorPlan = {
  free: "フリー",
  sense: "センス",
  logic: "ロジック",
};

const contestItemProps = (item) => {
  return {
    title: item.name,
    subtitle: item.period,
  };
};

const stageItemProps = (item) => {
  return {
    title: item.name,
    subtitle: `${translatorPlan[item.plan]}/${item.turn}ターン`,
  };
};

const updateRate = (criteria) => {
  if (criteria) {
    rate.value = criteria;
  }
};

watch(contestId, () => {
  if (contestId.value) {
    const contest = ContestData.getById(contestId.value);
    updateRate(contest.criteria);
    stageList.value = contest.stages.map((v, i) => {
      v["index"] = i;
      return v;
    });
    if (stageId.value != null) {
      contestPlan.value = contest.stages[stageId.value].plan;
    } else {
      stageId.value = 0;
    }
  }
});

watch(stageId, () => {
  const contest = ContestData.getById(contestId.value);
  contestPlan.value = contest.stages[stageId.value].plan;
});
</script>

<style scoped>
.margin-8px {
  margin-bottom: 8px;
}
.rate-graph {
  margin-bottom: 8px;
  position: relative;
  width: 100%;
  height: 20px;
  background-color: #e0e0e0;
}

.rate-bar {
  height: 100%;
  display: inline-block;
}

.rate-labels {
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
}
</style>
