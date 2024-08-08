<template>
  <PItemSelector
    :pItemList="uniquePItemList"
    autoSelect="true"
    v-model:selectedPItem="selectedPItems[0]"
  /><!--contestPItem-->
  <PItemSelector
    :pItemList="contestPItemList"
    autoSelect="true"
    v-model:selectedPItem="selectedPItems[1]"
  /><!--uniquePItem-->
  <PItemSelector v-for="(pItem, index) in pItems.slice(2)" :key="index" />
</template>

<script setup>
import { ref, defineModel, watch, computed } from "vue";
import PItemSelector from "./PItemSelector.vue";
import { PItemData } from "@/simulator/data/pItemData";

const selectedPItems = ref([null, null, null, null]);

const pIdol = defineModel("pIdol");
const contestPItemIds = defineModel("contestPItemIds");
const contestPItemList = computed(() =>
  contestPItemIds.value.map((id) => PItemData.getById(id))
);

// watch(contestPItemIds, () => {
//   if (contestPItemIds.value) {
//     console.log(contestPItemIds);
//     contestPItemList.value = contestPItemIds.value.map((id) =>
//       PItemData.getById(id)
//     );
//   }
// });

const uniquePItemList = ref([]);
watch(pIdol, () => {
  if (pIdol.value) {
    uniquePItemList.value = [
      PItemData.getById(pIdol.value.unique_pIted_id),
      PItemData.getById(pIdol.value.unique_pIted_id + 1),
    ];
  }
});
const pItems = ref([null, null, null, null]);
</script>

<style scoped></style>
