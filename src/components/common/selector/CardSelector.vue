<template>
  <div>
    <v-card
      :class="['card-box', { selected: selectedCard }, { disable: !availableSelectedCard }]"
      variant="text"
      @click="dialog = true"
    >
      <v-tooltip v-if="selectedCard" location="top">
        <template v-slot:activator="{ props }">
          <v-img
            v-bind="props"
            :src="`${baseImageURL}/cards/card_${selectedCard.id}.webp`"
            class="card-image"
            contain
          ></v-img>
        </template>
        <CardDescription :card="selectedCard" />
      </v-tooltip>
      <v-icon v-else class="placeholder-icon">mdi-plus</v-icon>
    </v-card>
    <CardDialog
      :autoSelect="autoSelect"
      :itemList="cardList"
      v-model:selectedItem="selectedCard"
      v-model:dialog="dialog"
    />
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue';
import { baseImageURL } from '@/store/constant.js';
import CardDescription from '../description/CardDescription.vue';
import CardDialog from '../dialog/CardDialog.vue';
const props = defineProps({
  availableSelectedCard: {
    type: Boolean,
  },
  autoSelect: {
    type: Boolean,
  },
  cardList: {
    type: Array,
    require: true,
  },
});

const selectedCard = defineModel('selectedCard');

const dialog = ref(false);

onMounted(() => {
  const cardListWatch = () => {
    if (selectedCard.value) {
      if (!props.cardList.some((item) => selectedCard.value.id == item?.id)) {
        selectedCard.value = null;
      } else {
        return;
      }
    }
    if (props.autoSelect && props.cardList && props.cardList.length > 0) {
      selectedCard.value = props.cardList[props.cardList.length > 1 ? 1 : 0];
    }
  };
  watch(() => props.cardList, cardListWatch);
  cardListWatch();
});
</script>

<style scoped>
.v-tooltip :deep(.v-overlay__content) {
  background-color: rgba(250, 250, 250, 0.9) !important;
  border: solid 1px black;
  color: black;
}

.card-box {
  width: 100%;
  aspect-ratio: 1;
  border: solid 2px #999;
  border-radius: 6px;
  background-color: #fafafa;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.card-box.selected {
  border: none;
}

.disable {
  background-color: black;
}
.disable .v-img {
  opacity: 0.5;
}

.card-image {
  width: 100%;
  height: 100%;
}

.card-image :deep(.v-img__img) {
  pointer-events: none;
}

.placeholder-icon {
  font-size: 32px;
}

.unselected-container {
  border: solid 2px #999;
  border-radius: 5px;
}

.card-grid {
  display: grid;
  gap: 8px;
  grid-template-columns: repeat(auto-fill, minmax(75px, 1fr));
}

.card-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s;
  width: 75px;
  height: 75px;
}

.card-container.hover {
  transform: scale(1.08);
  opacity: 0.5;
}
</style>
