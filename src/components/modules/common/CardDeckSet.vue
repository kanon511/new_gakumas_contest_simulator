<template>
  <CardDeck v-model:normalCardList="normalCardList" />
  <CardDeck v-model:normalCardList="normalCardList" />
</template>

<script setup>
import { ref, watch, defineModel } from "vue";
import CardDeck from "./CardDeck.vue";
import { SkillCardData } from "@/simulator/data/skillCardData";
import { PIdolData } from "@/simulator/data/pIdolData";

const pIdol = defineModel("pIdol");
const subPIdols = ref(null);

const normalCardList = ref([]);

watch(pIdol, () => {
  if (pIdol.value) {
    subPIdols.value = PIdolData.getByCharacterId(
      pIdol.value.character_id
    ).filter((v) => v.plan == pIdol.value.plan);
    normalCardList.value = SkillCardData.getAll().filter(
      (item) =>
        (item.plan == "free" || item.plan == pIdol.value.plan) && // プラン指定
        item.id > 2000000 && // 基本カード削除
        String(item.id)[1] != "2" // キャラ固有削除
    );
  } else {
    normalCardList.value = [];
  }
});

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
