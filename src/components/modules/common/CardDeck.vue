<template>
  <div class="deck">
    <CardSelector
      v-model:selectedCard="selectedCards[0]"
      :availableSelectedCard="availableSelectedCards[0]"
      :cardList="props.uniqueCards"
      autoSelect="true"
    />
    <CardSelector
      :cardList="props.normalCards"
      v-for="(_, index) in selectedCards.slice(1)"
      :availableSelectedCard="availableSelectedCards[index + 1]"
      v-model:selectedCard="selectedCards[index + 1]"
      :key="index + 1"
    />
  </div>
  <div>デッキコスト：{{ cost }}</div>
</template>

<script setup>
import { defineModel, defineProps, ref, watch, onMounted } from 'vue';
import CardSelector from './selector/CardSelector.vue';

const cost = ref(0);

const props = defineProps({
  availableSelectedCards: {
    type: Array,
  },
  uniqueCards: {
    type: Array,
    require: true,
  },
  normalCards: {
    type: Array,
    require: true,
  },
});

const selectedCards = defineModel('selectedCards');

onMounted(() => {
  const selectedCardsWatch = () => {
    let total = 0;
    for (let i = 0; i < selectedCards.value.length; i++) {
      if (selectedCards.value[i]) {
        total += selectedCards.value[i].card_cost ?? 0;
      }
    }
    cost.value = total;
  };
  watch(selectedCards, selectedCardsWatch, { deep: true });
  selectedCardsWatch();
});
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
