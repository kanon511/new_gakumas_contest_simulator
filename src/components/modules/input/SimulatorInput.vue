<template>
  <v-container class="sp-pa-0">
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
          :loading="props.waitingFinishedRun"
          color="green-darken-2"
          height="48"
          block
          variant="elevated"
          @click="sendEvent"
        >
          実行
        </v-btn>
      </v-col>
    </v-row>
    <v-row class="sp-hide">
      <v-col>
        <v-text-field
          v-model="copyText"
          label="編成URL"
          readonly
          variant="solo"
          prepend-inner-icon="mdi-content-copy"
          @click:prependInner="copyToClipboard"
        ></v-text-field>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, defineEmits, defineProps } from "vue";
import ContestSelector from "./ContestSelector.vue";
import StatusInputor from "./StatusInputor.vue";
import CompositionBuilder from "./CompositionBuilder.vue";

const emits = defineEmits(["runSimulation"]);
const sendEvent = () => {
  copyText.value = location.href;
  emits("runSimulation");
};
const props = defineProps(["waitingFinishedRun"]);

/**
 * 双方向データ
 */
const contestPlan = ref("");
const contestPItemIds = ref([]);
const copyText = ref("編成URLが表示されます");

const copyToClipboard = () => {
  if (copyText.value.indexOf("http") == -1) return;
  navigator.clipboard
    .writeText(copyText.value)
    .then(() => {
      //
    })
    .catch(() => {
      //
    });
};

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

<style scoped>
@media (max-width: 1280px) {
  .sp-hide {
    display: none;
  }
}
</style>
