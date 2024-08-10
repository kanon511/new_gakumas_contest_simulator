<template>
  <v-container class="data-input-container">
    <v-row>
      <v-col cols="8">
        <ContestSelector
          v-model:contestPlan="contestPlan"
          v-model:contestPItemIds="contestPItemIds"
        />
      </v-col>
      <v-col cols="4">
        <StatusInputor />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <CompositionBuilder
          :contestPlan="contestPlan"
          :contestPItemIds="contestPItemIds"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-btn
          :loading="waitingFinishedRun"
          color="green-darken-2"
          height="48"
          block
          variant="elevated"
          @click="$emit('run-simulation')"
        >
          実行
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, defineEmits, defineProps } from "vue";
import ContestSelector from "./ContestSelector.vue";
import StatusInputor from "./StatusInputor.vue";
import CompositionBuilder from "./CompositionBuilder.vue";

defineEmits(["run-simulation"]);
defineProps(["waitingFinishedRun"]);

/**
 * 双方向データ
 */
const contestPlan = ref("");
const contestPItemIds = ref([]);

// watchEffect(() => {
//   const urlParams = new URLSearchParams(window.location.search);
//   urlParams.set("contest_stage", `${contestId.value}:${stageId.value}`);
//   urlParams.set("p_idol", `${pIdol.value?.id}`);
//   urlParams.set("p_items", `${pItemIds.value.join(":")}`);
//   urlParams.set("cards", `${cardIds.value.join(":")}`);
//   console.log(urlParams.toString());
//   window.history.replaceState(null, null, "?" + urlParams.toString());
// });
</script>

<style scoped></style>
