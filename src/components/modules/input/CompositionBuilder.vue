<template>
  <div class="pIdol-selection mb-2" style="margin-top: -100px">
    <PIdolSelector
      :contestPlan="contestPlan"
      v-model:selectedPIdol="selectedPIdol"
      v-model:sameSelectedPIdols="sameSelectedPIdols"
    />
  </div>
  <div class="pItem-selectors mb-2">
    <PItemSet
      :pIdolPItemIds="pIdolPItemIds"
      :contestPItemIds="props.contestPItemIds"
    />
  </div>
  <div class="deck-container">
    <CardDeckSet
      :pIdolPlan="pIdolPlan"
      :pIdolCardIds="pIdolCardIds"
      :samePIdolCardIds="samePIdolCardIds"
    />
  </div>
</template>

<script setup>
import { ref, computed, defineProps } from "vue";
import PIdolSelector from "../common/PIdolSelector.vue";
import PItemSet from "../common/PItemSet.vue";
import CardDeckSet from "../common/CardDeckSet.vue";

const selectedPIdol = ref(null);
const sameSelectedPIdols = ref(null);
const props = defineProps({
  contestPItemIds: {
    type: Array,
    required: true,
  },
  contestPlan: {
    type: String,
    required: true,
  },
});
// const selectedPItems = ref([null, null, null, null]);
const pIdolPItemIds = computed(() => {
  if (selectedPIdol.value) {
    return [
      selectedPIdol.value.unique_pItem_id,
      selectedPIdol.value.unique_pItem_id + 1,
    ];
  }
  return [];
});
const pIdolPlan = computed(() => selectedPIdol.value?.plan ?? "");
const pIdolCardIds = computed(() => {
  if (selectedPIdol.value) {
    return [
      selectedPIdol.value.unique_skillCard_id,
      selectedPIdol.value.unique_skillCard_id + 1,
    ];
  }
  return [];
});
// or watch
const samePIdolCardIds = computed(() => {
  if (sameSelectedPIdols.value) {
    const array = [];
    for (let i = 0; i < sameSelectedPIdols.value.length; i++) {
      if (sameSelectedPIdols.value[i].plan == pIdolPlan.value) {
        array.push(sameSelectedPIdols.value[i].unique_skillCard_id);
        array.push(sameSelectedPIdols.value[i].unique_skillCard_id + 1);
      }
    }
    return array;
  }
  return [];
});
</script>

<style scoped>
.pIdol-selection {
  display: flex;
  align-items: center;
  gap: 8px;
}

.pItem-selectors {
  display: flex;
  gap: 8px;
  justify-content: left;
}

.deck-container {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
</style>
