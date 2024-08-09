<template>
  <v-container class="data-input-container">
    <v-row>
      <v-col cols="8">
        <ContestSelector
          v-model:contestId="contestId"
          v-model:stageId="stageId"
          v-model:contestPlan="contestPlan"
        />
      </v-col>
      <v-col cols="4">
        <StatusInputor v-model:parameter="parameter" />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <FormationBuilder
          v-model:contestId="contestId"
          v-model:stageId="stageId"
          v-model:contestPlan="contestPlan"
          v-model:pIdol="pIdol"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="10">
        <v-btn
          :loading="waitingFinishedRun"
          color="green-darken-2"
          height="48"
          block
          variant="elevated"
          @click="runSimulation"
        >
          実行
        </v-btn>
      </v-col>
      <v-col cols="2">
        <v-btn icon="mdi-cog" color="blue-grey-darken-1" @click="clickCog">
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { onMounted, ref, watchEffect } from "vue";
import ContestSelector from "./ContestSelector.vue";
import StatusInputor from "./StatusInputor.vue";
import FormationBuilder from "./FormationBuilder.vue";

const parameter = ref({
  vocal: 1000,
  dance: 1000,
  visual: 1000,
  hp: 45,
});

const contestId = ref(null);
const stageId = ref(null);
const contestPlan = ref(null);

const pIdol = ref(null);
const pItemIds = ref([null, null, null, null]);
const cardIds = ref([]);

watchEffect(() => {
  const urlParams = new URLSearchParams(window.location.search);
  urlParams.set("contest_stage", `${contestId.value}:${stageId.value}`);
  urlParams.set("p_idol", `${pIdol.value?.id}`);
  urlParams.set(
    "status",
    `${parameter.value.vocal}:${parameter.value.dance}:${parameter.value.visual}:${parameter.value.hp}`
  );
  urlParams.set("p_items", `${pItemIds.value.join(":")}`);
  urlParams.set("cards", `${cardIds.value.join(":")}`);
  console.log(urlParams.toString());
  window.history.replaceState(null, null, "?" + urlParams.toString());
});

const waitingFinishedRun = ref(false);

onMounted(() => {
  contestId.value = 240804;
  stageId.value = 0;
});

const runSimulation = () => {
  const runData = {
    contestId: contestId.value,
    stageId: stageId.value,
    pIdolId: pIdolId.value,
    parameter: parameter.value,
    pItemIds: pItemIds.value,
    cardIds: cardIds.value,
    simulateCount: 2000,
  };
  console.log("Run simulation");
  console.log(runData);

  waitingFinishedRun.value = true;
  setTimeout(() => (waitingFinishedRun.value = false), 3000);
};

const clickCog = () => {
  parameter.value.dance = 100;
};
</script>

<style scoped>
.data-input-container {
  width: 100%;
  min-width: 400px;
  margin: auto;
}
</style>
