<template>
  <CardDeck
    v-model:selectedCards="selectedCardsList[0]"
    :uniqueCards="pIdolCards"
    :normalCards="normalCards"
  />
  <CardDeck
    v-model:selectedCards="selectedCardsList[1]"
    :uniqueCards="samePIdolCards"
    :normalCards="normalCards"
  />
  <div style="text-align: center;">
    <div>固有以外の重複不可カードは重複します<br>重複させない場合は片方で「-」を選択してください</div>
    <div><a href="https://gkcontest.ris.moe/" target="_blank">デッキ作成シミュレータ(@risりす)</a></div>
  </div>
</template>

<script setup>
import { onMounted, ref, defineProps, computed, watch, watchEffect } from "vue";
import CardDeck from "./CardDeck.vue";
import { SkillCardData } from "/scripts/simulator/data/skillCardData";

const selectedCardsList = ref([
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
]);

const cardMap = SkillCardData.getAll().reduce((map, item) => {
  map.set(item.id, item);
  return map;
}, new Map());

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
