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
import { ref } from "vue";
import ContestSelector from "./ContestSelector.vue";
import StatusInputor from "./StatusInputor.vue";
import FormationBuilder from "./FormationBuilder.vue";
// import SkillCardList from "../"

// const run_data = {
//             turn: contestStage.turn,
//             criteria: contestDetail.criteria,
//             turnTypes: contestStage.turnTypes,
//             parameter: {
//                 vocal : vocal,
//                 dance : dance,
//                 visual: visual,
//                 hp: hp,
//             },
//             plan: current_main_plan,
//             trend: pIdol.trend,
//             pItemIds: pItemIds,

//             skillCardIds: skillCardIds,
//             autoId: autoId,

//             count: simulateCount,
//         };

// vocal dance visual hp
const parameter = ref({
  vocal: 1000,
  dance: 1000,
  visual: 1000,
  hp: 45,
});

const contestId = ref(null);
const stageId = ref(null);
const contestPlan = ref(null);

// // planが変わったとき
// watch(contestPlan, () => {
//   console.log(contestPlan.value);
// });

const waitingFinishedRun = ref(false);

contestId.value = 240804;
stageId.value = 0;

const runSimulation = () => {
  console.log("Run simulation");
  console.log("parameter", parameter.value);
  console.log("contest", contestId.value, stageId.value, contestPlan.value);
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
