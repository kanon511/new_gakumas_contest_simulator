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
import { onMounted, ref, computed, watch, watchEffect } from 'vue';
import CardDeck from './CardDeck.vue';
import DataLoader from '/simulator/game/data/DataLoader';
import {
  pIdolPlan,
  pIdolCards,
  samePIdolCards,
  selectedCardsList,
  availableSelectedCardsList,
} from '@/store/store.js';
import CardDialog from './dialog/CardDialog.vue';

const dialog = ref(true);
const selectedItem = ref(null);
const autoSelect = ref(false);

const cardMap = DataLoader.cardMap;

const normalCards = ref(Array.from(DataLoader.cardMap).map((item) => item[1]));
onMounted(() => {
  const pIdolPlanWatch = () => {
    normalCards.value = Array.from(DataLoader.cardMap)
      .map((item) => item[1])
      .filter(
        (item) =>
          (item.plan == 'free' || item.plan == pIdolPlan.value) && // プラン指定
          item.id > 2000000 && // 基本カード削除
          String(item.id)[1] != '2' // キャラ固有削除
      );
  };
  pIdolPlanWatch();
  watch(pIdolPlan, pIdolPlanWatch);
  const cardAvailableWatch = () => {
    const selectedCardIds = selectedCardsList.value[0]
      .concat(selectedCardsList.value[1])
      .map((item) => item?.id ?? 0);
    const baseIds = selectedCardIds.map((id) => Math.floor(Number(id) / 10));
    const seen = new Map();
    const result = baseIds.map((_) => false);
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
      if (!seen.has(baseId)) {
        // 初めての種類のカードなら登録してtrue
        result[index] = true;
        seen.set(baseId, { index, rank });
      } else {
        // 記録済みの種類のカードならrank(強化)を比べて大きい方(>)をtrue、(<=)をfalse
        const seenItem = seen.get(baseId);
        if (rank > seenItem.rank) {
          result[seenItem.index] = false;
          result[index] = true;
          seen.set(baseId, { index, rank });
        }
      }
    });
    result.forEach(
      (bool, index) => (availableSelectedCardsList.value[Math.floor(index / 6)][index % 6] = bool)
    );
  };
  watch(selectedCardsList, cardAvailableWatch, { deep: true });
  cardAvailableWatch();
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
