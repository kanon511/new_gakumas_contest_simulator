<template>
  <div class="deck">
    <CardSelector
      v-model:selectedCard="selectedCards[0]"
      :cardList="props.uniqueCards"
      autoSelect="true"
    />
    <CardSelector
      :cardList="props.normalCards"
      v-for="(_, index) in selectedCards.slice(1)"
      v-model:selectedCard="selectedCards[index + 1]"
      :key="index + 1"
    />
  </div>
  <div>デッキコスト：{{ cost }}</div>
</template>

<script setup>
import { defineModel, defineProps, ref, watch } from "vue";
import CardSelector from "./CardSelector.vue";

const cost = ref(0);

const props = defineProps({
  uniqueCards: {
    type: Array,
    require: true,
  },
  normalCards: {
    type: Array,
    require: true,
  },
});

const selectedCards = defineModel("selectedCards");

watch(
  () => selectedCards,
  () => {
    let total = 0;
    for (let i = 0; i < selectedCards.value.length; i++) {
      if (selectedCards.value[i]) {
        total += selectedCards.value[i].card_cost ?? 0;
      }
    }
    cost.value = total;
  },
  { deep: true }
);
</script>

<style scoped>
.deck {
  display: flex;
  justify-content: space-between;
}

.deck > * {
  width: calc((95% - 10px) / 6);
}
</style>
