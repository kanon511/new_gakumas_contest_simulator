<template>
  <CardDeck
    v-model:selectedCards="selectedCardsList[0]"
    :availableSelectedCards="availableSelectedCardsList[0]"
    :uniqueCards="pIdolCards"
    :normalCards="normalCards"
  />
  <CardDeck
    v-model:selectedCards="selectedCardsList[1]"
    :availableSelectedCards="availableSelectedCardsList[1]"
    :uniqueCards="samePIdolCards"
    :normalCards="normalCards"
  />
</template>

<script setup>
import { onMounted, ref, defineProps, computed, watch, watchEffect } from "vue";
import CardDeck from "./CardDeck.vue";
import { SkillCardData } from "/scripts/simulator/data/skillCardData";

const selectedCardsList = ref([
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
]);

const availableSelectedCardsList = ref([
  [true, true, true, true, true, true],
  [true, true, true, true, true, true],
]);

const cardMap = SkillCardData.getAll().reduce((map, item) => {
  map.set(item.id, item);
  return map;
}, new Map());

watch(selectedCardsList, () => {
  const selectedCardIds = selectedCardsList.value[0].concat(selectedCardsList.value[1]).map(item => item?.id ?? 0);
  const baseIds = selectedCardIds.map(id => Math.floor(Number(id)/10));
  const seen = new Map();
  const result = baseIds.map(_=>false);
  result.forEach((_, index) => {
    const baseId = baseIds[index];
    // 該当するカードがない（空欄）
    if (!cardMap.has(selectedCardIds[index])) {
      result[index] = true; 
      return;
    }
    // 重複が許可されている
    if (cardMap.get(selectedCardIds[index])['allow_duplicate']) { 
      result[index] = true; 
      return;
    }
    // 重複が許可されていない
    const rank = selectedCardIds[index] % 10;
    if (!seen.has(baseId)) { // 初めての種類のカードなら登録してtrue
      result[index] = true;
      seen.set(baseId, { index, rank });
    } else { // 記録済みの種類のカードならrank(強化)を比べて大きい方(>)をtrue、(<=)をfalse
      const seenItem = seen.get(baseId);
      if (rank > seenItem.rank) {
        result[seenItem.index] = false;
        result[index] = true;
        seen.set(baseId, { index, rank });
      }
    }
  });
  result.forEach((bool, index) => availableSelectedCardsList.value[Math.floor(index/6)][index%6] = bool);
}, { deep: true })

// computed(() => {
//   const selectedCardIds = selectedCardsList.value.map(item => item?.id ?? 0);
//   const baseIds = selectedCardIds.map(id => Math.floor(Number(id)/10));
//   const seen = new Map();

//   const result = baseIds.map(_=>false);
//   result.forEach((_, index) => {
//     const baseId = baseIds[index];
//     if (baseId == 0) { 
//       result[index] = true; 
//       return;
//     }
//     const rank = selectedCardIds[index] % 10;
//     if (!seen.has(baseId)) {
//       result[index] = true;
//       seen.set(baseId, { index, rank });
//     } else {
//       const seenItem = seen.get(baseId);
//       if (rank > seenItem.rank) {
//         result[seenItem.index] = false;
//         result[index] = true;
//         seen.set(baseId, { index, rank });
//       }
//     }
//   });
//   console.log(result);
//   return result;
// });

const props = defineProps({
  pIdolPlan: {
    type: String,
    require: true,
  },
  pIdolCardIds: {
    type: Array,
    require: true,
  },
  samePIdolCardIds: {
    type: Array,
    require: true,
  },
});

const pIdolCards = computed(
  () => props.pIdolCardIds?.map((id) => SkillCardData.getById(id)) ?? []
);

const samePIdolCards = computed(
  () => props.samePIdolCardIds?.map((id) => SkillCardData.getById(id)) ?? []
);

const normalCards = ref([]);
watch(
  () => props.pIdolPlan,
  (plan) => {
    normalCards.value = SkillCardData.getAll().filter(
      (item) =>
        (item.plan == "free" || item.plan == plan) && // プラン指定
        item.id > 2000000 && // 基本カード削除
        String(item.id)[1] != "2" // キャラ固有削除
    );
  }
);

onMounted(() => {
  const urlParams = new URLSearchParams(window.location.search);
  const cardIdsStr = urlParams.get("cards");
  if (cardIdsStr) {
    const decks = cardIdsStr.split("_");
    for (let i = 0; i < decks.length; i++) {
      const cardIds = decks[i].split(":").map(Number);
      for (let j = 0; j < selectedCardsList.value[i].length; j++) {
        if (cardMap.has(cardIds[j])) {
          selectedCardsList.value[i][j] = cardMap.get(cardIds[j]);
        }
      }
    }
  }
  watchEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set(
      "cards",
      selectedCardsList.value
        .map((deck) => deck.map((v) => v?.id).join(":"))
        .join("_")
    );
    window.history.replaceState(null, null, "?" + urlParams.toString());
  });
});
// const normalCards = computed(() => {
//   return SkillCardData.getAll().filter(
//     (item) =>
//       (item.plan == "free" || item.plan == props.pIdolPlan.plan) && // プラン指定
//       item.id > 2000000 && // 基本カード削除
//       String(item.id)[1] != "2" // キャラ固有削除
//   );
// });

/*
入力が必要なもの
plan<String>: カード選択に必要
mainUniqueCardIds: <Array<Number>> - メインのユニークカードリスト
subUniqueCardIds: <Array<Number>> - サブのユニークカードリスト

出力が必要なもの
selectedCardIds: 選択されているカードリスト
*/
</script>

<style scoped></style>
